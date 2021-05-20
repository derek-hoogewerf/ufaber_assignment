import React, { Component } from 'react';
import { 
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Input,
    Label
} from 'reactstrap';

class CustomModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: this.props.activeItem
        };
    }

// check if checkbox is checked
    handleChange = e => {
        let { name, value } = e.target;
        if(e.target.type === "checkbox") {
            value = e.target.checked;
        }
        const activItem = {...this.state.activeItem, [name]: value };
        this.setState({ activItem })
    };

    render() {
        const { toggle, onSave } = this.props;
        return(
            <Modal isOpen={true} toggle={toggle} >
                <ModalHeader toggle={toggle}> Task Item </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            {/* Project Name */}
                            <label for="title"> Title </label>
                            <Input 
                            type="text" 
                            name="name" 
                            value={this.state.activeItem.name} 
                            onChange={this.handleChange} 
                            placeholder="Enter name of project" />
                        </FormGroup>
                        {/* Desription */}
                        <FormGroup>
                            <label for="description"> Description </label>
                            <input 
                            type="text"
                            name="description"
                            value={this.state.activeItem.description}
                            onChange={this.handleChange}
                            placeholder="Enter project description" />
                        </FormGroup>
                        {/* completed or not boolean */}
                        <FormGroup check>
                            <label for="completed"> Completed </label>
                            <input 
                            type="checkbox"
                            name="completed"
                            checked={this.state.activeItem.completed}
                            onChange={this.handleChange} />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={() => onSave(this.state.activeItem)}>
                        Save
                    </Button>
                </ModalFooter>
            </Modal>        
        )
    }
}

export default CustomModal