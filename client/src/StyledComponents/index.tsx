import styled from "styled-components";
import { SuggestionBoxProps, IconImageProps } from "../types/index";

//all styled components
const SearchBarWrapper = styled.div`
  border: 1px solid black;
  border-radius: 20px;
  padding: 10px;
  display: flex;
  position: relative;
`;

const IconImage = styled.img<IconImageProps>`
  height: 20px;
  padding-right: ${(props: IconImageProps) => (props.padding ? "20px" : "0px")};
  cursor: ${(props: IconImageProps) => (props.padding ? "default" : "pointer")};
`;

const Input = styled.input`
  border: none;
  outline: none;
  flex: 1;
  width: 500px;
`;

const RightSide = styled.div`
  display: flex;
  flex: 0 0 auto;
  padding-right: 10px;
`;

const SuggestionBox = styled.div<SuggestionBoxProps>`
  display: ${(props: SuggestionBoxProps) =>
    props.length !== 0 ? "flex" : "none"};
  flex-direction: column;
  flex: 0 0 auto;
  max-height: 150px; //stops search box from moving
  overflow: auto;
  border-radius: 20px;
  border: 1px solid black;
  & * {
    flex: 1;
    padding: 5px;
    text-align: left;
    padding-left: 30px;
  }
  //highlighting the hovered 
  & :nth-child(${(props: SuggestionBoxProps) => props.active}) {
    background-color: gray;
    color: white;
    font-weight: bold;
  }
`;

const ImageWrapper = styled.div`
  padding: 2px;
  cursor: pointer;
`;

const Div = styled.div``;

const H1 = styled.div`
  font-size: 32px;
  font-weight: bold;
`;

const H6 = styled.div`
  font-weight: bold;
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export {
  SearchBarWrapper,
  IconImage,
  Input,
  RightSide,
  SuggestionBox,
  ImageWrapper,
  Div,
  H1,
  H6,
  ButtonWrapper,
};
