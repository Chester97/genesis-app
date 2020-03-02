import React, { useState, useEffect } from 'react';
import * as S from './styles';
import { postService } from '../../../services/post';

const CreatePost = () => {
  const postTitleRef = React.createRef();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [postAlert, setPostAlert] = useState('');

  useEffect(() => {
    postTitleRef.current.focus();
  }, []);

  const createPostHandler = (e) => {
    e.preventDefault();
    postService.addPost({ title, description })
      .then(() => {
        setTitle('');
        setDescription('');
        setPostAlert('Post has been added');
      })
      .catch((err) => console.log(err));
  };

  const handleDescriptionChange = (e) => {
    setPostAlert('');
    setDescription(e.target.value);
  };
  const handleTitleChange = (e) => {
    setPostAlert('');
    setTitle(e.target.value);
  };

  return (
    <S.CreatePostContainer>
      <S.CreatePostText>{postAlert || 'Add post to Your wall!'}</S.CreatePostText>
      <S.CreatePostForm name="createPost" onSubmit={createPostHandler}>
        <S.CreatePostTitle form="createPost" value={title} onChange={handleTitleChange} ref={postTitleRef} placeholder="Post Title..." />
        <S.CreatePostDescription form="createPost" value={description} onChange={handleDescriptionChange} placeholder="Post Description..." />
        <S.CreatePostButton type="submit">Add!</S.CreatePostButton>
      </S.CreatePostForm>
    </S.CreatePostContainer>
  );
};

export default CreatePost;
