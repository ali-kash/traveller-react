import axios from 'axios'

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

export const getPlacesData = async (sw, ne) => {
	try {
		const {
			data: { data },
		} = await axios.get(URL, {
			params: {
				bl_latitude: sw.lat,
				bl_longitude: sw.lng,
				tr_longitude: ne.lng,
				tr_latitude: ne.lat,
			},
			headers: {
				'x-rapidapi-host': process.env.REACT_APP_RAPIDAPI_HOST,
				'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
			},
		})

		return data
	} catch (error) {
		console.log(error)
	}
}
