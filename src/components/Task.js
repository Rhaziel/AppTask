import React, { Component } from 'react';
import CheckBoxRoundedIcon from '@material-ui/icons/CheckBoxRounded';
import { Button, Typography, CardActions, CardContent, Card} from "@material-ui/core";

export default class Task extends Component {
    render() {
        return (
            <Card>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Descripcion de la tarea a realizar
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained"
                        color="primary"
                        startIcon={<CheckBoxRoundedIcon />}>
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
        </Button>
                </CardActions>
            </Card>
        )
    }
}