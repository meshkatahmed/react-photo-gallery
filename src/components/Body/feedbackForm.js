import {Form,FormGroup,Input,Select,Option,Label,Button} from 'reactstrap';

const FeedbackForm = props => {
    document.title = 'Feedback Form';
    return (
        <div className='container'>
            <Form>
                <FormGroup>
                    <Label>Name: </Label>
                    <Input type='text' placeholder='Your name'/>
                </FormGroup>
                <FormGroup>
                    <Label>Rating: </Label>
                    <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </FormGroup>
                <FormGroup>
                    <Label>Feedback: </Label>
                    <Input type='textarea' placeholder='Write your feedback'/>
                </FormGroup>
                <Button type='submit' className='btn btn-md btn-success'>Submit</Button>
            </Form>
        </div>
    );
}

export default FeedbackForm;