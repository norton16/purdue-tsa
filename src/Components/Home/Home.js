import React from 'react'
import ReactDOM from 'react-dom';
import { Container, Grid } from '@material-ui/core'
import styles from './Home.css'
import pic from './images/1.png';
import pic2 from './images/2.png';
import pic3 from './images/3.png';


const Home = () => {
    return (
            <div>
                <div class = "upper">
                    <div className="welcome">
                        <div className = "dark">
                        </div>
                    </div>
                    <div class="caption">
                            <h1>
                                Welcome to Purdue Taiwanese Student Association
                            </h1>
                            <p>
                                Dedicated to promoting Taiwan's rich culture and heritage
                            </p>
                    </div>
                </div>
                <div class = "about">
                <h1>About Us</h1>
                    <div class = "content">
                    <Grid container spacing={10}>
                        <Grid container item xs={12} sm={12} md={4} lg={4} xl={4} spacing={1} >
                            <div class= "box">
                                <img class="pi" src={pic}></img>
                                <h2>What is TSA?</h2>
                                <p>​​​The Taiwanese Student Association (TSA) is a student organization at Purdue University dedicated to improving Taiwanese cultural awareness on campus. </p>
                            </div>
                        </Grid>
                        <Grid container item xs={12} sm={12} md={4} lg={4} xl={4} spacing={1} >
                            <div class= "box">
                                <img class="pi" src={pic2}></img>
                                <h2>Where is Taiwan?</h2>
                                <p>Taiwan is situated in the West Pacific between Japan and the Philippines. </p>
                            </div>
                        </Grid>
                        <Grid container item xs={12} sm={12} md={4} lg={4} xl={4} spacing={1} >
                            <div class= "box">
                                <img class="pi" src={pic3}></img>
                                <h2>Want to join?</h2>
                                <p>​​​Anyone can join to be a TSA member for just $5! You do NOT have to be Taiwanese to join! Sign up for our email list and grab your TSA Membership Card!</p>
                            </div>
                        </Grid>
                    </Grid>
                    </div>
                </div>
            </div>
    );
}

export default Home
