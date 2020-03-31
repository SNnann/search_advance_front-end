import React, {Component} from 'react';
import {Button, Card, Container, Grid, Image, Input, Segment} from "semantic-ui-react";
import {Link} from "react-router-dom";
import src1 from '../../images/Banner04.png';
import Navbar from "../navbar";
import {apiurl} from "../../config/api";
import Iconmain from "../iconmain";
import Iconmini from "../iconmini";

class Detail_food extends Component {

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
                                    <h2 style={{color: '#ffff'}}>หมวดอาหาร</h2>
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
                                            <h1>แบบฟอร์มงานอาหาร</h1>
                                            <ol>
                                                <li><span style={{color:'#000080'}}><a style={{color:'#003366'}} href="https://samutprakarnfda.files.wordpress.com/2019/11/e0b8a3e0b8b0e0b980e0b89ae0b8b5e0b8a2e0b89ae0b881e0b8b2e0b8a3e0b8a2e0b8b7e0b988e0b899e0b882e0b8ade0b8ade0b899e0b8b8e0b88de0b8b2e0b895e0b89ce0b8a5e0b8b4e0b895e0b8ade0b8b2e0b8abe0b8b2e0b8a3.pdf">แนวทางการยื่นขออนุญาตผลิตอาหาร</a></span></li>
                                                <li><span style={{color:'#003366'}}><strong>ระเบียบการยื่นขออนุญาตผลิตอาหาร**โปรดอ่านศึกษาเพื่อทำความเข้าใจก่อนการยื่นขออนุญาต**&nbsp;</strong></span></li>
                                                <li><strong><strong><span style={{color:'#000080'}}><span style={{color:'#003366'}} ><a style={{color:'#003366'}}  href="https://samutprakarnfda.files.wordpress.com/2012/04/5-e0b8a3e0b8b0e0b980e0b89ae0b8b5e0b8a2e0b89ae0b881e0b8b2e0b8a3e0b8a2e0b8b7e0b988e0b899e0b882e0b8ade0b8ade0b899e0b8b8e0b88de0b8b2e0b895.pdf">ระเบียบการยื่นขออนุญาตนำหรือสั่งอาหาร</a>&nbsp;***โปรดอ่านศึกษาเพื่อทำความเข้าใจก่อนการยื่นขออนุญาต**</span>*</span></strong></strong></li>
                                            </ol>

