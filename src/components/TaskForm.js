import React, { Component } from "react";
import { TextField, Button, Grid } from "@material-ui/core";
import NoteAddSharpIcon from '@material-ui/icons/NoteAddSharp';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    ButtonAdd:{
      margin: theme.spacing(3)
    },
    TextFieldAdd:{
        marginTop: theme.spacing(4)
    }
  });

class TaskForm extends Component {
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
        const { classes } = this.props;
        return (<Grid container direction={"column"} spacing={1} alignItems={"center"}>
            <form onSubmit={this.onSubmit} >
                <Grid container justify='center'>
                    <Grid item xs={12}><TextField
                        autoFocus={true}
                        placeholder={"Tarea"}
                        variant="outlined"
                        required
                        onChange={this.onChange}
                        value={this.state.description}
                        multiline='true'
                        className={classes.TextFieldAdd}>
                    </TextField>
                    </Grid>
                </Grid>
                <Grid container justify='flex-end' direction='column' alignItems='flex-end'>
                    <Grid item xs={12}>
                        <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        startIcon={< NoteAddSharpIcon />}
                        className={classes.ButtonAdd}>
                            Agregar
                        </Button>
                    </Grid>
                </Grid>
            </form>

        </Grid>)
    }
}

export default withStyles(styles)(TaskForm);