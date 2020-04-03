import React, { Component } from 'react';
import {Button, Card, Container, Grid, Image, Input, Segment} from "semantic-ui-react";
import { Accordion, Form, Menu, Radio, Select, Checkbox} from 'semantic-ui-react';
import {Link} from "react-router-dom";
import src1 from '../images/Banner4.png';
import Navbar from "./navbar";
import {apiurl} from "../config/api";
import Iconmain from "./iconmain";

class Level19 extends Component{
    state = { activeIndex: '' }
    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }

    _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.props.history.push('/level1/'+this.state.text)
        }
    }
    handleChange = e => {
        const name = e.target.name
        const value = e.target.value
        this.setState(prevstate => {
            const newState = { ...prevstate }
            newState[name] = value
            return newState
        })
    }
    onSearchChangea0 = (e, data) => {
        console.log(data.value);
        this.setState({ a0: data.value })
    }

    onSearchChangea1 = (e, data) => {
        console.log(data.value);
        this.setState({ a1: data.value });
    }

    onSearchChangea2 = (e, data) => {
        console.log(data.value);
        this.setState({ a2: data.value });
    }

    onSearchChangea3 = (e, data) => {
        console.log(data.value);
        this.setState({ a3: data.value });
    }

    onSearchChangetime = (e, data) => {
        console.log(data.value);
        this.setState({ time: data.value });
    }

    constructor() {
        super();
        this.state={
            text:'',
            a0:'',
            a1:'',
            a2:'',
            a3:'',
            time:'0',
        }
    }

    componentDidMount() {
        const myHeaders = new Headers()
        myHeaders.append('Content-Type', 'application/json')
        //myHeaders.append('Authorization', 'Bearer ' + this.props.isToken)
        fetch(apiurl + '/api/data/', { method: 'GET', headers: myHeaders })
            .then(response => response.json())
            .then(dataout => this.setState({ data: dataout.data,count: dataout.count,file: dataout.file })
            )
    }

    render() {
        const data0 = require("../data/data0.json");
        const data1 = require("../data/data1.json");
        const data2 = require("../data/data2.json");
        var list = []
        data0.map((data0, index) => (
            list.push(
                {
                    id: data0.id,
                    name:data0.name,
                    state:data0.state,
                    ref:data0.ref,
                    group: data0.group
                }
            )
        ))
        let filtera1 = data1.filter(
            (data1) => {
                return data1.ref.indexOf(this.state.a0) !== -1;
            }
        );
        let filtera2 = data2.filter(
            (data2) => {
                return (data2.ref.indexOf(this.state.a1) !== -1) && (data2.group.indexOf(this.state.a0) !== -1);
            }
        );

        const select_level3 = [

        ]

        const select_time = [
            { key: '0' , text: 'แสดงทั้งหมด', value: '0'},
            { key: '1' , text: 'ภายใน 3 เดือน', value: '1'},
            { key: '2' , text: 'ภายใน 6 เดือน', value: '2'},
        ]

        const SearchAdvanceForm = (                               
            <Form>
                <Form.Group grouped>
                    <Form.Field
                        control={Select}
                        label=''
                        placeholder='เลือกหมวด'
                        name='a0'
                        onChange={this.onSearchChangea0}
                        id='a0'
                        options={data0.map(list => (
                            {key: list.name, value: list.name, text: list.name}
                        ))}
                    />

                    <Form.Field
                        control={Select}
                        label=''
                        placeholder='เลือกกลุ่มใบอนุญาต'
                        name='a1'
                        onChange={this.onSearchChangea1}
                        id='a1'
                        options={filtera1.map(list1 => (
                            {key: list1.name, value: list1.name, text: list1.name}
                        ))}
                    />
        
                    <Form.Field
                        control={Select}
                        label=''
                        placeholder='เลือกใบอนุญาต'
                        name='a2'
                        onChange={this.onSearchChangea2}
                        id='a2'
                        options={filtera2.map(list2 => (
                            {key: list2.name, value: list2.name, text: list2.name}
                        ))}
                    />

                    <Form.Field
                        control={Select}
                        label=''
                        options={select_level3}
                        placeholder='เลือกกระบวนการ'
                        name='a3'
                        onChange={this.onSearchChangea3}
                        id='a3'
                    />

                    <Form.Field
                        control={Select}
                        label=''
                        options={select_time}
                        placeholder='เลือกช่วงเวลา'
                        name='time'
                        onChange={this.onSearchChangetime}
                        id='time'
                    />
        
                </Form.Group>
            </Form>
        )
        const { activeIndex } = this.state
        return (
            <>
                <Segment basic textAlign={"center"} style={{
                    padding:'0',
                    margin:'0'
                }}>
                    <Image fluid src={src1} centered />
                </Segment>
                <Segment secondary basic padded='very' style={{
                    margin:'0'
                }}>
                    <Grid textAlign={"center"}>
                        <Grid.Row>
                            <Grid.Column >
                                <h2>
                                    คลังข้อมูลเตรียมความพร้อมก่อนยื่นคำขอ
                                </h2>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row >
                            <Grid.Column mobile={16} tablet={10} computer={10}>
                                <Input
                                    size='big'
                                    fluid
                                    icon={{ name: 'search', circular: true}}
                                    placeholder='พิมพ์คำที่ต้องการค้นหา...'
                                    name='text'
                                    id='text'
                                    onChange={this.handleChange}
                                    onKeyDown={this._handleKeyDown}
                                />
                            </Grid.Column>
                            <Grid.Column mobile={16} tablet={4} computer={4}>
                                <Link to={'/level1/'+this.state.text}>
                                    <Button size='large' fluid positive >สืบค้นข้อมูลก่อนยื่นคำขอ</Button>
                                </Link>
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column width={10}>
                                <Accordion as={Menu} fluid positive vertical>
                                    <Menu.Item>
                                        <Accordion.Title
                                            size='big'
                                            active={activeIndex === 0}
                                            content='การค้นหาแบบละเอียด'
                                            index={0}
                                            onClick={this.handleClick}
                                        />
                                        <Accordion.Content active={activeIndex === 0} content={SearchAdvanceForm} />
                                    </Menu.Item>
                                </Accordion>
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column width={3}>
                                {this.state.a3 === "" && this.state.a2 === "" && this.state.a1 === "" && this.state.a0 !== "" && this.state.time === "" &&<Link to ={'/level3/'+this.state.a0+'/'+this.state.time}>
                                    <Button size='large' fluid positive >ค้นหาละเอียด</Button>
                                </Link>}
                                {this.state.a3 === "" && this.state.a2 === "" && this.state.a1 === "" && this.state.a0 !== "" && this.state.time !== "" &&<Link to ={'/level3/'+this.state.a0 +'/'+this.state.time}>
                                    <Button size='large' fluid positive >ค้นหาละเอียด</Button>
                                </Link>}
                                {this.state.a3 === "" && this.state.a2 === "" && this.state.a1 !== "" && this.state.a0 !== "" && this.state.time === "" &&<Link to ={'/level3/'+this.state.a0 +'/'+this.state.a1}>
                                    <Button size='large' fluid positive >ค้นหาละเอียด</Button>
                                </Link>}
                                {this.state.a3 === "" && this.state.a2 === "" && this.state.a1 !== "" && this.state.a0 !== "" && this.state.time !== "" &&<Link to ={'/level3/'+this.state.a0 +'/'+this.state.a1+'/'+this.state.time}>
                                    <Button size='large' fluid positive >ค้นหาละเอียด</Button>
                                </Link>}
                                {this.state.a3 === "" && this.state.a2 !== "" && this.state.a1 !== "" && this.state.a0 !== "" && this.state.time === "" &&<Link to ={'/level3/'+this.state.a0 +'/'+this.state.a1+'/'+this.state.a2}>
                                    <Button size='large' fluid positive >ค้นหาละเอียด</Button>
                                </Link>}
                                {this.state.a3 === "" && this.state.a2 !== "" && this.state.a1 !== "" && this.state.a0 !== "" && this.state.time !== "" &&<Link to ={'/level3/'+this.state.a0 +'/'+this.state.a1+'/'+this.state.a2+'/'+this.state.time}>
                                    <Button size='large' fluid positive >ค้นหาละเอียด</Button>
                                </Link>}
                                {this.state.a3 !== "" && this.state.a2 !== "" && this.state.a1 !== "" && this.state.a0 !== "" && this.state.time === "" &&<Link to ={'/level3/'+this.state.a0 +'/'+this.state.a1+'/'+this.state.a2+'/'+this.state.a3}>
                                    <Button size='large' fluid positive >ค้นหาละเอียด</Button>
                                </Link>}
                                {this.state.a3 !== "" && this.state.a2 !== "" && this.state.a1 !== "" && this.state.a0 !== "" && this.state.time !== "" &&<Link to ={'/level3/'+this.state.a0 +'/'+this.state.a1+'/'+this.state.a2+'/'+this.state.a3+'/'+this.state.time}>
                                    <Button size='large' fluid positive >ค้นหาละเอียด</Button>
                                </Link>}
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
                <Iconmain/>
            </>);
    }
}
export default Level19