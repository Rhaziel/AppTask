import React, { Component } from "react";
import { TextField, Button, Grid, Typography } from "@material-ui/core";
import NoteAddSharpIcon from '@material-ui/icons/NoteAddSharp';

export default class TaskForm extends Component {
    state = {
        description: "",
        formError: { error: false, text: "" }
    }
    onChange = e => {
        this.setState({ description: e.target.value })
    }
    onSubmit = e =>{
        e.preventDefault();
        this.props.addtask(this.state.description);
        this.setState({description: ""})
    }
    render() {
        return (<Grid container direction={"column"} spacing={1} alignItems={"center"}>
            <form onSubmit={this.onSubmit} >
                <Grid item xs={12}><Typography variant="overline">Hola</Typography></Grid>
                <Grid item xs={12}><TextField
                    autoFocus={true}
                    placeholder={"Tarea"}
                    variant="outlined"
                    required
                    onChange={this.onChange}
                    value={this.state.description}>
                </TextField>
                </Grid>
                <Grid item xs={12}><Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    startIcon={< NoteAddSharpIcon />}
                >
                    Agregar
            </Button>
                </Grid>
            </form>

        </Grid>)
    }
}