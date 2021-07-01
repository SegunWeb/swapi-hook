import React, {useState} from 'react';
import {Input, Menu} from "semantic-ui-react";
import {NavLink} from "react-router-dom";


const Header = () => {
    const menu = [
        {name: 'home', to: '/'},
        {name: 'planets', to: '/planets'},
        {name: 'people', to: '/people'}
    ];

    return (
        <header>
            <Menu pointing inverted className={'br-none'}>

                { menu.map((item, index) => {
                    return (
                        <Menu.Item
                            as={ NavLink }
                            name={item.name}
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