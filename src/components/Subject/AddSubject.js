import React,{Component} from "react";
import {Modal,Button,Row,Col,Form} from 'react-bootstrap';

export class AddSubject extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch("http://localhost:5000/api/subject",{
        method:"POST",
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            //SubjectId:null,
            SubjectName:event.target.SubjectName.value
        })
    })
    .then(res=>res.json())
    .then((result)=>{
        alert(result);
    },
    (error)=>{
        alert('Insertion failed!');
    })
    }

    render(){
        return(
            <div className="container">

                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="container-modal-title-vcenter"
                    centered
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">
                                Add Subject
                            </Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <Row>
                                <Col sm={6}>
                                    <Form onSubmit={this.handleSubmit}>
                                        <Form.Group controlId="SubjectName">
                                            <Form.Label>SubjectName</Form.Label>
                                            <Form.Control type="text" name="SubjectName" 
                                            required placeholder="SubjectName"/>
                                        </Form.Group>

                                        <Form.Group>
                                            <Button variant="primary" type="submit">
                                                Add Subject
                                            </Button>
                                        </Form.Group>
                                    </Form>
                                </Col>
                            </Row>
                        </Modal.Body>

                <Modal.Footer>
                    <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
                </Modal>
            </div>
        )
    }
}