                                            <h1>ขอรับใบอนุญาตผลิตอาหาร</h1>
                                            <p>
                                                <span style={{color:'#800000'}}>
                                                    <strong>A.&nbsp;</strong>
                                                    <strong>การยื่นขออนุญาตผลิตอาหาร กรณีขอใหม่/เพิ่มประเภท</strong>
                                                    /ย้ายสถานที่ผลิตอาหาร/เพิ่มลดสถานที่ผลิตอาหาร/เพิ่มลดเครื่องจักร/ยกเลิกประเภทอาหารที่มีผลกับแบบแปลนและเครื่องจักร</span>
                                                <br/>
                                                <span
                                                    style={{color:'#800000'}}>&nbsp; &nbsp; 1.&nbsp;ยื่นคำขอตรวจประเมินสถานที่ผลิตและเก็บอาหาร&nbsp;กรณีขอใหม่/เพิ่มประเภท/ย้ายสถานที่ผลิตอาหาร/เพิ่มลดสถานที่ผลิตอาหาร/เพิ่มลดเครื่องจักร/ยกเลิกประเภทอาหารที่มีผลกับแบบแปลนและเครื่องจักร&nbsp;</span><br/>
                                                <span style={{color:'#800000'}}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;1.1 <a
                                                    style={{color:'#800000'}}
                                                    href="https://samutprakarnfda.files.wordpress.com/2018/09/checkliste0b882e0b8b1e0b989e0b899e0b895e0b8ade0b899e0b897e0b8b5e0b9881e0b884e0b8b3e0b882e0b8ade0b895e0b8a3e0b8a7e0b888e0b89be0b8a3e0b8b0.pdf">Checklistตรวจสอบการยื่นคำขอตรวจประเมินสถานที่ผลิตและเก็บอาหาร</a></span><br/>
<span style={{color:'#800000'}}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;1.2&nbsp;<a style={{color:'#800000'}}
                                                                           href="https://samutprakarnfda.files.wordpress.com/2018/09/e0b981e0b89ae0b89ae0b884e0b8b3e0b882e0b8ade0b895e0b8a3e0b8a7e0b888e0b89be0b8a3e0b8b0e0b980e0b8a1e0b8b4e0b899e0b8aae0b896e0b8b2e0b899.pdf">คำขอตรวจประเมินสถานที่ผลิตและเก็บอาหาร</a><br/>
</span><span style={{color:'#ff9900'}}><a style={{color:'#ff9900'}} title="ตัวอย่าง แผนที่ แผนผัง แบบแปลนสถานที่ผลิตอาหาร"
                                       href="https://samutprakarnfda.files.wordpress.com/2020/02/e0b895e0b8b1e0b8a7e0b8ade0b8a2e0b988e0b8b2e0b887-e0b981e0b89ce0b899e0b897e0b8b5e0b988-e0b981e0b89ce0b899e0b89ce0b8b1e0b887-e0b981e0b89ae0b89ae0b981e0b89be0b8a5e0b899e0b8aae0b896e0b8b2e0b.pdf">ตัวอย่าง แผนที่ แผนผัง แบบแปลนสถานที่ผลิตอาหาร</a>
                                                    <img
                                                className="alignnone size-full wp-image-2640"
                                                src="https://samutprakarnfda.files.wordpress.com/2019/09/update.gif?w=46"
                                                alt="update" width="46" height="14"
                                                srcSet="https://samutprakarnfda.files.wordpress.com/2019/09/update.gif?w=46&amp;zoom=2 2x"
                                                src-orig="https://samutprakarnfda.files.wordpress.com/2019/09/update.gif?w=700"
                                                scale="2"/>
</span><span style={{color:'#800000'}}> (ข้อ 6 ของแบบคำขอตรวจประเมินสถานที่)<br/>
&nbsp; &nbsp; 2. เจ้าหน้าที่ตรวจประเมินสถานที่ (มีค่าใช้จ่ายในการตรวจประเมินสถานที่ ชำระเมื่อยื่นเอกสาร 3,000บาท)</span><br/>
                                                <span style={{color:'#800000'}}>&nbsp; &nbsp; 3. ออกหนังสือรับรองการตรวจประเมินสถานที่ (Audit Report) ชำระส่วนต่างค่าใช้จ่ายการตรวจสถานที่ตามแรงม้า</span><br/>
                                                <span style={{color:'#800000'}}>&nbsp; &nbsp; 4. ยื่นเอกสารแบบฟอร์มเพื่อขอใหม่ <a
                                                    style={{color:'#800000'}}
                                                    href="https://fdasamutprakan.com/form/foods/checklist%e0%b8%82%e0%b8%b1%e0%b9%89%e0%b8%99%e0%b8%95%e0%b8%ad%e0%b8%99%e0%b8%97%e0%b8%b5%e0%b9%881%e0%b8%84%e0%b8%b3%e0%b8%82%e0%b8%ad%e0%b8%95%e0%b8%a3%e0%b8%a7%e0%b8%88%e0%b8%9b%e0%b8%a3-2/">(อ.1)</a>/(<a
                                                    style={{color:'#800000'}}
                                                    href="https://samutprakarnfda.files.wordpress.com/2019/10/e0b884e0b8b3e0b882e0b8ad-e0b8aae0b89a1_62.pdf">สบ.1)</a>&nbsp;หรือ <span
                                                    style={{textDecoration:'underline'}}>กรณีแก้ไขเปลี่ยนแปลง <a
                                                    style={{color:'#800000',textDecoration:'underline'}}
                                                    href="https://samutprakarnfda.files.wordpress.com/2012/04/e0b884e0b8b3e0b882e0b8ade0b980e0b89be0b8a5e0b8b5e0b988e0b8a2e0b899e0b981e0b89be0b8a5e0b887e0b8a3e0b8b2e0b8a2e0b881e0b8b2e0b8a3e0b9831.pdf">(ส.4)</a></span> /&nbsp;
                                                    <em>หรือ สบ.2 กรณีสถานที่ผลิตไม่เข้าข่ายโรงงาน <a
                                                        style={{color:'#800000'}}
                                                        href="https://samutprakarnfda.files.wordpress.com/2018/09/e0b8aae0b89a2.pdf">(pdf)</a></em></span>
                                            </p>
                                            <p>
                                                <span style={{color:'#0000ff'}}>
                                                    <strong>B.&nbsp;</strong>
                                                    <strong>การยื่นขอตรวจประเมินสถานที่ผลิตและเก็บอาหาร กรณีต่ออายุใบอนุญาตผลิตอาหาร (ใบอนุญาตผลิตอาหารมีอายุ 3 ปี)</strong></span>
                                                <br/>
                                                <span
                                                    style={{color:'#0000ff'}}>&nbsp; &nbsp; 1.&nbsp;<a style={{color:'#0000ff'}} href="https://samutprakarnfda.files.wordpress.com/2019/06/checkliste0b884e0b8b3e0b882e0b8ade0b895e0b8a3e0b8a7e0b888e0b89be0b8a3e0b8b0e0b980e0b8a1e0b8b4e0b899e0b8aae0b896e0b8b2e0b899e0b897e0b8b5e0b988e0b89ce0b8a5e0b8b4e0b895-e0b895e0b988e0b8ade0.pdf">Checklistตรวจสอบการยื่นคำขอตรวจประเมินสถานที่ผลิตและเก็บอาหาร กรณีต่ออายุ &nbsp;</a></span><br/>
                                                    <img data-attachment-id="1969" data-permalink="https://fdasamutprakan.com/form/foods/prefood/new-icon/#main" data-orig-file="https://samutprakarnfda.files.wordpress.com/2018/02/new-icon.gif" data-orig-size="26,13" data-comments-opened="0" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="new-icon" data-image-description="" data-medium-file="https://samutprakarnfda.files.wordpress.com/2018/02/new-icon.gif?w=26" data-large-file="https://samutprakarnfda.files.wordpress.com/2018/02/new-icon.gif?w=26" class="alignnone size-full wp-image-1969" src="https://samutprakarnfda.files.wordpress.com/2018/02/new-icon.gif?w=700" alt="" /><br/> 
                                                <span style={{color:'#0000ff'}}>&nbsp; &nbsp; 2. <a style={{color:'#0000ff'}} href="https://samutprakarnfda.files.wordpress.com/2018/09/e0b981e0b89ae0b89ae0b884e0b8b3e0b882e0b8ade0b895e0b8a3e0b8a7e0b888e0b89be0b8a3e0b8b0e0b980e0b8a1e0b8b4e0b899e0b8aae0b896e0b8b2e0b899.pdf">คำขอตรวจประเมินสถานที่ผลิตและเก็บอาหาร </a></span><br/>
                                                <span style={{color:'#0000ff'}}>&nbsp; &nbsp; 3. <a style={{color:'#0000ff'}} href = "https://samutprakarnfda.files.wordpress.com/2018/09/e0b89ae0b8b1e0b899e0b897e0b8b6e0b881e0b884e0b8b3e0b983e0b8abe0b989e0b881e0b8b2e0b8a3e0b895e0b988e0b8ade0b8ade0b8b2e0b8a2e0b8b8.pdf">บันทึกคำให้การสำหรับการยื่นคำขอตรวจประเมินสถานที่ผลิตอาหารเพื่อต่ออายุ </a></span><br/>
                                            </p>

                                            <p>
                                                <span style={{color:'#008000'}}>
                                                    <strong>C.&nbsp;</strong>
                                                    <strong>ขอตรวจประเมินสถานที่ผลิตและเก็บอาหาร กรณีย้าย เพิ่ม เปลี่ยนแปลงสถานที่เก็บอาหาร</strong></span>
                                                <br/>
                                                <span
                                                    style={{color:'#008000'}}>&nbsp; &nbsp; 1.&nbsp;<a style={{color:'#008000'}} href="https://samutprakarnfda.files.wordpress.com/2018/09/checkliste0b884e0b8b3e0b882e0b8ade0b895e0b8a3e0b8a7e0b888e0b89be0b8a3e0b8b0e0b980e0b8a1e0b8b4e0b899e0b8aae0b896e0b8b2e0b899e0b897e0b8b5.pdf">Checklistตรวจสอบการยื่นคำขอตรวจประเมินสถานที่ผลิตและเก็บอาหาร กรณีย้าย เพิ่ม เปลี่ยนแปลงสถานที่เก็บอาหาร &nbsp;</a></span><br/>
                                                <span
                                                    style={{color:'#008000'}}>&nbsp; &nbsp; 2.&nbsp;<a style={{color:'#008000'}} href = "https://samutprakarnfda.files.wordpress.com/2018/09/e0b981e0b89ae0b89ae0b884e0b8b3e0b882e0b8ade0b895e0b8a3e0b8a7e0b888e0b89be0b8a3e0b8b0e0b980e0b8a1e0b8b4e0b899e0b8aae0b896e0b8b2e0b899.pdf">คำขอตรวจประเมินสถานที่ผลิตและเก็บอาหาร &nbsp;</a></span><br/>
                                                    
                                            </p>

