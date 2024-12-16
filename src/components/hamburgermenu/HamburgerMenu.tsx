import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import styled from 'styled-components';
import Menu from '../menu/Menu';

const HamburgerMenu: React.FC = () => {
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

interface MenuButtonProps {
  isOpen: boolean;
}

const MenuButton = styled.div<MenuButtonProps>`
  cursor: pointer;
  transition: transform 0.3s ease;

  svg {
    transition: transform 0.3s ease;
    transform: ${(props) => (props.isOpen ? 'rotate(45deg)' : 'rotate(0deg)')};
  }
`;

export default HamburgerMenu;