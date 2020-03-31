import React, {Component} from 'react';
import {Button, Card, Container, Grid, Image, Input, Segment} from "semantic-ui-react";
import {Link} from "react-router-dom";
import src1 from '../../images/Banner04.png';
import Navbar from "../navbar";
import {apiurl} from "../../config/api";
import Iconmain from "../iconmain";
import Iconmini from "../iconmini";

class Detail_narcotic extends Component {

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
                                    <h2 style={{color: '#ffff'}}>หมวดวัตถุเสพติด</h2>
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
                                            <h1 align="center" style={{color:'#666600'}} >แบบฟอร์มวัตถุออกฤทธิ์/วัตถุเสพติด</h1><br/>
                                            <p>
                                            <font size="4" color="#880033">
                                                <span>
                                                    ∗∗การยื่นคำขอใหม่ สำหรับใบอนุญาตขายวัตถุออกฤทธิ์ต่อจิตและประสาทประเภท 2 และใบอนุญาตครอบครองวัตถุออกฤทธิ์ประเภท 3,4 ต้องยื่นคำขอรับใบอนุญาตผ่านระบบ e-Submission ทางเว็บไซต์ privus.fda.moph.go.th 
                                                </span>
                                                <br/><br/>
                                            </font>

                                            <font size="5" color="#000000">
                                                <span>
                                                    <strong>📁 ดาวน์โหลดแบบฟอร์มและคู่มือที่เกี่ยวข้อง</strong>
                                                </span>
                                                <br/><br/>
                                            </font>

                                                <span>
                                                    <font size="3" style={{margin:'30px'}}>
                                                        1. &nbsp;แบบฟอร์ม หนังสือแจ้งความประสงค์ขอใช้งานระบบ e-submission ให้ยื่นเอกสารประกอบการขอเปิดสิทธิเข้าใช้งานระบบ e-Submission ณ กลุ่มงานคุ้มครองผู้บริโภคฯ สสจ.สมุทรปราการ ในวันและเวลาราชการ <font color="#ff0000">โดยสิทธิเข้าใช้งานระบบได้ไม่เกิน 1 ปี นับแต่วันที่ยื่นเอกสาร </font> <br/>
                                                        <strong><a href="https://samutprakarnfda.files.wordpress.com/2018/02/e0b980e0b8ade0b881e0b8aae0b8b2e0b8a3e0b980e0b89be0b8b4e0b894e0b8aae0b8b4e0b897e0b898e0b8b4e0b98ce0b8a7e0b888.pdf">ดาวน์โหลดแบบฟอร์มเปิดสิทธิ &lt;&lt;&lt; คลิก</a></strong>
                                                    </font>
                                                    <br/>
                                                    <br/>

                                                    <font size="3" style={{margin:'30px'}}>
                                                        2. &nbsp;คู่มือการขอ Open ID เพื่อสร้างบัญชีผู้ใช้งานผ่านระบบของสำนักงานพัฒนารัฐบาลดิจิทัล (องค์การมหาชน) (สพร.) www.egov.go.th (หากมีปัญหาในการสมัครเพื่อสร้างบัญชีผู้ใช้งาน โปรดติดต่อ 0 2612 6060) <br/>
                                                        <strong><a href="http://www.fda.moph.go.th/sites/Narcotics/Shared%20Documents/%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B7%E0%B8%AD%E0%B9%80%E0%B8%A7%E0%B8%B5%E0%B8%A2%E0%B8%99/K_OPEN-ID.pdf">ดาวน์โหลดคู่มือการสมัคร Open ID &lt;&lt;&lt; คลิก</a></strong>
                                                    </font>
                                                    <br/>
                                                    <br/>

                                                    <font size="3" style={{margin:'30px'}}>
                                                        3. &nbsp;คู่มือการขอ Open ID คู่มือการใช้ยื่นเอกสารในระบบ e-submission ตามประเภทคำขอใบอนุญาตที่จะยื่น <br/>
                                                        <font style={{margin:'60px'}}>
                                                            3.1 คู่มือการใช้งานระบบ e-submission กรณียื่นคำขอใบอนุญาตขายวัตถุออกฤทธิ์ประเภท 2 <br/>
                                                            <font style={{margin:'60px'}}>
                                                            <strong><a href="http://www.fda.moph.go.th/sites/Narcotics/Shared%20Documents/%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B7%E0%B8%AD%E0%B9%80%E0%B8%A7%E0%B8%B5%E0%B8%A2%E0%B8%99/K59_E-sub_pp_ver3.pdf">ดาวน์โหลดคู่มือการยื่นคำขอใหม่ วจ2 &lt;&lt;&lt; คลิก</a></strong><br/>
                                                        </font></font>

