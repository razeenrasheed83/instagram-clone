import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import InstaLogo from '../../Images/instalog.png';
import bgImage from '../../Images/bg.png'
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { Row } from 'react-bootstrap'

export default function Login() {

    const navigate = useNavigate()
    const redirect=()=>{
        navigate('/dashboard')
        console.log('clicked')
    }

 
  return (
      <Row>
          <div className='col-8 d-flex justify-content-center'>
            <img src={bgImage}/>
          </div>
          <div className='col-4'>
              <div style={{ marginTop: "100px" }}>
                  <Card style={{ width: '70%', height: "60vh" }}>
                      <div style={{ display: "flex", marginTop: "30px", justifyContent: 'center' }}>
                          <Card.Img variant="top" src={InstaLogo} style={{ width: "40%" }} />
                      </div>
                      <Card.Body style={{ marginTop: "20px" }}>
                          <Form>
                              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                  <Form.Control type="email" placeholder="Phone number,username or email address" size="sm" />
                              </Form.Group>
                              <Form.Group className="mb-3" controlId="formPlaintextPassword">
                                  <Form.Control type="password" placeholder="password" size="sm" />
                              </Form.Group>
                              <div className="d-grid gap-2">
                                  <Button style={{ backgroundColor: "#1d83ca " }} size='sm' onClick={redirect}>
                                      Login
                                  </Button>
                              </div>
                          </Form>
                          <div className='mt-3' style={{ color: "#e2e2e2",display:"flex",justifyContent:"center"}}>
                            <p>&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;  OR  &mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;</p>
                         </div>
                         <div className='mt-3' style={{ color: "#122d7a",display:"flex",justifyContent:"center",fontWeight:"bold"}}>
                            <p onClick={redirect} style={{cursor:"pointer"}}>Login with facebook</p>
                         </div>
                         <div className='mt-1' style={{ color: "#122d7a",display:"flex",justifyContent:"center"}}>
                            <p onClick={redirect} style={{cursor:"pointer",fontSize:'13px'}}>Forgotten your password?</p>
                         </div>
                      </Card.Body>
                  </Card>

              </div>
              <div style={{ marginTop: "10px" }}>
                  <Card style={{ width: '70%', height: "8vh" }}>
    
                      <Card.Body style={{display:"flex",justifyContent:"center"}}>
                        <p style={{fontSize:"14px"}}>Don't have an account? <a>Signup</a> </p>
                      </Card.Body>
                  </Card>

              </div>
          </div>
      </Row>
  )
}
