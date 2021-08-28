import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron,Row,Col,Container,Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import b1 from './b1.jpg';
import b2 from './b2.jpg';
import b3 from './b3.jpg';
import Anika from './anika.jpg';
import Sajib from './sajib.jpg';
import Jilani from './jilani.jpg';
import Jahid from './jahid.jpg';
import Shahin from './shahin.jpg'; 
import './home.css';


export default class Fir extends Component {
    render() {
        return (
            <>   


                    
                    <div class="header">
                    <div class = "overlay">
                    <img class="img" src="https://seeklogo.com/images/D/dhaka-metropolitan-police-logo-C8D559AE4B-seeklogo.com.png" ></img> 
                    <h1 class="htxt" ><b>THE MOST SECURED FIR SYSTEM</b></h1>
                    <p class="htitle">
                        A System Designed With Blockchain Technology To Make FIR Records<br></br>
                        Secure And Secret And Brings Less Difficulty For General People
                    </p>
                    <hr class="bordr"></hr>
                    </div>
                    </div>

            <div class="grd">
                
                <Container>
                <h1 class="htxt"><b>SYSTEM FEATURES</b></h1>
                <hr class="bordr"></hr>

                    <Row>
                        <Col>
                         <img src={b1} width="150px"/>
                        <p class="htitle"> <b>
                        Our System Run On Ethereum <br/>BlockChain Network</b>
                        </p>
                        </Col>
                        <Col>
                         <img src={b2} width="150px"/>
                         <p class="htitle"> <b>
                         Can Add and Retrieve Files From Anywhere <br/>In The IPFS Network</b>
                        </p>
                        </Col>
                        <Col>
                         <img src={b3} width="150px"/>
                         <p class="htitle"> <b>
                         Create Non Temperable FIR <br/>Smart Contracts</b>
                        </p>
                        </Col>
                        
                    </Row>
                </Container>
            </div>

            <div class="grd">
                
                <Container>
                <h1 class="htxt"><b>MEET OUR TEAM</b></h1>
                <hr class="bordr"></hr>

                    <Row>
                        <Col>
                        <img src={Jilani} width="150px"/>
                        <p class="htitle"> <b>
                        Khandaker Mohammad Mohi Uddin </b>
                        <br/>
                        Supervisor
                        <div class=" space "> </div>
                        </p>
                        
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                         <img src={Sajib} width="150px"/>
                        <p class="htitle"> <b>
                        Sikder Sajib Al- Shahriar</b>
                        </p>
                        </Col>
                        <Col>
                         <img src={Anika} width="150px"/>
                         <p class="htitle"> <b>
                         Sadia Mahmuda</b>
                        </p>
                        </Col>
                        <Col>
                         <img src={Jahid} width="150px"/>
                         <p class="htitle"> <b>
                         Md. Jahidul Islam</b>
                        </p>
                        </Col>

                        <Col>
                         <img src={Shahin} width="150px"/>
                         <p class="htitle"> <b>
                         Md. Shahin Miah</b>
                        </p>
                        </Col>
                        
                    </Row>
                </Container>
            </div>
            <div class="foot">
                <p>Copyright © 2021 Dhaka Metropolitan Police. All rights reserved.</p>
            </div>
            
            </>
        )
    }
}
