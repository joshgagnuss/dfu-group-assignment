import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { EmailOutlined, HeadsetMicOutlined, LocationCityOutlined, ScheduleOutlined } from '@material-ui/icons';

//custom css
const useStyles = makeStyles({
 contact: {
  background: '#f9f9f9',
  width: '100%',
  height: 1080,
  marginTop: 40,
 },
 lines: {
   marginTop: 20,
 },
 map: {
   marginTop: 30,
 },
 icon: {
   marginRight: 15,
 }
})

function Contact() {
 // customer css
  const classes = useStyles()
    // main
    return (
      <Container
      className={classes.contact}
      maxWidth="xl">

        <Typography
        className={classes.lines}
        variant="h6">
          <HeadsetMicOutlined
          className={classes.icon}
          fontSize="small" />
         Phone: +65 XXXX XXXX 
        </Typography>

        <Typography
        className={classes.lines}
        variant="h6">
          <EmailOutlined 
          className={classes.icon}
          fontSize="small"/>
         Email: contact@workforce.com.sg
        </Typography>

        <Typography
        className={classes.lines}
        variant="h6">
          <LocationCityOutlined 
          className={classes.icon}
          fontSize="small"/>
         Address: 8 Wilkie Rd, #02-01 ATO, Singapore 228095
        </Typography>

        <Typography
        className={classes.lines}
        variant="h6">
          <ScheduleOutlined 
          className={classes.icon}
          fontSize="small"/>
         Operating Hours: 9am - 6pm 
        </Typography>
        
        <div className={classes.map}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.787742776639!2d103.84742571554703!3d1.3022991620872009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19bc16b5bf8f%3A0x1050eaa0c84de6b3!2s8%20Wilkie%20Rd%2C%20Singapore%20228095!5e0!3m2!1sen!2ssg!4v1626597244850!5m2!1sen!2ssg" loading="lazy"></iframe>
        </div>
       
      </Container>
    );
  }

  export default Contact;