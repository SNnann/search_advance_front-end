import * as React from "react";
import {Button, Container, Grid, Image, Input, Menu, Segment} from "semantic-ui-react";

import {Link} from "react-router-dom";
import logo from "../images/osso2-01.png";
import logo2 from "../images/logo-01.png";
import menu01 from "../images/menu-01.png";
import menu02 from "../images/menu-02.png";
import menu03 from "../images/menu-03.png";
import menu04 from "../images/menu-04.png";
import menu05 from "../images/menu-05.png";
import menu06 from "../images/menu-06.png";
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
                                <a href="https://ossc.thai-fda.com/index.html"><Image src={logo} size={"medium"}/></a>
                            </Grid.Column>
                            <Grid.Column width={3} textAlign={"center"} only='large screen'>
                                <Image src={logo2} size={"medium"}/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
                <Segment basic size= {'huge'} style={{

                }}>
                    <Grid container columns={6}>
                        <Grid.Column style={{margin:0, padding:0}}>
                            <a href="http://search.thai-fda.com"><Image src={menu01}></Image></a>
                        </Grid.Column>
                        <Grid.Column style={{margin:0, padding:0}}>
                            <a href="http://moph.thai-fda.com"><Image src={menu02}></Image></a>
                        </Grid.Column>
                        <Grid.Column style={{margin:0, padding:0}}>
                            <a href="https://ossc.thai-fda.com/province.html"><Image src={menu03}></Image></a>
                        </Grid.Column>
                        <Grid.Column style={{margin:0, padding:0}}>
                            <a href="https://epayment.cgd.go.th/e-payment/home"><Image src={menu04}></Image></a>
                        </Grid.Column>
                        <Grid.Column style={{margin:0, padding:0}}>
                            <a href="https://privus.fda.moph.go.th"><Image src={menu05}></Image></a>
                        </Grid.Column>
                        <Grid.Column style={{margin:0, padding:0}}>
                            <a href="https://ossc.thai-fda.com/post-marketing.html"><Image src={menu06}></Image></a>
                        </Grid.Column>
                    </Grid>
                </Segment>
                <Segment basic size={'huge'}  style={{
                    margin:0,
                    padding:'30',
                    backgroundColor: '#0b2e13'
                }}>
                    <Grid >
                        <Grid.Row>
                            <Grid.Column computer={8} only='large screen'>
                                <h2 style={{color:'#ffff'}}>E-Information (สืบค้นข้อมูลก่อนยื่นคำขอ)</h2>
                            </Grid.Column>
                            <Grid.Column computer={8} textAlign={"right"} only='large screen'>
                                <a href={'http://ossc.thai-fda.com'} style={{color:'#ffff'}}>หน้าหลัก</a>
                            </Grid.Column>
                            <Grid.Column mobile={16} textAlign={"center"} only='mobile screen'>
                                <h2 style={{color:'#ffff'}}>E-Information (สืบค้นข้อมูลก่อนยื่นคำขอ)</h2>
                                <hr/>
                            </Grid.Column>
                            <Grid.Column  mobile={16}  textAlign={"center"} only='mobile screen'>
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
