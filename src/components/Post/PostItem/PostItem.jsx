import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from '../styles';

const PostItem = ({ title, description, loadMoreText }) => {
  const [loadMore, setLoadMore] = useState(false);
  const [addComment, setAddComment] = useState(false);

  return (
    <S.PostWrapper>
      <S.PostTextDetail>Kamil K.</S.PostTextDetail>
      <S.PostTextDetail>{title}</S.PostTextDetail>
      <S.PostTextContainer loadMore={loadMore}>
        {description}
      </S.PostTextContainer>
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
            <S.PostTextAreaComment placeholder="Type Your comment here..." />
            <S.PostCommentButton>Add Comment</S.PostCommentButton>
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
  loadMoreText: PropTypes.bool.isRequired,
};
