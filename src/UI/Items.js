import React, {useEffect, useState} from 'react';
import {Button, Card, Image} from "semantic-ui-react";
import Loaders from "./Loaders";
import {Link} from "react-router-dom";
import apiService from "../api/Service";

const Items = () => {
    const api = new apiService();
    const [arr, setArr] = useState([]);

    useEffect(() => {
        api.getAllPlanets().then(data => {
            const items = data.slice(0,3);
            setArr(items)
        })
    }, []);


    const itemBox = (
        arr.map((item, index) => {
            return (
                <Card key={index}>
                    <Card.Content>
                        <Image
                            floated='right'
                            size='small'
                            src={`https://starwars-visualguide.com/assets/img/planets/${index + 2}.jpg`}
                        />
                        <Card.Header>{item.name} <hr/></Card.Header>
                        <Card.Content><strong>Population</strong><br/>- {item.population}</Card.Content>
                        <Card.Content><strong>Diameter</strong><br/>- {item.diameter}</Card.Content>
                        <Card.Content><strong>Climate</strong><br/>- {item.climate}</Card.Content>


                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button as={Link} to={'/planets'} basic color='green'>
                                <strong>all planets</strong>
                            </Button>
                            <Button as={Link} to={`/planets/${index + 1}`} basic color='blue'>
                                <strong>about planet</strong>
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
            )
        })
    );


    return (
        <Card.Group style={{justifyContent: 'center', margin: '20px auto'}}>
            {
                arr.length === 0 ? <Loaders/> : <>{itemBox}</>
            }
        </Card.Group>
    );
};

export default Items;