import React, {Component} from 'react';
import {Button, Card, Container, Grid, Image, Input, Segment} from "semantic-ui-react";
import {Link} from "react-router-dom";
import src1 from '../../images/Banner04.png';
import Navbar from "../navbar";
import {apiurl} from "../../config/api";
import Iconmain from "../iconmain";
import Iconmini from "../iconmini";

class Detail_drug extends Component {

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
                                    <h2 style={{color: '#ffff'}}>หมวดยา</h2>
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
                                            <h1 align="center" style={{color:'#800000'}} >แบบฟอร์มสำหรับผู้ประกอบการด้านยา</h1>
                                            <p>
                                            <font size="4">
                                                <span style={{color:'#000000'}}>
                                                    <strong>การสำรวจและเก็บข้อมูลสถานที่ขายยาแผนปัจจุบัน <font color="#ff0000">ตามบันได GPP ขั้ันที่ 2</font> &nbsp;<a href="https://samutprakarnfda.files.wordpress.com/2020/02/gpp-e0b882e0b8b1e0b989e0b899e0b897e0b8b5e0b988-2.pdf">>>คลิก</a> </strong><img data-attachment-id="2640" data-permalink="https://fdasamutprakan.com/form/foods/update/#main" data-orig-file="https://samutprakarnfda.files.wordpress.com/2019/09/update.gif" data-orig-size="46,14" data-comments-opened="0" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="update" data-image-description="" data-medium-file="https://samutprakarnfda.files.wordpress.com/2019/09/update.gif?w=46" data-large-file="https://samutprakarnfda.files.wordpress.com/2019/09/update.gif?w=46" class="alignnone size-full wp-image-2640" src="https://samutprakarnfda.files.wordpress.com/2019/09/update.gif?w=700" alt="update"   /></span>
                                                <br/><br/>

                                                <span style={{color:'#000000'}}>
                                                    <strong>การตรวจสถานที่ขายยาแผนปัจจุบันเพื่อประกอบการต่ออายุใบอนุญาต ประจำปี 2564 สำหรับร้านยาที่ได้รับอนุญาตตั้งแต่ 25 มิ.ย. 57 <font color="#ff0000">(Full GPP)</font> &nbsp;<a href="https://samutprakarnfda.files.wordpress.com/2020/02/full-gpp.pdf">>>คลิก</a> </strong><img data-attachment-id="2640" data-permalink="https://fdasamutprakan.com/form/foods/update/#main" data-orig-file="https://samutprakarnfda.files.wordpress.com/2019/09/update.gif" data-orig-size="46,14" data-comments-opened="0" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="update" data-image-description="" data-medium-file="https://samutprakarnfda.files.wordpress.com/2019/09/update.gif?w=46" data-large-file="https://samutprakarnfda.files.wordpress.com/2019/09/update.gif?w=46" class="alignnone size-full wp-image-2640" src="https://samutprakarnfda.files.wordpress.com/2019/09/update.gif?w=700" alt="update"   /></span>
                                                <br/>
                                                <br/>
                                            </font>
                                            </p>
                                            <p>
                                                <span style={{color:'#000000'}}>
                                                    <font size="5" style={{textDecoration:'underline'}}>
                                                        <strong>เอกสารแนะนำ</strong>
                                                    </font>
                                                    <font size="5" color="#ff0000">
                                                        <strong>&nbsp;&nbsp;!โปรดอ่าน!&nbsp;&nbsp;</strong>
                                                    </font>
                                                    <br/>
                                                    <br/>
                                                </span>

