import React, { Component } from 'react';
import {Button, Card, Container, Grid, Image, Input, Pagination, Segment} from "semantic-ui-react";
import src1 from "../images/Banner4.png";
import Highlighter from "react-highlight-words";
import {apiurl} from "../config/api";
import {Link} from "react-router-dom";
import Linkify from 'react-linkify';
class Search extends Component {
    constructor() {
        super();
        this.state={
            data:[],
            name:'',
            isfile: false,
            route: '',
            role: '',
            linkref:'',
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
    componentDidMount() {
        const myHeaders = new Headers()
        myHeaders.append('Content-Type', 'application/json')
        //myHeaders.append('Authorization', 'Bearer ' + this.props.isToken)
        fetch(apiurl + '/api/drill/'+this.props.match.params.text2+'/?format=json', { method: 'GET', headers: myHeaders })
            .then(response => response.json())
            .then(dataout => this.setState({ data: dataout.data, name: dataout.name, isfile: dataout.isfile })
            )
        this.setState({text:this.props.match.params.text})
    }
    _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.props.history.push('/level1/'+this.state.text)
        }
    }

    handleSearch = (e) => {
        window.location.replace("http://search.thai-fda.com/level1/"+this.state.text);
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
                        link:'/level1/'+key.name+'/drill/'+key.id,
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
                                <Grid.Column mobile={16} tablet={10} computer={10}>
                                    <p>หากสงสัยเพิ่มเติมสามารถสอบถามได้ที่ระบบให้คำปรึกษาออนไลน์ <a href={'http://moph.thai-fda.com'}>คลิก</a> </p>
                                {this.state.isfile &&
                                    <>
                                        <Card fluid>
                                            <Card.Content>
                                                <Card.Header>
                                                    <Grid.Row>
                                                        <Grid.Column width={8}>
                                                            <h3 style={{ color: "#1b6b29"}}>ชื่อกระบวนการ</h3>
                                                            <hr/>
                                                        </Grid.Column>
                                                        <Grid.Column width={8}>
                                                            <p style={{fontWeight:"normal"}}>{this.state.name}</p>
                                                        </Grid.Column>
                                                    </Grid.Row>
                                                </Card.Header>
                                            </Card.Content>
                                        </Card>
                                        <Card fluid>
                                            <Card.Content>
                                                <Card.Header>
                                                    <Grid.Row>
                                                        <Grid.Column width={8} >
                                                            <h3 style={{ color: "#1b6b29"}}>ช่องทางการยื่นคำขอ</h3>
                                                            <hr/>
                                                        </Grid.Column>
                                                        <Grid.Column width={8}>
                                                            <p style={{fontWeight:"normal"}}>{this.state.route}</p>
                                                        </Grid.Column>
                                                    </Grid.Row>
                                                </Card.Header>
                                            </Card.Content>
                                        </Card>
                                        <Card fluid>
                                            <Card.Content>
                                                <Card.Header>
                                                    <Grid.Row>
                                                        <Grid.Column width={8}>
                                                            <h3 style={{ color: "#1b6b29"}}>ลิงค์ที่เกี่ยวข้อง</h3>
                                                            <hr/>
                                                        </Grid.Column>
                                                        <Grid.Column width={8}>
                                                            <Linkify>
                                                                <p style={{fontWeight:"normal"}}>{this.state.linkref}</p>
                                                            </Linkify>
                                                        </Grid.Column>
                                                    </Grid.Row>
                                                </Card.Header>
                                            </Card.Content>
                                        </Card>
                                        <Card fluid>
                                            <Card.Content>
                                                <Card.Header>
                                                    <Grid.Row>
                                                        <Grid.Column width={8}>
                                                            <h3 style={{ color: "#1b6b29"}}>ระเบียบ</h3>
                                                            <hr/>
                                                        </Grid.Column>
                                                        <Grid.Column width={8}>
                                                            <p style={{fontWeight:"normal"}}>{this.state.role}</p>
                                                        </Grid.Column>
                                                    </Grid.Row>
                                                </Card.Header>
                                            </Card.Content>
                                        </Card>
                                    </>

                                }
                                {!this.state.isfile &&
                                    <>
                                        <Card fluid>
                                            <Card.Content>
                                                <Card.Header>{this.state.name}</Card.Header>
                                            </Card.Content>
                                        </Card>
                                    </>

                                }
                                <br/>
                                {!this.state.isfile &&
                                list.map((key, index) => (
                                    <Card fluid
                                          href={key.link}
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
                                            </Card.Description>
                                        </Card.Content>
                                    </Card>
                                ))}
                                {this.state.isfile &&
                                    <>
                                        <h3>เอกสารและแบบฟอร์มที่เกี่ยวข้อง</h3>
                                        {currentCountries.map((key, index) => (
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
                                    </>

                                }
                            </Grid.Column>
                            </Grid.Row>
                            <Grid.Row centered>
                                <Grid.Column >
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
export default Search;