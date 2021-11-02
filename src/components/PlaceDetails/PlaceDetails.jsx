import {
	Box,
	Typography,
	Button,
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Chip,
} from '@material-ui/core'
import LocatioinOnIcon from '@material-ui/icons'
import PhoneIcon from '@material-ui/icons'
import Rating from '@material-ui/lab/Rating'

import NoImage from '../../assets/carlos-aranda-IYMceGutrbQ-unsplash-min.jpg'

import useStyles from './styles'

const PlaceDetails = ({ place }) => {
	const classes = useStyles()

	return (
		<Card elevation={6}>
			<CardMedia
				style={{ height: 350 }}
				image={
					place.photo
						? place.photo.images.large.url
						: 'https://images.unsplash.com/photo-1599458448510-59aecaea4752?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80'
				}
				title={place.name}
			/>

			<CardContent>
				<Typography gutterBottom variant='h5'>
					{place.name}
				</Typography>
			</CardContent>
		</Card>
	)
}

export default PlaceDetails
