import React, {Component} from 'react';
import {Button, Card, Container, Grid, Image, Input, Segment} from "semantic-ui-react";
import {Link} from "react-router-dom";
import src1 from '../../images/Banner04.png';
import Navbar from "../navbar";
import {apiurl} from "../../config/api";
import Iconmain from "../iconmain";
import Iconmini from "../iconmini";

class Detail_hazardous extends Component {

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
                                    <h2 style={{color: '#ffff'}}>หมวดวัตถุอันตราย</h2>
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
                                            <h1 align="center" style={{color:'#333399'}} >แบบฟอร์มสำหรับวัตถุอันตราย</h1><br/>
                                            <p>
                                            <font size="4">
                                                <span style={{textDecoration:'underline'}}>
                                                    <strong>แบบฟอร์มวัตถุอันตราย</strong></span>
                                                <br/><br/>

                                                <span>
                                                    <font size="3">
                                                        <span>
                                                        1. &nbsp;บันทึกการตรวจสอบคำขอและเอกสารประกอบคำขอ (Checklist)<img data-attachment-id="889" data-permalink="https://fdasamutprakan.com/form/foods/prefood/new_01/#main" data-orig-file="https://samutprakarnfda.files.wordpress.com/2012/04/new_01.gif" data-orig-size="34,13" data-comments-opened="0" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="new_01" data-image-description="" data-medium-file="https://samutprakarnfda.files.wordpress.com/2012/04/new_01.gif?w=34" data-large-file="https://samutprakarnfda.files.wordpress.com/2012/04/new_01.gif?w=34" class="alignnone size-full wp-image-889" src="https://samutprakarnfda.files.wordpress.com/2012/04/new_01.gif?w=700" alt="new_01"   /><br/></span>

                                                        <span style={{margin:'50px'}}>
                                                        1.1 &nbsp;การขอใบแทนประเภทต่าง <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2014/08/f-dup-1_checklist_e0b983e0b89ae0b981e0b897e0b899e0b897e0b8b8e0b881e0b88ae0b899e0b8b4e0b894.docx">(word)</a> <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2014/08/f-dup-1_checklist_e0b983e0b89ae0b981e0b897e0b899e0b897e0b8b8e0b881e0b88ae0b899e0b8b4e0b894.pdf">(pdf)</a><br/></span>

                                                        <span style={{margin:'50px'}}>
                                                        1.2 &nbsp;การต่ออายุใบสำคัญการขึ้นทะเบียนวัตถุอันตราย ใบอนุญาตผลิต นำเข้า ส่งออกหรือมีไว้ครอบครองวอ.3,ต่ออายุใบรับแจ้งการดำเนินการผลิต นำเข้า ส่งออก หรือมีไว้ครอบครอง วอ.2 <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2014/08/f-rnw-1_checklist_e0b895e0b988e0b8ade0b8ade0b8b2e0b8a2e0b8b8e0b897e0b8b8e0b881e0b88ae0b899e0b8b4e0b894.docx">(word)</a> <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2014/08/f-rnw-1_checklist_e0b895e0b988e0b8ade0b8ade0b8b2e0b8a2e0b8b8e0b897e0b8b8e0b881e0b88ae0b899e0b8b4e0b894.pdf">(pdf)</a><br/></span>

                                                        <span style={{margin:'50px'}}>
                                                        1.3 &nbsp;การแจ้งข้อเท็จจริงเกี่ยวกับวัตถุอันตรายชนิดที่1และการขอแก้ไขรายการในใบรับแจ้งข้อเท็จจริง วอ.1 <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2014/08/f-w01-1checklist_e0b981e0b888e0b989e0b887e0b8a7e0b8ad1.docx">(word)</a> <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2014/08/f-w01-1checklist_e0b981e0b888e0b989e0b887e0b8a7e0b8ad1.pdf">(pdf)</a><br/></span>

                                                       <span style={{margin:'50px'}}>
                                                       1.4 &nbsp;การแจ้งการดำเนินการผลิต นำเข้า ส่งออกหรือมีไว้ครอบครอง วอ.2 <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2014/08/f-w02-1checklist_e0b981e0b888e0b989e0b887e0b894e0b8b3e0b980e0b899e0b8b4e0b899e0b881e0b8b2e0b8a3e0b8a7e0b8ad2.docx">(word)</a> <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2014/08/f-w02-1checklist_e0b981e0b888e0b989e0b887e0b894e0b8b3e0b980e0b899e0b8b4e0b899e0b881e0b8b2e0b8a3e0b8a7e0b8ad2.pdf">(pdf)</a><br/></span>

