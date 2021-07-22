import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import { Divider, Grid, makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { FormGroup } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
      height: '100%'
    },
  },
}));

function AddProfile() {
  const classes = useStyles()
    return (
      <FormGroup className={classes.root} noValidate autoComplete="off">
        <Grid container justifyContent="flex-start" alignItems="center" spacing={3} direction="column">
          <Grid item>
           <TextField id="outlined-basic" label="Firstname" variant="outlined" />
          </Grid>
          <Grid item>
           <TextField id="outlined-basic" label="Lastname" variant="outlined" />
          </Grid>
          <Grid item>
           <TextField id="outlined-basic" label="Age" variant="outlined" />
          </Grid>
          <Grid item>
           <TextField id="outlined-basic" label="About Me" variant="outlined" />
          </Grid>
          <Grid item>
           <TextField id="outlined-basic" label="Certifications" variant="outlined" />
          </Grid>
          <Grid item>
           <TextField id="outlined-basic" label="Previous Experience" variant="outlined" />
          </Grid>
          <Grid item>
           <TextField id="outlined-basic" label="Email:" variant="outlined" />
          </Grid>
          <Grid item>
           <TextField id="outlined-basic" label="HP:" variant="outlined" />
          </Grid>
          <Grid item>
          <Button variant="contained" color="default" size="large" startIcon = { < AddPhotoAlternateIcon / > }
          onClick={()=> { alert('cheese')}}>
          Upload Photo
          </Button>
          </Grid>
          <Divider></Divider>
          <Grid item>
          <Button variant="contained" color="Primary" size="large" startIcon = { < PersonAddIcon / > }
          onClick={()=> { alert('A verification Email Has Been Sent')}}>
          Register
          </Button>
          </Grid>
        </Grid>
      </FormGroup>
    );
  }

  export default AddProfile;