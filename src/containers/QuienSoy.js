import react, {Component} from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Button_question from "../components/Button_question/Button_question"
import Button from "../components/Button/index"

import {getQuestion} from '../services'
import CircularProgress from '@material-ui/core/CircularProgress';


import loading from "../images/Loading.gif"
import React from "react";


const FormWrapper = styled.div`
  margin-bottom: 100px;
  width: 40%;
  margin: auto;
  margin-bottom: 150;
  zoom: 1;
`;
const CenterCard = styled(Card)`
display: flex;
flex-direction: column;
align-items: center;
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
  font-family: rubik;
`;
const ButtonWrapper = styled.div`
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
`;
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;
const Imagen = styled.img`
width: 240px;
height: 320px;

`
;
const ButtonsWrapper = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 1rem;
    margin-left: 100px;
    margin-right: 100px;
    
`;

let lista_respuestas = [];

class QuienSoy extends Component {
    constructor(props){
        super(props);
        this.state = {
            correcta:'',
            error1: '',
            error2: '',
            error3: '',
            imagen: '',
            formName: '',
            nroQuestion: 0,
            puntaje: 0,
            finalizado: false
        };
    }

    cambioQuestion = (numero) => {
       if (this.state.nroQuestion == (Object.keys(JSON.parse(localStorage.getItem('question')).preguntas).length-1) ){
            let puntos = 0;
            lista_respuestas.forEach(
                (element) => {
                    if (element == 1) {
                        puntos = puntos + 1;
                }
            })
            this.setState({
                puntaje: puntos,
                finalizado: true
             },() => { localStorage.setItem('puntaje_quiensoy',this.state.puntaje) })
                  
        }else{
            this.setState({
                correcta: JSON.parse(localStorage.getItem('question')).preguntas[numero].Animal,
                error1: JSON.parse(localStorage.getItem('question')).preguntas[numero].Error1,
                error2: JSON.parse(localStorage.getItem('question')).preguntas[numero].Error2,
                error3: JSON.parse(localStorage.getItem('question')).preguntas[numero].Error3,
                imagen: JSON.parse(localStorage.getItem('question')).preguntas[numero].Imagen,
                nroQuestion: numero,
                })         
        }};

    componentWillMount() {    
        getQuestion()
            .then(result => {
                let aux = JSON.stringify(result.data);
                localStorage.setItem('question',aux)
                this.cambioQuestion(this.state.nroQuestion)
            })
            .catch(err => {
                console.log(err);
            }); 
    } 

    // handle form submit
    handleSubmit = (event) => {
        event.preventDefault();
    };
    // handle text input
    handleInput = (event) => {
        this.setState({
            formName: event.target.value
        })
    };

    onClick = (event) => {       
        if (event.target.textContent.includes(this.state.correcta) ) {
            lista_respuestas.push(1)
            this.cambioQuestion(this.state.nroQuestion + 1)
        }
        else {
            lista_respuestas.push(0)
            this.cambioQuestion(this.state.nroQuestion + 1)
        }   
    }

     refreshPage = ()=>{
        window.location.reload();
     }
    
    render () {
        var a =JSON.parse(localStorage.getItem('question')).titulo;
        console.log(this.state);
        return(
            <React.Fragment>        
            {
                this.state.correcta != '' &&
                <FormWrapper>
                {
                    !this.state.finalizado &&
                <CenterCard>
                    <TitleText>{a}</TitleText>
                        <Button_question
                            pregunta1={this.state.correcta}
                            pregunta2={this.state.error1} 
                            pregunta3={this.state.error2} 
                            pregunta4={this.state.error3} 
                            imagen={this.state.imagen} 
                            onClick={this.onClick}                    
                        />              
                </CenterCard>
                }

                {
                    this.state.finalizado &&
                    <CenterCard>
                        <TitleText>Tu puntaje es</TitleText>
                        <TitleText>{this.state.puntaje}</TitleText>  
                        <TitleText>??Quiere volver a intentarlo?</TitleText>   
                        <Button shadow={true} onClick={this.refreshPage}> Reintentar</Button>   
                    </CenterCard>
                }
            </FormWrapper>
        }
        {
          this.state.correcta == '' &&
            <FormWrapper>
                <CircularProgress/> 
            </FormWrapper>
        }
        </React.Fragment>
        );
    }
}

export default QuienSoy;