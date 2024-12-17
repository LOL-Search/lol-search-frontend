import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import styled from 'styled-components';
import Menu from './Menu';
import { MenuButtonProps } from '../../types/menu.type';

const MenuOpenButton: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <MenuButton onClick={toggleMenu} isOpen={menuOpen}>
        {menuOpen ? <AiOutlineClose size={30} /> : <GiHamburgerMenu size={30} />}
      </MenuButton>
      <Menu isOpen={menuOpen} />
    </div>
  );
};

const MenuButton = styled.div<MenuButtonProps>`
  cursor: pointer;
  transition: transform 0.3s ease;

  svg {
    transition: transform 0.3s ease;
  }
`;

export default MenuOpenButton;