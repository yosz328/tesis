import react, {Component} from "react";
import styled from "styled-components";
import Card from "../components/Card";
//import Button from "../components/Button"
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {getPreguntas} from '../services'

import question from '../data/Preguntas.json'
import React from "react";


const FormWrapper = styled.div`
  margin-bottom: 100px;
  width: 40%;
  margin: auto;
  margin-bottom: 150;
  zoom: 1;
`;
const CenterCard = styled(Card)`
    background: rgba(55, 156, 200);
    border-style: groove;

`;
const TableCard = styled(Card)`
    background: rgba(55, 156, 200);
    border-style: groove;
    justify-content: center;


`;

const TitleText = styled.h2`
  left: 0;
  right: 0;
  justify-content: center;
  text-align: center;
  color: rgb(0,0,0) !important;
  padding: 0;
`;

const RowHead = styled.td`
    font-weight: 700;
`;
const Row = styled.td`
    
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

const FormularioWrapper = styled.form`
    display: flex;
    flex-direction: column;
`;

const TablaOrder = styled.table`
align-items: center;
justify-content: center;
margin-left: 180px;
`;


class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            message: '',
            textFieldInput: '',
            nombre: '',
            correcto: false
        };
        this.doSomethingWithInput = this.doSomethingWithInput.bind(this);
    this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
    }
    componentDidMount() {
        
        /*getPreguntas()
            .then(result => {             
                localStorage.setItem('preguntas',JSON.stringify(result.data.response))    
            })
            .catch(err => {
                console.log(err);
            }); 
            */
    }
    
    handleTextFieldChange(event) {
        event.preventDefault();
        this.setState({
          textFieldInput: event.target.value,
        });
        console.log(this.state.textFieldInput);
      }
    // handle text input
    doSomethingWithInput(event) {
        event.preventDefault();
        const {
            textFieldInput,          
          } = this.state;
        // Use textFieldInput

        if (this.state.textFieldInput != ''){
            this.setState({correcto: true,nombre: this.state.textFieldInput})
        }else{
            
        }
        
      }

    render () {
        
        let puntaje_quiensoy = localStorage.getItem('puntaje_quiensoy') ?  Number(localStorage.getItem('puntaje_quiensoy')) : 0;
        let puntaje_Mayor = localStorage.getItem('puntaje_mateMayor') ?  Number(localStorage.getItem('puntaje_mateMayor')) : 0;
        let puntaje_Menor = localStorage.getItem('puntaje_mateMenor') ?  Number(localStorage.getItem('puntaje_mateMenor')) : 0;

        return(
            <FormWrapper>

                <CenterCard>
                    {

                    this.state.nombre == '' &&
                    <TitleText>Hola Bienvenido Ingresa tu nombre !!</TitleText>
                    }{
                        this.state.nombre != '' &&
                    <React.Fragment>
                        <TitleText>Bienvenido {this.state.nombre}!!!</TitleText>
                        <TitleText>Tu puntaje acumulado es de {puntaje_quiensoy + puntaje_Mayor + puntaje_Menor} puntos </TitleText>
                    </React.Fragment>
                    }
                    <ButtonWrapper>
                        {
                            !this.state.correcto &&
                            
                            <React.Fragment>
                                <TextField  id="outlined-basic" label="Ingresa tu nombre" variant="outlined" onChange={(e) => this.handleTextFieldChange(e)}  />
                                <Button type="submit" variant="contained" color="primary" style={{margin: '13px'}} onClick={(e) => this.doSomethingWithInput(e)} > Continuar :D </Button>
                            </React.Fragment>
                        }
                        </ButtonWrapper>
            </CenterCard>
        { 
        this.state.correcto &&
        <TableCard>
          <TablaOrder >
            <tr>
              <RowHead>Actividad</RowHead>
              <RowHead>Puntaje</RowHead>
            </tr>
            <tr>
              <Row>Quien Soy</Row>
              <Row> {puntaje_quiensoy} pts</Row>
            </tr>
            <tr>
              <Row>Matematicas Mayor</Row>
              <Row> {puntaje_Mayor} pts</Row>
            </tr>
            <tr>
              <Row>Matematicas Menor</Row>
              <Row> {puntaje_Menor} pts</Row>
            </tr>
          </TablaOrder>
          </TableCard>
        }

                    
                
            </FormWrapper>
        );
    }
}

export default Home;