                                             <p>
                                                <span style={{color:'#000000'}}>
                                                    <strong>D.&nbsp;</strong>
                                                    <strong>ยื่นคำขอแก้ไขรายการในใบอนุญาตผลิตอาหาร (กรณีไม่ต้องตรวจสถานที่)</strong></span>
                                                <br/>
                                                <span
                                                    style={{color:'#000000'}}>&nbsp; &nbsp; <strong>1.&nbsp;แก้ไขรายการในใบอนุญาตผลิต กรณีเข้าข่ายโรงงาน &nbsp;</strong></span><br/>

                                                <span
                                                    style={{color:'#000000'}}>&nbsp; &nbsp; &nbsp; &nbsp; 1.1 &nbsp;Checklistตรวจสอบคำขอและบันทึกข้อบกพร่อง คำขอใบแทนใบอนุญาตผลิตอาหาร (แบบ อ.4) <a style={{textDecoration: 'underline'}} href="https://samutprakarnfda.files.wordpress.com/2019/10/checkliste0b882e0b8ade0b983e0b89ae0b981e0b897e0b899e0b983e0b89ae0b8ade0b899e0b8b8e0b88de0b8b2e0b895e0b89ce0b8a5e0b8b4e0b895e0b8ade0b8b2e0b8abe0b8b2e0b8a3-e0b8ad4.pdf"> (pdf)</a>&nbsp;</span><br/>

                                                <span
                                                    style={{color:'#000000'}}>&nbsp; &nbsp; &nbsp; &nbsp; 1.2 &nbsp;Checklistตรวจสอบคำขอและบันทึกข้อบกพร่อง คำขอเปลี่ยนแปลงรายการในใบอนุญาตผลิตอาหาร &nbsp;</span><br/>

                                                <span
                                                    style={{color:'#000000'}}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1. &nbsp;กรณีแก้ไข ที่อยู่(ไม่ใช่การย้าย) <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2019/10/checkliste0b981e0b881e0b989e0b984e0b882e0b8a3e0b8b2e0b8a2e0b881e0b8b2e0b8a3e0b983e0b899e0b983e0b89ae0b8ade0b899e0b8b8e0b88de0b8b2e0b895e0b89ce0b8a5e0b8b4e0b895e0b981e0b881e0b989e0b984e0b.pdf"> (pdf)</a> &nbsp;</span><img
                                                className="alignnone size-full wp-image-2640"
                                                src="https://samutprakarnfda.files.wordpress.com/2019/09/update.gif?w=46"
                                                alt="update" width="46" height="14"
                                                srcSet="https://samutprakarnfda.files.wordpress.com/2019/09/update.gif?w=46&amp;zoom=2 2x"
                                                src-orig="https://samutprakarnfda.files.wordpress.com/2019/09/update.gif?w=700"
                                                scale="2"/><br/>

                                                <span
                                                    style={{color:'#000000'}}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 2. &nbsp;กรณีการเปลี่ยนแปลงสถานะนิติบุคคลผู้รับอนุญาตหรือแปรสภาพนิติบุคคลตามกฎหมาย  <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2019/10/checkliste0b981e0b881e0b989e0b984e0b882e0b8a3e0b8b2e0b8a2e0b881e0b8b2e0b8a3e0b983e0b899e0b983e0b89ae0b8ade0b899e0b8b8e0b88de0b8b2e0b895e0b89ce0b8a5e0b8b4e0b895e0b8ade0b8b2e0b8abe0b8b2e0b.pdf"> (pdf)</a> &nbsp;</span><img
                                                className="alignnone size-full wp-image-2640"
                                                src="https://samutprakarnfda.files.wordpress.com/2019/09/update.gif?w=46"
                                                alt="update" width="46" height="14"
                                                srcSet="https://samutprakarnfda.files.wordpress.com/2019/09/update.gif?w=46&amp;zoom=2 2x"
                                                src-orig="https://samutprakarnfda.files.wordpress.com/2019/09/update.gif?w=700"
                                                scale="2"/><br/> 

                                                <span
                                                    style={{color:'#000000'}}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 3. &nbsp;กรณีเปลี่ยน เพิ่มหรือลดผู้ดำเนินกิจการ (เฉพาะนิติบุคคล) <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2019/10/checkliste0b981e0b881e0b989e0b984e0b882e0b8a3e0b8b2e0b8a2e0b881e0b8b2e0b8a3e0b983e0b899e0b983e0b89ae0b8ade0b899e0b8b8e0b88de0b8b2e0b895e0b89ce0b8a5e0b8b4e0b895e0b980e0b89be0b8a5e0b8b5e0b.pdf"> (pdf)</a>&nbsp;</span><img
                                                className="alignnone size-full wp-image-2640"
                                                src="https://samutprakarnfda.files.wordpress.com/2019/09/update.gif?w=46"
                                                alt="update" width="46" height="14"
                                                srcSet="https://samutprakarnfda.files.wordpress.com/2019/09/update.gif?w=46&amp;zoom=2 2x"
                                                src-orig="https://samutprakarnfda.files.wordpress.com/2019/09/update.gif?w=700"
                                                scale="2"/><br/> 

                                                <span
                                                    style={{color:'#000000'}}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 4. &nbsp;กรณี เปลี่ยนชื่อตัว-ชื่อสกุลของผู้ดำเนินกิจการ <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2019/10/checkliste0b981e0b881e0b989e0b984e0b882e0b8a3e0b8b2e0b8a2e0b881e0b8b2e0b8a3e0b983e0b899e0b983e0b89ae0b8ade0b899e0b8b8e0b88de0b8b2e0b895e0b89ce0b8a5e0b8b4e0b895e0b980e0b89be0b8a5e0b8b5e0b.pdf">(pdf)</a> &nbsp;</span><img
                                                className="alignnone size-full wp-image-2640"
                                                src="https://samutprakarnfda.files.wordpress.com/2019/09/update.gif?w=46"
                                                alt="update" width="46" height="14"
                                                srcSet="https://samutprakarnfda.files.wordpress.com/2019/09/update.gif?w=46&amp;zoom=2 2x"
                                                src-orig="https://samutprakarnfda.files.wordpress.com/2019/09/update.gif?w=700"
                                                scale="2"/><br/> 

                                                <span
                                                    style={{color:'#000000'}}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 5. &nbsp;กรณี เปลี่ยนชื่อผู้รับอนุญาต (ไม่ใช่การเปลี่ยนตัวบุคคลหรือนิติบุคคล) <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2019/10/checkliste0b981e0b881e0b989e0b984e0b882e0b8a3e0b8b2e0b8a2e0b881e0b8b2e0b8a3e0b983e0b899e0b983e0b89ae0b8ade0b899e0b8b8e0b88de0b8b2e0b895e0b89ce0b8a5e0b8b4e0b895e0b8ade0b8b2e0b8abe0b8b2e0b-1.pdf"> (pdf)</a>  &nbsp;</span><img
                                                className="alignnone size-full wp-image-2640"
                                                src="https://samutprakarnfda.files.wordpress.com/2019/09/update.gif?w=46"
                                                alt="update" width="46" height="14"
                                                srcSet="https://samutprakarnfda.files.wordpress.com/2019/09/update.gif?w=46&amp;zoom=2 2x"
                                                src-orig="https://samutprakarnfda.files.wordpress.com/2019/09/update.gif?w=700"
                                                scale="2"/><br/> 

