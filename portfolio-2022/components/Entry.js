import styled from "styled-components";
import Link from "next/link";

const EntryContainer = styled.section`
  /* margin: 0 20px; */
  margin-bottom: 32px;
  /* padding: 32px; */
  background-color: #444444;
  /* border: 2px solid #28CC75; */
  border-radius: 20px;
  width: 400px;
  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600;700&display=swap');
`;

const EntryDiv = styled.div`
  /* margin: 32px; */
  margin-right: 24px;
`;

const EntryTitle = styled.h2`
  width: 360px;
  margin: 0;
  color: #28CC75;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 24px;
  font-weight: 600;
  /* background-color: #444444; */
  padding-left: 20px;
  /* padding-top: 5px; */
`;

const EntryCategory = styled.h3`
  width: 300px;
  margin: 0;
  color: #298EEA;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 16px;
  /* font-weight: 300; */
  padding-left: 20px;
  padding-bottom: 30px;
`;


const EntryImage = styled.figure`
  width: 400px;
  margin: 0;
  img {
    /* clip-path: inset(20px); */
    /* mask-image: url("../image/");
    mask-repeat: no-repeat;
    mask-position: 50% 50%;
    mask-size: 50%; */
    width: 400px;
    border-radius: 20px;
    transition: all ease 0.5s;
    transform: scale(0.93);
  }
  img:hover {
    border-radius: 20px 20px 0 0;
    filter: brightness(40%);
    transform: scale(1);
  }
`;

const EntryBody = styled.div`
  p {
    /* border: 1px solid red; */
    margin: 0;
    font-family: 'Noto Sans JP', sans-serif;
    width: 400px;
  }
`;

export default function Entry(props) {
  return (
    <EntryContainer>
      <EntryImage>
        <Link href={`/entry/${props.entry.id}`}>
          <img src={props.entry.image?.url} alt="" />
        </Link>
      </EntryImage>
      <EntryTitle>{props.entry.title}</EntryTitle>
      <EntryCategory>{props.entry.category}</EntryCategory>
      {/* <EntryBody dangerouslySetInnerHTML={{ __html: props.entry.body }} /> */}
    </EntryContainer>
  );
}
