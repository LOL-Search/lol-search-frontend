import styled from 'styled-components';
import { MenuProps } from '../../types/menu.type';

const Menu: React.FC<MenuProps> = ({ isOpen }) => {
  return (
    <MenuStyle isOpen={isOpen}>
      <Profile>
        <img src="https://via.placeholder.com/50" alt="프로필 사진" />
        <div>
          <p><strong>닉네임 #KR1</strong></p>
          <p>온라인 정보</p>
        </div>
      </Profile>
      <MenuButton>내 정보</MenuButton>
      <MenuButton>게시판</MenuButton>
      <MenuButton>채팅</MenuButton>
    </MenuStyle>
  );
};

const MenuStyle = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: ${(props) => (props.isOpen ? '100px' : '-100%')};
  left: 0;
  width: 100%;
  height: calc(100vh - 100px - 80px);
  background-color: #f8f8f8;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 5;
  overflow-y: auto;
  transition: top 0.5s ease-out;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #ddd;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 1rem;
  }

  p {
    margin: 0;
    color: #333;
    font-size: 0.9rem;
  }
`;

const MenuButton = styled.button`
  display: block;
  width: 90%;
  margin: 0.5rem auto;
  padding: 1rem;
  font-size: 1.2rem;
  color: #333;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
    color: #005A82;
  }
`;

export default Menu;