import axios from 'axios'

export const getPlacesData = async (type, sw, ne) => {
	try {
		const {
			data: { data },
		} = await axios.get(
			`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
			{
				params: {
					bl_latitude: sw.lat,
					bl_longitude: sw.lng,
					tr_longitude: ne.lng,
					tr_latitude: ne.lat,
				},
				headers: {
					'x-rapidapi-host': process.env.REACT_APP_TRAVEL_RAPIDAPI_HOST,
					'x-rapidapi-key': process.env.REACT_APP_TRAVEL_RAPIDAPI_KEY,
				},
			}
		)

		return data
	} catch (error) {
		console.log(error)
	}
}

export const getWeatherData = async (lat, lng) => {
	try {
		const { data } = await axios.get(
			'https://community-open-weather-map.p.rapidapi.com/find',
			{
				params: {
					lon: lng,
					lat: lat,
				},
				headers: {
					'x-rapidapi-host': process.env.REACT_APP_WEATHER_RAPIDAPI_HOST,
					'x-rapidapi-key': process.env.REACT_APP_WEATHER_RAPIDAPI_KEY,
				},
			}
		)
		return data
	} catch (error) {
		console.log(error)
	}
}
