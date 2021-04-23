import React from 'react'
import { Container, Grid } from '@material-ui/core'
import './Home.css'
import pic from '../../assets/img/1.png';
import pic2 from '../../assets/img/2.png';
import pic3 from '../../assets/img/3.png';


const Home = () => {
    return (
        <div className="welcome">
            <Container maxWidth="lg">
                <Grid container justify="center">
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <div class="caption">
                            <h1>
                                Welcome to the Purdue Taiwanese Student Association.
                            </h1>
                            <p>
                                We are dedicated to promoting Taiwan's rich culture and heritage.
                            </p>
                        </div>
                    </Grid>
                </Grid>
                <div className="home-bottom">
                    <Grid container justify="center">
                        <Grid  item xs={12} sm={12} md={12} lg={12} >
                            <h1>About Us</h1>
                        </Grid>
                        <Grid  item xs={12} sm={12} md={4} lg={4} >
                            <div class= "box">
                                <img class="pi" src={pic}></img>
                                <h2>What is TSA?</h2>
                                <p>​​​The Taiwanese Student Association (TSA) is a student organization at Purdue University dedicated to improving Taiwanese cultural awareness on campus. </p>
                            </div>
                        </Grid>
                        <Grid  item xs={12} sm={12} md={4} lg={4} >
                            <div class= "box">
                                <img class="pi" src={pic2}></img>
                                <h2>Where is Taiwan?</h2>
                                <p>Taiwan is situated in the West Pacific between Japan and the Philippines. </p>
                            </div>
                        </Grid>
                        <Grid  item xs={12} sm={12} md={4} lg={4}>
                            <div class= "box">
                                <img class="pi" src={pic3}></img>
                                <h2>Want to join?</h2>
                                <p>​​​Anyone can join to be a TSA member for just $5! You do NOT have to be Taiwanese to join! Sign up for our email list and grab your TSA Membership Card!</p>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    );
}

export default Home
