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
    render(){
        return(<Grid container direction="row"
        justify="center"
        alignItems="center"><TaskForm/><TaskList/></Grid>)
    }
}