import React, {useEffect, useState} from 'react';
import {Item, List, Segment} from "semantic-ui-react";
import Loaders from "./Loaders";
import Errors from "./Errors";
import apiService from "../api/Service";

const Slider = () => {
    const api = new apiService();
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);

    function myFetch() {
        const random = Math.floor(Math.random()*15) + 1;
        api.getPeople(random)
            .then(({name, height, mass, hair_color, gender, eye_color}) => {
            const items = { name, height, id: random, mass, hair_color, gender, eye_color } ;
            setData(items)
            })
            .catch( () => setError(true) )
    }
    useEffect(() => {
        setInterval(() => {
            myFetch()
        }, 15000)
    }, []);


    const {name, height, mass, hair_color, gender, eye_color, id} = data;
    const item = (
        <Item.Group style={{padding: '40px 0'}}>
            <Item >
                <Item.Image size='small' src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />
                <Item.Content className={'c-white'} >
                    <Item.Header  as='a'>{name}</Item.Header>
                    <hr/>
                    <Item.Extra >Additional Details</Item.Extra>
                    <List bulleted>
                        <List.Item>Height - {height}</List.Item>
                        <List.Item>Mass - {mass}</List.Item>
                        <List.Item>Eye color - {eye_color}</List.Item>
                        <List.Item>Gender - {gender}</List.Item>
                        <List.Item>Hair color - {hair_color}</List.Item>
                    </List>
                </Item.Content>
            </Item>
        </Item.Group>
    );

    const loader = !id && !error ? <Loaders/> : null;
    const content = id && !error ? item : null;
    const errors = error ? <Errors/> : null;

    return (
                    <Segment style={{margin: '40px 0'}} inverted >
                        {loader}
                        {content}
                        {errors}
                    </Segment>
    );
};

export default Slider;