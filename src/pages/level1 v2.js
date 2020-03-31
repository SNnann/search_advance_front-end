import React, { Component } from 'react';
import {Button, Card, Container, Grid, Image, Input, Segment} from "semantic-ui-react";
import Highlighter from "react-highlight-words";
import src1 from "../images/Banner04.png";
import {Link} from "react-router-dom";
import {apiurl} from "../config/api";
class Level1 extends Component {
    constructor() {
        super();
        this.state={
            count:0,
            data:[
                {
                    id:'1',
                    name:'AAA',
                    state:'0',
                    link:''
                },
                {
                    id:'2',
                    name:'BBB',
                    state:'0',
                    link:''
                }
            ],
            file:[]
        }
    }
    componentDidMount() {
        const myHeaders = new Headers()
        myHeaders.append('Content-Type', 'application/json')
        //myHeaders.append('Authorization', 'Bearer ' + this.props.isToken)
        fetch(apiurl + '/api/search/'+this.props.match.params.text+'/?format=json', { method: 'GET', headers: myHeaders })
            .then(response => response.json())
            .then(dataout => this.setState({ data: dataout.data,count: dataout.count,file: dataout.file })
            )
    }

    render() {
        var list = []
        this.state.data.map((key, index) => (
            list.push(
                {
                    id:key.id,
                    name:key.name,
                    state:key.state,
                    group:key.group,
                    link:'/level1/'+this.props.match.params.text+'/drill/'+key.id
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
                                        <Card.Header>คำค้นหา : {this.props.match.params.text}</Card.Header>
                                        <Card.Description>
                                            <p>ผลลัพท์จำนวน {this.state.count}</p>
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                                <br/>
                                {this.state.data.map((key, index) => (
                                    <Card fluid
                                          href={key.link}
                                    >
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
                                                <p>{key.group}</p>
                                                <hr/>
                                                <p>แหล่งที่มา {key.ref}</p>
                                            </Card.Description>
                                        </Card.Content>
                                    </Card>
                                ))}
                                {this.state.file.map((key, index) => (
                                    <Card fluid
                                          href={key.file}
                                    >
                                        <Card.Content   >
                                            <Card.Header>
                                                <Highlighter
                                                    highlightClassName="YourHighlightClass"
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
export default Level1;