                                                <span
                                                    style={{color:'#000000'}}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 6. &nbsp;กรณี ยกเลิกประเภทอาหารที่ไม่มีผลต่อการเปลี่ยนแปลงเครื่องจักรและแบบแปลนแผนผัง &nbsp;</span><br/><br />
                                                
                                                <span
                                                    style={{color:'#000000'}}>&nbsp; &nbsp; <strong>2.&nbsp;แก้ไขรายการในใบอนุญาตผลิต กรณีไม่เข้าข่ายโรงงาน &nbsp;</strong></span><br/>
                                                <span
                                                    style={{color:'#000000'}}>&nbsp; &nbsp; &nbsp; &nbsp; 1.&nbsp;Checklistตรวจสอบคำขอและบันทึกข้อบกพร่อง การแก้ไขรายการในใบอนุญาตสถานที่ผลิตไม่เข้าข่ายโรงงาน &nbsp;</span><br/>
                                                <span
                                                    style={{color:'#000000'}}>&nbsp; &nbsp; &nbsp; &nbsp; 2.&nbsp;กรณี เปลี่ยนชื่อตัว-ชื่อสกุล ของผู้รับอนุญาตหรือผู้ดำเนินกิจการ &nbsp;</span><br/>
                                                <span
                                                    style={{color:'#000000'}}>&nbsp; &nbsp; &nbsp; &nbsp; 3.&nbsp;กรณี แก้ไขที่อยู่สถานที่ผลิตอาหาร (ไม่ใช่การย้ายที่ตั้ง) &nbsp;</span><br/>
                                                <span
                                                    style={{color:'#000000'}}>&nbsp; &nbsp; &nbsp; &nbsp; 4.&nbsp;กรณี แก้ไขชื่อสถานที่ผลิตอาหาร &nbsp;</span><br/><br/>

                                                <span
                                                    style={{color:'#000000'}}>_____________________________________________________________________________</span><br/> <br/>
                                            </p>

                                            <p>
                                                <h1 style={{color:'#800000'}}>การขอรับใบอนุญาตนำหรือสั่งอาหารเข้ามาในราชอาณาจักร</h1>

