import React from 'react';
import { Grid, CircularProgress, Paper, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './post/post';
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));

  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="hr" align="center">
          Sign in
        </Typography>
      </Paper>
    );
  }

  return (
    !posts.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;