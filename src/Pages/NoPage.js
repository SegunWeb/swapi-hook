import React from 'react';
import {Image, Segment} from "semantic-ui-react";

const NoPage = () => {
    return (
        <Segment className={'br-none'} style={{margin:'40px'}} inverted >

            <h1 className={'t-center'}> Ops 404...</h1>
            <div>
                <Image style={{margin:'0 auto', width:'100%', maxWidth: '500px'}}    src='https://i0.wp.com/i.ytimg.com/vi/1Ne1hqOXKKI/hqdefault.jpg?ssl=1' rounded />
            </div>


        </Segment>


    );
};

export default NoPage;