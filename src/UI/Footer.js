import React from 'react';
import {Segment} from "semantic-ui-react";


const Footer = () => {

    return (
        <footer>
            <Segment className={'br-none'} style={{height:'100px', marginTop: '40px' }} inverted>
                <h2 className={'t-center'}>
                    SW_API
                </h2>
            </Segment>
        </footer>

    );
};

export default Footer;