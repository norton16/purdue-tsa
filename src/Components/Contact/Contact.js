import React from 'react'
import { Container, Grid } from '@material-ui/core'
import Paper from '@material-ui/core/Paper';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <Container maxWidth="lg">
                <Grid container justify="center">
                    <Grid item className="contact-left" xs={12} s={12} m={6} lg={6}>
                        <div className="contact-blurb">
                            <div>
                                <h1>Feel free to contact us.</h1>
                                <p>We gladly welcome comments, questions, concerns, or if you just want to say hi!</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item justify="center" className="contact-right" xs={12} s={12} m={6} lg={6}>
                        <div class="contact-form">
                            <form action="mailto:jdcardsfan99@yahoo.com" method="POST" enctype="multipart/form-data" name="ContactForm">
                                <label>
                                    <input type="text" name="name" placeholder="Name" />
                                    <br />
                                    <input type="email" name="email" placeholder="Email" />
                                    <br />
                                    <input type="text" name="message" placeholder="Message" />
                                    <br />
                                </label>
                                <input type="submit" value="SUBMIT" />
                            </form>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Contact
