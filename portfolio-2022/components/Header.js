import styled from "styled-components";

const HeaderTitle = styled.h1`
  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;500;600;700&display=swap');
  font-family: 'Josefin Sans', sans-serif;
  background-color: #298EEA;
  font-weight: 700;
  color: #fff;
  font-size: 60px;
  margin: 0;
  margin: 32px 0 64px 0;
  padding: 16px 40px 0px 40px;
  border-radius: 0 50px 50px 0;
  width: 500px;
`;

const HeaderContainer = styled.header`
`;

export default function Entry(props) {
  return (
      <HeaderTitle>PORTFOLIO</HeaderTitle>
  );
}
