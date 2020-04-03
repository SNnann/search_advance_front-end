import React, { Component } from 'react';
import {Button, Card, Container, Grid, Image, Input, Segment} from "semantic-ui-react";
import src1 from "../images/Banner04.png";
import Highlighter from "react-highlight-words";
import {apiurl} from "../config/api";
class Search extends Component {
    constructor() {
        super();
        this.state={
            data:[],
            name:'',
            isfile: false
        }
    }
    componentDidMount() {
        const myHeaders = new Headers()
        myHeaders.append('Content-Type', 'application/json')
        //myHeaders.append('Authorization', 'Bearer ' + this.props.isToken)
        fetch(apiurl + '/api/drill/'+this.props.match.params.text2+'/?format=json', { method: 'GET', headers: myHeaders })
            .then(response => response.json())
            .then(dataout => this.setState({ data: dataout.data, name: dataout.name, isfile: dataout.isfile })
            )
    }
    render() {
        var list = []
        if (this.state.data !== []){
            this.state.data.map((key, index) => (
                list.push(
                    {
                        id:key.id,
                        name:key.name,
                        state:key.state,
                        group:key.group,
                        link:'/level1/'+this.props.match.params.text+'/drill/'+key.id,
                        isfile:key.isfile,
                        file:key.file
                    }
                )
            ))
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
                            <Card fluid>
                                <Card.Content>
                                    <Card.Header>{this.state.name}</Card.Header>
                                </Card.Content>
                            </Card>
                            <br/>
                            <Grid.Column>
                                {!this.state.isfile && list.map((key, index) => (
                                    <Card fluid
                                          href={key.link}
                                    >
                                        <Card.Content   >
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
                                            </Card.Description>
                                        </Card.Content>
                                    </Card>
                                ))}
                                {this.state.isfile && list.map((key, index) => (
                                    <Card fluid
                                          href={key.file}
                                    >
                                        <Card.Content   >
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
export default Search;