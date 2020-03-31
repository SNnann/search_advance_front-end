import React, { Component } from 'react';
import {Button, Card, Container, Grid, Image, Input, Segment} from "semantic-ui-react";
import {Link} from "react-router-dom";
import src1 from '../images/Banner04.png';
import Navbar from "./navbar";
import {apiurl} from "../config/api";
import Iconmain from "./iconmain";
class Search extends Component {

    handleChange = e => {
        const name = e.target.name
        const value = e.target.value
        this.setState(prevstate => {
            const newState = { ...prevstate }
            newState[name] = value
            return newState
        })
    }

    constructor() {
        super();
        this.state={
            text:''
        }
    }


    render() {
        return (
            <>
                <Container fluid>
                    <Segment basic textAlign={"center"} style={{
                        padding:'0',
                    }}>
                        <Image fluid src={src1} centered />
                    </Segment>
                    <Iconmain/>
                    <Segment secondary basic padded='very'>
                        <Grid textAlign={"center"}>
                            <Grid.Row>
                                <Grid.Column >
                                    <h2>
                                        คลังข้อมูลเตรียมความพร้อมก่อนยื่นคำขอ
                                    </h2>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row >
                                <Grid.Column width={10}>
                                    <Input
                                        size='big'
                                        fluid
                                        icon={{ name: 'search', circular: true}}
                                        placeholder='พิมพ์คำที่ต้องการค้นหา...'
                                        name='text'
                                        id='text'
                                        onChange={this.handleChange}
                                    />
                                </Grid.Column>
                                <Grid.Column width={3}>
                                    <Link to={'/level1/'+this.state.text}>
                                        <Button size='large' fluid positive >ค้นหา</Button>
                                    </Link>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                </Container>
            </>);
    }
}
export default Search;