                                                        <font style={{margin:'60px'}}>
                                                            3.2 คู่มือการใช้งานระบบ e-submission การยื่นคำขอใบอนุญาตครอบครองวัตถุออกฤทธิ์ประเภท 3,4 กรณียื่นคำขอรับใบอนุญาตเพื่อการบำบัดรักษาโรค <br/>
                                                            <font style={{margin:'60px'}}>
                                                            <strong><a href="http://www.fda.moph.go.th/sites/Narcotics/Shared%20Documents/%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B7%E0%B8%AD%E0%B9%80%E0%B8%A7%E0%B8%B5%E0%B8%A2%E0%B8%99/K59_E-sub_pp_ver3.pdf">ดาวน์โหลดคู่มือการยื่นคำขอใหม่ วจ 3 4 &lt;&lt;&lt; คลิก</a></strong><br/>
                                                        </font></font>

                                                        <font style={{margin:'60px'}}>
                                                            3.3  กรณีนิติบุคคล ให้เพิ่ม หนังสือมอบหมายให้เป็นผู้รับอนุญาต (ให้กรรมการบริษัทผู้มีอำนาจลงนามมอบหมายให้แพทย์เป็นผู้ดำเนินการในใบอนุญาต) โดยเอกสารนี้ให้ยื่นมาในระบบ  <br/>
                                                            <font style={{margin:'60px'}}>
                                                            <strong><a href="https://samutprakarnfda.files.wordpress.com/2018/04/e0b8abe0b899e0b8b1e0b887e0b8aae0b8b7e0b8ade0b8a1e0b8ade0b89ae0b8abe0b8a1e0b8b2e0b8a2e0b89ce0b8b9e0b989e0b894e0b8b3e0b980e0b899e0b8b4.pdf">ดาวน์โหลดหนังสือมอบหมายให้เป็นผู้รับอนุญาต &lt;&lt;&lt; คลิก</a></strong><br/>
                                                        </font></font>
                                                    </font>
                                                    <br/>
                                                    <br/>

                                                     <font size="3" style={{margin:'30px'}}>
                                                        4. &nbsp;<a href="https://samutprakarnfda.files.wordpress.com/2020/01/e0b884e0b8b3e0b882e0b8ade0b981e0b881e0b989e0b984e0b882e0b980e0b89be0b8a5e0b8b5e0b988e0b8a2e0b899e0b981e0b89be0b8a5e0b887e0b882e0b989e0b8ade0b8a1e0b8b9e0b8a5e0b8a3e0b8b2e0b8a2e0b881e0b8b2.pdf"><strong>แบบฟอร์มคำขอแก้ไขเปลี่ยนแปลงรายการในใบอนุญาตวัตถุออกฤทธิ์ &lt;&lt;&lt; คลิก 
                                                        </strong></a><br/>
                                                        ***กรณีสถานพยาบาลเอกชน หากประสงค์ที่จะเปลี่ยนแพทย์ผู้ดำเนินการในใบอนุญาตยื่นคำขอยกเลิกแล้วดำเนินการยื่นขอใหม่แทนการแก้ไขเปลี่ยน***
                                                    </font>
                                                    <br/>
                                                    <br/>

                                                    <font size="3" style={{margin:'30px'}}>
                                                        5. &nbsp;<a href="https://samutprakarnfda.files.wordpress.com/2018/12/%E0%B8%84%E0%B8%B3%E0%B8%82%E0%B8%AD%E0%B8%A2%E0%B8%81%E0%B9%80%E0%B8%A5%E0%B8%B4%E0%B8%81%E0%B8%A7%E0%B8%B1%E0%B8%95%E0%B8%96%E0%B8%B8%E0%B8%AD%E0%B8%AD%E0%B8%81%E0%B8%A4%E0%B8%97%E0%B8%98%E0%B8%B4%E0%B9%8C.pdf"><strong>แบบฟอร์มคำขอยกเลิกใบอนุญาตวัตถุออกฤทธิ์ต่อจิตและประสาท  &lt;&lt;&lt; คลิก 
                                                        </strong></a><br/>
                                                    </font>
                                                    <br/>
                                                    <br/>

