import React, { Component } from 'react';
import {Button, Card, Container, Grid, Image, Input, Segment, GridRow, Form} from "semantic-ui-react";
import Highlighter from "react-highlight-words";
import src1 from "../images/Banner04.png";
import {Link} from "react-router-dom";
import {apiurl} from "../config/api";
class Level11 extends Component{
    constructor() {
        super();
        this.state={
            count:1,
            text:'ขอแก้ไขเปลี่ยนแปลงรายการในใบอนุญาต',
            data:[
                {
                    id: '30',
                    name: 'ขอแก้ไขเปลี่ยนแปลงรายการในใบอนุญาต',
                    state: '2',
                    link: '',
                    group: 'อาหาร',
                },
            ],
            file:[]
        }
    }

    componentDidMount(){
        // POST request using fetch with async/await
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: this.props.match.params.text,a0: this.props.match.params.a0, a1: this.props.match.params.a1, a2: this.props.match.params.a2, a3: this.props.match.params.a3, time: this.props.match.params.time })
        }
        const myHeaders = new Headers()
        myHeaders.append('Content-Type', 'application/json')
        //myHeaders.append('Authorization', 'Bearer ' + this.props.isToken)
        // fetch(apiurl + '/api/searchAdvance/',requestOptions)
        //     .then(response => response.json())
        //     .then(dataout => this.setState({ data: dataout.data,count: dataout.count,file: dataout.file })
        //     )
    }

    render(){
        var list = []
        this.state.data.map((key, index) => (
            list.push(
                {
                    id: 1,
                    name: key.name,
                    state: key.state,
                    group: key.group,
                    link: '/level1/' + this.props.match.params.text+'/drill/' +1
                }
            )
        ))
        return (
            <>
                <Container fluid>
                    <Segment basic textAlign={"center"} style={{
                        padding:'0',
                    }}>
                        <Image fluid src={src1} centered />
                    </Segment>
                    <Segment secondary basic padded='very'>
                        <Grid centered columns={2}>
                            <Grid.Column>
                                <Card fluid>
                                    <Card.Content>
                                        <Card.Header>ค้นหาภายในเว็บไซต์</Card.Header>
                                        <Card.Description>
                                            <p>
                                                อาหาร > สถานที่ > ใบอนุญาตสถานที่ผลิตอาหาร กรณีเข้าข่ายโรงงาน (คนงาน ≥ 50 คน หรือ เครื่องจักร ≥ 50 แรงม้า) > ขอแก้ไขเปลี่ยนแปลงรายการในใบอนุญาต
                                            </p>
                                            <p>
                                                <b>ผลการค้นหาพบทั้งสิ้น {this.state.count} รายการ</b>
                                            </p>
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                                <Card fluid>
                                    <Card.Content>
                                        <Card.Header>เรียงการแสดงผล</Card.Header>
                                        <Card.Description>
                                            <Grid.Row>
                                                <Grid.Column width={10}>
                                                    <Form class="ui form" style={{marginLeft: 15, marginRight: 15}}>
                                                        <select>
                                                            <option value="1">เรียงการแสดงผลตามตัวอักษร</option>
                                                            <option value="2">เรียงการแสดงผลตามความถี่การเข้าใช้งาน</option>
                                                            <option value="3">เรียงการแสดงผลตามเวลา</option>
                                                        </select>
                                                    </Form>
                                                </Grid.Column>
                                                <Grid.Column width={3}>
                                                    <Link to={'/level3/'}>
                                                        <Button size='small' fluid positive >เรียง</Button>
                                                    </Link>
                                                </Grid.Column>
                                            </Grid.Row>
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                                <br/>
                                <hr/>
                                <br/>
                                {this.state.data.map((key, index) => (
                                    <Card fluid href={key.file}>
                                        <Card.Content>
                                            <Card.Header>
                                                <Highlighter
                                                    highlightClassName="YourHighlightClass"
                                                    searchWords={[this.props.match.params.text]}
                                                    autoEscape={true}
                                                    textToHighlight={key.name}
                                                />
                                            </Card.Header>
                                            <Card.Description>
                                                <p>{this.group}</p>
                                                <hr/>
                                                <p>{key.group}</p>
                                            </Card.Description>
                                        </Card.Content>
                                    </Card>
                                ))}
                                {this.state.file.map((key, index) => (
                                    <Card fluid href={key.file}>
                                        <Card.Content>
                                            <Card.Header>
                                                <Highlighter
                                                    highlightClassName="YourHightLightClass"
                                                    searchWords={[this.props.match.params.text]}
                                                    autoEscape={true}
                                                    textToHighlight={key.name}
                                                />
                                            </Card.Header>
                                            <Card.Description>
                                                <p>{key.group}</p>
                                                <hr/>
                                                <p>แหล่งที่มา {key.ref}</p>
                                            </Card.Description>
                                        </Card.Content>
                                    </Card>
                                ))}
                            </Grid.Column>
                        </Grid>
                    </Segment>
                </Container>
            </>
        );
    }
}

export default Level11