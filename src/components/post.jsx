import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme
} from '@material-ui/core';

export const Post = ({ data, setSubreddit }) => {
  const theme = useTheme();

  const badImages = ['', 'self', 'nsfw', 'default', 'image'];
  const image = !badImages.includes(data.thumbnail) ? (
    <img src={data.thumbnail} style={{ width: '100%' }} />
  ) : (
    <></>
  );

  return (
    <Paper
      elevation={2}
      style={{ marginTop: '1rem', padding: '1rem', display: 'flex' }}
    >
      <Grid container spacing={3} direction="row">
        <Grid
          item
          xs="auto"
          sm={2}
          style={{
            display: useMediaQuery(theme.breakpoints.up('sm'))
              ? 'inherit'
              : 'none'
          }}
        >
          {image}
        </Grid>
        <Grid item xs={9} sm={8}>
          <Typography noWrap variant="subtitle1">
            <a href={`https://www.reddit.com/${data.permalink}`}>
              {data.title}
            </a>
          </Typography>
          <div>
            <Button
              onClick={() => {
                setSubreddit(data.subreddit);
              }}
              size="small"
            >
              r/{data.subreddit}
            </Button>
          </div>
        </Grid>
        <Grid item xs={3} sm={2}>
          <Typography
            variant="caption"
            component={'p'}
            align="right"
            onClick={() => {
              console.log(data);
            }}
          >
            u/{data.author}
            <br />
            {data.ups}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

Post.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    author: PropTypes.string,
    permalink: PropTypes.string,
    ups: PropTypes.number,
    subreddit: PropTypes.string
  }),
  setSubreddit: PropTypes.func
};

export default Post;
