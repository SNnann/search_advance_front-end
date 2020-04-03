import React, { Component } from 'react';
import {Button, Card, Container, Grid, Icon, Image, Input, Segment,Pagination} from "semantic-ui-react";
import Highlighter from "react-highlight-words";
import src1 from "../images/Banner4.png";
import {Link} from "react-router-dom";
import {apiurl} from "../config/api";
//import Pagination from "./component/pagin";
import ReactPaginate from 'react-paginate';
class Level1 extends Component {
    constructor() {
        super();
        this.state={
            count:0,
            text:'',
            data:[
            ],
            file:[],
            offset: 0,
            pageCount:0,
            activePage:0,
            allCountries: [],
            currentCountries: [],
            currentPage: 1,
            pageLimit: 10,
            totalPages: 0

        }
    }
    _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            window.location.replace("http://search.thai-fda.com/level1/"+this.state.text);
        }
    }

    handleSearch = (e) => {
        window.location.replace("http://search.thai-fda.com/level1/"+this.state.text);
    }

    componentDidMount() {
        const myHeaders = new Headers()
        myHeaders.append('Content-Type', 'application/json')
        //myHeaders.append('Authorization', 'Bearer ' + this.props.isToken)
        fetch(apiurl + '/api/search/'+this.props.match.params.text+'/?format=json', { method: 'GET', headers: myHeaders })
            .then(response => response.json())
            .then(dataout => this.setState({ data: [...dataout.data, ...dataout.file],count: dataout.count,file: dataout.file,pageCount: Math.ceil(dataout.count / 10), })
            )

        this.setState({text:this.props.match.params.text})
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
    onPageChanged = (e, { activePage }) => {
        const { data,pageLimit } = this.state;
        const currentPage  = activePage;
        console.log(activePage)
        var totalPages = Math.ceil(data.length / pageLimit);
        const offset = (currentPage - 1) * pageLimit;
        this.setState({ currentPage,offset });
        this.setState({totalPages:totalPages});

    }

    render() {
        const {
            data,
            currentPage,
            offset,
            pageLimit
        } = this.state;
        const totalCountries = data.length;
        console.log(data)
        const  currentCountries = data.slice(offset, offset + pageLimit);
        var totalPages = Math.ceil(data.length / pageLimit);
        return (
            <>
                <Container fluid>
                    <Segment basic textAlign={"center"} style={{
                        padding:'0',
                        margin:'0'
                    }}>
                        <Image fluid src={src1} centered />
                    </Segment>
                    <Segment basic secondary padded='very'>
                        <Grid >
                            <Grid.Row style={{marginTop: '10px'}}>
                                <Grid.Column >
                                    <h2>
                                        สืบค้นข้อมูลก่อนยื่นคำขอ
                                    </h2>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column mobile={16} tablet={10} computer={10}>
                                    <Input
                                        size='big'
                                        fluid
                                        icon={{ name: 'search', circular: true}}
                                        placeholder='พิมพ์คำที่ต้องการค้นหา...'
                                        name='text'
                                        id='text'
                                        value={this.state.text}
                                        onChange={this.handleChange}
                                        onKeyDown={this._handleKeyDown}
                                    />
                                </Grid.Column>
                                <Grid.Column mobile={16} tablet={4} computer={4}>
                                    <Button size='large' onClick={(e) =>{this.handleSearch(e)}} fluid positive >สืบค้นข้อมูลก่อนยื่นคำขอ</Button>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                    <Segment secondary basic padded='very' style={{
                        margin:'0'
                    }}>
                        <Grid centered>
                            <Grid.Row>
                                <Grid.Column>
                                    <Card fluid>
                                        <Card.Content>
                                            <Card.Header>คำค้นหา : {this.props.match.params.text}</Card.Header>
                                            <Card.Description>
                                                <p>ผลลัพท์จำนวน {this.state.count}</p>
                                                <p>หากสงสัยเพิ่มเติมสามารถสอบถามได้ที่ระบบให้คำปรึกษาออนไลน์ <a href={'http://moph.thai-fda.com'}>คลิก</a> </p>
                                            </Card.Description>
                                        </Card.Content>
                                    </Card>
                                    <br/>
                                    {currentCountries.map((key, index) => (
                                        <Card fluid
                                              href={typeof key.link === 'undefined'?key.file:key.link}
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
                                                    {typeof key.is_question !== 'undefined' && key.is_question  ? <p>{key.ans}</p>:(
                                                        <>
                                                            <p>{key.group}</p>
                                                            <hr/>

                                                            <p>แหล่งที่มา {key.ref}</p>
                                                        </>
                                                        )}
                                                </Card.Description>
                                            </Card.Content>
                                        </Card>
                                    ))}
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row centered>
                                <Grid.Column width={16}>
                                    <Pagination defaultActivePage={1}
                                                onPageChange={this.onPageChanged}
                                                totalPages={totalPages} />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                </Container>
            </>
           );
    }
}
export default Level1;
