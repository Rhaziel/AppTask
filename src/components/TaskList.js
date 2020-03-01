import React, { Component } from 'react';
import Task from '../components/Task';
import Grid from '@material-ui/core/Grid';

export default class TaskList extends Component {
    render() {
        return (
            <Grid container direction={"column"} spacing={1} alignItems={"center"} xs={6}>
                <Grid item xs={12}>
                    <Task/>
                </Grid>
            </Grid>
        )
    }
}