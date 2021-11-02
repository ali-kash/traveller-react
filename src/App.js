import { useState, useEffect } from 'react'
import { CssBaseline, Grid } from '@material-ui/core'
import { getPlacesData } from './api/index.js'

import Header from './components/Header/Header.jsx'
import List from './components/List/List.jsx'
import Map from './components/Map/Map.jsx'

const App = () => {
	const [places, setPlaces] = useState([])
	const [coords, setCoords] = useState({})
	const [bounds, setBounds] = useState({})

	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			({ coords: { latitude, longitude } }) => {
				setCoords({ lat: latitude, lng: longitude })
			}
		)
	}, [])

	useEffect(() => {
		if (bounds) {
			setIsLoading(true)

			getPlacesData(bounds.sw, bounds.ne).then((data) => {
				setPlaces(data)
			})
		}
	}, [coords, bounds])

	return (
		<>
			<CssBaseline />
			<Header />
			<Grid container spacing={3} style={{ width: '100%', margin: '0' }}>
				<Grid item xs={12} md={4}>
					<List places={places} />
				</Grid>
				<Grid item xs={12} md={8}>
					<Map setCoords={setCoords} setBounds={setBounds} coords={coords} />
				</Grid>
			</Grid>
		</>
	)
}

export default App