                                                <span
                                                    style={{color:'#800000'}}> &nbsp; &nbsp; 1.&nbsp;แบบตรวจสอบคำขอและบันทึกข้อบกพร่อง คำขออนุญาตนำหรือสั่งอาหารเข้ามาในราชอาณาจักร (ขอใหม่) <a style = {{textDecoration: 'underline'}} href="https://samutprakarnfda.files.wordpress.com/2012/04/f-f2-44-a__checklist-e0b899e0b8b3e0b980e0b882e0b989e0b8b2-e0b882e0b8ade0b983e0b8abe0b8a1e0b988-e0b8ad-61.pdf"> (pdf)</a> &nbsp;</span><br/>
                                                <span
                                                    style={{color:'#800000'}}> &nbsp; &nbsp; 2.&nbsp;แบบตรวจสอบคำขอและบันทึกข้อบกพร่อง คำขออนุญาตนำหรือสั่งอาหารเข้ามาในราชอาณาจักร (เพิ่มประเภท) <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2018/05/checkliste0b899e0b8b3e0b8aae0b8b1e0b988e0b887_e0b980e0b89ee0b8b4e0b988e0b8a1e0b89be0b8a3e0b8b0e0b980e0b8a0e0b897.pdf"> (pdf)</a>  &nbsp;</span><br/>
                                                <span
                                                    style={{color:'#800000'}}> &nbsp; &nbsp; 3.&nbsp;แบบตรวจสอบคำขอและบันทึกข้อบกพร่องคำขอใบแทนใบอนุญาตนำหรือสั่งอาหารเข้ามาในราชอาณาจักร <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2019/10/checkliste0b899e0b8b3e0b8aae0b8b1e0b988e0b887_e0b882e0b8ade0b983e0b89ae0b981e0b897e0b899e0b8ad9.xlsx.pdf"> (pdf)</a> &nbsp;</span><img
                                                className="alignnone size-full wp-image-2640"
                                                src="https://samutprakarnfda.files.wordpress.com/2019/09/update.gif?w=46"
                                                alt="update" width="46" height="14"
                                                srcSet="https://samutprakarnfda.files.wordpress.com/2019/09/update.gif?w=46&amp;zoom=2 2x"
                                                src-orig="https://samutprakarnfda.files.wordpress.com/2019/09/update.gif?w=700"
                                                scale="2"/><br/>
                                                <span
                                                    style={{color:'#800000'}}> &nbsp; &nbsp; 4.&nbsp;แบบตรวจสอบคำขอและบันทึกข้อบกพร่อง ขออนุญาตย้ายสถานที่นำเข้าหรือสถานที่เก็บอาหาร 
                                                    <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2012/04/f-f2-48-a__checklist-e0b899e0b8b3e0b980e0b882e0b989e0b8b2-e0b8a2e0b989e0b8b2e0b8a2e0b8aae0b896e0b8b2e0b899e0b897e0b8b5e0b988-e0b8ad-101.pdf">(pdf)</a> &nbsp;</span><br/>
                                                <span
                                                    style={{color:'#800000'}}> &nbsp; &nbsp; 5.&nbsp;แบบตรวจสอบคำขอและบันทึกข้อบกพร่อง ขอเปลี่ยนแปลงรายการในใบอนุญาตนำหรือสั่งอาหารเข้ามาในราชอาณาจักร &nbsp;</span><br/>
                                                <span
                                                    style={{color:'#800000'}}> &nbsp; &nbsp; &nbsp; &nbsp; 1.&nbsp;กรณีแก้ไขชื่อผู้รับอนุญาต (ไม่ใช่การเปลี่ยนตัวบุคคล) ส.5 <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2019/11/checkliste0b981e0b881e0b989e0b984e0b882e0b8a3e0b8b2e0b8a2e0b881e0b8b2e0b8a3e0b983e0b899e0b983e0b89ae0b8ade0b899e0b8b8e0b88de0b8b2e0b895e0b899e0b8b3e0b980e0b882e0b989e0b8b2e0b981e0b881e0b.pdf"> (pdf)</a> &nbsp;</span><img
                                                className="alignnone size-full wp-image-2640"
                                                src="https://samutprakarnfda.files.wordpress.com/2019/09/update.gif?w=46"
                                                alt="update" width="46" height="14"
                                                srcSet="https://samutprakarnfda.files.wordpress.com/2019/09/update.gif?w=46&amp;zoom=2 2x"
                                                src-orig="https://samutprakarnfda.files.wordpress.com/2019/09/update.gif?w=700"
                                                scale="2"/><br/>
                                                <span
                                                    style={{color:'#800000'}}> &nbsp; &nbsp; &nbsp; &nbsp; 2.&nbsp;กรณีแก้ไขที่อยู่สถานที่นำเข้าหรือสถานที่เก็บอาหาร (ไม่ใช่การย้าย) ส.5 <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2019/10/checkliste0b981e0b881e0b989e0b984e0b882e0b8a3e0b8b2e0b8a2e0b881e0b8b2e0b8a3e0b983e0b899e0b983e0b89ae0b8ade0b899e0b8b8e0b88de0b8b2e0b895e0b899e0b8b3e0b980e0b882e0b989e0b8b2e0b981e0b881e0b-2.pdf"> (pdf)</a>  &nbsp;</span><img
                                                className="alignnone size-full wp-image-2640"
                                                src="https://samutprakarnfda.files.wordpress.com/2019/09/update.gif?w=46"
                                                alt="update" width="46" height="14"
                                                srcSet="https://samutprakarnfda.files.wordpress.com/2019/09/update.gif?w=46&amp;zoom=2 2x"
                                                src-orig="https://samutprakarnfda.files.wordpress.com/2019/09/update.gif?w=700"
                                                scale="2"/><br/>
                                                <span
                                                    style={{color:'#800000'}}> &nbsp; &nbsp; &nbsp; &nbsp; 3.&nbsp;กรณีแก้ไขเปลี่ยนชื่อตัว-ชื่อสกุลของผู้ดำเนินกิจการ ส.5 <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2019/10/checkliste0b981e0b881e0b989e0b984e0b882e0b8a3e0b8b2e0b8a2e0b881e0b8b2e0b8a3e0b983e0b899e0b983e0b89ae0b8ade0b899e0b8b8e0b88de0b8b2e0b895e0b899e0b8b3e0b980e0b882e0b989e0b8b2e0b980e0b89be0b.pdf"> (pdf)</a> &nbsp;</span><img
                                                className="alignnone size-full wp-image-2640"
                                                src="https://samutprakarnfda.files.wordpress.com/2019/09/update.gif?w=46"
                                                alt="update" width="46" height="14"
                                                srcSet="https://samutprakarnfda.files.wordpress.com/2019/09/update.gif?w=46&amp;zoom=2 2x"
                                                src-orig="https://samutprakarnfda.files.wordpress.com/2019/09/update.gif?w=700"
                                                scale="2"/><br/>
                                                <span
                                                    style={{color:'#800000'}}> &nbsp; &nbsp; &nbsp; &nbsp; 4.&nbsp;กรณีเปลี่ยน เพิ่ม หรือลดผู้ดำเนินกิจการ(เฉพาะนิติบุคคล) ส.5 <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2019/11/checkliste0b981e0b881e0b989e0b984e0b882e0b8a3e0b8b2e0b8a2e0b881e0b8b2e0b8a3e0b983e0b899e0b983e0b89ae0b8ade0b899e0b8b8e0b88de0b8b2e0b895e0b899e0b8b3e0b980e0b882e0b989e0b8b2e0b980e0b89ee0b.pdf"> (pdf)</a> &nbsp;</span><img
                                                className="alignnone size-full wp-image-2640"
                                                src="https://samutprakarnfda.files.wordpress.com/2019/09/update.gif?w=46"
                                                alt="update" width="46" height="14"
                                                srcSet="https://samutprakarnfda.files.wordpress.com/2019/09/update.gif?w=46&amp;zoom=2 2x"
                                                src-orig="https://samutprakarnfda.files.wordpress.com/2019/09/update.gif?w=700"
                                                scale="2"/><br/>
                                                <span
                                                    style={{color:'#800000'}}> &nbsp; &nbsp; &nbsp; &nbsp; 5.&nbsp;ยกเลิกหรือแก้ไขกลุ่มประเภทอาหาร และยกเลิกสถานที่เก็บอาหาร ส.5 <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2019/11/checkliste0b8a2e0b881e0b980e0b8a5e0b8b4e0b881e0b8abe0b8a3e0b8b7e0b8ade0b981e0b881e0b989e0b984e0b882e0b881e0b8a5e0b8b8e0b988e0b8a1e0b89be0b8a3e0b8b0e0b980e0b8a0e0b897e0b8ade0b8b2e0b8abe0b.pdf"> (pdf)</a> &nbsp;</span><br/>
                                                <span
                                                    style={{color:'#800000'}}> &nbsp; &nbsp; &nbsp; &nbsp; 6.&nbsp;กรณีเพิ่มสถานที่เก็บอาหาร <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2012/04/f-f2-54-a__checklist-e0b899e0b8b3e0b980e0b882e0b989e0b8b2-e0b981e0b881e0b989e0b984e0b882-e0b980e0b89ee0b8b4e0b988e0b8a1e0b8aae0b896e0b8b21.pdf"> (pdf)</a>  &nbsp;</span><br/>
                                                <span
                                                    style={{color:'#800000'}}> &nbsp; &nbsp; &nbsp; &nbsp; 7.&nbsp;กรณีแก้ไขเปลี่ยนแปลงห้องเก็บอาหาร  &nbsp;</span><br/>
                                                <span
                                                    style={{color:'#800000'}}> &nbsp; &nbsp; &nbsp; &nbsp; 8.&nbsp;กรณีการเปลี่ยนแปลงสถานะนิติบุคคลผู้รับอนุญาตหรือแปรสภาพนิติบุคคลตามกฎหมาย <a style={{textDecoration:'underline'}} href
                                                    ="https://samutprakarnfda.files.wordpress.com/2019/10/checkliste0b981e0b881e0b989e0b984e0b882e0b8a3e0b8b2e0b8a2e0b881e0b8b2e0b8a3e0b983e0b899e0b983e0b89ae0b8ade0b899e0b8b8e0b88de0b8b2e0b895e0b899e0b8b3e0b980e0b882e0b989e0b8b2e0b981e0b89be0b.pdf"> (pdf)</a>  &nbsp;</span><img
                                                className="alignnone size-full wp-image-2640"
                                                src="https://samutprakarnfda.files.wordpress.com/2019/09/update.gif?w=46"
                                                alt="update" width="46" height="14"
                                                srcSet="https://samutprakarnfda.files.wordpress.com/2019/09/update.gif?w=46&amp;zoom=2 2x"
                                                src-orig="https://samutprakarnfda.files.wordpress.com/2019/09/update.gif?w=700"
                                                scale="2"/><br/>
                                               
                                            </p>

