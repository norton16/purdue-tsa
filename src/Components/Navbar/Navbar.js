import React from 'react'
import { Container, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <div className="navbar-wrapper">
                <Container maxWidth="lg">
                    <Grid container justify="center">
                            <Grid item xs={6} sm={6} md={6} lg={6}>
                                <div className="logo">
                                    <Link to="/">
                                        <img component={Link} to="/" src={require('../../assets/img/logo.jpg').default} alt='logo' />
                                    </Link>
                                </div>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} lg={6}>
                                <div className="nav-links">
                                    <div>
                                        <Link to="/about">About</Link>
                                        <Link to="/events">Events</Link>
                                        <Link to="/contact">Contact</Link>
                                    </div>
                                </div>
                            </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    )
}

export default Navbar