                                                       <span style={{margin:'50px'}}>
                                                       1.5 &nbsp;การขอเปลี่ยนแปลงรายการในใบรับแจ้งการดำเนินการผลิต นำเข้า ส่งออก หรือมีไว้ในครอบครองวอ.2 <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2014/08/f-w02-2-checklist_e0b981e0b881e0b989e0b984e0b882e0b8a7e0b8ad2.docx">(word)</a> <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2014/08/f-w02-2-checklist_e0b981e0b881e0b989e0b984e0b882e0b8a7e0b8ad2.pdf">(pdf)</a><br/></span>

                                                       <span style={{margin:'50px'}}>
                                                       1.6 &nbsp;การขอแก้ไขเปลี่ยนแปลงรายการในใบอนุญาตผลิต นำเข้า ส่งออก หรือมีไว้ในครอบครองวอ.3 (กรณีไม่ตรวจสถานที่) <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2014/08/f-wo3-2_checklist_e0b981e0b881e0b989e0b984e0b882e0b8a7e0b8ad3e0b984e0b8a1e0b988e0b895e0b8a3e0b8a7e0b888e0b8aae0b896e0b8b2e0b899e0b897e0b8b5.docx">(word)</a> <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2014/08/f-wo3-2_checklist_e0b981e0b881e0b989e0b984e0b882e0b8a7e0b8ad3e0b984e0b8a1e0b988e0b895e0b8a3e0b8a7e0b888e0b8aae0b896e0b8b2e0b899e0b897e0b8b5.pdf">(pdf)</a><br/></span>

                                                       <span style={{margin:'50px'}}>
                                                       1.7 &nbsp;การขออนุญาตผลิต นำเข้า ส่งออก หรือมีไว้ครอบครองซึ่งวัตถุอันตรายชนิดที่ 3 และขอแก้ไขเปลี่ยนแปลง (กรณีตรวจสถานที่) <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2019/07/e0b89ae0b8b1e0b899e0b897e0b8b6e0b881e0b881e0b8b2e0b8a3e0b895e0b8a3e0b8a7e0b888e0b8aae0b8ade0b89ae0b884e0b8b3e0b882e0b8ad-checklist-3.pdf">(pdf)</a><br/></span>
                                        
                                                    </font>
                                                    <br/>

                                                    <font size="3">
                                                        <span>
                                                        2. &nbsp;หนังสือรับรองการปฏิบัติตามหลักเกณฑ์และเงื่อนไขการอนุญาต <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2012/04/e0b8abe0b899e0b8b1e0b887e0b8aae0b8b7e0b8ade0b8a3e0b8b1e0b89ae0b8a3e0b8ade0b887e0b881e0b8b2e0b8a3e0b89be0b88fe0b8b4e0b89ae0b8b1e0b895.pdf">(pdf)</a><br/></span>

                                                        <span>
                                                        3. &nbsp;ใบแจ้งการดำเนินการวัตถุอันตรายชนิดที่2 (วอ/สธ3)  <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2012/04/e0b983e0b89ae0b981e0b888e0b989e0b887e0b881e0b8b2e0b8a3e0b894e0b8b3e0b980e0b899e0b8b4e0b899e0b881e0b8b2e0b8a3e0b8a7e0b8b1e0b895e0b896.pdf">(pdf)</a><br/></span>
                                                        <span>

                                                        4. &nbsp;ใบแจ้งข้อเท็จจริงเกี่ยวกับวัตถุอันตรายชนิดที่ 1 (วอ.สธ.5) <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2012/04/e0b983e0b89ae0b981e0b888e0b989e0b887e0b882e0b989e0b8ade0b980e0b897e0b987e0b888e0b888e0b8a3e0b8b4e0b887e0b980e0b881e0b8b5e0b988e0b8a2.pdf">(pdf)</a> <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2014/08/e0b983e0b89ae0b981e0b888e0b989e0b887e0b8a71e0b8a7e0b8ade0b8aae0b8985.docx">(doc)</a><br/></span>
                                                        <span>

                                                        5. &nbsp;ฟอร์มคำขออนุญาตมีไว้ในครอบครอง (วอ.7) <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2012/04/e0b89fe0b8ade0b8a3e0b98ce0b8a1e0b884e0b8b3e0b882e0b8ade0b8ade0b899e0b8b8e0b88de0b8b2e0b895e0b8a1e0b8b5e0b984e0b8a7e0b989e0b983e0b899.pdf">(pdf)</a>   <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2014/08/e0b895e0b8b1e0b8a7e0b8ade0b8a2e0b988e0b8b2e0b887e0b884e0b8b3e0b882e0b8ade0b884e0b8a3e0b8ade0b89ae0b884e0b8a3e0b8ade0b887-e0b8a7e0b8ad3.pdf"><font color="#ff00ff">(ตัวอย่างการจัดทำคำขอ) (คลิก)</font></a><br/></span>
                                                        <span>

