import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Button } from '@material-ui/core';


export default function ContentCard({ eventItem }) {
    return (
        <Card >
            <CardHeader
                title={eventItem.name}
                subheader={(eventItem.on).toDateString()}
            />
            <CardContent>
                <Button variant="contained" color="secondary">Join</Button>
            </CardContent>
        </Card>
    );
}
