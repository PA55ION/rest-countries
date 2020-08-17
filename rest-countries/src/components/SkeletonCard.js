import React, { useContext } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import styled from 'styled-components';

const Wrapper = styled.div`
  box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.25);
  background-color: ${({ theme }) => theme.element};
  border-radius: 8px;
  // transition: 0.3s opacity, 0.3s visibility;
  display: inline-block;
  width: 250px;
  border: 1px solid green;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 20px 0 5px;
`;
const Text = styled.p`
    margin-bottom: 3px;
`;

const Header = styled.h2`
  margin-bottom: 2px;
`;

const Overlay = styled.div`
  overflow: hidden;
  padding: 30px 20px 5px 15px;

`;

const SkeletonCard = () => {

  return (
      <SkeletonTheme
        color="#202020" highlightColor="#444"
        // color={isDarkTheme ? '#495175' : '#e6e6e6'}
        // highlightColor={isDarkTheme ? '#495175' : '#e6e6e6'}
      >
        <Wrapper>
         {Array(1)
            .fill()
            .map((item, index) => (
        <Overlay key={index}>
          <Skeleton  square={true} width={250} height={200} />
    
        <Content>
          <Header>
            <Skeleton width="30%" />
          </Header>
          <Text>
            <Skeleton width="35%" />
          </Text>
          <Text>
            <Skeleton width="40%" />
          </Text>
          <Text>
            <Skeleton width="30%" />
          </Text>
        </Content>
        </Overlay>
        ))}
      </Wrapper>
      </SkeletonTheme>
  );
};

export default SkeletonCard;