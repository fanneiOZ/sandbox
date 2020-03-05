import React from 'react';
import { Typography, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    alignContent: 'right',
  },
}));

export default function LoginForm(props) {
  const classes = useStyles();
  const title = props.title ?? 'Sign In';

  return (
    <form method="post" className={classes.form}>
      <Typography component="h1" variant="h2" gutterBottom>
        {title}
      </Typography>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        placeholder="email@fanneioz-sandbox.io"
        name="email"
        autoComplete="email"
        autoFocus
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <Button variant="outlined" color="secondary" size="large" className={classes.submit}>
        {'Login'}
      </Button>
    </form>
  );
}
