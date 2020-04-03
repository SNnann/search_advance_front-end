import * as React from "react";
import {Button, Container, Grid, Image, Menu, Segment} from "semantic-ui-react";

import {Link} from "react-router-dom";
import logo from "../images/logo.png";

class Footer extends React.Component {
    constructor() {
        super();
        this.state = {color: "red"};
    }
    render() {
        return (
            <>
                <Segment basic inverted size={'huge'} style={{
                    margin:0,
                    padding:'30',
                    width:'100',
                    backgroundColor: '#87a13c',
                }}>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column mobile={16} tablet={11} computer={11}>
                                <img src="https://ossc.thai-fda.com/upload/logo-02.png" height="100" width="160"/>
                                <p style={{fontSize: '20px'}}>One Stop Service Center (OSSC)</p>
                                <p style={{fontSize: '20px'}}>สำนักงานคณะกรรมการอาหารและยา<br />
                                    กระทรวงสาธารณสุข ถนนติวานนท์ อำเภอเมือง จังหวัดนนทบุรี 11000</p>
                                <br/>
                            </Grid.Column>
                            <Grid.Column mobile={16} tablet={5} computer={5}>
                                <p style={{fontSize: '15px'}}>พบปัญหาการใช้งานระบบหรือสอบถามเพิ่มเติม</p>
                                <p style={{fontSize: '15px'}}>ติดต่อ 02-1183918</p>
                                <p style={{fontSize: '15px'}}>Official line : @ossc_fda</p>
                                <img style={{height: '100px'}} src="https://qr-official.line.me/sid/M/euh9436e.png"/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
                <Segment basic inverted secondary size={'huge'} style={{
                    margin:0,
                    padding:'30',
                    width:'100',
                    height:'80px',
                    backgroundColor: '#464646',
                }}>
                    <h4>OSSC THAI FDA : Copy right 2020 all rights reserved</h4>
                </Segment>
            </>

        );
    }
}
export default Footer
