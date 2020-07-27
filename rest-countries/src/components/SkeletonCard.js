import React, { useContext } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  max-width: 320px;
  min-height: 380px;
  box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.25);
  background-color: ${({ theme }) => theme.element};
  border-radius: 8px;
  transition: 0.3s opacity, 0.3s visibility;
  opacity: ${({ visible }) => (visible ? '1' : '0')};
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
`;
const Text = styled.p`
    margin-bottom: 20px;
`;

const Header = styled.h2`
  margin-bottom: 20px;
`;

const Overlay = styled.div`
  overflow: hidden;
`;

const SkeletonCard = () => {

  return (
      <SkeletonTheme
      color="#202020" highlightColor="#444"
        // color={isDarkTheme ? '#495175' : '#e6e6e6'}
        // highlightColor={isDarkTheme ? '#495175' : '#e6e6e6'}
      >
        <Overlay>
          <Skeleton width="100%" height={200} />
        </Overlay>
        <Content>
          <Header>
            <Skeleton width="50%" />
          </Header>
          <Text>
            <Skeleton width="80%" />
          </Text>
          <Text>
            <Skeleton width="70%" />
          </Text>
          <Text>
            <Skeleton width="60%" />
          </Text>
        </Content>
      </SkeletonTheme>
  );
};



export default SkeletonCard;