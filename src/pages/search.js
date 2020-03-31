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
            time:'',
        }
    }

    render() {
        const select_level0 = [
            { key: 'ยา', text: 'ยา', value: 'ยา' },
        ]

        const select_level1 = [
            { key: 'ทะเบียนตำรับยา', text: 'ทะเบียนตำรับยา', value: 'ทะเบียนตำรับยา' },
            { key: 'ใบอนุญาต', text: 'ใบอนุญาต', value: 'ใบอนุญาต' },
            { key: 'โฆษณา', text: 'โฆษณา', value: 'โฆษณา' },
            { key: 'หนังสือรับรองมาตรฐานสถานที่ผลิตยาในต่างประเทศ ฯ', text: 'หนังสือรับรองมาตรฐานสถานที่ผลิตยาในต่างประเทศ ฯ', value: 'หนังสือรับรองมาตรฐานสถานที่ผลิตยาในต่างประเทศ ฯ' },
            { key: 'อื่นๆ', text: 'อื่นๆ', value: 'อื่นๆ' },
        ]
        
        const select_level2 = [
            { key: 'ขอใบอนุญาตใหม่', text: 'ขอใบอนุญาตใหม่', value: 'ขอใบอนุญาตใหม่' },
            { key: 'ขอแก้ไขเปลี่ยนแปลงรายการในใบอนุญาต', text: 'ขอแก้ไขเปลี่ยนแปลงรายการในใบอนุญาต', value: 'ขอแก้ไขเปลี่ยนแปลงรายการในใบอนุญาต' },
            { key: 'ขอต่ออายุใบอนุญาต', text: 'ขอต่ออายุใบอนุญาต', value: 'ขอต่ออายุใบอนุญาต' },
            { key: '​ขอใบแทนใบอนุญาต', text: '​ขอใบแทนใบอนุญาต', value: '​ขอใบแทนใบอนุญาต' },
            { key: '​ขอยกเลิกใบอนุญาต', text: '​ขอยกเลิกใบอนุญาต', value: '​ขอยกเลิกใบอนุญาต' },
        ]

        
        const SearchAdvanceForm = (                               
            <Form>
                <Form.Group grouped>
                    <Form.Field
                        control={Select}
                        label=''
                        options={select_level0}
                        placeholder='เลือกหมวด'
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
                        placeholder='เลือกใบอนุญาต'
                        name='a2'
                        onChange={this.onSearchChangea2}
                        id='a2'
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
                                    {this.state.a2 === "" && this.state.a1 === "" && this.state.a0 === "ยา" && <Link to ={'/level19/'+this.state.a0}>
                                        <Button size='large' fluid positive >ค้นหาละเอียด</Button>
                                    </Link>}
                                    {this.state.a2 === "" && this.state.a1 === "ทะเบียนตำรับยา" && this.state.a0 === "ยา" && <Link to ={'/level20/'+this.state.a0+'/'+this.state.a1}>
                                        <Button size='large' fluid positive >ค้นหาละเอียด</Button>
                                    </Link>}
                                    {this.state.a2 !== "" && this.state.a1 === "ทะเบียนตำรับยา" && this.state.a0 === "ยา" && <Link to ={'/level20/'+this.state.a0+'/'+this.state.a1}>
                                        <Button size='large' fluid positive >ค้นหาละเอียด</Button>
                                    </Link>}
                                    {this.state.a2 === "" && this.state.a1 === "ใบอนุญาต" && this.state.a0 === "ยา" && <Link to ={'/level21/'+this.state.a0+'/'+this.state.a1}>
                                        <Button size='large' fluid positive >ค้นหาละเอียด</Button>
                                    </Link>}
                                    {this.state.a2 === "ขอใบอนุญาตใหม่" && this.state.a1 === "ใบอนุญาต" && this.state.a0 === "ยา" && <Link to ={'/level22/'+this.state.a0+'/'+this.state.a1+'/'+this.state.a2}>
                                        <Button size='large' fluid positive >ค้นหาละเอียด</Button>
                                    </Link>}
                                    {this.state.a2 === "ขอแก้ไขเปลี่ยนแปลงรายการในใบอนุญาต" && this.state.a1 === "ใบอนุญาต" && this.state.a0 === "ยา" && <Link to ={'/level23/'+this.state.a0+'/'+this.state.a1+'/'+this.state.a2}>
                                        <Button size='large' fluid positive >ค้นหาละเอียด</Button>
                                    </Link>}
                                    {this.state.a2 === "ขอต่ออายุใบอนุญาต" && this.state.a1 === "ใบอนุญาต" && this.state.a0 === "ยา" && <Link to ={'/level24/'+this.state.a0+'/'+this.state.a1+'/'+this.state.a2}>
                                        <Button size='large' fluid positive >ค้นหาละเอียด</Button>
                                    </Link>}
                                    {this.state.a2 === "​ขอใบแทนใบอนุญาต" && this.state.a1 === "ใบอนุญาต" && this.state.a0 === "ยา" && <Link to ={'/level25/'+this.state.a0+'/'+this.state.a1+'/'+this.state.a2}>
                                        <Button size='large' fluid positive >ค้นหาละเอียด</Button>
                                    </Link>}
                                    {this.state.a2 === "​ขอยกเลิกใบอนุญาต" && this.state.a1 === "ใบอนุญาต" && this.state.a0 === "ยา" && <Link to ={'/level26/'+this.state.a0+'/'+this.state.a1+'/'+this.state.a2}>
                                        <Button size='large' fluid positive >ค้นหาละเอียด</Button>
                                    </Link>}
                                    {this.state.a2 === "" && this.state.a1 === "โฆษณา" && this.state.a0 === "ยา" && <Link to ={'/level27/'+this.state.a0+'/'+this.state.a1}>
                                        <Button size='large' fluid positive >ค้นหาละเอียด</Button>
                                    </Link>}
                                    {this.state.a2 !== "" && this.state.a1 === "โฆษณา" && this.state.a0 === "ยา" && <Link to ={'/level27/'+this.state.a0+'/'+this.state.a1}>
                                        <Button size='large' fluid positive >ค้นหาละเอียด</Button>
                                    </Link>}
                                    {this.state.a2 === "" && this.state.a1 === "หนังสือรับรองมาตรฐานสถานที่ผลิตยาในต่างประเทศ ฯ" && this.state.a0 === "ยา" && <Link to ={'/level28/'+this.state.a0+'/'+this.state.a1}>
                                        <Button size='large' fluid positive >ค้นหาละเอียด</Button>
                                    </Link>}
                                    {this.state.a2 !== "" && this.state.a1 === "หนังสือรับรองมาตรฐานสถานที่ผลิตยาในต่างประเทศ ฯ" && this.state.a0 === "ยา" && <Link to ={'/level28/'+this.state.a0+'/'+this.state.a1}>
                                        <Button size='large' fluid positive >ค้นหาละเอียด</Button>
                                    </Link>}
                                    {this.state.a2 === "" && this.state.a1 === "อื่นๆ" && this.state.a0 === "ยา" && <Link to ={'/level29/'+this.state.a0+'/'+this.state.a1}>
                                        <Button size='large' fluid positive >ค้นหาละเอียด</Button>
                                    </Link>}
                                    {this.state.a2 !== "" && this.state.a1 === "อื่นๆ" && this.state.a0 === "ยา" && <Link to ={'/level29/'+this.state.a0+'/'+this.state.a1}>
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
