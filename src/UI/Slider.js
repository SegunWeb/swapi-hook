import React, {useEffect, useState} from 'react';
import {Item, List, Segment} from "semantic-ui-react";
import Loaders from "./Loaders";


const Slider = () => {

    const [data, setData] = useState([]);




    useEffect(() => {

        try {
            async function myFetch () {

                const random = Math.floor(Math.random() * (15 - 1 + 1) + 1);

                let response = await fetch(`https://swapi.dev/api/people/${random}`);
                response = await response.json();

                const items = {
                    name: response.name,
                    height: response.height,
                    id: random,
                    mass: response.mass,
                    hair_color: response.hair_color,
                    gender: response.gender,
                    eye_color: response.eye_color,
                };
                setData(items)


            }

            setInterval(() => {
                myFetch()
            }, 15000)


        }
        catch (e) {
            console.log(e)
        }
    }, []);

    const {name, height, mass, hair_color, gender, eye_color, id} = data;

    return (
                    <Segment style={{margin: '40px 0'}} inverted >
                        { !id ? <Loaders/> :
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
                        }
                    </Segment>
    );
};

export default Slider;