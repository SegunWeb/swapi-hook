import React, {useState} from 'react';
import {Input, Menu} from "semantic-ui-react";
import {Link} from "react-router-dom";


const Header = () => {
    const menu = [
        {name: 'home', to: '/'},
        {name: 'planets', to: '/planets'},
        {name: 'people', to: '/people'}
    ];

    const [activeItem, setActiveItem] = useState('home');

    const handleItemClick = (e, {name}) => {
        setActiveItem(name)
    };



    return (
        <header>
            <Menu pointing inverted className={'br-none'}>

                { menu.map((item, index) => {
                    return (
                        <Menu.Item
                            as={ Link }
                            name={item.name}
                            active={activeItem === item.name}
                            onClick={handleItemClick}
                            key={index}
                            to={item.to}
                        />
                    )
                })
                }

                <h2 className={'t-center'}>
                    SW_API
                </h2>

                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input icon='search' placeholder='Search...' />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        </header>
    );
};

export default Header;