import React, { Component } from 'react';
import CheckBoxRoundedIcon from '@material-ui/icons/CheckBoxRounded';
import { Button, Typography, CardActions, CardContent, Card} from "@material-ui/core";
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
    Card: {
      margin: theme.spacing(2,2,2,2)
    }
  });

class Task extends Component {
    render() {
        const {classes} = this.props;
        return (
            <Card className={classes.Card}>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {this.props.task.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained"
                        color="primary"
                        startIcon={<CheckBoxRoundedIcon />}>
                        Realizada
                    </Button>
                    <Button variant="contained" 
                        color="secondary" 
                        startIcon={<DeleteForeverRoundedIcon/>}>
                        Eliminar
        </Button>
                </CardActions>
            </Card>
        )
    }
}
export default withStyles(styles)(Task)