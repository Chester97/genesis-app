import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import * as S from '../styles';
import { postService } from '../../../services/post';

const PostItem = ({
  title,
  description,
  loadMoreText,
  authorName,
  postId,
}) => {
  const [loadMore, setLoadMore] = useState(false);
  const [addComment, setAddComment] = useState(false);
  const comments = useSelector((state) => state.comments.commentsData);
  const commentTextRef = useRef(null);


  const sendComment = () => {
    postService.addComment({
      text: commentTextRef.current.value,
      postId,
    });
  };

  const renderComments = () => {
    return comments.map((c, i) => {
      if (c.postId === postId) {
        return <S.CommentItem key={i}>{c.text}</S.CommentItem>;
      }
    });
  }

  return (
    <S.PostWrapper>
      <S.PostTextDetail>{authorName}</S.PostTextDetail>
      <S.PostTextDetail>{title}</S.PostTextDetail>
      <S.PostTextContainer loadMore={loadMore}>
        {description}
      </S.PostTextContainer>
      <S.CommentInfo>Comments</S.CommentInfo>
      <S.CommentsContainer>
        {comments && renderComments()}
      </S.CommentsContainer>
      <S.PostButtonContainer>
        <S.PostCommentButton onClick={() => setAddComment(!addComment)}>Comment</S.PostCommentButton>
        {
          loadMoreText
          && (
            <S.PostCommentButton onClick={() => setLoadMore(!loadMore)}>
              {loadMore ? 'See Less...' : 'See More...'}
            </S.PostCommentButton>
          )
        }
      </S.PostButtonContainer>
      {
        addComment && (
          <S.PostAddCommentContainer>
            <S.PostTextAreaComment placeholder="Type Your comment here..." ref={commentTextRef}/>
            <S.PostCommentButton onClick={sendComment}>Add Comment</S.PostCommentButton>
          </S.PostAddCommentContainer>
        )
      }
    </S.PostWrapper>
  );
};
export default PostItem;

PostItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  loadMoreText: PropTypes.bool.isRequired,
  postId: PropTypes.string.isRequired,
};
