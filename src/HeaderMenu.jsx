import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Menu} from 'antd';
import {ROUTES} from 'constants/Routes.js';


function HeaderMenu() {
    const [menuState,
        setMenuState] = useState('home');

    const handleClick = e => {
        setMenuState(e.key);
    };
    return (
        <Menu onClick={handleClick} selectedKeys={[menuState]} mode="horizontal">
            <Menu.Item key="home">
              <Link to={ROUTES.HOME}>Home</Link>
            </Menu.Item>
            <Menu.Item key="projects">
              <Link to={ROUTES.PROJECTS}>Projects</Link>
            </Menu.Item>
            <Menu.Item key="contact">
              <Link to={ROUTES.CONTACT}>Contact</Link>
            </Menu.Item>
        </Menu>
    )
}

export default HeaderMenu;