import styled from 'styled-components';
import HamburgerMenu from '../hamburgermenu/HamburgerMenu';

const Header: React.FC = () => {
  return (
    <HeaderStyle>
      <h1>LOL Search</h1>
      <HamburgerMenu />
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  @font-face {
      font-family: 'KimjungchulMyungjo-Bold';
      src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2302_01@1.0/KimjungchulMyungjo-Bold.woff2') format('woff2');
      font-weight: 700;
      font-style: normal;
    }

  font-family: 'KimjungchulMyungjo-Bold';
  background: linear-gradient(#0A323C, #005A82);
  color: #C89B3C;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem;
  font-size: 0.8rem;
  position: relative;
  z-index: 10;
`;

export default Header;