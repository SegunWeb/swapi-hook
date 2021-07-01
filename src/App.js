import Layout from "./UI/Layout";
import React, {useEffect, useState} from "react";
import Header from "./UI/Header";
import Footer from "./UI/Footer";
import Home from "./Pages/Home";
import {Redirect, Route, Switch} from "react-router-dom";
import Planets from "./Pages/Planets";
import People from "./Pages/People";
import NoPage from "./Pages/NoPage";
import InItem from "./Pages/InItem";

function App() {


  const route = (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/planets" component={Planets} />
            <Route exact path="/planets/:id" component={InItem} />
            <Route exact path="/people" component={People} />
            <Route exact path="/404" component={NoPage} />

            <Redirect to={'/404'}/>
        </Switch>
  );

  return (
    <div className={'df-column'}>

      <Header/>
        <Layout>
            {route}
        </Layout>
      <Footer/>

    </div>
  );
}

export default App;
