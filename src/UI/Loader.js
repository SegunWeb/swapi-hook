import React from 'react';
import {Dimmer, Image, Segment} from "semantic-ui-react";

const Loader = () => {
    return (
        <Segment>
            <Dimmer active>
                <Loader>Loading</Loader>
            </Dimmer>

            <Image src='/images/wireframe/short-paragraph.png' />
        </Segment>
    );
};

export default Loader;