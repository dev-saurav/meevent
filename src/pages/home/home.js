import React from 'react'
import EventList from '../../components/EventList/EventList'
import Navigation from '../../components/Navigation/Navigation'
import './home.css'
import Button from '@material-ui/core/Button';

export default function Home() {
    return (
        <React.Fragment>
            <Navigation />
            <div className="splitview skewed">
                <div className="panel bottom">
                    <div className="content">
                        <div className="description">
                            <h1>Join ongoing events</h1>
                            <span><EventList showEvents={2} /></span>
                        </div>
                        <Button>See more events...</Button>
                    </div>
                </div>

                <div className="panel top">
                    <div className="content">
                        <div className="description">
                            <h1>Make a new Event.</h1>
                            <p>
                                <Button variant="contained" color="secondary">
                                    New Event
                            </Button>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="handle"></div>
            </div>
        </React.Fragment>
    )
}
