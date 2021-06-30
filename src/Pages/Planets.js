import React, {useEffect, useState} from 'react';
import {Header, Item, List, Segment} from "semantic-ui-react";
import Loaders from "../UI/Loaders";
import {Link} from "react-router-dom";

const Planets = () => {

    const [planets, setPlanets] = useState([]);

    useEffect(() => {
        try {
           async function myFetch() {
                let data = await fetch('https://swapi.dev/api/planets/')
                data = await data.json();

                setPlanets(data.results)
           }

            myFetch()
        }
        catch (e) {
            console.log(e)
        }
    }, []);


    return (
        <>

            <Header as='h2' style={{padding: '40px 0 0 10px'}} className={"t-center"}>Planets <hr/></Header>
            { planets.length === 0 ? <Loaders/> :
                <>
                {
                   planets.map((item, i) => {

                       const {name, diameter, climate, population} = item;

                       return (
                           <Segment style={{margin: '10px 0'}} inverted >
                           <Item.Group style={{padding: '40px 0'}}>
                               <Item >
                                   <Item.Image size='small' src={`https://starwars-visualguide.com/assets/img/planets/${i}.jpg`} />
                                   <Item.Content className={'c-white'} >
                                       <Item.Header  as={Link} to={`/planets/${i}`}>{name}</Item.Header>
                                       <hr/>
                                       <Item.Extra >Additional Details</Item.Extra>
                                       <List bulleted>
                                           <List.Item>Diameter - {diameter}</List.Item>
                                           <List.Item>Climate - {climate}</List.Item>
                                           <List.Item>Population - {population}</List.Item>
                                       </List>
                                   </Item.Content>
                               </Item>
                           </Item.Group>
                           </Segment>
                       )
                    })
                }
                </>
            }
        </>
    );
};

export default Planets;