import React,{Component} from 'react';
import TaskForm from '../components/TaskForm';
import Tasks from '../examples/tasks';
import TaskList from '../components/TaskList';
import Grid from '@material-ui/core/Grid';

export default class Home extends Component{
    constructor(props){

        super(props)
        this.state={
            tasks:Tasks
        }
    }

    addTask = description => {
        const newTask={id:this.state.tasks.length,
        description:description,
        done:false};
        this.setState({ tasks: [...this.state.tasks, newTask]});
    }


    render(){
        return(<Grid container direction="row"
        justify="center"
        alignItems="center">
        <Grid item xs={6} ><TaskForm addtask={this.addTask}/></Grid>
        <Grid item xs={6} ><TaskList task={this.state.tasks}/></Grid>
        </Grid>)
    }
}