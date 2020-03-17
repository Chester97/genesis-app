/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useSelector } from 'react-redux';
import * as S from './styles';
import PostItem from './PostItem/index';


const Post = () => {
  const posts = useSelector((state) => state.posts.postsData);

  return (
    <S.PostContainerBackground>
      {
          posts && posts.map((item) => (
            <PostItem
              key={item.title}
              postId={item._id}
              title={item.title}
              authorName={item.authorName}
              description={item.description}
              loadMoreText={item.description.length > 350 && true}
            />
          ))
      }
    </S.PostContainerBackground>
  );
};

export default Post;
