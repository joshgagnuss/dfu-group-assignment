import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import { LocationOn, Work } from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';
import Form from "@material-ui/core/FormControl";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

// custom css
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    form: {
     marginTop: 20,
     width: `calc(100% - ${drawerWidth}px)`,
    },
    container: {
      marginLeft: drawerWidth,
      marginRight: drawerWidth,
      flexGrow: 1
    },
    bottom: {
      marginTop: 600,
      marginLeft: drawerWidth,
      marginRight: drawerWidth
    },
}));

function Main() {
// used for custom css
const classes = useStyles()
    //main 
    return ( 
      <>
      {/** top seach bar with grid layout */}
      <Form className={classes.form}>
        <Grid container className={classes.container}
        direction="row"
        alignContent="center"
        alignItems="center"
        spacing={2}
        >

          <Grid item xs={12} md={4} lg={4}>
          <TextField className = { classes.field }  
          label = "Job title or keyword"
          variant = "outlined"
          required
          InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Work fontSize="small" />
            </InputAdornment>
          ),
          }} />
          </Grid>

          <Grid item xs={12} md={4} lg={4}>
          <TextField className = { classes.field }
          label = "Area, city or town"
          variant = "outlined"
          required 
          InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LocationOn fontSize="small"/>
            </InputAdornment>
          ),
          }}/>
          </Grid>

          <Grid item xs={12} sm={4} lg={4}>
          <Button  className = { classes.searchBtn }
          variant = "contained"
          color = "primary"
          startIcon = { < SearchIcon / > }
          size = 'large'
          onClick = {() => alert('you clicked me')} >
          Search </Button> 
          </Grid>
        </Grid>
      </Form>

      {/** bottom required urgently cards  */}
      <div className={classes.bottom}>
        <Grid container 
        direction="row"
        alignContent="center"
        alignItems="stretch"
        spacing={2}>

          <Grid item xs={12} md={12} lg={12}>
          <Typography variant="h5" color="secondary">
              Required Urgently
            </Typography>
          </Grid>

          <Grid item xs={12} md={4} lg={4}>
          <Card>
          <CardMedia className={classes.media}
          image=""
          title="McDonald's"
          />
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

          <Grid item xs={12} md={4} lg={4}>
          <Card>
          <CardMedia
          image=""
          title="McDonald's"
          />
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

          <Grid item xs={12} md={4} lg={4}>
          <Card>
          <CardMedia
          image=""
          title="McDonald's"
          />
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
   
      </>
    );
}

export default Main;