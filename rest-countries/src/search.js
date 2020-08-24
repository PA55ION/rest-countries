import React from "react";
import styled from "styled-components";

const Input = styled.input`
  max-width: 100%;
  padding: 14px 65px;
  text-align: left;
  height: 50px;
  margin: 45px 20px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-family: "Nunito Sans", sans-serif;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2);
  font-size: 16px;
  background: ${({ theme }) => theme.inputBackground};
  border: ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  &:focus {
    border-color: ${({ theme }) => theme.blue};
  }
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.text};
  }
  :-ms-input-placeholder {
    color: ${({ theme }) => theme.text};
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 638px) {
    width: 350px;
    height: 50px;
  }
  @media (min-width: 1024px) {
    width: 500px;
    margin-left: 3.9rem;
  }
`;

const Icon = styled.div`
  color: ${({ theme }) => theme.text};
  color: #ccc;
`;

const Button = styled.a`
  font-size: 24px;
  position: absolute;
  left: 50px;
  top: 94px;
  color: #ccc;
`;

class SearchBox extends React.Component {
  render() {
          console.log(this.props)
    const { type, value, onChange } = this.props;
    return (
      <form>
      <Wrapper>
        <Button></Button>
        <span className="z-10 h-full leading-snug font-normal absolute text-center text-black absolute bg-transparent rounded text-base items-center justify-center w-8 pl-5 py-6 px-5 my-8 mx-5">
          <Icon>
            <ion-icon name="search-outline"></ion-icon>
          </Icon>
        </span>
        <Input
          type={type}
          placeholder="Search for a country..."
          value={value}
          onChange={onChange}
          className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none"
        />
      </Wrapper>
      </form>
    );
  }
}

export default SearchBox;
