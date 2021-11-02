import { useState, useEffect } from 'react'
import { CssBaseline, Grid } from '@material-ui/core'
import { getPlacesData } from './api/index.js'

import Header from './components/Header/Header.jsx'
import List from './components/List/List.jsx'
import Map from './components/Map/Map.jsx'

const App = () => {
	const [type, setType] = useState('restaurants')
	const [rating, setRating] = useState('')

	const [coords, setCoords] = useState({})
	const [bounds, setBounds] = useState(null)

	// const [weatherData, setWeatherData] = useState([])
	const [filteredPlaces, setFilteredPlaces] = useState([])
	const [places, setPlaces] = useState([])

	// const [autocomplete, setAutocomplete] = useState(null)
	const [childClicked, setChildClicked] = useState(null)
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			({ coords: { latitude, longitude } }) => {
				setCoords({ lat: latitude, lng: longitude })
			}
		)
	}, [])

	useEffect(() => {
		const filtered = places.filter((place) => Number(place.rating) > rating)

		setFilteredPlaces(filtered)
	}, [rating])

	useEffect(() => {
		if (bounds) {
			setIsLoading(true)

			getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
				setPlaces(data)
				setFilteredPlaces([])
				setIsLoading(false)
			})
		}
	}, [type, coords, bounds])

	return (
		<>
			<CssBaseline />
			<Header setCoords={setCoords} />
			<Grid
				container
				spacing={3}
				style={{
					width: '100%',
				}}
			>
				<Grid item xs={12} md={4}>
					<List
						isLoading={isLoading}
						places={filteredPlaces.length ? filteredPlaces : places}
						type={type}
						setType={setType}
						rating={rating}
						setRating={setRating}
						childClicked={childClicked}
					/>
				</Grid>
				<Grid item xs={12} md={8}>
					<Map
						setCoords={setCoords}
						setBounds={setBounds}
						coords={coords}
						places={filteredPlaces.length ? filteredPlaces : places}
						setChildClicked={setChildClicked}
					/>
				</Grid>
			</Grid>
		</>
	)
}

export default App
