import React, {useEffect, useState} from 'react';
import {Button, Card, Image} from "semantic-ui-react";
import Loaders from "./Loaders";
import {Link} from "react-router-dom";

const Items = () => {

    const [arr, setArr] = useState([]);

    useEffect(() => {

        try {
            async function myFetch() {
                let data = await fetch(`https://swapi.dev/api/planets/`);
                data = await data.json();

                const items = data.results.slice(0,3);

                setArr(items)

            }
            myFetch()
        }
        catch (e) {
            console.log(e)
        }
    }, []);


    const itemBox = (
        arr.map((item, index) => {
            return (
                <Card>
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
                            <Button as={Link} to={`/planets/${index}`} basic color='blue'>
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