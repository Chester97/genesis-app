import React, { useState, useEffect } from 'react';
import * as Rx from 'rxjs';
import socketIOClient from 'socket.io-client';
import * as S from './styles';
import PostItem from './PostItem/PostItem';


const Post = () => {
  const [socket, setSocket] = useState(socketIOClient('http://localhost:3000'));
  const [posts, setPosts] = useState([]);

  const socketStream = Rx.Observable.create((observer) => {
    socket.on('posts', (data) => { observer.next(data); });
  });

  useEffect(() => {
    socketStream.subscribe((data) => {
      setPosts([...posts, data]);
    });
  }, [posts]);


  return (
    <S.PostContainerBackground>
      {
          posts && posts.map((item) => <PostItem key={item.author} title={item.title} description={item.description} />)
      }
    </S.PostContainerBackground>
  );
};

export default Post;
