import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import Rating from '@material-ui/lab/Rating'

import mapStyles from '../../mapStyles'
import useStyles from './styles'

const Map = ({
	setCoords,
	setBounds,
	coords,
	places,
	setChildClicked,
	weatherData,
}) => {
	const classes = useStyles()
	const isDesktop = useMediaQuery('(min-width: 600px')

	return (
		<div className={classes.mapContainer}>
			<GoogleMapReact
				bootstrapURLKeys={{
					key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
				}}
				defaultCenter={coords}
				center={coords}
				defaultZoom={14}
				margin={[50, 50, 50, 50]}
				option={{
					disableDefaultUI: true,
					zoomControl: true,
					styles: mapStyles,
				}}
				onChange={(e) => {
					console.log(e)
					setCoords({ lat: e.center.lat, lng: e.center.lng })
					setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
				}}
				onChildClick={(child) => setChildClicked(child)}
			>
				{places?.map((place, i) => (
					<div
						key={i}
						className={classes.markerContainer}
						lat={Number(place.latitude)}
						lng={Number(place.longitude)}
					>
						{!isDesktop ? (
							<LocationOnOutlinedIcon color='primary' fontSize='large' />
						) : (
							<Paper elevation={3} className={classes.paper}>
								<Typography className={classes.typography} variant='subtitle1'>
									{place.name}
								</Typography>
								<img
									className={classes.pointer}
									src={
										place.photo
											? place.photo.images.large.url
											: 'https://images.unsplash.com/photo-1599458448510-59aecaea4752?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80'
									}
									alt={place.name}
								/>
								<Rating size='small' value={Number(place.rating)} readOnly />
							</Paper>
						)}
					</div>
				))}
				{weatherData?.list?.length &&
					weatherData.list.map((data, i) => (
						<div key={i} lat={data.coord.lat} lng={data.coord.lon}>
							<img
								src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
								alt='weather icon'
								height='70px'
							/>
						</div>
					))}
			</GoogleMapReact>
		</div>
	)
}

export default Map
