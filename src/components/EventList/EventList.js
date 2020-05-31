import React from 'react'
import Event from '../Event/Event'
import { Grid } from '@material-ui/core'
import events from '../../data/events/eventsData'
export default function EventList({ showEvents = null }) {
    return (
        <div>
            <Grid container spacing={2}>
                {
                    showEvents !== null ?
                        events.slice(0, showEvents).map((event, index) => {
                            return <Event key={event.id} eventItem={event} />
                        }) :
                        events.map((event, index) => {
                            return <Event key={event.id} eventItem={event} />
                        })
                }
            </Grid>
        </div>
    )
}
