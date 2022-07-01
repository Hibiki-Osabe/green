import styled from "styled-components";

const FooterContainer = styled.footer`
  padding: 16px;
  background: #298EEA;
  margin-top: 64px;
`;

const Copyright = styled.p`
  color: #fff;
  font-size: 20px;
  text-align: center;
  font-family: 'Josefin Sans', sans-serif;
`;

export default function Entry(props) {
  return (
    <FooterContainer>
      <Copyright>
        <small>&copy; hibiki_osabe</small>
      </Copyright>
    </FooterContainer>
  );
}
