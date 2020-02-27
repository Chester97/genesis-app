import React, { useState, useEffect } from 'react';
import * as S from './styles';

const CreatePost = () => {
  const textareaRef = React.createRef();

  useEffect(() => {
    textareaRef.current.focus();
  }, []);

  const createPostHandler = (e) => {
    e.preventDefault();
  }

  return (
    <S.CreatePostForm name="createPost" onSubmit={createPostHandler}>
      <S.CreatePostTextarea form="createPost" ref={textareaRef} />
      <S.CreatePostButton type="submit">Add!</S.CreatePostButton>
    </S.CreatePostForm>
  )
};

export default CreatePost;
