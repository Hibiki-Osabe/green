import styled from "styled-components";
import Link from "next/link";


const EntryContainer = styled.section`
  width: 60%;
  margin: 0 auto;
`;
const EntryTitle = styled.h2`
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 32px;
  font-weight: 600;
  margin: 0;
  margin-top: 10px;
`;
const EntryCategory = styled.figure`
  width: 300px;
  margin: 0;
  color: #298EEA;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 16px;
  font-weight: 400;
`;

const EntryTool = styled.figure`
  width: 300px;
  margin: 0;
  color: #298EEA;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 16px;
  font-weight: 400;
`;


const EntryImage = styled.p`
  margin: 0;
  width: 100%;
  margin-top: 80px;
  & img {
    width: 100%;
    margin: 0;
    border: 5px solid #28CC75;
    }
`;
const EntryBody = styled.div`
  font-family: 'Noto Sans JP', sans-serif;
  & p {
    /* border: 1px solid red; */
    margin: 0;
    margin-top: 8px;
    font-weight: 300;
  }
`;

const EntryLink = styled.p`
  font-family: 'Noto Sans JP', sans-serif;
  width: 60%;
  background-color: #28CC75;
  border: 3px solid #28CC75;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 80px;
  & a {
    display: block;
    font-size: 20px;
    font-weight: 600;
    margin: 0;
    color: #fff;
    text-align: center;
    transition: all 0.3s;
    padding: 8px;
    &:hover {
      color: #28CC75;
      background-color: #fff;
    }
  }
`;


export default function Entry(props) {
  console.log(props.entry)

  return (
    <EntryContainer>
      <EntryImage>
        <img src={props.entry.image?.url} alt="" />
      </EntryImage>
      <EntryTitle>{props.entry.title}</EntryTitle>
      <EntryCategory>{props.entry.category}</EntryCategory>
      <EntryBody dangerouslySetInnerHTML={{ __html: props.entry.body }} />
      {props.entry.link && <EntryLink><a href={props.entry.link.link}>{props.entry.link.text}</a></EntryLink>}
    </EntryContainer>
  );
}