                                            <p>
                                            <h2 style={{color: '#000080'}}>แบบฟอร์มต่างๆ</h2>
                                            <span
                                                style={{color:'#000080'}}> &nbsp; &nbsp; 1.&nbsp;ใบปะหน้า <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2018/09/e0b983e0b89ae0b89be0b8b0e0b8abe0b899e0b989e0b8b2e0b8ade0b8b2e0b8abe0b8b2e0b8a3-61-2.docx"> (word) </a> &nbsp;</span><br/>
                                            <span
                                                style={{color:'#000080'}}> &nbsp; &nbsp; 2.&nbsp;หนังสือมอบอำนาจและแต่งตั้งผู้ดำเนินกิจการ <a href="https://samutprakarnfda.files.wordpress.com/2012/04/e0b8abe0b899e0b8b1e0b887e0b8aae0b8b7e0b8ade0b8a1e0b8ade0b89ae0b8ade0b8b3e0b899e0b8b2e0b888e0b981e0b8a5e0b8b0e0b981e0b895e0b988e0b8874.pdf"> (pdf)</a> <a href="https://samutprakarnfda.files.wordpress.com/2012/04/e0b8abe0b899e0b8b1e0b887e0b8aae0b8b7e0b8ade0b8a1e0b8ade0b89ae0b8ade0b8b3e0b899e0b8b2e0b888e0b981e0b8a5e0b8b0e0b981e0b895e0b988e0b8871.doc"> (word)</a>  &nbsp;</span><br/>
                                            <span
                                                style={{color:'#000080'}}> &nbsp; &nbsp; 3.&nbsp;หนังสือมอบอำนาจยื่นเรื่อง <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2018/09/e0b8abe0b899e0b8b1e0b887e0b8aae0b8b7e0b8ade0b8a1e0b8ade0b89ae0b8ade0b8b3e0b899e0b8b2e0b888e0b897e0b8b1e0b988e0b8a7e0b984e0b89b.pdf">(pdf)</a> <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2018/09/e0b8abe0b899e0b8b1e0b887e0b8aae0b8b7e0b8ade0b8a1e0b8ade0b89ae0b8ade0b8b3e0b899e0b8b2e0b888e0b897e0b8b1e0b988e0b8a7e0b984e0b89b.doc">(word)</a>  &nbsp;</span><br/>
                                            <span
                                                style={{color:'#000080'}}> &nbsp; &nbsp; 4.&nbsp;หนังสือมอบอำนาจ ยื่นเรื่องผ่านระบบ E-submission <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2012/04/e0b8abe0b899e0b8b1e0b887e0b8aae0b8b7e0b8ade0b8a1e0b8ade0b89ae0b8ade0b8b3e0b899e0b8b2e0b888esub.pdf"> (pdf)</a>  &nbsp;</span><br/>
                                            <span
                                                style={{color:'#000080'}}> &nbsp; &nbsp; 5.&nbsp;หนังสือมอบอำนาจยื่นเรื่องผ่านระบบE-submissionสำหรับผู้ดำเนินกิจการ <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2012/04/e0b8abe0b899e0b8b1e0b887e0b8aae0b8b7e0b8ade0b8a1e0b8ade0b89ae0b8ade0b8b3e0b899e0b8b2e0b888esube0b89ce0b8b9e0b989e0b894e0b8b3e0b980.pdf"> (pdf)</a>  &nbsp;</span><br/>
                                            <span
                                                style={{color:'#000080'}}> &nbsp; &nbsp; 6.&nbsp;แบบแสดงรายละเอียดเพิ่มเติมของสถานที่ผลิตอาหาร <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2012/04/e0b981e0b89ae0b89ae0b981e0b8aae0b894e0b887e0b8a3e0b8b2e0b8a2e0b8a5e0b8b0e0b980e0b8ade0b8b5e0b8a2e0b894e0b980e0b89ee0b8b4e0b988e0b8a11.pdf"> (pdf)</a>  &nbsp;</span><br/>
                                            <span
                                                style={{color:'#000080'}}> &nbsp; &nbsp; 7.&nbsp;คำขอตรวจประเมินสถานที่ผลิตและเก็บอาหาร <a style={{textDecoration:'underline'}} href="https://fdasamutprakan.com/form/foods/%e0%b8%84%e0%b8%b3%e0%b8%82%e0%b8%ad%e0%b8%95%e0%b8%a3%e0%b8%a7%e0%b8%88%e0%b8%9b%e0%b8%a3%e0%b8%b0%e0%b9%80%e0%b8%a1%e0%b8%b4%e0%b8%99%e0%b8%aa%e0%b8%96%e0%b8%b2%e0%b8%99%e0%b8%97%e0%b8%b5%e0%b9%88/"> (pdf)</a>  &nbsp;</span><br/>
                                            <span
                                                style={{color:'#000080'}}> &nbsp; &nbsp; 8.&nbsp;คำขอตั้งโรงงานผลิตอาหาร อ1 <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2012/04/e0b884e0b8b3e0b882e0b8ade0b8ade0b899e0b8b8e0b88de0b8b2e0b895e0b895e0b8b1e0b989e0b887e0b982e0b8a3e0b887e0b887e0b8b2e0b899e0b89ce0b8a51.pdf"> (pdf)</a>  <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2012/04/e0b884e0b8b3e0b882e0b8ade0b8ade0b899e0b8b8e0b88de0b8b2e0b895e0b895e0b8b1e0b989e0b887e0b982e0b8a3e0b887e0b887e0b8b2e0b899e0b89ce0b8a5.doc">(word)</a>  &nbsp;</span><br/>
                                            <span
                                                style={{color:'#000080'}}> &nbsp; &nbsp; 9.&nbsp;คำขอต่ออายุใบอนุญาตผลิตอาหาร อ.3 <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2018/09/e0b895e0b988e0b8ade0b8ade0b8b2e0b8a2e0b8b8e0b8ade0b8b2e0b8abe0b8b2e0b8a3_e0b8ad3.pdf"> (pdf)</a> <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2018/09/e0b895e0b988e0b8ade0b8ade0b8b2e0b8a2e0b8b8e0b8ade0b8b2e0b8abe0b8b2e0b8a3_e0b8ad3.doc"> (word)</a>  &nbsp;</span><br/>
                                            <span
                                                style={{color:'#000080'}}> &nbsp; &nbsp; 10.&nbsp;คำขอใบแทนใบอนุญาตผลิตอาหาร อ.4  <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2012/04/e0b884e0b8b3e0b882e0b8ade0b983e0b89ae0b981e0b897e0b899e0b983e0b89ae0b8ade0b899e0b8b8e0b88de0b8b2e0b895e0b89ce0b8a5e0b8b4e0b895e0b8ad2.pdf">(pdf)</a> <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2012/04/e0b884e0b8b3e0b882e0b8ade0b983e0b89ae0b981e0b897e0b899e0b983e0b89ae0b8ade0b899e0b8b8e0b88de0b8b2e0b895e0b89ce0b8a5e0b8b4e0b895e0b8ad.doc">(word)</a>  &nbsp;</span><br/>
                                            <span
                                                style={{color:'#000080'}}> &nbsp; &nbsp; 11.&nbsp;คำขอย้ายสถานที่ผลิตอาหาร อ.5 <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2017/04/04-o5.pdf">(pdf)</a> <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2017/04/04-o5.doc">(word)</a>  &nbsp;</span><br/>
                                            <span
                                                style={{color:'#000080'}}> &nbsp; &nbsp; 12.&nbsp;คำขอเปลี่ยนแปลงรายการในใบอนุญาตผลิตอาหาร ส.4  <a href="https://samutprakarnfda.files.wordpress.com/2012/04/e0b884e0b8b3e0b882e0b8ade0b980e0b89be0b8a5e0b8b5e0b988e0b8a2e0b899e0b981e0b89be0b8a5e0b887e0b8a3e0b8b2e0b8a2e0b881e0b8b2e0b8a3e0b9831.pdf">(pdf)</a>  &nbsp;</span><br/>
                                            <span
                                                style={{color:'#000080'}}> &nbsp; &nbsp; 13.&nbsp;คำขอรับเลขสถานที่ผลิตอาหารไม่เข้าข่ายโรงงาน (สบ.1) <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2019/10/e0b884e0b8b3e0b882e0b8ad-e0b8aae0b89a1_62.pdf">(pdf)</a> &nbsp; </span><img data-attachment-id="1969" data-permalink="https://fdasamutprakan.com/form/foods/prefood/new-icon/#main" data-orig-file="https://samutprakarnfda.files.wordpress.com/2018/02/new-icon.gif" data-orig-size="26,13" data-comments-opened="0" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="new-icon" data-image-description="" data-medium-file="https://samutprakarnfda.files.wordpress.com/2018/02/new-icon.gif?w=26" data-large-file="https://samutprakarnfda.files.wordpress.com/2018/02/new-icon.gif?w=26" class="alignnone size-full wp-image-1969" src="https://samutprakarnfda.files.wordpress.com/2018/02/new-icon.gif?w=700" alt=""   /><br/>
                                            <span
                                                style={{color:'#000080'}}> &nbsp; &nbsp; 14.&nbsp;แบบการแก้ไขสถานที่ผลิตอาหารไม่เข้าข่ายโรงงาน (สบ.2) <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2018/09/e0b8aae0b89a2.pdf">(pdf)</a>  &nbsp;</span><br/>
                                            <span
                                                style={{color:'#000080'}}> &nbsp; &nbsp; 15.&nbsp;แบบบันทึกข้อความกรณียกเลิกประเภทอาหาร (เฉพาะที่ไม่ตรวจสถานที่) <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2018/09/e0b89ae0b8b1e0b899e0b897e0b8b6e0b881e0b884e0b8b3e0b983e0b8abe0b989e0b881e0b8b2e0b8a3e0b8a2e0b881e0b980e0b8a5e0b8b4e0b881e0b89be0b8a3.docx">(word)</a>  &nbsp;</span><br/>
                                            <span
                                                style={{color:'#000080'}}> &nbsp; &nbsp; 16.&nbsp;แบบบันทึกคำให้การต่ออายุใบอนุญาตผลิตอาหาร <a href="https://samutprakarnfda.files.wordpress.com/2018/09/e0b89ae0b8b1e0b899e0b897e0b8b6e0b881e0b884e0b8b3e0b983e0b8abe0b989e0b881e0b8b2e0b8a3e0b895e0b988e0b8ade0b8ade0b8b2e0b8a2e0b8b8.docx">(word)</a>  &nbsp;</span><br/>
                                            <span
                                                style={{color:'#000080'}}> &nbsp; &nbsp; 17.&nbsp; คำขออนุญาตนำหรือสั่งอาหารฯ/เพิ่มประเภทอาหารนำสั่ง อ.6  <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2012/04/e0b882e0b8ade0b8ade0b899e0b8b8e0b88de0b8b2e0b895e0b899e0b8b3e0b8aae0b8b1e0b988e0b887-e0b8ad62.pdf">(pdf)</a> <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2012/04/e0b882e0b8ade0b8ade0b899e0b8b8e0b88de0b8b2e0b895e0b899e0b8b3e0b8aae0b8b1e0b988e0b887-e0b8ad6.doc">(word)</a>  &nbsp;</span><br/>
                                            <span
                                                style={{color:'#000080'}}> &nbsp; &nbsp; 18.&nbsp; แบบบันทึกคำให้การต่ออายุ(กรณีไม่มีผลการตรวจสถานที่) <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2019/12/e0b89ae0b8b1e0b899e0b897e0b8b6e0b881e0b884e0b8b3e0b983e0b8abe0b989e0b881e0b8b2e0b8a3e0b895e0b988e0b8ade0b8ade0b8b2e0b8a2e0b8b8e0b881e0b8a3e0b893e0b8b5e0b984e0b8a1e0b988e0b8a1e0b8b5e0b89.docx">(word)</a> &nbsp;</span><br/>
                                            <span
                                                style={{color:'#000080'}}> &nbsp; &nbsp; 19.&nbsp;คำรับรองประกอบการขออนุญาตนำหรือสั่งอาหาร <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2019/10/e0b884e0b8b3e0b8a3e0b8b1e0b89ae0b8a3e0b8ade0b887e0b899e0b8b3e0b980e0b882e0b989e0b8b2e0b8ade0b8b2e0b8abe0b8b2e0b8a362.pdf">(pdf)</a> &nbsp;</span><img
                                                className="alignnone size-full wp-image-2640"
                                                src="https://samutprakarnfda.files.wordpress.com/2019/09/update.gif?w=46"
                                                alt="update" width="46" height="14"
                                                srcSet="https://samutprakarnfda.files.wordpress.com/2019/09/update.gif?w=46&amp;zoom=2 2x"
                                                src-orig="https://samutprakarnfda.files.wordpress.com/2019/09/update.gif?w=700"
                                                scale="2"/><br/>
                                            <span
                                                style={{color:'#000080'}}> &nbsp; &nbsp; 20.&nbsp;คำขอใบแทนใบอนุญาตนำสั่งฯ อ.9  <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2012/04/e0b884e0b8b3e0b882e0b8ade0b983e0b89ae0b981e0b897e0b899e0b983e0b89ae0b8ade0b899e0b8b8e0b88de0b8b2e0b895e0b899e0b8b3e0b8aae0b8b1e0b9881.pdf">(pdf)</a> <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2012/04/e0b884e0b8b3e0b882e0b8ade0b983e0b89ae0b981e0b897e0b899e0b983e0b89ae0b8ade0b899e0b8b8e0b88de0b8b2e0b895e0b899e0b8b3e0b8aae0b8b1e0b9881.doc">(word)</a>  &nbsp;</span><br/>
                                            <span
                                                style={{color:'#000080'}}> &nbsp; &nbsp; 21.&nbsp;คำขอย้ายสถานที่นำเข้า อ.10  <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2012/04/e0b884e0b8b3e0b882e0b8ade0b8ade0b899e0b8b8e0b88de0b8b2e0b895e0b8a2e0b989e0b8b2e0b8a2e0b8aae0b896e0b8b2e0b899e0b897e0b8b5e0b988e0b8992.pdf">(pdf)</a>  <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2012/04/e0b884e0b8b3e0b882e0b8ade0b8ade0b899e0b8b8e0b88de0b8b2e0b895e0b8a2e0b989e0b8b2e0b8a2e0b8aae0b896e0b8b2e0b899e0b897e0b8b5e0b988e0b899.doc">(word)</a> &nbsp;</span><br/>
                                            <span
                                                style={{color:'#000080'}}> &nbsp; &nbsp; 22.&nbsp;คำขอเปลี่ยนแปลงรายการในใบอนุญาตนำหรือสั่งอาหารฯ ส.5 <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2012/04/e0b884e0b8b3e0b882e0b8ade0b980e0b89be0b8a5e0b8b5e0b988e0b8a2e0b899e0b981e0b89be0b8a5e0b887e0b8a3e0b8b2e0b8a2e0b881e0b8b2e0b8a3e0b9833.pdf">(pdf)</a> <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2012/04/e0b884e0b8b3e0b882e0b8ade0b980e0b89be0b8a5e0b8b5e0b988e0b8a2e0b899e0b981e0b89be0b8a5e0b887e0b8a3e0b8b2e0b8a2e0b881e0b8b2e0b8a3e0b983.doc">(word)</a>  &nbsp;</span><br/>
                                            <span
                                                style={{color:'#000080'}}> &nbsp; &nbsp; 23.&nbsp;หนังสือแจ้งความประสงค์ขอเปลี่ยนใบอนุญาตผลิตอาหารเป็นไม่เข้าข่ายโรงงาน <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2019/10/e0b8abe0b899e0b8b1e0b887e0b8aae0b8b7e0b8ade0b981e0b888e0b989e0b887e0b884e0b8a7e0b8b2e0b8a1e0b89be0b8a3e0b8b0e0b8aae0b887e0b884e0b98ce0b980e0b89be0b987e0b899e0b984e0b8a1e0b988e0b980e0b882.pdf">(pdf)</a> &nbsp;</span><br/>
                                            <span
                                                style={{color:'#000080'}}> &nbsp; &nbsp; 24.&nbsp;คำขอยกเลิกใบอนุญาต/สบ.1/ใบสำคัญต่างๆ <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2012/04/e0b884e0b8b3e0b882e0b8ade0b8a2e0b881e0b980e0b8a5e0b8b4e0b881e0b983e0b89ae0b8ade0b899e0b8b8e0b88de0b8b2e0b895.pdf">(pdf)</a> &nbsp;</span><br/>
                                            <span
                                                style={{color:'#000080'}}> &nbsp; &nbsp; 25.&nbsp;คำร้องขอรับเงินคืน <a style={{textDecoration:'underline'}} href="https://samutprakarnfda.files.wordpress.com/2018/11/e0b884e0b8b3e0b8a3e0b989e0b8ade0b887e0b882e0b8ade0b884e0b8b7e0b899e0b980e0b887e0b8b4e0b899.pdf">(pdf)</a> &nbsp;</span><br/><br/>
                                            </p>

