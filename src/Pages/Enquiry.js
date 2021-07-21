import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

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
  select: {
    marginTop: 2,
    marginLeft: 10
  },
  label: {
    marginTop: 30,
    marginLeft: 10
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
  // used for dropdown menu
  const [state, setState] = React.useState({
    subject: '',
 
  });
  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
    // main 
    return (

      <Container className={classes.container}>
        <form className={classes.form} noValidate autoComplete="off">

         <TextField className={classes.name}
         label="Name"
         required />

         <TextField className={classes.name}
         label="Email" 
          required />

         <InputLabel className={classes.label}
         htmlFor="age-native-simple">Subject</InputLabel>

        <Select className={classes.select}
          native
          value={state.subject}
          onChange={handleChange}
          inputProps={{
            name: 'subject',
            id: 'age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={"Profile"}>Profile</option>
          <option value={"Employer"}>Employer</option>
          <option value={"Feedback"}>Feedback</option>
          <option value={"General"}>General</option>
        </Select>

         <TextField className={classes.input} 
         required
         multiline
         variant="outlined"
         label="Your message:"
         rows="5" />

         <Button className={classes.button}
         variant="contained"
         color="primary">
           Submit</Button>
    </form>
      </Container>
    );
  }

  export default Enquiry;