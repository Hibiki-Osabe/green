import styled from "styled-components";

const HeaderTitle = styled.h1`
font-family: 'Josefin Sans', sans-serif;
font-weight: 700;
  color: #fff;
  font-size: 60px;
  margin: 0;
`;

const HeaderContainer = styled.header`
 @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;500;600;700&display=swap');
  background-color: #298EEA;
  margin: 32px 0 64px 0;
  padding: 16px 40px 0px 40px;
  border-radius: 0 50px 50px 0;
  width: 500px;
`;

export default function Entry(props) {
  return (
    <HeaderContainer>
      <HeaderTitle>PORTFOLIO</HeaderTitle>
    </HeaderContainer>
  );
}
