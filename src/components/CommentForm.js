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

    handleSubmitCommet(event){
        this.toggleModal();
        alert("Rating: " + this.rating.value + " Your Name: " + this.name.value + " Comment: " + this.comment.checked);
        event.preventDefault();
    };

    formtest(){
        return(
        <div>
        <Modal  isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader className="modal-header" toggle={this.toggleModal}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleModal}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )};

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