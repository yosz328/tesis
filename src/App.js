import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import styled from "styled-components";
import Card from "./components/Card"
import Home from "./containers/Home"
import QuienSoy from "./containers/QuienSoy"
import Tarjetas from "./containers/Tarjetas/Tarjetas";
import Matematicas from "./containers/Matematicas/Matematicas";
import TextField from '@material-ui/core/TextField';
import  Button  from "./components/Button/index";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

const StyledLink = styled(Link)`
  font-size: 32px;
  font-family: arvo;
`;

const FormWrapper = styled.div`
  margin-bottom: 100px;
  width: 40%;
  margin: auto;
  margin-bottom: 150;
  zoom: 1;
`;

const TitleText = styled.h2`
  left: 0;
  right: 0;
  justify-contint: center;
  text-align: center;
  color: rgb(0,0,0) !important;
  padding: 0;
`;
const SubTitleText = styled.h3`
  left: 0;
  right: 0;
  justify-contint: center;
  text-align: center;
  color: rgb(0,0,0) !important;
  padding: 0;
`;

const TopDiv = styled.div`
  background-color: yellow;
`;





export default function BasicExample() {
  return (
    <Router>
      <body >
        <TopDiv>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/QuienSoy">Quien Soy</StyledLink>
          </li>
        
        
          <li>
            <StyledLink to="/Tarjetas">Tarjetas</StyledLink>
          </li>
        
        
          <li>
            <StyledLink to="/Matematicas">Matematicas</StyledLink>
          </li>
          
        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        </TopDiv>
        <Switch>
          <Route exact path="/">
            <Home_router />
          </Route>
          <Route path="/QuienSoy">
            <QuienSoy_router />
          </Route>
          <Route path="/tarjetas">
            <Tarjetas_router/>
          </Route>
          <Route path="/matematicas">
            <Matematicas_router/>
          </Route>
        </Switch>
        <footer class="footer"></footer>
      </body>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home_router() {
  return (
    <div>
      <Home/>
    </div>
  );
}

function QuienSoy_router() {
  return (
    <div>
      <QuienSoy/>
    </div>
  );
}

function Tarjetas_router() {
  return (
    <div>
      <Tarjetas/>
    </div>
  );
}

function Matematicas_router() {
  return (
    <div>
      <Matematicas/>
    </div>
  );
}
