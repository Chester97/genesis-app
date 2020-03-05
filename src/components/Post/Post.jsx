import React, { useState, useEffect } from 'react';
import * as Rx from 'rxjs';
import socketIOClient from 'socket.io-client';
import * as S from './styles';
import PostItem from './PostItem/PostItem';
import { postService } from '../../services/post';


const Post = () => {

  const [socket, setSocket] = useState(socketIOClient('http://localhost:3000'));
  const [posts, setPosts] = useState([]);
  const socketStream = Rx.Observable.create((observer) => {
    socket.on('posts', (data) => { observer.next(data); });
  });

  useEffect(() => {
    postService.getAllPosts()
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    socketStream.subscribe((data) => {
      console.log(data);
      console.log(posts);
    });
  }, [posts]);


  return (
    <S.PostContainerBackground>
      {
          posts && posts.map((item) => <PostItem key={item.title} title={item.title} description={item.description} loadMoreText={item.description.length > 350 && true} />)
      }
    </S.PostContainerBackground>
  );
};

export default Post;
