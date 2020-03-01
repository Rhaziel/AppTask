import React, { Component } from "react";
import { TextField, Button, Grid, Typography } from "@material-ui/core";
import NoteAddSharpIcon from '@material-ui/icons/NoteAddSharp';

export default class TaskForm extends Component {
    state = {
        form: { id: "", description: "", status: true },
        formError: { error: false, text: "" }
    }
    render() {
        return (<Grid container direction={"column"} spacing={1} alignItems={"center"} xs={6}>
            <Grid item xs={12}><Typography variant="overline">Hola</Typography></Grid>
            <Grid item xs={12}><TextField autoFocus={true} placeholder={"Tarea"} variant="outlined"></TextField></Grid>
            <Grid item xs={12}><Button
                variant="contained"
                color="primary"
                startIcon={< NoteAddSharpIcon/>}
            >
                Agregar
            </Button>
            </Grid>
        </Grid>)
    }
}