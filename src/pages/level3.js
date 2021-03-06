import React, { Component } from 'react';
import {Button, Card, Container, Grid, Image, Input, Segment, GridRow, Form} from "semantic-ui-react";
import Highlighter from "react-highlight-words";
import src1 from "../images/Banner4.png";
import {Link} from "react-router-dom";
import {apiurl} from "../config/api";
import Linkify from 'react-linkify';
class Level3 extends Component{
    constructor() {
        super();
        this.state={
            count:0,
            data:[
                {
                    id: '119',
                    name: 'อาหาร',
                    state: '0',
                    link: '119',
                    group: 'อาหาร',
                    date: '',
                    rank: '15'
                },
            ],
            file:[],
            value: '',
            order: 'asc',
            text_data: ''
        };
        this.handleChange = this.handleChange.bind(this);
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
        fetch(apiurl + '/api/searchAdvance/',requestOptions)
            .then(response => response.json())
            .then(dataout => this.setState({ data: dataout.data,count: dataout.count,file: dataout.file })
            )
            if (this.props.match.params.a0 !== '' && this.props.match.params.a0 !== undefined){
                if (this.props.match.params.a1 !== '' && this.props.match.params.a1 !== undefined){
                    if (this.props.match.params.a2 !== '' && this.props.match.params.a2 !== undefined){
                        if (this.props.match.params.a3 !== '' && this.props.match.params.a3 !== undefined){
                            this.setState({text_data: this.props.match.params.a0 +' > ' +this.props.match.params.a1 +' > '+this.props.match.params.a2 +' > ' +this.props.match.params.a3})
                        } else {
                            this.setState({text_data: this.props.match.params.a0 +' > ' +this.props.match.params.a1 +' > '+this.props.match.params.a2})
                        } 
                    } else {
                        this.setState({text_data: this.props.match.params.a0 +' > ' +this.props.match.params.a1})
                    }
                } else {
                    this.setState({text_data: this.props.match.params.a0})
                }
            }
    }
    handleChange = e => {
        const value = e.target.value
        this.setState({
            value: value,
        })
    }

    render(){
        var list = []
        if (this.state.data !== []){
            this.state.data.map((key, index) => (
                list.push(
                    {
                        id: key.id,
                        name: key.name,
                        state: key.state,
                        group: key.group,
                        link: '/level1/'+key.name+'/drill/'+key.id,
                        date: key.date,
                        rank: key.rank,
                        isfile:key.isfile,
                        file:key.file
                    }
                )
            ))
        }
        

        function compareValues(key, order = 'asc') {
            return function innerSort(a, b) {
              if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                // property doesn't exist on either object
                return 0;
              }  
              const varA = (typeof a[key] === 'number')
                ? a[key] : a[key].toUpperCase();
              const varB = (typeof b[key] === 'number')
                ? b[key] : b[key].toUpperCase();
          
              let comparison = 0;
              if (varA > varB) {
                comparison = 1;
              } else if (varA < varB) {
                comparison = -1;
              }

              if (key === 'rank'){
                  order = 'desc';
              }
              return (
                (order === 'desc') ? (comparison * -1) : comparison
              );
            };
          }
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
                                                {this.state.text_data}
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
                                                        <select value={this.state.value} onChange={this.handleChange}>
                                                            <option value="">เลือกเรียงการแสดงผล</option>
                                                            <option value="name" >เรียงการแสดงผลตามตัวอักษร</option>
                                                            <option value="rank">เรียงการแสดงผลตามความถี่การเข้าใช้งาน</option>
                                                            <option value="date">เรียงการแสดงผลตามเวลา</option>
                                                        </select>
                                                    </Form>
                                                </Grid.Column>
                                            </Grid.Row>
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                                <br/>
                                <hr/>
                                <br/> 
                                {list.sort(compareValues(this.state.value)).map((key, index) => (
                                    <Card fluid href={key.link}>
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
                                                <p>{this.name}</p>
                                                <hr/>
                                                <p>{key.group}</p>
                                                <p>การเข้าถึง : {key.rank}</p>
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
                                                <p>{this.state.data.name}</p>
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

export default Level3