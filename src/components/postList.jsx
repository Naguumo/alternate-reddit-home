import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Post from './post';

export const PostList = ({ subreddit, sort, setSubreddit }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(`https://www.reddit.com/r/${subreddit}/${sort}.json`)
      .then((res) => res.json())
      .then((res) => {
        setList(res.data.children);
      });
  }, [subreddit, sort]);

  return (
    <div>
      {list.map((value, index) => {
        return (
          <Post key={index} data={value.data} setSubreddit={setSubreddit} />
        );
      })}
    </div>
  );
};

PostList.propTypes = {
  subreddit: PropTypes.string,
  sort: PropTypes.string,
  setSubreddit: PropTypes.func
};

export default PostList;
