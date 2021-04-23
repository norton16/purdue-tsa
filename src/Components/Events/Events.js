import React from 'react'
import { Container, Grid } from '@material-ui/core'
import './Events.css'

const Events = () => {

    let events = [];

    const returnEvents = (num) => {
        for(let i = 0; i < 4; i++) { events.push (
            <Grid item xs={12} sm={6} md={3} lg={3}>
                <div className="event-wrapper">
                    <div className="event-image">
                        <img src={require(`../../assets/img/event${i+1}.jpg`).default} alt='event' />
                    </div>
                    <div className="event-info">
                        <h3>Event Title</h3>
                        <p>At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.</p>
                    </div>
                </div>
            </Grid>
            )
        }
        return events
    }

    return (
        <div>
            <Container maxWidth="lg">
                <div className="event-top">
                    <Grid container justify="center">
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <h1>Events</h1>
                        </Grid>
                        {returnEvents(4)}
                    </Grid>
                </div>
                <Grid container justify="center">
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <div className="main-event-image">
                            <img src={require('../../assets/img/event1.jpg').default} alt='event' />
                        </div>
                    </Grid>
                    <Grid item xs={0} sm={0} md={1} lg={1} />
                    <Grid item xs={12} sm={12} md={7} lg={7}>
                        <div className="main-event-info">
                            <div>
                                <h2>Ad eos saepe lucilius, noster postulant philosophia ea usu, qui dicta sadipscing te.</h2>
                                <p>Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.</p>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Events
