import React, { Component } from "react";
import Card from "../../components/Card";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import styled from "styled-components";
  import Mayor from "./Mayor";
  import Menor from "./Menor";
  import Button from '../../components/Button/index';

  const MAYOR= 'MAYOR';
  const MENOR= 'MENOR';
  const HOME= 'HOME';

  const VIEW_TIME = 500;

  const StyledLink = styled(Link)`
  font-size: 32px;
`;
const TitleText = styled.h2`
  left: 0;
  right: 0;
  justify-contint: center;
  text-align: center;
  color: rgb(0,0,0) !important;
  padding: 0;
  margin: auto;
`;

const CenterCard = styled(Card)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    margin: auto;
    min-height: 100px;
    background: rgba(55, 156, 200);
    border-style: groove;


`;


class Matematicas extends Component {
    constructor(props){
        super(props);
        this.state = {
            puntajeMayor: 0,
            puntajeMenor: 0,
            showMayor: false,
            showMenor: false
        };
        

    }

    componentDidMount () {
        this.setState({
            puntajeTotal: localStorage.getItem('puntaje')
        })
    }

    changeMayor = () =>{
        this.setState({showMayor:true})
    }

    changeMenor = () =>{
        this.setState({showMenor:true})
    }

    updatepuntajeMayor = (puntaje) => {

        let puntajetemp = localStorage.getItem('puntaje_mateMayor');
        
        if(puntajetemp){

            localStorage.setItem('puntaje_mateMayor',this.state.puntajeMayor + puntajetemp)
        
        }
    }

    updatepuntajeMenor = (puntaje) => {

        let puntajetemp = localStorage.getItem('puntaje_mateMenor');
        
        if(puntajetemp){

            localStorage.setItem('puntaje_mateMenor',this.state.puntajeTotal + puntajetemp)
        
        }
    }


    render () {

                return(

                    <React.Fragment>
                        {
                        !this.state.showMayor && !this.state.showMenor 
                            &&
                        <CenterCard>
                            <TitleText> Tu puntaje hasta ahora En esta categoria es: {this.state.puntajeMayor + this.state.puntajeMenor}</TitleText>

                            <div>
                            <Button  shadow={true} onClick={this.changeMayor } > MAYOR </Button> 
                            <Button  shadow={true} onClick={this.changeMenor } > MENOR </Button> 
                            </div>                 
                        </CenterCard>
                        }

        
           
                    {
                    this.state.showMayor
                        &&
                    <Mayor cantidad={10} onBack={(puntaje) => {
                        this.setState({puntajeMayor: Number(puntaje)+ Number(this.state.puntajeMayor),
                            showMayor: false},
                            () => {
                                
                                this.updatepuntajeMayor(Number(puntaje))
                            })
                  }}/>
                  }                 

                    {
                    this.state.showMenor
                        &&
                    <Menor cantidad={10} onBack={(puntaje) => {
                        this.setState({puntajeMenor: Number(puntaje)+ Number(this.state.puntajeMenor),
                            showMenor: false}, () => {
                                this.updatepuntajeMenor(Number(puntaje))
                            })
                  }}/> 
                  }               
                 </React.Fragment>
            )}

        
    
}

export default Matematicas;