                                                        6. &nbsp;ข้อความคำเตือนตามกฎหมาย <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2012/04/e0b882e0b989e0b8ade0b884e0b8a7e0b8b2e0b8a1e0b884e0b8b3e0b980e0b895e0b8b7e0b8ade0b899e0b895e0b8b2e0b8a1e0b881e0b88ee0b8abe0b8a1e0b8b2.pdf">(pdf)</a>   
                                                        <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2014/08/e0b882e0b989e0b8ade0b884e0b8a7e0b8b2e0b8a1e0b884e0b8b3e0b980e0b895e0b8b7e0b8ade0b899.pdf"><font color="#ff00ff"> (ตัวอย่างการจัดทำข้อความคำเตือน) คลิก</font></a><br/></span>
                                                        <span>

                                                        7. &nbsp;คำขอต่ออายุใบอนุญาต (วอ.9) <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2014/08/e0b884e0b8b3e0b882e0b8ade0b895e0b988e0b8ade0b8ade0b8b2e0b8a2e0b8b8e0b983e0b89ae0b8ade0b899e0b8b8e0b88de0b8b2e0b895e0b8a7e0b8ad-92.pdf">(pdf)</a>  <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2014/08/11_e0b884e0b8b3e0b882e0b8ade0b895e0b988e0b8ade0b8ade0b8b2e0b8a2e0b8b8e0b983e0b89ae0b8ade0b899e0b8b8e0b88de0b8b2e0b895e0b8a7e0b8ad-9-2.doc">(word)</a><br/></span>
                                                        <span>

                                                        8. &nbsp;หนังสือรับรองการเป็นผู้ควบคุมการใช้วัตถุอันตราย <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2014/08/e0b8abe0b899e0b8b1e0b887e0b8aae0b8b7e0b8ade0b8a3e0b8b1e0b89ae0b8a3e0b8ade0b887e0b881e0b8b2e0b8a3e0b980e0b89be0b987e0b899e0b89ce0b8b9.pdf">(pdf)</a> <br/></span>
                                                        <span>

                                                        9. &nbsp;คำขอแก้ไขเปลี่ยนแปลงรายการในใบรับแจ้งการดำเนินการ วอ.2 (วอ. สธ 11) <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2014/08/e0b8a7e0b8ade0b8aae0b89811_e0b884e0b8b3e0b882e0b8ade0b981e0b881e0b989e0b984e0b882e0b980e0b89be0b8a5e0b8b5e0b988e0b8a2e0b899e0b981.pdf">(pdf)</a><br/></span>

                                                        <span>
                                                        10. &nbsp;คำขอต่ออายุใบรับแจ้งการดำเนินการ วอ.2 (วอ. สธ 12) <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2014/08/12_.pdf">(pdf)</a><br/></span>

                                                        <span>
                                                        11. &nbsp;หนังสือมอบอำนาจและแต่งตั้งผู้ดำเนินกิจการ <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2014/08/e0b8abe0b899e0b8b1e0b887e0b8aae0b8b7e0b8ade0b8a1e0b8ade0b89ae0b8ade0b8b3e0b899e0b8b2e0b888e0b981e0b8a5e0b8b0e0b981e0b895e0b988e0b887.pdf">(pdf)</a> <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2014/08/e0b8abe0b899e0b8b1e0b887e0b8aae0b8b7e0b8ade0b8a1e0b8ade0b89ae0b8ade0b8b3e0b899e0b8b2e0b888e0b981e0b8a5e0b8b0e0b981e0b895e0b988e0b887.doc">(word)</a><br/></span>

                                                    </font>
                                                </span>
                                                <br/>

                                                <span>
                                                    <strong>สืบค้นข้อมูลวัตถุอันตราย/ข้อมูลวิชาการ <a style={{textDecoration:'underline'}} href="http://www.fda.moph.go.th/sites/Hazardous/SitePages/List_of_hazmat.aspx">(คลิก)
                                                    <img data-attachment-id="2209" data-permalink="https://fdasamutprakan.com/form/cosmetics/click-here-0042/#main" data-orig-file="https://samutprakarnfda.files.wordpress.com/2018/06/click-here-0042.gif" data-orig-size="76,26" data-comments-opened="0" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="click-here-0042" data-image-description="" data-medium-file="https://samutprakarnfda.files.wordpress.com/2018/06/click-here-0042.gif?w=76" data-large-file="https://samutprakarnfda.files.wordpress.com/2018/06/click-here-0042.gif?w=76" class="alignnone size-full wp-image-2209" src="https://samutprakarnfda.files.wordpress.com/2018/06/click-here-0042.gif?w=700" alt="" /></a>

                                                    </strong></span>
                                                <br/><br/>

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
    export default Detail_hazardous;
