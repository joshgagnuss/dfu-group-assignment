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
    background: '#f4f4f4'
  },
  form: {
    marginTop: 20,
  },
  input: {
    marginLeft: 10,
    marginTop: 10,
    display: 'block',
    background: '#f4f4f4'
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
  },
  
})

function Enquiry() {
  // custom css 
  const classes = useStyles()
    return (
      <Container>
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
         className={classes.input}
         label="Enquiry" 
         required
         multiline />
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