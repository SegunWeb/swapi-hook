import React, {useEffect, useState} from 'react';
import {Card, Grid, Image} from "semantic-ui-react";

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
            }, 10000)


        }
        catch (e) {
            console.log(e)
        }


    }, []);

    console.log(data)

    return (
        <Grid style={{margin:'40px 0'}} divided='vertically'>
            <Grid.Row columns={2}>
                <Grid.Column>
                    <Image  style={{margin:'0 auto'}} src={`https://starwars-visualguide.com/assets/img/characters/${data.id}.jpg`} />
                </Grid.Column>
                <Grid.Column>
                    <Card>
                        <Card.Content>
                            <Card.Header>{data.name}</Card.Header>
                            <Card.Meta>Friends of Elliot</Card.Meta>
                            <Card.Description>
                                Steve wants to add you to the group <strong>best friends</strong>
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

export default Slider;