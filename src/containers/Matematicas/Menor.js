import React, { Component } from "react";
import Card from "../../components/Card";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import styled from "styled-components";
  import Button from '../../components/Button/index';
  import TextField from '@material-ui/core/TextField';


  const FormularioWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-content: space-between;
`;

const CenterCard = styled(Card)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  margin: auto;
  min-height: 100px;
  background: rgba(55, 156, 200);
  border-style: groove;


`;


const CenterCardResult = styled(Card)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    margin: auto;
    min-height: 100px;
    background: rgba(55, 156, 200);
    border-style: groove;


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

const AnswerText = styled.h3`
left: 0;
right: 0;
justify-contint: center;
text-align: center;
color: ${props =>  props.color  || 'rgb(255, 255, 255)'};
padding: 0;
margin: auto;
`;


const FormWrapper = styled.div`
margin-bottom: 100px;
width: 40%;
margin: auto;
margin-bottom: 150;
zoom: 1;
padding: 10px;
`;


class Menor extends Component {
    constructor(props){
        super(props);
        this.state = {
            valor1: Math.floor(Math.random() * 100) + 1,
            valor2: Math.floor(Math.random() * 100) + 1,
            respuesta: '',
            puntaje: 0,
            correcta: false,
            cantidad: this.props.cantidad,
            value: '',
            color: '#ffffff',
            vidas:3
        };


    }

    setAnswer = (estado, color, correcta) => {
        
        this.setState({
            color: color,
            respuesta: estado,
            correcta: correcta
        })
    }

    

    // handle text input
    handleInput = (event) => {
        if (event.target.value == '<' ){
            this.setState({value:event.target.value})
            let variable = parseInt(this.state.valor2) < parseInt(this.state.valor1) ? true : false;
            if (variable){
                this.setAnswer('Correcta','#00ff00',true)
                setTimeout(() => {
                    this.setState({
                        color: '#ffffff',
                        respuesta: '',
                        correcta: false,
                        valor1: Math.floor(Math.random() * 100) + 1,
                        valor2: Math.floor(Math.random() * 100) + 1,
                        value:'',
                        cantidad: this.state.cantidad-1,
                        puntaje: this.state.puntaje + 1
    
                    })
                }, 5000);
                
            }
            else{
                
                this.setAnswer('Incorrecta','#ff0000',true)
                setTimeout(() => {
                    this.setState({
                        color: '#ffffff',
                        respuesta: '',
                        correcta: false,
                        valor1: Math.floor(Math.random() * 100) + 1,
                        valor2: Math.floor(Math.random() * 100) + 1,
                        value:'',
                        cantidad: this.state.cantidad-1,
                        vidas: this.state.vidas-1
    
                    })
                }, 5000);
            }
        }
        else if (event.target.value == '>' ){
            this.setState({value:event.target.value})
            let variable = parseInt(this.state.valor2) > parseInt(this.state.valor1) ? true : false;
            if (variable){
                this.setAnswer('Correcta','#00ff00',true)
                setTimeout(() => {
                    this.setState({
                        color: '#ffffff',
                        respuesta: '',
                        correcta: false,
                        valor1: Math.floor(Math.random() * 100) + 1,
                        valor2: Math.floor(Math.random() * 100) + 1,
                        value:'',
                        cantidad: this.state.cantidad-1,
                        puntaje: this.state.puntaje + 1
    
                    })
                }, 5000);
            }
            else{
                this.setAnswer('Incorrecta','#ff0000',true)
                setTimeout(() => {
                    this.setState({
                        color: '#ffffff',
                        respuesta: '',
                        correcta: false,
                        valor1: Math.floor(Math.random() * 100) + 1,
                        valor2: Math.floor(Math.random() * 100) + 1,
                        value:'',
                        cantidad: this.state.cantidad-1,
                        vidas: this.state.vidas-1,
    
                    })
                }, 5000);
            }
        }
        else if (event.target.value == ''){
            this.setState({value:event.target.value})
            this.setAnswer('','#FFFFFF',false)
        }
        
        else{
            this.setState({value:event.target.value})
            this.setAnswer('Caracter extraño','#FF0000',false)
        }
 
    }


    render () {

        return (
            <React.Fragment>
                
                    <TitleText>¿¿ Cual es Menor ??</TitleText>
                    {
                         this.state.cantidad > 0 &&
                        <FormWrapper>
                    <CenterCard>
                        <TitleText>{this.state.valor1}</TitleText> 
                        <FormularioWrapper>
                                <TextField  id="outlined-basic" label="Outlined" variant="outlined" value={this.state.value} onChange={this.handleInput} disabled={this.state.correcta} />
                                <AnswerText color={this.state.color}>{this.state.respuesta}</AnswerText>
                        </FormularioWrapper>
                        <TitleText>{this.state.valor2}</TitleText>
                    </CenterCard>
                </FormWrapper>
                
                }

                 {
                    this.state.vidas == 0 &&
                    <FormWrapper>
                    <CenterCardResult>
                        <TitleText>Te quedaste sin vidas :(</TitleText>
                        
                        <Button onClick={this.props.onBack(0)}></Button>
                        
                    </CenterCardResult>
                    </FormWrapper>

                }

                {
                    this.state.cantidad == 0 &&
                    <FormWrapper>
                    <CenterCardResult>
                        <TitleText>Tu puntaje es</TitleText>
                        <TitleText>{this.state.puntaje}</TitleText>   
                        <Button onClick={this.props.onBack(this.state.puntaje)}></Button> 
                    </CenterCardResult>
                    </FormWrapper>
                }
            </React.Fragment>
        );
    }
}

export default Menor;