import React, { Component } from 'react';
import { Button, Typography, CardActions, CardContent, Card, Checkbox} from "@material-ui/core";
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
                    <Typography 
                        variant="body2" 
                        color="textSecondary" 
                        component="p"
                        style={{textDecoration : this.props.task.done ? 'line-through' : 'none'}}
                    >
                        {this.props.task.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Checkbox 
                        onChange={this.props.checkdone.bind(this, this.props.task.id)}
                    />
                    <Button variant="contained" 
                        color="secondary" 
                        startIcon={<DeleteForeverRoundedIcon/>}
                        onClick={this.props.deletetask.bind(this, this.props.task.id)}
                        >
                            Eliminar
                    </Button>
                </CardActions>
            </Card>
        )
    }
}
export default withStyles(styles)(Task)