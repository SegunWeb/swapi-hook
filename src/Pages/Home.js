import React from 'react';
import Slider from "../UI/Slider";
import Items from "../UI/Items";
import {Header} from "semantic-ui-react";


const Home = () => {
    return (
        <>
          <Slider/>
          <Header as='h2' className={"t-center"}>Planets <hr/></Header>
          <Items/>
        </>
    );
};

export default Home;