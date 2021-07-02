import React, {useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom'
import apiService from "../api/Service";
import {Button, Grid, Icon, Image, Message} from "semantic-ui-react";

const InItem = () => {

   const api = new apiService();
   const location = useLocation();
   const regExp = /[0-9]$/;
   const id = location.pathname.match(regExp);

   const [planet, setPlanet] = useState([]);

   useEffect(() => {
       api.getPlanet(id).then(data => setPlanet(data))
   }, []);

   const {name, diameter, climate, population} = planet;

  return (
      <>
      <Grid celled>
          <Grid.Row>
              <Grid.Column width={6}>
                  <Image src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
              </Grid.Column>
              <Grid.Column width={10}>
                  <Message>
                      <Message.Header>{name}</Message.Header>
                      <Message.List>
                          <Message.Item>{diameter}</Message.Item>
                          <Message.Item>{climate}</Message.Item>
                          <Message.Item>{population}</Message.Item>
                      </Message.List>
                  </Message>
              </Grid.Column>
          </Grid.Row>
      </Grid>

          <Button as={Link} to={`/planets/${id - 1}`} animated>
              <Button.Content visible>Prev</Button.Content>
              <Button.Content hidden>
                  <Icon name='arrow left' />
              </Button.Content>
          </Button>
          <Button as={Link} to={`/planets/${id + 1}`} animated>
              <Button.Content visible>Next</Button.Content>
              <Button.Content hidden>
                  <Icon name='arrow right' />
              </Button.Content>
          </Button>
          <Button as={Link} to={'/planets'} animated='fade'>
              <Button.Content  visible>all planets</Button.Content>
              <Button.Content  hidden>back</Button.Content>
          </Button>
      </>
  )
};

export default InItem;