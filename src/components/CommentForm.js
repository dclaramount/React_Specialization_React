import React, { Component } from 'react';
import {Button, Row, Col, Label, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

// Helpers to do Validation
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false,
        };

        //Binding the Method so we can call it like "this.toggleNav"
        this.toggleModal = this.toggleModal.bind(this);

    }

    toggleModal(){
        this.setState({isModalOpen: !this.state.isModalOpen})
    };

    handleSubmit(values){
        this.toggleModal();
        console.log('Current State is: ' + JSON.stringify(values), "The Current Date is: " + new Date().toISOString());
        this.props.addComment(this.props.dishId, values.rating, values.name, values.comment);
    };


    form(){
        return(
        <Modal  isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Submit your Comment</ModalHeader>
            <ModalBody>
                <LocalForm className="col-10 offset-1" onSubmit={(values) => this.handleSubmit(values)}>
                    <Row className="form-group mb-2">
                        <Label htmlFor="rating" md={12}>Rating</Label>
                                <Control.select className="col-12" model=".rating" id="rating" name="rating"
                                                defaultValue="1"
                                                color="primary"
                                                className="form-select"
                                >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                </Control.select>
                    </Row>
                    <Row className="form-group mb-2">
                        <Label  htmlFor="name" md={12}>Your Name</Label>
                                <Control.text   model=".name" id="name" name="name"
                                                placeholder="Your Name"
                                                className="form-control"
                                                validators={{
                                                required, 
                                                minLength: minLength(3), 
                                                maxLength: maxLength(15)
                                                }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".name"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 3 letters',
                                        maxLength: 'Must have up to 15',
                                        }}
                                />
                    </Row>
                    <Row className="form-group mb-2">
                        <Label  htmlFor="comment" md={12}>Comment</Label>
                                <Control.textarea model=".comment" id="comment" name="comment"
                                                rows="6"
                                                placeholder=""
                                                className="form-control"
                                />
                    </Row>
                    <Row className="form-group">
                        <Col md={{size:10}}>
                            <Button type="submit" color="primary">
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </LocalForm>
            </ModalBody>
        </Modal>
    )            
    };

    render(){
        return(
            <div>
                <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-pencil fa-lg mb-1"> Submit Comment </span>
                </Button>
                <div>
                    {this.form()}
                </div>
            </div>
        );
    }
}
export default CommentForm;