import React, { Component } from 'react';
import {Button, Card, Container, Grid, Image, Input, Segment, GridRow} from "semantic-ui-react";
import { Accordion, Form, Menu, Radio, Select, Checkbox} from 'semantic-ui-react'
import {Link} from "react-router-dom";
import src1 from '../images/Banner04.png';
import Navbar from "./navbar";
import {apiurl} from "../config/api";
import Iconmain from "./iconmain";
  
class Search extends Component {
    state = { activeIndex: '' }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
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
            time:''
        }
    }

    render() {
        const list_data = [
            { level_id: "1", level_name: "อาหาร", level_state: "0", level_link: "" },
            { level_id: "2", level_name: "สถานที่", level_state: "1", level_link: "0" },
            { level_id: "3", level_name: "ผลิตภัณฑ์", level_state: "1", level_link: "0" },
            { level_id: "4", level_name: "โฆษณา", level_state: "1", level_link: "0" },
            { level_id: "5", level_name: "สถานที่", level_state: "1", level_link: "0" },
            { level_id: "6", level_name: "ใบอนุญาตสถานที่ผลิตอาหาร กรณีเข้าข่ายโรงงาน", level_state: "2", level_link: "2" },
            { level_id: "7", level_name: "ใบอนุญาตสถานที่ผลิตอาหาร กรณีไม่เข้าข่ายโรงงาน", level_state: "2", level_link: "2" },
            { level_id: "8", level_name: "ใบอนุญาตสถานที่นำเข้า", level_state: "2", level_link: "2" },  
        ]

        const select_level0 = [
            {this.state.list_data.map(item => (
                { key: {item.level_id}, text: {item.level_name}, value: {item.level_name} }
            ))}
            
          ]
        
        const select_level1 = [
            { key: 'สถานที่', text: 'สถานที่', value: 'สถานที่' },
            { key: 'ผลิตภัณฑ์', text: 'ผลิตภัณฑ์', value: 'ผลิตภัณฑ์' },
            { key: 'โฆษณา', text: 'โฆษณา', value: 'โฆษณา' },
        ]
        
        const select_level2 = [
            { key: 'ใบอนุญาตสถานที่ผลิตอาหาร กรณีเข้าข่ายโรงงาน (คนงาน ≥ 50 คน หรือ เครื่องจักร ≥ 50 แรงม้า)', text: 'ใบอนุญาตสถานที่ผลิตอาหาร กรณีเข้าข่ายโรงงาน (คนงาน ≥ 50 คน หรือ เครื่องจักร ≥ 50 แรงม้า)', value: 'ใบอนุญาตสถานที่ผลิตอาหาร กรณีเข้าข่ายโรงงาน (คนงาน ≥ 50 คน หรือ เครื่องจักร ≥ 50 แรงม้า)' },
            { key: 'ใบอนุญาตสถานที่ผลิตอาหาร กรณีไม่เข้าข่ายโรงงาน (คนงาน ≥ 50 คน หรือ เครื่องจักร ≥ 50 แรงม้า)', text: 'ใบอนุญาตสถานที่ผลิตอาหาร กรณีไม่เข้าข่ายโรงงาน (คนงาน ≥ 50 คน หรือ เครื่องจักร ≥ 50 แรงม้า)', value: 'ใบอนุญาตสถานที่ผลิตอาหาร กรณีไม่เข้าข่ายโรงงาน (คนงาน ≥ 50 คน หรือ เครื่องจักร ≥ 50 แรงม้า)' },
            { key: 'ใบอนุญาตสถานที่นำเข้า', text: 'ใบอนุญาตสถานที่นำเข้า', value: 'ใบอนุญาตสถานที่นำเข้า' },
        ]
        
        const select_level3 = [
            { key: 'ขอใบอนุญาตใหม่', text: 'ขอใบอนุญาตใหม่', value: 'ขอใบอนุญาตใหม่' },
            { key: 'ขอแก้ไข/เปลี่ยนแปลงใบอนุญาต', text: 'ขอแก้ไข/เปลี่ยนแปลงใบอนุญาต', value: 'ขอแก้ไข/เปลี่ยนแปลงใบอนุญาต' },
            { key: 'ขอใบต่ออายุใบอนุญาต', text: 'ขอใบต่ออายุใบอนุญาต', value: 'ขอใบต่ออายุใบอนุญาต' },
            { key: 'ขอใบแทนใบอนุญาต', text: 'ขอใบแทนใบอนุญาต', value: 'ขอใบแทนใบอนุญาต' },
            { key: 'ขอยกเลิกใบอนุญาต', text: 'ขอยกเลิกใบอนุญาต', value: 'ขอยกเลิกใบอนุญาต' },
        ]
        
        const select_time = [
            { key: '1', text: 'ในระยะเวลา 3 เดือน', value: '1' },
            { key: '2', text: 'ในระยะเวลา 6 เดือน', value: '2' },
            { key: '3', text: 'แสดงทั้งหมด', value: '3' },
        ]

        
        const SearchAdvanceForm = (                               
            <Form>
                <Form.Group grouped>
                    <Form.Field
                        control={Select}
                        label=''
                        options={select_level0}
                        placeholder='เลือกหมวดหมู่'
                        name='a0'
                        onChange={this.onSearchChangea0}
                        id='a0'
                    />
        
                    <Form.Field
                        control={Select}
                        label=''
                        options={select_level1}
                        placeholder='เลือกกลุ่มใบอนุญาต'
                        name='a1'
                        onChange={this.onSearchChangea1}
                        id='a1'
                    />
        
                    <Form.Field
                        control={Select}
                        label=''
                        options={select_level2}
                        placeholder='เลือกกลุ่มใบอนุญาต'
                        name='a2'
                        onChange={this.onSearchChangea2}
                        id='a2'
                    />
        
                    <Form.Field
                        control={Select}
                        label=''
                        options={select_level3}
                        placeholder='เลือกใบอนุญาต'
                        name='a3'
                        onChange={this.onSearchChangea3}
                        id='a3'
                    />
        
                    <Form.Field
                        control={Select}
                        label=''
                        options={select_time}
                        placeholder='เลือกช่วงเวลาการแสดงผล'
                        name='time'
                        onChange={this.onSearchChangetime}
                        id='time'
                    />
                </Form.Group>
            </Form>
        )
        
        const sortForm = (
            <Form>
                <Form.Group grouped>
                    <Form.Field
                        label='เรียงการแสดงผลตามอักษร ก-ฮ'
                        control='input'
                        type='radio'
                        name='sort'
                        value='01'
                    />
                    <Form.Field
                        label='เรียงการแสดงผลตามจำนวนผู้เข้าใช้งาน'
                        control='input'
                        type='radio'
                        name='sort'
                        value='02'
                    />
                    <Form.Field
                        label='เรียงการแสดงผลตามระยะเวลา'
                        control='input'
                        type='radio'
                        name='sort'
                        value='03'
                    />
                </Form.Group>
            </Form>
        )
        const { activeIndex } = this.state
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
                                        <Menu.Item>
                                            <Accordion.Title
                                                size='big'
                                                active={activeIndex === 1}
                                                content='การเรียงลำดับการแสดงผล'
                                                index={1}
                                                onClick={this.handleClick}
                                            />
                                            <Accordion.Content aligned = 'left' active={activeIndex === 1} content={sortForm} />
                                        </Menu.Item>
                                    </Accordion>
                                </Grid.Column>
                            </Grid.Row>

                            <Grid.Row>
                                <Grid.Column width={3}>
                                    {this.state.a3 !== "" && this.state.time === "" && <Link to ={'/level3/'+this.state.a0+'/'+this.state.a1+'/'+this.state.a2+'/'+this.state.a3}>
                                        <Button size='large' fluid positive >ค้นหาละเอียด</Button>
                                    </Link>}
                                    {this.state.a3 !== "" && this.state.time !== "" &&  <Link to ={'/level3/'+this.state.a0+'/'+this.state.a1+'/'+this.state.a2+'/'+this.state.a3+'/'+this.state.time}>
                                        <Button size='large' fluid positive >ค้นหาละเอียด</Button>
                                    </Link>}
                                    {this.state.a3 === "" && this.state.a2 !== "" && this.state.time === "" && <Link to ={'/level3/'+this.state.a0+'/'+this.state.a1+'/'+this.state.a2}>
                                        <Button size='large' fluid positive >ค้นหาละเอียด</Button>
                                    </Link>}
                                    {this.state.a3 === "" && this.state.a2 !== "" && this.state.time !=="" && <Link to ={'/level3/'+this.state.a0+'/'+this.state.a1+'/'+this.state.a2+'/'+this.state.time}>
                                        <Button size='large' fluid positive >ค้นหาละเอียด</Button>
                                    </Link>}
                                    {this.state.a3 === "" && this.state.a2 === "" && this.state.a1 !== "" &&  this.state.time === "" && <Link to ={'/level3/'+this.state.a0+'/'+this.state.a1}>
                                        <Button size='large' fluid positive >ค้นหาละเอียด</Button>
                                    </Link>}
                                    {this.state.a3 === "" && this.state.a2 === "" && this.state.a1 !== "" && this.state.time !== "" && <Link to ={'/level3/'+this.state.a0+'/'+this.state.a1+'/'+this.state.time}>
                                        <Button size='large' fluid positive >ค้นหาละเอียด</Button>
                                    </Link>}
                                    {this.state.a3 === "" && this.state.a2 === "" && this.state.a1 === "" && this.state.a0 !== "" && this.state.time !== "" && <Link to ={'/level3/'+this.state.a0+'/'+this.state.time}>
                                        <Button size='large' fluid positive >ค้นหาละเอียด</Button>
                                    </Link>}
                                    {this.state.a3 === "" && this.state.a2 === "" && this.state.a1 === "" && this.state.a0 !== "" &&  this.state.time === "" && <Link to ={'/level3/'+this.state.a0}>
                                        <Button size='large' fluid positive >ค้นหาละเอียด</Button>
                                    </Link>}
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                </Container>
            </>);
    }
}
export default Search;
