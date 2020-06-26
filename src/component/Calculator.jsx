import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import './currency.css'

class Calculator extends React.Component {
    state = {
        expression: "",
        result: 0
    }
    updateExp = (e) =>{
        this.setState({expression : this.state.expression + e.target.value } )     }
    equateAns = () =>{
        this.setState({result : eval(this.state.expression)})

    }
    allClear =() =>{
        this.setState({expression: "", result: 0})
    }
    clear = () => {
        this.setState({expression:this.state.expression.slice(0, this.state.expression.length-1)})
    }
    render() {
        return (
            <div className = "div" style = {{width:"30vw"}}>
                <Container>
                    <Row className = "display">
                        <Col>
                        <h4 className = "exp">{this.state.expression}</h4>
                        <hr />
                        <h4 className = "result">{this.state.result}</h4>
                        </Col>
                        
                    </Row>
                    <Row>
                        <Col><Button block value = "C" onClick= {this.clear} onKeyPress = {this.clear} variant = "outline-danger">Del</Button></Col>
                        <Col><Button block value = "AC" onClick = {this.allClear} variant = "danger">Clear</Button></Col>
                    </Row>
                    <Row>
                        <Col><Button block value = "1" onClick = {this.updateExp} onKeyPress ={this.updateExp}  >1</Button></Col>
                        <Col><Button block value = "2" onClick = {this.updateExp}>2</Button></Col>
                        <Col><Button block value = "3" onClick = {this.updateExp}>3</Button></Col>
                        <Col><Button block value = "+" onClick = {this.updateExp} variant = "success">+</Button></Col>
                    </Row>
                    <Row>
                        <Col><Button block value = "4" onClick = {this.updateExp}>4</Button></Col>
                        <Col><Button block value = "5" onClick = {this.updateExp}>5</Button></Col>
                        <Col><Button block value = "6" onClick = {this.updateExp}>6</Button></Col>
                        <Col><Button block value = "-" onClick = {this.updateExp} variant = "success">-</Button></Col>
                    </Row>
                    <Row>
                        <Col><Button block value = "7" onClick = {this.updateExp}>7</Button></Col>
                        <Col><Button block value = "8" onClick = {this.updateExp}>8</Button></Col>
                        <Col><Button block value = "9" onClick = {this.updateExp}>9</Button></Col>
                        <Col><Button block value = "*" onClick = {this.updateExp} variant = "success">*</Button></Col>
                        </Row>
                    <Row>
                        <Col><Button block value = "0" onClick = {this.updateExp}>0</Button></Col>
                        <Col><Button block value = "." onClick = {this.updateExp}><strong>.</strong></Button></Col>
                        <Col><Button block value = "/" onClick = {this.updateExp} variant = "success">/</Button></Col>
                        <Col><Button block value =  "=" onClick = {this.equateAns} variant = "success">=</Button></Col>
                    </Row>
                    <Row className = "footer">
                        <Col>
                            <p>Made with ❤️️ by Kunal Pant KP</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Calculator
