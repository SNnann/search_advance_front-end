import * as React from "react";
import {Button, Container, Grid, Image, Input, Menu, Segment} from "semantic-ui-react";

import {Link} from "react-router-dom";
import logo from "../images/osso2-01.png";
import logo2 from "../images/logo-01.png";

class Iconmini extends React.Component {
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
                <Segment secondary basic style={{color:'#87a13c'}}>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={16} textAlign={"center"}>
                                <h2>หมวดหมู่</h2>
                                <h4>เลือกหมวดหมู่ที่ต้องการสืบค้นข้อมูล</h4>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={8} textAlign={"center"} >
                                <Image src={'http://ossc.thai-fda.com/images/icon1.png'} style={{
                                    width:'100',
                                    height:'80px',
                                }} centered/>
                                <h3 >อาหาร</h3>
                                <Link to={'/detail/food'} style={{textDecoration: 'underline',color:'#87a13c'}}>
                                    <h4>VIEW DETAILS</h4>
                                </Link>
                            </Grid.Column>
                            <Grid.Column width={8} textAlign={"center"}>
                                <Image src={'http://ossc.thai-fda.com/images/icon2.png'} style={{
                                    width:'100',
                                    height:'80px',
                                }} centered/>
                                <h3>ยา</h3>
                                <Link to={'/detail/drug'} style={{textDecoration: 'underline',color:'#87a13c'}}>
                                    <h4>VIEW DETAILS</h4>
                                </Link>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={8} textAlign={"center"}>
                                <Image src={'http://ossc.thai-fda.com/images/icon6.png'} style={{
                                    width:'100',
                                    height:'80px',
                                }} centered/>
                                <h3>เครื่องสำอาง</h3>
                                <Link to={'/detail/cosmetic'} style={{textDecoration: 'underline',color:'#87a13c'}}>
                                    <h4>VIEW DETAILS</h4>
                                </Link>
                            </Grid.Column>
                            <Grid.Column width={8} textAlign={"center"}>
                                <Image src={'http://ossc.thai-fda.com/images/icon7.png'} style={{
                                    width:'100',
                                    height:'80px',
                                }} centered/>
                                <h3>วัตถุอันตราย</h3>
                                <Link to={'/detail/hazardous'} style={{textDecoration: 'underline',color:'#87a13c'}}>
                                    <h4>VIEW DETAILS</h4>
                                </Link>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={8} textAlign={"center"}>
                                <Image src={'http://ossc.thai-fda.com/images/icon8.png'} style={{
                                    width:'100',
                                    height:'80px',
                                }} centered/>
                                <h3>วัตถุเสพติด</h3>
                                <Link to={'/detail/narcotic'} style={{textDecoration: 'underline',color:'#87a13c'}}>
                                    <h4>VIEW DETAILS</h4>
                                </Link>
                            </Grid.Column>
                            <Grid.Column width={8} textAlign={"center"}>
                                <Image src={'http://ossc.thai-fda.com/images/icon3.png'} style={{
                                    width:'100',
                                    height:'80px',
                                }} centered/>
                                <h3>เครื่องมือแพทย์</h3>
                                <Link to={'/detail/medical'} style={{textDecoration: 'underline',color:'#87a13c'}}>
                                    <h4>VIEW DETAILS</h4>
                                </Link>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <br/>
                </Segment>
            </>


        );
    }
}
export default Iconmini
