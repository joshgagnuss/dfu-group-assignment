import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import { FormGroup, makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import { LocationOn, Work } from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import image1 from '../images/food-panda.png'
import image2 from '../images/hsbc-logo.png'
import image3 from '../images/ntuc-fairprice-logo.jpg'

// custom css
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
     margin: theme.spacing(5),
    },
    marginLeft: 100
  },
    bottom: {
      marginTop: 400,
      display: 'flex',
    '& > *': {
      margin: theme.spacing(10),
    }, 
    },
    main: {
      width: `cal(100% - ${drawerWidth}px)`
    }
}));

function Main() {
// used for custom css
const classes = useStyles()
    //main 
    return ( 
      <div className={classes.main}>
      {/** top seach bar with grid layout */}
      <FormGroup className={classes.root} noValidate aautocomplete="off">
        <Grid container  alignItems="center" spacing={3} direction="row" alignContent="center">

          <Grid item xs={12} md={6} lg={4}>
          <TextField
          label = "Job title or keyword"
          variant = "outlined"
          required
          InputProps={{
          startAdornment: (
          <InputAdornment position="start">
          <Work fontSize="small" />
          </InputAdornment>
          ),}}/>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
          <TextField
          label = "Area, city or town"
          variant = "outlined"
          required 
          InputProps={{
          startAdornment: (
          <InputAdornment position="start">
          <LocationOn fontSize="small"/>
          </InputAdornment>),}}/>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
          <Button variant="contained" color="primary" size="large" onClick = {() => alert('you clicked me')} startIcon = { < SearchIcon / > }>Search</Button>
          </Grid>

        </Grid>

      </FormGroup>

      {/** bottom required urgently cards  */}
      <div className={classes.bottom}>
        <Grid container 
        direction="row"
        alignContent="center"
        alignItems="flex-end"
        spacing={2}>

          <Grid item xs={12} md={12} lg={12}>
          <Typography variant="h5" color="secondary">
          Required Urgently
          </Typography>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
          <Card>
          <CardMedia className={classes.media}
          component="img"
          alt="Your Photo"
          height="140"
          src={image1}/>
          <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Foodpanda
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Front End Engineer
          </Typography>
          </CardContent>
          <CardActions>
          <Button size="small" color="primary">
          Share
          </Button>
          <Button size="small" color="primary">
          Learn More
          </Button>
          </CardActions>
          </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
          <Card>
          <CardMedia
          component="img"
          alt="Your Photo"
          height="140"
          src={image2}/>
          <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          HSBC
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Data Analayst
          </Typography>
          </CardContent>
          <CardActions>
          <Button size="small" color="primary">
          Share
          </Button> 
          <Button size="small" color="primary">
          Learn More
          </Button>
          </CardActions>
          </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
          <Card>
          <CardMedia
          component="img"
          alt="Your Photo"
          height="140"
          src={image3}/>
          <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          NTUC
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Graphic Designer
          </Typography>
          </CardContent>
          <CardActions>
          <Button size="small" color="primary">
          Share
          </Button> 
          <Button size="small" color="primary">
          Learn More
          </Button>
          </CardActions>
          </Card>
          </Grid>

        </Grid>
      </div>
   
      </div>
    );
}

export default Main;