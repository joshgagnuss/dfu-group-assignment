import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
// custom css
const useStyles = makeStyles({
  name: {
    marginLeft: 10,
    marginTop: 10,
    display: 'block',
    
  },
  form: {
    marginTop: 20,
  },
  input: {
    marginLeft: 10,
    marginTop: 30,
    display: 'block',
   
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
  },
  container: {
    height: 1080,
    width: 1920,
  }
  
})

function Enquiry() {
  // custom css 
  const classes = useStyles()
    return (
      <Container
      className={classes.container}>
        <form className={classes.form} noValidate autoComplete="off">
         <TextField 
         className={classes.name}
         label="Name"
         required />
         <TextField 
         className={classes.name}
         label="Email" 
          required />
         <TextField 
         className={classes.name}
         label="Subject" 
         required />
         <TextField 
         className={classes.input} 
         required
         multiline
         variant="outlined"
         label="Your message:"
         rows="5" />
         <Button
         className={classes.button}
         variant="contained"
         color="primary">
           Submit</Button>
    </form>
      </Container>
    );
  }

  export default Enquiry;