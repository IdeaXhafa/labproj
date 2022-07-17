import React,{Component} from "react";
import {Modal,Button,Row,Col,Form} from 'react-bootstrap';

export class EditSubject extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch("http://localhost:5000/api/subject",{
        method:"PUT",
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            SubjectId:event.target.SubjectId.value,
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
                                Edit Subject
                            </Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <Row>
                                <Col sm={6}>
                                    <Form onSubmit={this.handleSubmit}>

                                        <Form.Group controlId="SubjectId">
                                            <Form.Label>SubjectId</Form.Label>
                                            <Form.Control type="text" name="SubjectId" 
                                            required disabled 
                                            defaultValue={this.props.subid}
                                            placeholder="SubjectId"/>
                                        </Form.Group>

                                        <Form.Group controlId="SubjectName">
                                            <Form.Label>SubjectName</Form.Label>
                                            <Form.Control type="text" name="SubjectName" 
                                            required 
                                            defaultValue={this.props.subname}
                                            placeholder="SubjectName"/>
                                        </Form.Group>

                                        <Form.Group>
                                            <Button variant="primary" type="submit">
                                                Update Subject
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