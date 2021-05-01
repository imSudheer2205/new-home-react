import React from 'react';
import './Topics.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import Pagination from '@material-ui/lab/Pagination';
import { Font } from '@react-pdf/renderer';

Font.register({ family: 'Roboto', src: makeStyles });

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#072907",
    fontFamily: 'Roboto'
  },
  hero: {
    //backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80')`,
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1606730304654-547d21c7b2b7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1408&q=80')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "2rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em"
    }
  },
  blogsContainer: {
    paddingTop: theme.spacing(3)
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3)
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between"
  },
  author: {
    display: "flex"
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center"
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h4" fontWeight="bold" color="white">
            Atharva <span>Ayurdhama</span>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box className={classes.hero}>
        <Box>Topics and Feeds</Box>
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h6" className={classes.blogTitle}>
          Topics
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.unsplash.com/photo-1611497426695-412abe2f287b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=638&q=80"
                  //image='images/imgtopic.jpg'
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Panchakarma therapy - 1
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Panchakarma chikitsa- (detoxification procedures)is a process of treatment (with 5 different types) 
                    which involves in the removal of disease causing toxins from the body-the root cause for any diseases.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  {/* <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" /> */}
                  <Avatar src={require('./images/avatar.jpg')} />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Hospital free Life
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      Mar 25, 2021
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.unsplash.com/photo-1609958007546-e68983fcc776?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Panchakarma therapy - 2
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Panchakarma chikitsa- (detoxification procedures)is a process of treatment (with 5 different types) 
                    which involves in the removal of disease causing toxins from the body-the root cause for any diseases.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  {/* <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80" /> */}
                  <Avatar src={require('./images/avatar.jpg')} />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Hospital free Life
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      Mar 25, 2021
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.unsplash.com/photo-1601091581856-07d8bd49e47c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Panchakarma therapy - 3
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Panchakarma chikitsa- (detoxification procedures)is a process of treatment (with 5 different types) 
                    which involves in the removal of disease causing toxins from the body-the root cause for any diseases.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  {/* <Avatar src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" /> */}
                  <Avatar src={require('./images/avatar.jpg')} />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Hospital free Life
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      Mar 25, 2021
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.unsplash.com/photo-1573546333520-92cb9d534461?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Panchakarma therapy - 4
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Panchakarma chikitsa- (detoxification procedures)is a process of treatment (with 5 different types) 
                    which involves in the removal of disease causing toxins from the body-the root cause for any diseases.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  {/* <Avatar src="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80" /> */}
                  <Avatar src={require('./images/avatar.jpg')} />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Hospital free Life
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      Mar 25, 2021
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <Box my={4} className={classes.paginationContainer}>
          <Pagination count={10} />
        </Box>
      </Container>
    </div>
  );
}

export default App;
