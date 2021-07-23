import React from 'react';
import Button from '@material-ui/core/Button';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AddPhotoAlternateTwoToneIcon from '@material-ui/icons/AddPhotoAlternateTwoTone';
import { Grid, makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { FormGroup } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
  container: {
    width: '100%',
  }
}));

function AddProfile() {
  const classes = useStyles()
    return (
      <FormGroup className={classes.root} noValidate autoComplete="off">
        <Grid container justifyContent="flex-start" alignItems="center" spacing={3} direction="column" className={classes.container}>
          <Grid item xs={12} md={6} lg={6}>
           <TextField id="outlined-basic" label="Firstname" variant="outlined" />
          </Grid>
          <Grid item xs={12} md={6} lg={6}> 
           <TextField label="Lastname" variant="outlined" />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
           <TextField label="DOB - DD/MM/YYYY" variant="outlined" />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
           <TextField label="About Me" variant="outlined" multiline rows="5" />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
           <TextField label="Certifications" variant="outlined" multiline rows="3" />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
           <TextField label="Previous Experience" variant="outlined" multiline rows="3" />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
           <TextField label="Email:" variant="outlined" />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
           <TextField label="HP:" variant="outlined" />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
          <Button variant="contained" color="default" size="large" startIcon = { < AddPhotoAlternateTwoToneIcon / > }
          onClick={()=> { alert('cheese')}}>
          Upload Photo
          </Button>
          </Grid>
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