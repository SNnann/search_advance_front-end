import * as React from "react";
import {Button, Container, Grid, Image, Input, Menu, Segment} from "semantic-ui-react";

import {Link} from "react-router-dom";
import logo from "../images/osso2-01.png";
import logo2 from "../images/logo-01.png";

class Navbar extends React.Component {
    constructor() {
        super();
        this.state = {text:''};
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
    render() {
        return (
            <>
                <Segment basic size={'huge'} style={{
                    margin:0,
                    padding:'10',
                    width:'100',
                    height:'120px'
                }}>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={13}>
                                <Image src={logo} size={"medium"}/>
                            </Grid.Column>
                            <Grid.Column width={3} textAlign={"center"}>
                                <Image src={logo2} size={"medium"}/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
                <Segment basic size={'huge'} style={{
                    margin:0,
                    padding:'30',
                    width:'100',
                    height:'80px',
                    backgroundColor: '#0b2e13'
                }}>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <h1 style={{color:'#ffff'}}>ระบบเตรียมความพร้อม</h1>
                            </Grid.Column>
                            <Grid.Column width={8} textAlign={"right"}>
                                <a href={'http://ossc.thai-fda.com'} style={{color:'#ffff'}}>หน้าหลัก</a>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </>


        );
    }
}
export default Navbar
