import React from "react";
import styled from "styled-components/native";

const Logo = (props) => (
  <Container>
    <Image source={props.image} resizeMode="contain" />
    <Text>{props.text}</Text>
  </Container>
);

export default Logo;

const Container = styled.View`
  flex-direction: row;
  background: white;
  height: 60px;
  padding: 12px 16px 12px;
  border-radius: 10px;
  /* box-shadow is not supported on React Native */
  shadow-color: #000;
  shadow-opacity: 0.05;
  shadow-offset: 0px 5px;
  shadow-radius: 10px;
  elevation: 5;
  align-items: center;
  margin: 0 8px;
`;

const Image = styled.Image`
  width: 36px;
  height: 36px;
`;

const Text = styled.Text`
  font-weight: 600;
  font-size: 17px;
  margin-left: 8px;
`;
