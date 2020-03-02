import React, { useState } from 'react';
import * as S from './styles';

const Post = () => {
  const [loadMore, setLoadMore] = useState(false);
  const [addComment, setAddComment] = useState(false);

  return (
    <S.PostContainerBackground>
      <S.PostWrapper>
        <S.PostTextDetail>Kamil K.</S.PostTextDetail>
        <S.PostTextDetail>How to earn money?</S.PostTextDetail>
        <S.PostTextContainer loadMore={loadMore}>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui itaque culpa aspernatur, cum molestias expedita tempore enim fuga rem officiis nesciunt cumque perspiciatis nulla, soluta repellat, quo aperiam. Pariatur, expedita.
          Hic velit adipisci, porro aut quis dolorum blanditiis nisi ea fugiat pariatur vitae officiis voluptatibus ipsum corporis deserunt! Ut rerum architecto illum quia voluptatum aliquam iste vero? Obcaecati, itaque amet.
          Velit ratione nihil sapiente cumque vel quaerat ex accusantium, error nesciunt? Itaque tempora eos accusamus ea enim laboriosam corporis aspernatur ut ratione nihil, quis asperiores libero inventore delectus, praesentium ullam.
        </S.PostTextContainer>
        <S.PostButtonContainer>
          <S.PostCommentButton onClick={() => setAddComment(!addComment)}>Comment</S.PostCommentButton>
          <S.PostCommentButton onClick={() => setLoadMore(!loadMore)}>
            {loadMore ? 'See Less...' : 'See More...'}
          </S.PostCommentButton>
        </S.PostButtonContainer>
        {
          addComment && (
            <S.PostAddCommentContainer>
              <S.PostTextAreaComment placeholder="Type Your comment here..."/>
              <S.PostCommentButton>Add Comment</S.PostCommentButton>
            </S.PostAddCommentContainer>
          )
        }
      </S.PostWrapper>
    </S.PostContainerBackground>
  );
};

export default Post;
