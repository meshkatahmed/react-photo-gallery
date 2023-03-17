import { Component } from 'react';
import {Form,FormGroup,Input,Label,Button} from 'reactstrap';
import axios from 'axios';

class FeedbackForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageId: this.props.imageId,
            name: '',
            rating: '',
            feedback: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange = event => {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }
    handleSubmit = event => {
        axios.post('http://localhost:3001/feedbacks',this.state);
        this.setState(
            {
                name: '',
                rating: '',
                feedback: ''
            }
        );

        event.preventDefault();
    }
    // document.title = 'Feedback Form';
    
    render () {
        return (
            <div className='container'>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label>Name: </Label>
                        <Input type='text' placeholder='Your name'
                            name='name' value={this.state.name}
                            onChange={this.handleInputChange} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Rating: </Label>
                        <Input name='rating' value={this.state.rating}
                        type='select' onChange={this.handleInputChange} required>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Feedback: </Label>
                        <Input type='textarea' placeholder='Write your feedback' 
                            name='feedback' value={this.state.feedback}
                            onChange={this.handleInputChange} required/>
                    </FormGroup>
                    <Button type='submit' className='btn btn-md btn-success'>Submit</Button>
                </Form>
            </div>
        );
    }
}

export default FeedbackForm;