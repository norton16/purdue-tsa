import React from 'react'
import { Container, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <>
        <div className="footer-wrapper">
            <Container maxWidth="lg">
                <Grid container justify="center">
                    <Grid item xs={1} sm={1} md={1} lg={1}>
                        <div className="logo">
                            <Link to="/">
                                <img src={require('../../assets/img/logo.jpg').default} alt='logo' />
                            </Link>
                        </div>
                    </Grid>
                    <Grid item xs={7} sm={7} md={4} lg={4}>
                        <div className="footer-contact">
                            <p>
                                Stewart Center Room #18A1<br/>
                                128 Memorial Mall, West Lafayette, IN 47907-2034<br/>
                                Email: ptsa@purdue.edu<br/>
                                Phone: 765-701-8189 <br/>
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={0} sm={0} md={3} lg={3} />
                    <Grid item xs={4} sm={4} md={4} lg={4}>
                        <div className="footer-links">
                            <div>
                                <a href="https://www.instagram.com/purdue_tsa/">
                                    <img src={require('../../assets/img/instagram.svg').default} alt='instagram'/>
                                </a>
                                <a href="https://www.facebook.com/PurdueTaiwaneseStudentAssociation">
                                    <img src={require('../../assets/img/facebook.svg').default} alt='facebook'/>
                                </a>
                                <a href="https://boilerlink.purdue.edu/organization/tsa">
                                    <img src={require('../../assets/img/compass.svg').default} alt='website'/>
                                </a>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
        </>
    )
}

export default Footer