                                                     <font size="3" style={{margin:'30px'}}>
                                                        6. &nbsp;<a href="http://www.fda.moph.go.th/sites/Narcotics/Shared%20Documents/%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B7%E0%B8%AD%E0%B9%80%E0%B8%A7%E0%B8%B5%E0%B8%A2%E0%B8%99/K60_%20license_Operator_privus.pdf"><strong>คู่มือการใช้งานระบบสำหรับต่ออายุใบอนุญาต (คำขอต่ออายุใบอนุญาต)   &lt;&lt;&lt; คลิก 
                                                        </strong></a><br/>
                                                    </font>
                                                    <br/>
                                                    <br/>

                                            <font size="5" color="#000000">
                                                <span>
                                                    <strong>📁 ขั้นตอนการยื่นขอรับใบอนุญาตเกี่ยวกับวัตถุออกฤทธิ์ <a href="https://samutprakarnfda.files.wordpress.com/2020/01/e0b882e0b8b1e0b989e0b899e0b895e0b8ade0b899e0b881e0b8b2e0b8a3e0b8a2e0b8b7e0b988e0b899e0b882e0b989e0b8ade0b8a1e0b8b9e0b8a5e0b983e0b899e0b8a3e0b8b0e0b89ae0b89a-e-submission-2.pdf">คลิก</a></strong>
                                                </span>
                                                <br/><br/>
                                            </font>

                                            <font size="3" style={{margin:'30px'}}>
                                                1. &nbsp;ติดตั้งและตั้งค่าเครื่องคอมพิวเตอร์เพื่อการใช้งานในระบบ     <br/>       
                                            
                                                <font style={{margin:'60px'}}>
                                                    1.1 &nbsp;กรณีระบบปฏิบัติการ window ต้องเป็น xp ขึ้นไป             
                                                <br/></font>
                                                <font style={{margin:'60px'}}>
                                                    1.2 &nbsp;ดาวน์โหลดโปรแกรม Mozilla Firefox จาก mozilla.org              
                                                <br/></font>
                                                <font style={{margin:'60px'}}>
                                                    1.3 &nbsp;โปรแกรม Adobe Reader (version 10.0 ขึ้นไป สำหรับ window xp  <a href="https://get.adobe.com/reader/otherversions/">คลิก</a>)
                                                <br/></font>
                                                <font style={{margin:'60px'}}>
                                                    1.4 &nbsp;สำหรับ window 7 ขึ้นไปใช้โปรแกรม Adobe Reader DC  <a href="https://get.adobe.com/reader/">ดาวน์โหลดที่นี่</a> (ใช้ Version นี้ ห้าม Update)             
                                                <br/></font>
                                                <font style={{margin:'60px'}}>
                                                    1.5 &nbsp;Font ที่รองรับ             
                                                <br/></font>

                                                        <font style={{margin:'90px'}}>
                                                        1. &nbsp;FontPack (หมายเหตุ : จำเป็นต้องติดตั้งโปรแกรม Adobe Reader ให้เรียบร้อยก่อนจึงจะติดตั้ง FontPack)             
                                                        <br/></font>
                                                        <font style={{margin:'90px'}}>
                                                        2. &nbsp;Font TH-Sarabun             
                                                        <br/></font>

                                            <font size="3" style={{margin:'30px'}}>
                                                2. &nbsp;สมัคร Open ID เพื่อสร้างไอดีเข้าใช้งานระบบ <a href="https://samutprakarnfda.files.wordpress.com/2016/11/e0b884e0b8b9e0b988e0b8a1e0b8b7e0b8ad_open-id.pdf">(คู่มือการสมัครใช้ Open ID)</a>
                                            </font><br/> 

                                            <font size="3" style={{margin:'30px'}}>
                                                3. &nbsp;ยื่นเอกสารคำขอเปิดสิทธิ์การเข้าใชงานระบบ E-submission  ณ สำนักงานสาธารณสุขจังหวัด <a href="https://samutprakarnfda.files.wordpress.com/2018/02/e0b980e0b8ade0b881e0b8aae0b8b2e0b8a3e0b980e0b89be0b8b4e0b894e0b8aae0b8b4e0b897e0b898e0b8b4e0b98ce0b8a7e0b888.pdf">(คลิก)</a>    
                                            </font><br/>

                                            <font size="3" style={{margin:'30px'}}>
                                                4. &nbsp;เข้าใช้ระบบ E- Submission ผ่านเว็ปไซต์ <a href="https://privus.fda.moph.go.th/index.aspx">privus.fda.moph.go.th</a> เลือกเข้าในสถานะผู้ประกอบการ แล้วทำตามขั้นตอนในคู่มือการใช้งาน <font color="#ff0000">จนสถานะการยื่นในระบบขึ้นคำว่า “ส่งเรื่องและรอพิจารณา” </font>    
                                            </font><br/> 

