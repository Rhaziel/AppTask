import React, { Component } from 'react';
import Task from '../components/Task';
import {Box}from '@material-ui/core';

export default class TaskList extends Component {
    render() {
        return (
            <Box display='flex'>
                <Box margin='auto'>
                {this.props.task.map(elem=>(
                        <Task 
                            task={elem} 
                            deletetask={this.props.deletetask} 
                            key={elem.id}
                            checkdone={this.props.checkdone}
                        />
                    ))}
                </Box>
            </Box>
        )
    }
}