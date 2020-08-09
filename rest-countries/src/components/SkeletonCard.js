import React, { useContext } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
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
  padding: 15px 20px 0 75px;
`;
const Text = styled.p`
    margin-bottom: 3px;
`;

const Header = styled.h2`
  margin-bottom: 2px;
`;

const Overlay = styled.div`
  overflow: hidden;
  padding: 30px 20px 5px 75px;

`;

const SkeletonCard = () => {

  return (
      <SkeletonTheme
        color="#202020" highlightColor="#444"
        // color={isDarkTheme ? '#495175' : '#e6e6e6'}
        // highlightColor={isDarkTheme ? '#495175' : '#e6e6e6'}
      >
        <Overlay>
          <Skeleton  square={true} width={250} height={200} />
        </Overlay>
        <Content>
          <Header>
            <Skeleton width="50%" />
          </Header>
          <Text>
            <Skeleton width="70%" />
          </Text>
          <Text>
            <Skeleton width="60%" />
          </Text>
          <Text>
            <Skeleton width="50%" />
          </Text>
        </Content>
      </SkeletonTheme>
  );
};



export default SkeletonCard;