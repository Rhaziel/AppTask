import React from 'react'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import {useStyles} from './footerStyle'

const Copyright = () => {
    return (
        <Typography variant="body2">
            {'Copyright © '}
            <Link color="inherit" href="#">
                Scaffold project
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function Footer(props) {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Container maxWidth="sm">
                <Typography variant="body1">Hi people! i'm footer :)</Typography>
                <Copyright/>
            </Container>
        </footer>
    );
}