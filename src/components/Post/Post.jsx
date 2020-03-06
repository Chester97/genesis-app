import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import * as Rx from 'rxjs';
import socketIOClient from 'socket.io-client';
import * as S from './styles';
import PostItem from './PostItem/PostItem';


const Post = () => {

  const [socket, setSocket] = useState(socketIOClient('http://localhost:3000'));
  const [posts, setPosts] = useState([]);
  const reduxSelector = useSelector((state) => state.posts.postsData);
  const socketStream = Rx.Observable.create((observer) => {
    socket.on('posts', (data) => { observer.next(data); });
  });

  useEffect(() => {
  }, []);

  useEffect(() => {
    socketStream.subscribe((data) => {
      setPosts([...posts, data]);
    });
  }, [posts]);

  return (
    <S.PostContainerBackground>
      {
          reduxSelector && reduxSelector.map((item) => (
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
