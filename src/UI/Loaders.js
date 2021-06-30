import React from 'react';
import {Dimmer, Loader, Segment} from "semantic-ui-react";

const Loaders = () => {
    return (
        <Segment style={{width: '100%', padding: '40px 0'}}>
            <Dimmer active>
                <Loader>Loading</Loader>
            </Dimmer>


        </Segment>
    );
};

export default Loaders;