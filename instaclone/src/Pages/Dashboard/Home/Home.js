import React, { useState } from 'react'
import { Row } from 'react-bootstrap'
import instalogo from '../../../Images/instalog.png'
import black from '../../../Images/black.png'
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import {BookOutlined,VideoCameraOutlined, SendOutlined,InstagramOutlined,SearchOutlined ,HomeFilled,CompassOutlined,HeartOutlined,PlusSquareOutlined,CommentOutlined,UserAddOutlined } from '@ant-design/icons'
import './Home.css'

function Home() {
    const navData = [
        {
            "name":"Home",
            "icon":<InstagramOutlined />
        },
        {
            "name":"Search",
            "icon":<SearchOutlined />
        },
        {
            "name":"Explore",
            "icon":<CompassOutlined />
        },
        {
            "name":"Reels",
            "icon":<VideoCameraOutlined />
        },
        {
            "name":"Home",
            "icon":<HomeFilled />
        },
        {
            "name":"Messages",
            "icon":<CommentOutlined />
        },
        {
            "name":"Notifications",
            "icon":<HeartOutlined />
        },
        {
            "name":"Create",
            "icon":<PlusSquareOutlined />
        },
        {
            "name":"Profile",
            "icon":<UserAddOutlined />
        }
    ]
    const [data,setData] =useState(navData)
  return (
    <Row>
      <div className="col-2 sidenav">
        <div>
          <img src={instalogo} style={{ width: "70%", marginLeft: "12px" }} />
        </div>
        <div className="mt-3">
          <ul>
            {data.map((item, index) => (
              <li key={index} className='mt-2'>
                {item.icon && <span className="icon" style={{ fontSize: '24px' }}>{item.icon}</span>}&nbsp;&nbsp;
                {item?.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-7">
        <Card className="mt-3">
          <Card.Body>
            {[...Array(9)].map((_, index) => (
                    <Image
                      key={index}
                      src={black}
                      className="mx-2 storyimg"
                      roundedCircle
                    />
                    
                    
                    ))}
                  
          </Card.Body>
        </Card>
              <div className='mt-5' style={{ width: "60%",height:"60vh", padding: "18px", display: "block", margin: "auto" }}>
                  <Card>
                    <div className='d-flex'> 
                    <Image src={black}style={{width:"30px",height:"30px"}} roundedCircle/> &nbsp;
                    <p style={{fontWeight:"bold"}}>razeen__rasheed</p>

                    </div>
                      <Card.Img variant="top" src={black}  /> 
                      <Card.Body>
                         <div style={{display:"flex",justifyContent:"space-between"}}>
                            <div>
                            <span  style={{ fontSize: '24px' }}><HeartOutlined /></span>&nbsp;&nbsp;
                            <span style={{ fontSize: '24px' }}><CommentOutlined /></span>&nbsp;&nbsp;
                            <span style={{ fontSize: '24px' }}><SendOutlined /></span>&nbsp;&nbsp;
                            </div>
                            <div>
                            <span style={{ fontSize: '24px' }}><BookOutlined /></span>
                            </div>
                           
                         </div>
                          <Card.Text className='mt-2' style={{fontWeight:"bold"}}>razeen__rasheed</Card.Text>
                          <Card.Text>
                              Add a comment......
                          </Card.Text>
                      </Card.Body>
                  </Card>
                  
              </div>
      </div>
      {/* <div className='col-3'>ssssssssss</div> */}
    </Row>
  );
}

export default Home