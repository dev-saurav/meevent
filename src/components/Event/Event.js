import React from 'react'
import { Grid } from '@material-ui/core'
import ContentCard from '../ContentCard/ContentCard'
export default function Event({ eventItem }) {
    return (
        <Grid item xs={6}>
            <ContentCard eventItem={eventItem} />
        </Grid>
    )
}