                                            <font size="3" style={{margin:'30px'}}>
                                                5. &nbsp;ติดต่อเจ้าหน้าที่เพื่อแจ้งสถานะการยื่นเอกสารในระบบและนัดเวลามารับใบอนุญาต     
                                            </font><br/>

                                            <font size="3" style={{margin:'30px'}}> 
                                                6. &nbsp;อัตราค่าธรรมเนียม     
                                            </font><br/> <br/>
                                            <img data-attachment-id="3104" data-permalink="https://fdasamutprakan.com/form/narcotics/ppt61_definalkkvj234_26oct2018/#main" data-orig-file="https://samutprakarnfda.files.wordpress.com/2020/01/ppt61_definalkkvj234_26oct2018.jpg" data-orig-size="960,720" data-comments-opened="0" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="PPT61_DEfinalKKVJ234_26oct2018" data-image-description="" data-medium-file="https://samutprakarnfda.files.wordpress.com/2020/01/ppt61_definalkkvj234_26oct2018.jpg?w=300" data-large-file="https://samutprakarnfda.files.wordpress.com/2020/01/ppt61_definalkkvj234_26oct2018.jpg?w=700" class="alignnone size-full wp-image-3104" src="https://samutprakarnfda.files.wordpress.com/2020/01/ppt61_definalkkvj234_26oct2018.jpg?w=700" alt="PPT61_DEfinalKKVJ234_26oct2018" srcset="https://samutprakarnfda.files.wordpress.com/2020/01/ppt61_definalkkvj234_26oct2018.jpg?w=700 700w, https://samutprakarnfda.files.wordpress.com/2020/01/ppt61_definalkkvj234_26oct2018.jpg?w=150 150w, https://samutprakarnfda.files.wordpress.com/2020/01/ppt61_definalkkvj234_26oct2018.jpg?w=300 300w, https://samutprakarnfda.files.wordpress.com/2020/01/ppt61_definalkkvj234_26oct2018.jpg?w=768 768w, https://samutprakarnfda.files.wordpress.com/2020/01/ppt61_definalkkvj234_26oct2018.jpg 960w" sizes="(max-width: 700px) 100vw, 700px"   /><br/><br/>

                                            <font size="3" style={{margin:'30px'}}>
                                                7. &nbsp;การจัดทำบัญชี/รายงาน ของผู้รับอนุญาตเกี่ยวกับวัตถุออกฤทธิ์และยาเสพติด <a href="https://samutprakarnfda.files.wordpress.com/2020/01/e0b89ae0b8b1e0b88de0b88ae0b8b5-e0b8a7e0b888.pdf">(คลิก) </a>    <br/> 
                                            </font></font>
                                                </span>
                                                <br/>
                                            </p>

                                            <p>
                                            <font size="5" color="#000000">
                                                <span>
                                                    <strong>📁แบบฟอร์มเกี่ยวกับยาเสพติดให้โทษ สถานพยาบาล/รพ.</strong>
                                                </span>
                                                <br/><br/>
                                            </font>

                                            <font size="3" color="#880088">
                                                <span style={{margin:'30px'}}>
                                                    1. &nbsp;<a style={{color:'#880088'}} href="https://samutprakarnfda.files.wordpress.com/2016/06/e0b981e0b89ae0b89ae0b89fe0b8ade0b8a3e0b98ce0b8a1e0b882e0b8ade0b8ade0b899e0b8b8e0b88de0b8b2e0b895-e0b888e0b8b3e0b8abe0b899e0b988e0b8b2.pdf">คำขอใบอนุญาตจำหน่ายซึ่งยาเสพติดให้โทษ ประเภท 2 หมวด ก สำหรับสถานพยาบาลรัฐบาล/ หน่วยงานราชการ  🖱️(คลิก)</a>
                                                </span>
                                                <br/>

                                                <span style={{margin:'30px'}}>
                                                    2. &nbsp;<a style={{color:'#880088'}} href="https://samutprakarnfda.files.wordpress.com/2016/06/e0b981e0b89ae0b89ae0b89fe0b8ade0b8a3e0b98ce0b8a1e0b895e0b988e0b8ade0b8ade0b8b2e0b8a2e0b8b8-e0b8a2e0b8aa-2-e0b881.pdf">คำขอต่ออายุใบอนุญาตจำหน่ายซึ่งยาเสพติดให้โทษประเภท 2 หมวด ก สำหรับสถานพยาบาลรัฐบาล/ หน่วยงานราชการ🖱️(คลิก)</a>
                                                </span>
                                                <br/><br/>
                                            </font>
                                            </p>

