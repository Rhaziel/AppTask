import React, { Component } from 'react';
import Task from '../components/Task';
import {Grid, Box}from '@material-ui/core';

export default class TaskList extends Component {
    render() {
        return (
            <Box display='flex'>
                <Box margin='auto'>
                {this.props.task.map(elem=>(
                        <Task task={elem}/>
                    ))}
                </Box>
            </Box>
        )
    }
}