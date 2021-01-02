import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import 'fontsource-roboto';
import {
  AppBar,
  Button,
  ButtonGroup,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Toolbar,
  Typography
} from '@material-ui/core';
import PostList from './components/postList';
import { Autocomplete } from '@material-ui/lab';

const subredditList = [
  'all',
  'funny',
  'gaming',
  'askreddit',
  'announcements',
  'aww',
  'pics',
  'science',
  'worldnews',
  'music',
  'videos',
  'todayilearned',
  'news',
  'showerthoughts',
  'iama',
  'gifs',
  'earthporn',
  'askscience',
  'food',
  'jokes',
  'explainlikeimfive',
  'books',
  'lifeprotips',
  'blog',
  'art',
  'mildlyinteresting',
  'diy',
  'sports',
  'nottheonion',
  'space',
  'gadgets'
];

const App = () => {
  const [postSortType, setPostSortType] = useState('hot');
  const [subreddit, setSubreddit] = useState('all');

  return (
    <>
      <CssBaseline />
      <AppBar position="sticky">
        <Toolbar>
          <Grid container direction="row" alignItems="stretch">
            <Grid item xs={12} md={8}>
              <Typography variant="h6">Alternate Reddit Home</Typography>
            </Grid>
            <Grid item xs={6} md={2}>
              <ButtonGroup>
                <Button
                  onClick={() => {
                    setPostSortType('hot');
                  }}
                  disabled={postSortType === 'hot'}
                >
                  Hot
                </Button>
                <Button
                  onClick={() => {
                    setPostSortType('new');
                  }}
                  disabled={postSortType === 'new'}
                >
                  New
                </Button>
              </ButtonGroup>
            </Grid>
            <Grid item xs={6} md={2}>
              <Autocomplete
                value={subreddit}
                onChange={(event, newValue) => {
                  setSubreddit(newValue ? newValue : subredditList[0]);
                }}
                options={subredditList}
                renderInput={(params) => (
                  <TextField {...params} label="Subreddit" variant="outlined" />
                )}
                size="small"
                fullWidth
              />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" style={{ marginTop: '1rem' }}>
        <PostList
          subreddit={subreddit}
          sort={postSortType}
          setSubreddit={setSubreddit}
        />
      </Container>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