                                            <p>
                                            <font size="5" color="#000000">
                                                <span>
                                                    <strong>📁 แบบรายงานเกี่ยวกับวัตถุออกฤทธิ์ สถานพยาบาล/รพ.</strong>
                                                </span>
                                                <br/><br/>
                                            </font>

                                            <font size="3" color="#008888">
                                                <span style={{margin:'30px'}}>
                                                    1. &nbsp;<a style={{color:'#008888'}} href="https://samutprakarnfda.files.wordpress.com/2020/02/e0b981e0b89ae0b89a_e0b89ae0b8a7e0b888-e0b884e0b884-e0b991.pdf">บัญชีรับ-จ่าย วัตถุออกฤทธิ์ในประเภท 3 หรือ4 ที่มีไว้ในครอบครองเพื่อใช้ประโยชน์ (บำบัดรักษาป้องกันโรค)แบบ_บวจ-คค ๑ (คลิก)</a>
                                                </span>
                                                <br/>

                                                <span style={{margin:'30px'}}>
                                                    2. &nbsp;<a style={{color:'#008888'}} href="https://samutprakarnfda.files.wordpress.com/2020/02/e0b981e0b89ae0b89a_e0b89ae0b8a7e0b888e0b992-e0b882e0b89e.pdf">บัญชีขายวัตถุออกฤทธิ์ในประเภท 2 ที่สำหรับผู้รับอนุญาตขาย(บำบัดรักษา)แบบ_บวจ๒-ขพ (คลิก)</a>
                                                </span>
                                                <br/>

                                                <span style={{margin:'30px'}}>
                                                    3. &nbsp;<a style={{color:'#008888'}} href="https://samutprakarnfda.files.wordpress.com/2020/02/e0b981e0b89ae0b89a_e0b89ae0b888e0b998.pdf">บัญชีรับจ่ายวัตถุออกฤทธิ์ที่มีไว้ในครอบครอง แบบ_บจ๘ (คลิก)</a>
                                                </span>
                                                <br/>

                                                <span style={{margin:'30px'}}>
                                                    4. &nbsp;<a style={{color:'#008888'}} href="https://samutprakarnfda.files.wordpress.com/2020/02/e0b981e0b89ae0b89ae0b8a3e0b8a7e0b888e0b993e0b994e0b89b.pdf">รายงานผลการดำเนินการเกี่ยวกับวัตถุออกฤทธิ์ในประเภท 3 หรือประเภท 4 ที่สำหรับผู้รับมีหน้าที่เสนอรายงาน (ม.47) แบบรวจ๓๔ป (คลิก)</a>
                                                </span>
                                                <br/>

                                                <span style={{margin:'30px'}}>
                                                    5. &nbsp;<a style={{color:'#008888'}} href="https://samutprakarnfda.files.wordpress.com/2020/02/e0b981e0b89ae0b89ae0b8a3e0b8a7e0b888e0b993e0b994e0b980e0b894e0b8b7e0b8ade0b899.pdf">รายงานผลการดำเนินการเกี่ยวกับวัตถุออกฤทธิ์ในประเภท 3 หรือประเภท 4 ที่สำหรับผู้รับมีหน้าที่เสนอรายงาน (ม.47) แบบรวจ๓๔เดือน (คลิก)</a>
                                                </span>
                                                <br/>

                                                <span style={{margin:'30px'}}>
                                                    6. &nbsp;<a style={{color:'#008888'}} href="https://samutprakarnfda.files.wordpress.com/2020/02/e0b981e0b89ae0b89ae0b8a3e0b882e0b888e0b992e0b89b.pdf">รายงานผลการดำเนินการเกี่ยวกับการขายวัตถุออกฤทธิ์ในประเภท 2 ประจำปี แบบรขจ๒ป (คลิก)</a>
                                                </span>
                                                <br/>

                                                <span style={{margin:'30px'}}>
                                                    7. &nbsp;<a style={{color:'#008888'}} href="https://samutprakarnfda.files.wordpress.com/2020/02/e0b981e0b89ae0b89ae0b8a3.e0b882e0b888.e0b992e0b980e0b894e0b8b7e0b8ade0b899.pdf">รายงานผลการดำเนินการเกี่ยวกับการขายวัตถุออกฤทธิ์ในประเภท 2 ประจำเดือน แบบร.ขจ.๒เดือน (คลิก)</a>
                                                </span>
                                                <br/>
                                                <br/>
                                            </font>
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
    export default Detail_narcotic;