                                                <span style={{color:'#000080'}}>
                                                    <font size="3" style={{margin:'25px'}}>
                                                      1. เอกสารแนะนำ  <a style={{color:'#4863A0'},{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2012/04/e0b881e0b88ee0b881e0b8a3e0b8b0e0b897e0b8a3e0b8a7e0b8872556e0b8a3e0b989e0b8b2e0b899e0b882e0b8b2e0b8a2e0b8a2e0b8b2.pdf">(pdf)</a>
                                                    </font><br/>
                                                    <font size="3" style={{margin:'25px'}}>
                                                       2. เอกสารประกอบการบรรยาย กฎกระทรวงฉบับใหม่ <a style={{color:'#4863A0'},{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2012/04/ppt-e0b89ce0b8ad-e0b8a7e0b8b4e0b899e0b8b4e0b895.pdf">(pdf)</a>
                                                    </font><br/>
                                                    <font size="3" style={{margin:'25px'}}>
                                                       3. เอกสารประกอบการบรรยายประกาศกระทรวงสาธารณสุข เรื่อง การกำหนดเกี่ยวกับสถานที่อุปกรณ์และวิธีปฏิบัติทางเภสัชกรรมชุมชน <a style={{color:'#4863A0'},{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2012/04/ppt-e0b8a7e0b8a3e0b8b2e0b8a7e0b8b8e0b898.pdf">(pdf)</a>
                                                    </font><br/>
                                                    <font size="3" style={{margin:'25px'}}>
                                                       4. คำแนะนำในการจัดสถานที่และจัดทำป้ายผู้มีหน้าที่ปฏิบัติการ <a style={{color:'#4863A0'},{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2012/04/e0b884e0b8b3e0b981e0b899e0b8b0e0b899e0b8b3e0b983e0b899e0b881e0b8b2e0b8a3e0b888e0b8b1e0b894e0b8aae0b896e0b8b2e0b899e0b897e0b8b5e0b988.pdf">(pdf)</a>
                                                    </font><br/>
                                                    <font size="3" style={{margin:'25px'}}>
                                                       5. ประกาศเรื่องแบบคำขอและใบอนุญาต<a style={{color:'#4863A0'},{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2012/04/e0b89be0b8a3e0b8b0e0b881e0b8b2e0b8a8e0b980e0b8a3e0b8b7e0b988e0b8ade0b887e0b981e0b89ae0b89ae0b884e0b8b3e0b882e0b8ade0b981e0b8a5e0b8b0.pdf"> (pdf)</a>
                                                    </font><br/>
                                                    <font size="3" style={{margin:'25px'}}>
                                                       6. คู่มือการตรวจประเมินวิธีปฏิบัติทางเภสัชกรรมชุมชนGPP<a style={{color:'#4863A0'},{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2014/11/e0b884e0b8b9e0b988e0b8a1e0b8b7e0b8ad-gpp-final-update.pdf"> (pdf)</a>
                                                    </font><br/>
                                                    <font size="3" style={{margin:'25px'}}>
                                                     7. แนวทางการจัดการสู่มาตรฐานวิธีปฏิบัติทางเภสัชกรรม GPP <a style={{color:'#4863A0'},{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2014/11/e0b981e0b899e0b8a7e0b897e0b8b2e0b887e0b881e0b8b2e0b8a3e0b888e0b8b1e0b894e0b881e0b8b2e0b8a3e0b8aae0b8b9e0b988gpp-sep-2015-1.pdf"> (pdf)</a>
                                                    </font><br/>
                                                </span>
                                            </p>

                                            <p>
                                                <span style={{color:'#000000'}}>
                                                    <font size="5" style={{textDecoration:'underline'}}>
                                                        <strong>แบบฟอร์ม</strong>
                                                    </font>
                                                    <br/>
                                                    <br/>
                                                </span>

                                                <span style={{color:'#000000'}}>
                                                    <font size="4">
                                                        &nbsp;&nbsp;<strong>คำขออนุญาตใหม่</strong>
                                                    </font>
                                                    <br/>
                                                </span>

                                                <p>
                                                <span style={{color:'#000080'}}>
                                                    <font size="3">
                                                    &nbsp;&nbsp;&nbsp;&nbsp; 1. &nbsp;แบบฟอร์มขออนุญาตขายยาแผนปัจจุบัน (ขอใหม่) (ขย.1) <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2020/02/e0b88ae0b8b8e0b894e0b882e0b8ade0b8ade0b899e0b8b8e0b88de0b8b2e0b895-e0b882e0b8a2-e0b89be0b8b5-63.pdf">(pdf)</a><img data-attachment-id="1961" data-permalink="https://fdasamutprakan.com/form/foods/prefood/newbig-2/#main" data-orig-file="https://samutprakarnfda.files.wordpress.com/2018/02/newbig.gif" data-orig-size="75,22" data-comments-opened="0" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="NEWbig" data-image-description="" data-medium-file="https://samutprakarnfda.files.wordpress.com/2018/02/newbig.gif?w=75" data-large-file="https://samutprakarnfda.files.wordpress.com/2018/02/newbig.gif?w=75" class="alignnone wp-image-1961" src="https://samutprakarnfda.files.wordpress.com/2018/02/newbig.gif?w=65&#038;h=19" alt="" width="50" height="15" /> <br/>   

                                                    &nbsp;&nbsp;&nbsp;&nbsp; 2. &nbsp;ชุดคำขออนุญาตขายส่งยาแผนปัจจุบัน (ขายส่งยา) (ขย.4) <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2019/08/e0b882e0b8b2e0b8a2e0b8aae0b988e0b887e0b8a2e0b8b2e0b981e0b89ce0b899e0b89be0b8b1e0b888e0b888e0b8b8e0b89ae0b8b1e0b899.pdf">(pdf)</a> <br/>

                                                    &nbsp;&nbsp;&nbsp;&nbsp; 3. &nbsp;คำขออนุญาตขายยาแผนปัจจุบันเฉพาะยาบรรจุเสร็จฯ (ขย.2) <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2012/04/e0b882e0b8a2-2.pdf">(pdf)</a>  <br/>

                                                    &nbsp;&nbsp;&nbsp;&nbsp; 4. &nbsp;คำขออนุญาตขายยาแผนปัจจุบันเฉพาะยาบรรจุเสร็จสำหรับสัตว์ (ขย.3) <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2012/04/e0b882e0b8a2-3.pdf">(pdf)</a><br/>

                                                    &nbsp;&nbsp;&nbsp;&nbsp; 5. &nbsp;คำขออนุญาตขายยาส่งแผนปัจจุบัน (ขย4) <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2012/04/e0b882e0b8a2-4.pdf">(pdf)</a><br/>

                                                    &nbsp;&nbsp;&nbsp;&nbsp; 6. &nbsp;คำรับรองผู้มีหน้าที่ปฏิบัติการ (ขย14) และคำรับรองจากหน่วยงาน <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2014/11/e0b882e0b8a214e0b981e0b8a5e0b8b0e0b884e0b8b3e0b8a3e0b8b1e0b89ae0b8a3e0b8ade0b887e0b888e0b8b2e0b881e0b8abe0b899e0b988e0b8a7e0b8a2e0b887.pdf">(pdf)</a> <br/>

                                                    &nbsp;&nbsp;&nbsp;&nbsp; 7. &nbsp;บัญชีการซื้อยา (ขย9) <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2012/04/e0b882e0b8a2-9.pdf">(pdf)</a>  <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2014/11/e0b89ae0b8b1e0b88de0b88ae0b8b5e0b881e0b8b2e0b8a3e0b88be0b8b7e0b989e0b8ade0b8a2e0b8b2e0b8ade0b8b1e0b899e0b895e0b8a3e0b8b2e0b8a2e0b882.docx">(word)</a><br/>

                                                    &nbsp;&nbsp;&nbsp;&nbsp; 8. &nbsp;บัญชีการขายยาควบคุมพิเศษ (ขย10) <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2012/04/e0b882e0b8a2-10.pdf">(pdf)</a> <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2014/11/e0b89ae0b8b1e0b88de0b88ae0b8b5e0b881e0b8b2e0b8a3e0b882e0b8b2e0b8a2e0b8a2e0b8b2e0b884e0b8a7e0b89ae0b884e0b8b8e0b8a1e0b89ee0b8b4e0b980.docx">(word)</a> <br/>

                                                    &nbsp;&nbsp;&nbsp;&nbsp; 9. &nbsp;บัญชีการขายยาอันตรายเฉพาะรายการยาที่เลขาธิการคณะกรรมการอาหารและยากำหนด (ขย 11) <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2012/04/e0b882e0b8a2-11.pdf">(pdf)</a>  <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2014/11/e0b89ae0b8b1e0b88de0b88ae0b8b5e0b881e0b8b2e0b8a3e0b882e0b8b2e0b8a2e0b8a2e0b8b2e0b8ade0b8b1e0b899e0b895e0b8a3e0b8b2e0b8a2e0b882e0b8a211.docx">(word)</a> <br/>

                                                    &nbsp;&nbsp;&nbsp;&nbsp; 10. &nbsp;บัญชีการขายยาตามใบสั่งของผู้ประกอบวิชาชีพเวชกรรม ผู้ประกอบโรคศิลปะ หรือผู้ประกอบวิชาชีพการสัตวแพทย์ (ขย.12) <br/>

                                                    &nbsp;&nbsp;&nbsp;&nbsp; 11. &nbsp;รายงานการขายยาตามที่เลขาธิการคณะกรรมการอาหารและยากำหนด (ขย. 13) <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2012/04/e0b882e0b8a2-13.pdf">(pdf)</a> <br/>

                                                    &nbsp;&nbsp;&nbsp;&nbsp; 12. &nbsp;แตัวอย่าง การทำบัญชีตัวอย่าง ขย 9 <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2014/08/e0b895e0b8b1e0b8a7e0b8ade0b8a2e0b988e0b8b2e0b887-e0b882e0b8a2-9.pdf">(pdf)</a><br/>

                                                    &nbsp;&nbsp;&nbsp;&nbsp; 13. &nbsp;ตัวอย่าง การทำบัญชีตัวอย่าง ขย 10 <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2014/08/e0b895e0b8b1e0b8a7e0b8ade0b8a2e0b988e0b8b2e0b887-e0b882e0b8a2-10.pdf">(pdf)</a> <br/>

                                                    &nbsp;&nbsp;&nbsp;&nbsp; 14. &nbsp;ตัวอย่าง การทำบัญชี ตัวอย่างขย 11 (ปรับปรุงใหม่) <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2014/11/e0b895e0b8b1e0b8a7e0b8ade0b8a2e0b988e0b8b2e0b887e0b89ae0b8b1e0b88de0b88ae0b8b5e0b881e0b8b2e0b8a3e0b882e0b8b2e0b8a2e0b8a2e0b8b2e0b8ad.pdf">(pdf)</a>  <br/>

                                                    &nbsp;&nbsp;&nbsp;&nbsp; 15. &nbsp;ตัวอย่าง การทำบัญชี ตัวอย่าง ขย 12 <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2014/08/e0b895e0b8b1e0b8a7e0b8ade0b8a2e0b988e0b8b2e0b887-e0b882e0b8a2-12.pdf">(pdf)</a> <br/>

                                                    &nbsp;&nbsp;&nbsp;&nbsp; 16. &nbsp;หนังสือมอบอำนาจให้ทำการแทน <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2014/11/e0b8abe0b899e0b8b1e0b887e0b8aae0b8b7e0b8ade0b8a1e0b8ade0b89ae0b8ade0b8b3e0b899e0b8b2e0b888e0b983e0b8abe0b989e0b897e0b8b3e0b881e0b8b2.pdf">(pdf)</a> <br/>

                                                    &nbsp;&nbsp;&nbsp;&nbsp; 17. &nbsp;หนังสือมอบอำนาจและแต่งตั้งผู้ดำเนินกิจการ สำหรับผู้รับอนุญาตที่เป็นนิติบุคคล <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2014/11/e0b8abe0b899e0b8b1e0b887e0b8aae0b8b7e0b8ade0b8a1e0b8ade0b89ae0b8ade0b8b3e0b899e0b8b2e0b888e0b981e0b8a5e0b8b0e0b981e0b895e0b988e0b887.pdf">(pdf)</a> <br/>

                                                    &nbsp;&nbsp;&nbsp;&nbsp; 18. &nbsp;ชุดคำขอนำหรือสั่งยาแผนปัจจุบันเข้ามาในราชอาณาจักร <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2014/11/e0b899e0b8b3e0b8aae0b8b1e0b988e0b887e0b8a2e0b8b2e0b981e0b89ce0b899e0b89be0b8b1e0b888e0b888e0b8b8e0b89ae0b8b1e0b899.pdf">(pdf)</a> <br/>

                                                    &nbsp;&nbsp;&nbsp;&nbsp; 19. &nbsp;ชุดคำขออนุญาตผลิตยาแผนโบราณ <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2014/11/e0b89ce0b8a5e0b8b4e0b895e0b8a2e0b8b2e0b981e0b89ce0b899e0b982e0b89ae0b8a3e0b8b2e0b893.pdf">(pdf)</a> <br/>

                                                    &nbsp;&nbsp;&nbsp;&nbsp; 20. &nbsp;ชุดคำของขาย-นำสั่งฯยาแผนโบราณ <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2014/11/e0b882e0b8b2e0b8a2-e0b899e0b8b3e0b8aae0b8b1e0b988e0b887e0b8afe0b8a2e0b8b2e0b981e0b89ce0b899e0b982e0b89ae0b8a3e0b8b2e0b893.pdf">(pdf)</a> <br/>

                                                    </font>
                                                </span>
                                                </p>

                                                <span style={{color:'#880033'}}>
                                                    <font size="4">
                                                        &nbsp;&nbsp;<strong>คำขอแก้ไขเปลี่ยนแปลง</strong>
                                                    </font>
                                                    <br/>
                                                </span>

                                                <p>
                                                <span style={{color:'#880055'}}>
                                                    <font size="3">

                                                    &nbsp;&nbsp;&nbsp;&nbsp; 1. &nbsp;ชุดคำขอเปลี่ยนเปลงผู้มีหน้าที่ปฏิบัติการ <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2014/08/e0b980e0b89be0b8a5e0b8b5e0b988e0b8a2e0b899e0b981e0b89be0b8a5e0b887e0b89ce0b8b9e0b989e0b8a1e0b8b5e0b8abe0b899e0b989e0b8b2e0b897e0b8b5.pdf">(PDF)</a> <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2014/11/e0b980e0b89be0b8a5e0b8b5e0b988e0b8a2e0b899e0b981e0b89be0b8a5e0b887e0b89ce0b8b9e0b989e0b8a1e0b8b5e0b8abe0b899e0b989e0b8b2e0b897e0b8b5.docx">(word)</a> <br/>   

                                                    &nbsp;&nbsp;&nbsp;&nbsp; 2. &nbsp;ชุดคำขอใบแทน-ย้ายสถานที่ขายยาแผนปัจจุบัน <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2014/11/e0b882e0b8ade0b983e0b89ae0b981e0b897e0b899-e0b8a2e0b989e0b8b2e0b8a2e0b8aae0b896e0b8b2e0b899e0b897e0b8b5e0b988e0b882e0b8b2e0b8a2e0b8a2.pdf">(PDF)</a>  <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2014/11/e0b882e0b8ade0b983e0b89ae0b981e0b897e0b899-e0b8a2e0b989e0b8b2e0b8a2e0b8aae0b896e0b8b2e0b899e0b897e0b8b5e0b988e0b882e0b8b2e0b8a2e0b8a2.docx">(word)</a> <br/> 

                                                    &nbsp;&nbsp;&nbsp;&nbsp; 3. &nbsp;ชุดคำขอใบแทน-ย้ายสถานที่นำหรือสั่งยาแผนปัจจุบัน <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2014/11/e0b882e0b8ade0b983e0b89ae0b981e0b897e0b899-e0b8a2e0b989e0b8b2e0b8a2e0b8aae0b896e0b8b2e0b899e0b897e0b8b5e0b988e0b899e0b8b3e0b8abe0b8a3.pdf">(PDF)</a> <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2014/11/e0b882e0b8ade0b983e0b89ae0b981e0b897e0b899-e0b8a2e0b989e0b8b2e0b8a2e0b8aae0b896e0b8b2e0b899e0b897e0b8b5e0b988e0b899e0b8b3e0b8abe0b8a3.docx">(word)</a> <br/> 

                                                    &nbsp;&nbsp;&nbsp;&nbsp; 4. &nbsp;ชุดคำขอใบแทน-ย้ายสถานที่ผลิต-ขาย-นำหรือสั่งยาแผนโบราณ <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2014/11/e0b882e0b8ade0b983e0b89ae0b981e0b897e0b899-e0b8a2e0b989e0b8b2e0b8a2e0b8aae0b896e0b8b2e0b899e0b897e0b8b5e0b988e0b89ce0b8a5e0b8b4e0b895.pdf">(PDF)</a>  <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2014/11/e0b882e0b8ade0b983e0b89ae0b981e0b897e0b899-e0b8a2e0b989e0b8b2e0b8a2e0b8aae0b896e0b8b2e0b899e0b897e0b8b5e0b988e0b89ce0b8a5e0b8b4e0b895.docx">(word)</a> <br/> 

                                                    &nbsp;&nbsp;&nbsp;&nbsp; 5. &nbsp;คำขอเปลี่ยนแปลงเวลาทำการ-ชื่อร้าน-ชื่อ-สกุล <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2014/11/e0b980e0b89be0b8a5e0b8b5e0b988e0b8a2e0b899e0b981e0b89be0b8a5e0b887e0b980e0b8a7e0b8a5e0b8b2e0b897e0b8b3e0b881e0b8b2e0b8a3-e0b88ae0b8b7.pdf">(PDF)</a>  <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2014/11/e0b980e0b89be0b8a5e0b8b5e0b988e0b8a2e0b899e0b981e0b89be0b8a5e0b887e0b980e0b8a7e0b8a5e0b8b2e0b897e0b8b3e0b881e0b8b2e0b8a3-e0b88ae0b8b7.docx">(word)</a> <br/> 

                                                    &nbsp;&nbsp;&nbsp;&nbsp; 6. &nbsp;แบบยกเลิกผู้มีหน้าที่ปฏิบัติการ(ร้านขายยา,นำเข้ายา,ผลิตยา) <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2019/11/e0b981e0b89ae0b89ae0b8a2e0b881e0b980e0b8a5e0b8b4e0b881e0b89ce0b8b9e0b989e0b8a1e0b8b5e0b8abe0b899e0b989e0b8b2e0b897e0b8b5e0b988e0b89be0b88fe0b8b4e0b89ae0b8b1e0b895e0b8b4e0b881e0b8b2e0b8a3.pdf">(pdf)</a> <br/> 

                                                    &nbsp;&nbsp;&nbsp;&nbsp; 7. &nbsp;แบบยกเลิกใบอนุญาตด้านยา <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2019/11/e0b981e0b89ae0b89ae0b8a2e0b881e0b980e0b8a5e0b8b4e0b881e0b8a3e0b989e0b8b2e0b899e0b8a2e0b8b262.pdf">(pdf)</a> <br/> 

                                                    </font>
                                                </span>
                                                </p>
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
    export default Detail_drug;