                                            <p align="center" ><font size="4">
                                            เมื่อได้รับ ใบอนุญาตผลิตอาหาร หรือ ใบอนุญาตนำหรือสั่งอาหารเข้ามาในราชอาณาจักรแล้ว<br />
สำหรับอาหารกลุ่ม 1 : ควบคุมเฉพาะให้ยื่นคำขอขึ้นทะเบียนตำรับอาหาร<br />
สำหรับอาหารกลุ่ม 2 : อาหารที่กำหนดคุณภาพหรือมาตรฐาน ให้ยื่นคำขอจดทะเบียนอาหาร<br />
สำหรับอาหารกลุ่ม 3 และอาหารทั่วไปที่ประสงค์จะขอเลขสารบบอาหาร : ให้ยื่นแจ้งรายละเอียดอาหาร
                                            </font></p>

                                            <p align="center">
                                            <h2 align="center"><font color="#000080"><a href="https://fdasamutprakan.com/form/foods/%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b8%a2%e0%b8%b7%e0%b9%88%e0%b8%99%e0%b8%82%e0%b8%ad%e0%b8%a3%e0%b8%b1%e0%b8%9a%e0%b9%80%e0%b8%a5%e0%b8%82%e0%b8%aa%e0%b8%b2%e0%b8%a3%e0%b8%9a%e0%b8%9a%e0%b8%ad%e0%b8%b2/">การยื่นขอรับเลขสารบบอาหาร/แก้ไขเลขสารบบอาหาร <img data-attachment-id="2217" data-permalink="https://fdasamutprakan.com/2018/06/11/%e0%b9%81%e0%b8%88%e0%b9%89%e0%b8%87%e0%b8%9b%e0%b8%a3%e0%b8%b0%e0%b8%8a%e0%b8%b2%e0%b8%aa%e0%b8%b1%e0%b8%a1%e0%b8%9e%e0%b8%b1%e0%b8%99%e0%b8%98%e0%b9%8c%e0%b8%9c%e0%b8%b9%e0%b9%89%e0%b8%9b%e0%b8%a3-2/click-2-1/#main" data-orig-file="https://samutprakarnfda.files.wordpress.com/2018/06/click-2-1.gif" data-orig-size="200,100" data-comments-opened="0" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="click (2) (1)" data-image-description="" data-medium-file="https://samutprakarnfda.files.wordpress.com/2018/06/click-2-1.gif?w=200" data-large-file="https://samutprakarnfda.files.wordpress.com/2018/06/click-2-1.gif?w=200" class="wp-image-2217 alignnone" src="https://samutprakarnfda.files.wordpress.com/2018/06/click-2-1.gif?w=62&#038;h=31" alt="" width="62" height="31" srcset="https://samutprakarnfda.files.wordpress.com/2018/06/click-2-1.gif?w=62&amp;h=31 62w, https://samutprakarnfda.files.wordpress.com/2018/06/click-2-1.gif?w=124&amp;h=62 124w" sizes="(max-width: 62px) 100vw, 62px" /></a></font></h2>

                                            <span align="center" style={{color:'#000080'}}><font size="3">เอกสาร word ใช้ font “TH SarabunPSK”  สามารถ downloadได้ <a href="https://www.f0nt.com/release/13-free-fonts-from-sipa/">โปรดคลิก</a></font></span>

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
    export default Detail_food;
