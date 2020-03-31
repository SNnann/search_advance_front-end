import React, {Component} from 'react';
import {Button, Card, Container, Grid, Image, Input, Segment} from "semantic-ui-react";
import {Link} from "react-router-dom";
import src1 from '../../images/Banner04.png';
import Navbar from "../navbar";
import {apiurl} from "../../config/api";
import Iconmain from "../iconmain";
import Iconmini from "../iconmini";

class Detail_medical extends Component {

    handleChange = e => {
        const name = e.target.name
        const value = e.target.value
        this.setState(prevstate => {
            const newState = {...prevstate}
            newState[name] = value
            return newState
        })
    }

    constructor() {
        super();
        this.state = {
            text: ''
        }
    }


    render() {
        return (
            <>
                <Container fluid>
                    <Segment basic size={'huge'} style={{
                        margin: 0,
                        padding: '30',
                        width: '100',
                        height: '80px',
                        backgroundColor: '#29853E'
                    }}>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <h2 style={{color: '#ffff'}}>หมวดเครื่องมือแพทย์</h2>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                    <Segment basic padded='very'>
                        <Grid >
                            <Grid.Row>
                                <Grid.Column width={11}>
                                    <Grid.Row>
                                        <Grid.Column width={16}>
                                            <h1 align="center" style={{color:'#880033'}} >แบบฟอร์มงานเครื่องมือแพทย์</h1><br/>
                                            <p>
                                            <font size="4" color="#880033">
                                                <span style={{textDecoration:'underline'}}>
                                                    <strong>แบบฟอร์มงานเครื่องมือแพทย์</strong></span>
                                                <br/><br/>

                                                <span>
                                                    <font size="3" color="#000000">
                                                        &nbsp;&nbsp;&nbsp;&nbsp;1. &nbsp; คำขออนุญาตขายเครื่องมือแพทย์ (เฉพาะชุดตรวจ HIV) <a href="https://samutprakarnfda.files.wordpress.com/2012/04/e0b980e0b884e0b8a3e0b8b7e0b988e0b8ade0b887e0b8a1e0b8b7e0b8ade0b981e0b89ee0b897e0b8a2e0b98c-e0b981e0b89ae0b89a-e0b882e0b89ee0b991.pdf">(pdf)</a><br/>
                                                    </font>
                                                </span>
                                            </font>
                                            <br/>
                                            </p>

                                      
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid.Column>
                                <Grid.Column width={5}>
                                    <Iconmini/>
                                </Grid.Column>
                            </Grid.Row>

                        </Grid>
                    </Segment>
                </Container>
            </>
    );
    }
    }
    export default Detail_medical;
