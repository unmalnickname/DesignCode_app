import React from "react";
import styled from "styled-components/native";

const Course = (props) => (
  <Container>
    <Cover>
      <Image source={props.image} />
      <Logo source={props.logo} resizeMode="contain" />
      <Subtitle>{props.subtitle}</Subtitle>
      <Title>{props.title}</Title>
    </Cover>
    <Content>
      <Avatar source={props.avatar} />
      <Caption>{props.caption}</Caption>
      <Author>Taught by {props.author}</Author>
    </Content>
  </Container>
);

export default Course;

//First Container
const Container = styled.View`
  /* box-shadow is not supported on React Native */
  shadow-color: #000;
  shadow-opacity: 0.15;
  shadow-offset: 0px 10px;
  shadow-radius: 20px;
  elevation: 10;
  width: 90%;
  height: 335px;
  background: white;
  margin: 10px 20px;
  border-radius: 14px;
`;

const Cover = styled.View`
  height: 260px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
  justify-content: flex-end;
`;
const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;
const Logo = styled.Image`
  width: 48px;
  height: 48px;
  position: absolute;
  top: 90px;
  left: 50%;
  margin-left: -24px;
`;

const Title = styled.Text`
  font-size: 24px;
  color: white;
  font-weight: 600;
  margin-top: 4px;
  margin-bottom: 20px;
  margin-left: 20px;
  width: 170px;
`;

const Subtitle = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  font-size: 15px;
  font-weight: 500;
  text-transform: uppercase;
  margin-left: 20px;
`;

//Second Container
const Content = styled.View`
  padding-left: 62px;
  justify-content: center;
  height: 75px;
`;
const Avatar = styled.Image`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 20px;
  left: 20px;
  border-radius: 16px;
`;
const Caption = styled.Text`
  font-size: 14px;
  color: #3c4560;
  font-weight: 500;
`;
const Author = styled.Text`
  font-size: 13px;
  color: #b8bece;
  font-weight: 500;
  margin-top: 4px;
`;

//data Json
