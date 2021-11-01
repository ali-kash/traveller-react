import { Autocomplete } from '@react-google-maps/api'
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

import useStyles from './styles'

const Header = () => {
	const classes = useStyles()

	return (
		<AppBar position='static'>
			<Toolbar className={classes.toolbar}>
				<Typography variant={5} className={classes.title}>
					The Traveller
				</Typography>
				<Box display='flex'>
					<Typography variant={6} className={classes.title}>
						Expolore New Places
					</Typography>
					{/* <Autocomplete> */}
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							placeholder='Search ...'
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput,
							}}
						/>
					</div>
					{/* </Autocomplete> */}
				</Box>
			</Toolbar>
		</AppBar>
	)
}

export default Header