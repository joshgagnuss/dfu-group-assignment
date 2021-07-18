import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import { LocationOn, Work } from '@material-ui/icons';

// custom css
const useStyles = makeStyles({
    field: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20,
    },
    searchBtn: {
      marginTop: 20,
      marginBottom: 20,
    },
})

function Main() {
  // used for custom css
    const classes = useStyles()
    return ( 
    
      <container className = "Main" maxWidth="xl" >
        <br></br>
        <form noValidate autoComplete = "on">

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
        className = { classes.field }
        variant = "contained"
        color = "primary"
        startIcon = { < SearchIcon / > }
        size = 'large'
        onClick = {() => alert('you clicked me')} >
        Search </Button> 
      
        </form>

      </container>
    );
}

export default Main;