import React, {Component} from 'react';
import {Button, Card, Container, Grid, Image, Input, Segment} from "semantic-ui-react";
import {Link} from "react-router-dom";
import src1 from '../../images/Banner04.png';
import Navbar from "../navbar";
import {apiurl} from "../../config/api";
import Iconmain from "../iconmain";
import Iconmini from "../iconmini";

class Detail_cosmetic extends Component {

    handleChange = e => {
        const name = e.target.name
        const value = e.target.value
        this.setState(prevstate => {
            const newState = {...prevstate}
            newState[name] = value
            return newState
        })
    }

    constructor() {
        super();
        this.state = {
            text: ''
        }
    }


    render() {
        return (
            <>
                <Container fluid>
                    <Segment basic size={'huge'} style={{
                        margin: 0,
                        padding: '30',
                        width: '100',
                        height: '80px',
                        backgroundColor: '#29853E'
                    }}>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <h2 style={{color: '#ffff'}}>หมวดเครื่องสำอาง</h2>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                    <Segment basic padded='very'>
                        <Grid >
                            <Grid.Row>
                                <Grid.Column width={11}>
                                    <Grid.Row>
                                        <Grid.Column width={16}>
                                            <h1 align="center" style={{color:'#333399'}} >แบบฟอร์มสำหรับผู้ประกอบการด้านเครื่องสำอาง</h1><br/>
                                            <p>
                                            <font size="4">
                                                <span style={{textDecoration:'underline'}}>
                                                    <strong>การขออนุมัติสถานที่ผลิต / นำเข้าเครื่องสำอาง รายใหม่</strong></span>
                                                <br/><br/>

                                                <span>
                                                    <font size="3">
                                                        &nbsp;&nbsp;&nbsp;&nbsp;1. &nbsp;<a style = {{color:'#000000'}} href="https://samutprakarnfda.files.wordpress.com/2019/02/e0b882e0b8b1e0b989e0b899e0b895e0b8ade0b899e0b881e0b8b2e0b8a3e0b882e0b8ade0b8ade0b899e0b8b8e0b8a1e0b8b1e0b895e0b8b4e0b8aae0b896e0b8b2e0b899e0b897e0b8b5e0b988.pdf">ขั้นตอนการขออนุมัติสถานที่ (คลิก)</a> <br/>

                                                        &nbsp;&nbsp;&nbsp;&nbsp;2. &nbsp;<a style={{color:'#000000'}} href="https://samutprakarnfda.files.wordpress.com/2019/02/e0b992.pdf">รายการเอกสารที่ใช้ประกอบการจัดการสถานที่ผ่านระบบ E-submission (คลิก)</a> <br/>

                                                        &nbsp;&nbsp;&nbsp;&nbsp;3. &nbsp;<a style={{color:'#000000'}} href="https://samutprakarnfda.files.wordpress.com/2019/02/e0b993.pdf">หลักเกณฑ์การตรวจสถานที่ผลิต (คลิก)</a> <br/>

                                                        &nbsp;&nbsp;&nbsp;&nbsp;4. &nbsp;<a style={{color:'#000000'}} href="https://samutprakarnfda.files.wordpress.com/2019/02/e0b994.pdf">หลักเกณฑ์การตรวจสถานที่นำเข้า (คลิก)</a> <br/>
                                                    </font>
                                                </span>
                                            </font>
                                            <br/>
                                            </p>

                                            <p>
                                            <font size="4" color="#339999">
                                                <span style={{textDecoration:'underline'}}>
                                                    <strong>การขอเปิดสิทธิ์เข้าใช้ระบบ E-submission</strong></span>
                                                <br/><br/>

                                                <span>
                                                    <font size="3">
                                                        &nbsp;&nbsp;&nbsp;&nbsp;1. &nbsp;<a style = {{color:'#339999'}} href="https://samutprakarnfda.files.wordpress.com/2019/02/e0b8a3e0b8b2e0b8a2e0b881e0b8b2e0b8a3e0b980e0b8ade0b881e0b8aae0b8b2e0b8a3e0b980e0b89be0b8b4e0b894e0b8aae0b8b4e0b897e0b898e0b8b4e0b98cesubmission.pdf">รายการเอกสารที่ใช้ (คลิก)</a> <br/>
                                                    </font>
                                                </span>
                                            </font>
                                            <br/>
                                            </p>

                                            <p>
                                            <font size="4" color="#993333">
                                                <span style={{textDecoration:'underline'}}>
                                                    <strong>การขอเพิ่มผู้ว่าจ้างผลิตเครื่องสำอาง</strong></span>
                                                <br/><br/>

                                                <span>
                                                    <font size="3">
                                                        &nbsp;&nbsp;&nbsp;&nbsp;1. &nbsp;<a style = {{color:'#993333'}} href="https://samutprakarnfda.files.wordpress.com/2019/11/image061119095021.pdf">ใบตรวจรับเอกสารขอเพิ่มผู้ว่าจ้างผลิตเครื่องสำอาง (คลิก)</a> <br/>

                                                        &nbsp;&nbsp;&nbsp;&nbsp;2. &nbsp;<a style = {{color:'#993333'}} href="https://samutprakarnfda.files.wordpress.com/2019/11/image061119095006.pdf">จดหมายแจ้งความประสงค์ขอเพิ่มข้อมูลว่าจ้างผลิตเครื่องสำอาง (คลิก)</a> <br/>
                                                    </font>
                                                </span>
                                            </font>
                                            <br/>
                                            </p>

                                            <p>
                                            <font size="4" color="#ff0000">
                                                <span style={{textDecoration:'underline'}}>
                                                    <strong>การขอยกเลิกเครื่องสำอาง</strong></span>
                                                <br/><br/>

                                                <span>
                                                    <font size="3">
                                                        &nbsp;&nbsp;&nbsp;&nbsp;1. &nbsp;<a style = {{color:'#ff0000'}} href="https://samutprakarnfda.files.wordpress.com/2019/02/e0b8a3e0b8b2e0b8a2e0b881e0b8b2e0b8a3e0b980e0b8ade0b881e0b8aae0b8b2e0b8a3e0b8a2e0b881e0b980e0b8a5e0b8b4e0b881e0b980e0b884e0b8a3e0b8b7e0b988e0b8ade0b887e0b8aae0b8b3e0b8ade0b8b2e0b887.pdf">รายการเอกสารที่ใช้ (คลิก)</a> <br/>
                                                    </font>
                                                </span>
                                            </font>
                                            <br/>
                                            </p>

                                            <p>
                                            <font size="4" color="#000080">
                                                <span style={{textDecoration:'underline'}}>
                                                    <strong>การตรวจเฝ้าระวังเพื่อติดตามสถานที่ผลิตและนำเข้าเครื่องสำอาง</strong></span>
                                                <br/>

                                                <span>
                                                    <font size="3">
                                                    ผู้ประกอบการผลิตและนำเข้าเครื่องสำอางทุกราย จะต้องพัฒนาและปรับปรุงให้ผ่านภายในวันที่ ๒๓ พฤษภาคม 2563  ตามเกณฑ์การตรวจสถานที่ <br/><br/>

                                                        &nbsp;&nbsp;&nbsp;&nbsp;1. &nbsp;<a style = {{color:'#000080'}} href="https://samutprakarnfda.files.wordpress.com/2019/02/e0b997.pdf">หลักเกณฑ์การตรวจประเมินสถานที่ผลิต (คลิก)</a> <br/>

                                                        &nbsp;&nbsp;&nbsp;&nbsp;2. &nbsp;<a style = {{color:'#000080'}} href="https://samutprakarnfda.files.wordpress.com/2019/02/e0b998.pdf">หลักเกณฑ์การตรวจประเมินสถานที่นำเข้า(คลิก)</a> <br/>

                                                        &nbsp;&nbsp;&nbsp;&nbsp;3. &nbsp;<a style = {{color:'#000080'}} href="https://samutprakarnfda.files.wordpress.com/2019/02/e0b999.pdf">แบบบันทึกต่างๆที่ใช้ในการผลิต (คลิก)</a> <br/>

                                                        &nbsp;&nbsp;&nbsp;&nbsp;4. &nbsp;<a style = {{color:'#000080'}} href="https://samutprakarnfda.files.wordpress.com/2019/02/e0b991e0b990.pdf">ตัวอย่างและคำอธิบายการจัดทำแบบบันทึกต่างๆที่ใช้ในการผลิต (คลิก)</a> <br/>
                                                    </font>
                                                </span>
                                            </font>
                                            <br/>
                                            </p>

                                            <p>
                                            <font size="4" color="#883399">
                                                <span style={{textDecoration:'underline'}}>
                                                    <strong>การขอแก้ไขข้อมูลสถานที่ หรือใบจดแจ้ง</strong></span>
                                                <br/><br/>

                                                <span>
                                                    <font size="3">
                                                        &nbsp;&nbsp;&nbsp;&nbsp;1. &nbsp;<a style = {{color:'#883399'}} href="https://samutprakarnfda.files.wordpress.com/2019/11/image061119094936.pdf">ใบตรวจรับเอกสารการขอแก้ไขข้อมูลสถานที่ หรือใบจดแจ้ง</a> <br/>

                                                        &nbsp;&nbsp;&nbsp;&nbsp;2. &nbsp;<a style = {{color:'#883399'}} href="https://samutprakarnfda.files.wordpress.com/2019/11/image061119095816.pdf">ใคำขอแก้ไขรายการในใบรับจดแจ้งเครื่องสำอาง</a> <br/>
                                                        
                                                    </font>
                                                </span>
                                            </font>
                                            <br/>
                                            </p>

                                            <p>
                                            <font size="4" color="#000000">
                                                <span style={{textDecoration:'underline'}}>
                                                    <strong>แบบฟอร์มต่างๆ</strong></span>
                                                <br/><br/>

                                                <span>
                                                    <font size="3">
                                                        &nbsp;&nbsp;&nbsp;&nbsp;1. &nbsp;<a style = {{color:'#000000'}} href="https://samutprakarnfda.files.wordpress.com/2019/02/e0b991e0b991.doc">หนังสือมอบอำนาจ (คลิก)</a> <br/>

                                                        &nbsp;&nbsp;&nbsp;&nbsp;2. &nbsp;<a style = {{color:'#000000'}} href="https://samutprakarnfda.files.wordpress.com/2019/02/e0b991e0b992.doc">หนังสือมอบอำนาจเพื่อยกเลิก (คลิก)</a> <br/>

                                                        &nbsp;&nbsp;&nbsp;&nbsp;3. &nbsp;<a style = {{color:'#000000'}} href="https://samutprakarnfda.files.wordpress.com/2019/02/e0b991e0b993.docx">คำขอยกเลิกการประกอบกิจการ/ใบจดแจ้งเครื่องสำอาง (คลิก)</a> <br/>

                                                        &nbsp;&nbsp;&nbsp;&nbsp;4. &nbsp;<a style = {{color:'#000000'}} href="https://samutprakarnfda.files.wordpress.com/2019/09/e0b895e0b8b1e0b8a7e0b8ade0b8a2e0b988e0b8b2e0b887e0b8abe0b899e0b8b1e0b887e0b8aae0b8b7e0b8ade0b980e0b88ae0b8b4e0b88de0b980e0b888e0b989e0b8b2e0b8abe0b899e0b989e0b8b2e0b897e0b8b5e0b988e0b98.docx">หนังสือเชิญเจ้าหน้าที่เข้าตรวจสอบสถานที่ (คลิก)</a> <br/>
                                                        
                                                    </font>
                                                </span>
                                            </font>
                                            <br/>
                                            </p>

                                            <p>
                                            <font size="4" color="#000000">
                                                <span style={{textDecoration:'underline'}}>
                                                    <strong>คู่มือและโปรแกรมสำหรับติดตั้งเพื่อใช้งานระบบ E-Submission</strong></span>
                                                <br/>

                                                <span>
                                                    <font size="3">
                                                        ให้ผู้ประกอบการติดตั้งโปรแกรมต่อไปนี้ ไว้ที่เครื่องคอมพิวเตอร์ของท่าน
                                                        เพื่อรองรับการใช้งานด้วยระบบ E-Submission <br/><br/>

                                                        &nbsp;&nbsp;&nbsp;&nbsp;1. &nbsp; โปรแกรม Adobe Reader DC &nbsp;  <a style = {{color:'#ff0000'}} href="http://elearnhpas.fda.moph.go.th/elearning/pluginfile.php/249/mod_page/content/7/AcroRdrDC1500720033_MUI.exe">&gt;&gt;&gt; Download &lt;&lt;&lt;</a> <br/>

                                                        &nbsp;&nbsp;&nbsp;&nbsp;2. &nbsp; ฟอนต์แพ็ค (Font Pack) สำหรับ โปรแกมAdobe Reader DC  &nbsp;  <a style = {{color:'#ff0000'}} href="http://elearnhpas.fda.moph.go.th/elearning/pluginfile.php/249/mod_page/content/7/FontPack_DC.zip">&gt;&gt;&gt; Download &lt;&lt;&lt;</a> <br/>

                                                        &nbsp;&nbsp;&nbsp;&nbsp;3. &nbsp; โปรแกรม Mozilla Firefox สำหรับ Windows &nbsp;  <a style = {{color:'#ff0000'}} href="http://elearnhpas.fda.moph.go.th/elearning/pluginfile.php/249/mod_page/content/7/Firefox%20Setup%2043.0.4.exe">&gt;&gt;&gt; Download &lt;&lt;&lt;</a> <br/>

                                                        &nbsp;&nbsp;&nbsp;&nbsp;4. &nbsp; โปรแกรม Mozilla Firefox สำหรับ Windows 64 bit &nbsp;  <a style = {{color:'#ff0000'}} href="http://elearnhpas.fda.moph.go.th/elearning/pluginfile.php/249/mod_page/content/7/Firefox%20Setup%2043.0.4%20windows%2064%20bit.exe">&gt;&gt;&gt; Download &lt;&lt;&lt;</a> <br/>

                                                        &nbsp;&nbsp;&nbsp;&nbsp;5. &nbsp; ฟอร์น TH Sarabun &nbsp;  <a style = {{color:'#ff0000'}} href="http://elearnhpas.fda.moph.go.th/elearning/pluginfile.php/249/mod_page/content/7/TH-Sarabun.zip">&gt;&gt;&gt; Download &lt;&lt;&lt;</a> <br/>

                                                        &nbsp;&nbsp;&nbsp;&nbsp;6. &nbsp; คู่มือการตั้งค่าโปรแกรม Mozilla Firefox &nbsp;  <a style = {{color:'#ff0000'}} href="http://elearnhpas.fda.moph.go.th/elearning/pluginfile.php/249/mod_page/content/7/%E0%B8%84%E0%B8%B9%E0%B9%88%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%84%E0%B9%88%E0%B8%B2%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B8%A1%20Mozilla%20Firefox.pdf">&gt;&gt;&gt; Download &lt;&lt;&lt;</a> <br/>

                                                        &nbsp;&nbsp;&nbsp;&nbsp;7. &nbsp; คู่มือการแก้ไขอีเมล์ของ Openid &nbsp;  <a style = {{color:'#ff0000'}} href="http://elearnhpas.fda.moph.go.th/elearning/pluginfile.php/249/mod_page/content/7/%E0%B8%84%E0%B8%B9%E0%B9%88%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%81%E0%B8%81%E0%B9%89%E0%B9%84%E0%B8%82%E0%B8%AD%E0%B8%B5%E0%B9%80%E0%B8%A1%E0%B8%A5%E0%B9%8C%E0%B8%82%E0%B8%AD%E0%B8%87Openid.pdf">&gt;&gt;&gt; Download &lt;&lt;&lt;</a> <br/>

                                                        &nbsp;&nbsp;&nbsp;&nbsp;8. &nbsp; คู่มือการสมัคร Open ID * &nbsp;  <a style = {{color:'#ff0000'}} href="http://elearnhpas.fda.moph.go.th/elearning/pluginfile.php/249/mod_page/content/7/%E0%B8%84%E0%B8%B9%E0%B9%88%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%84%E0%B8%A3%20open%20ID.pdf">&gt;&gt;&gt; Download &lt;&lt;&lt;</a> <br/>

                                                        
                                                    </font>
                                                </span>
                                            </font>
                                            <br/>
                                            </p>



                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid.Column>
                                <Grid.Column width={5}>
                                    <Iconmini/>
                                </Grid.Column>
                            </Grid.Row>

                        </Grid>
                    </Segment>
                </Container>
            </>
    );
    }
    }
    export default Detail_cosmetic;
