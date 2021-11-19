import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "auto",
    height: "50rem",
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    padding: '10px',
    borderRadius: '5px',
  },
}));

export default function Scrollable(props) {
  const classes = useStyles();

  return (
      <Box className={`sb ${classes.root}`}>
        {props.children}
      </Box>
  );
}