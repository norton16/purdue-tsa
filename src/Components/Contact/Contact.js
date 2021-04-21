import React from 'react'
import { Container, Grid } from '@material-ui/core'
import Paper from '@material-ui/core/Paper';
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact-container">
            <Grid container spacing={0}>
                <Grid item className="contact-left" xs={12} s={6} m={6} lg={6}>
                    <div className="contact-blurb">
                        <h2>Feel free to contact us</h2>
                        <p>We gladly welcome comments, questions, concerns, or just wanting to say hi!</p>
                    </div>
                </Grid>
                <Grid item justify="center" className="contact-right" xs={12} s={6} m={6} lg={6}>
                    <div class="contact-form">
                        <form action="mailto:jdcardsfan99@yahoo.com" method="POST" enctype="multipart/form-data" name="ContactForm">
                            <label>
                                <input type="text" name="name" placeholder="Name..." />
                                <br />
                                <input type="email" name="email" placeholder="Email..." />
                                <br />
                                <input type="text" name="message" placeholder="Message..." />
                                <br />
                            </label>
                            <input type="submit" value="Submit" />
                            <label class="warning">*Opens mail application</label>
                        </form>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Contact
