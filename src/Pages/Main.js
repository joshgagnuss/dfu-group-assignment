import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Container, makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import { LocationOn, Work } from '@material-ui/icons';
import Paper from '@material-ui/core/Paper';

// custom css
const useStyles = makeStyles((theme) => ({
    field: {
     marginTop: 10,
     marginLeft: 50,
     marginRight: 50,
     width: '25%'
    },
    searchBtn: {
      marginTop: 15,
      marginBottom: 20,
      marginLeft: 50,
      width: '20%'
    },
    container: {
      height: '1080px',
      width: '100%',
      marginTop: 20,
    },
    top: {
     width: '100%'
    },
    bottom: {
      width: '40%',
      marginTop: '50%',
    }, 
    urgentJobs: {
      display: 'flex',
      flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    }},
    covidHeader: {
      textAlign: 'center'
    }
    
}));

function Main() {
// used for custom css
const classes = useStyles()
    //main 
    return ( 
    
    <Container
    className={classes.container}>

       <Container
       className={classes.top}>
       <form 
       noValidate
       autoComplete="off" >

       <TextField 
        className = { classes.field }
        id = "keySearch"
        label = "Job title or keyword"
        variant = "outlined"
        required
        InputProps={{
          startAdornment: (
            <InputAdornment 
            position="start"
            >
              <Work
              fontSize="small" />
            </InputAdornment>
          ),
        }} />

        <TextField 
        className = { classes.field }
        id = "areaSearch"
        label = "Area, city or town"
        variant = "outlined"
        required 
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LocationOn 
              fontSize="small"/>
            </InputAdornment>
          ),
        }}/>

        <Button 
        className = { classes.searchBtn }
        variant = "contained"
        color = "primary"
        startIcon = { < SearchIcon / > }
        size = 'large'
        onClick = {() => alert('you clicked me')} >
        Search </Button> 

      </form>

      </Container>
       
      <Container
      className={classes.bottom}>

      <Typography
      className={classes.covidHeader}
      variant="h6"
      color="secondary">
      Jobs Requiring Urgent Applicants
      </Typography>
        
      <div className={classes.urgentJobs}>
      <Paper elevation={3}>Software Engineering</Paper> 
      <Paper elevation={3}>Chef</Paper> 
      <Paper elevation={3}>Nurse</Paper> 
      <Paper elevation={3}>Waiter</Paper> 
      </div>

      </Container>

    </Container>
      
    );
}

export default Main;