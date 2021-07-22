import React from 'react';
import { Grid, makeStyles, Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import image from '../images/john-smith.jfif'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
      height: '100%'
    },
  },
  photo: {
    height: 300,
    width: 300,
    maxWidth: 340,
    background: '#f9faff'
  },
  about: {
    width: 700,
   background: '#f9faff'
  }
}))

function Profile() {
  const classes = useStyles()
    return (

      <div className={classes.root}>
        <Grid container justifyContent="flex-start" alignItems="center" spacing={3} direction="column">
          <Grid item md={10}>
          <Card className={classes.photo}>
          <CardMedia
          component="img"
          alt="Your Photo"
          height="140"
          src={image}
        />
          <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            John Smith
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Software Engineer
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Age: 167
          </Typography>
          </CardContent>
          <CardActions>
          <Button size="small">Edit</Button>
          </CardActions>
          </Card>
          </Grid>

          <Grid item md={10}>
          <Card className={classes.about} variant="outlined">
          <CardContent>
          <Typography variant="h5" component="h2">
          About Me
          </Typography>
          <Typography variant="body2" component="p">
          well meaning and kindly.
          </Typography>
          </CardContent>
          <CardActions>
          <Button size="small">Edit</Button>
          </CardActions>
          </Card>
          </Grid>

          <Grid item md={10}>
          <Card className={classes.about} variant="outlined">
          <CardContent>
          <Typography variant="h5" component="h2">
          Certifications
          </Typography>
          <Typography variant="body2" component="p">
          Bachelor of Science
          </Typography>
          </CardContent>
          <CardActions>
          <Button size="small">Edit</Button>
          </CardActions>
          </Card>
          </Grid>

          <Grid item md={10}>
          <Card className={classes.about} variant="outlined">
          <CardContent>
          <Typography variant="h5" component="h2">
          Previous Experience
          </Typography>
          <Typography variant="body2" component="p">
          Google
          </Typography>
          </CardContent>
          <CardActions>
          <Button size="small">Edit</Button>
          </CardActions>
          </Card>
          </Grid>

          <Grid item md={10}>
          <Card className={classes.about} variant="outlined">
          <CardContent>
          <Typography variant="h5" component="h2">
          Contact
          </Typography>
          <Typography variant="body2" component="p">
          Email: johnsmith@XXXX.com
          <br/>
          Phone: +65 XXXX XXXX
          </Typography>
          </CardContent>
          <CardActions>
          <Button size="small">Edit</Button>
          </CardActions>
          </Card>
          </Grid>
          
        </Grid>
      </div>
    );
  }

  export default Profile;