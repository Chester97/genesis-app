import React from 'react';
import { useSelector } from 'react-redux';
import * as S from './styles';
import PostItem from './PostItem/PostItem';


const Post = () => {
  const posts = useSelector((state) => state.posts.postsData);

  return (
    <S.PostContainerBackground>
      {
          posts && posts.map((item) => (
            <PostItem
              key={item.title}
              title={item.title}
              description={item.description}
              loadMoreText={item.description.length > 350 && true}
            />
          ))
      }
    </S.PostContainerBackground>
  );
};

export default Post;
