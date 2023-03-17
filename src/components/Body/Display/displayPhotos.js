import { Component } from "react";
import Feedbacks from '../Feedback/feedbacks';
import FeedbackForm from "../Feedback/feedbackForm";
import { Button, Modal,ModalBody,ModalFooter,ModalHeader } from "reactstrap";
import Loading from '../loading'
import axios from 'axios';
import './displayPhotos.css';

class DisplayPhotos extends Component {
    state = {
        images: null,
        feedbacks: null,
        selectedImage: null,
        isModalOpen: false
    }
    selectImage = (index) => {
        this.setState (
            {
                isModalOpen: !this.state.isModalOpen,
                selectedImage: this.state.images[index]
            }
        );
    }
    toggleModal = () => {
        this.setState(
            {
                selectedImage: null,
                isModalOpen: !this.state.isModalOpen
            }
        );
    }
    componentDidMount() {
        axios.get('http://localhost:3001/images')
        .then(response=>response.data).then(data=>this.setState({images:data}));
        axios.get('http://localhost:3001/feedbacks')
        .then(response=>response.data).then(data=>this.setState({feedbacks:data}));
    }
    render () {
        if (this.state.selectedImage != null) {
            const callFeedbacks = this.state.feedbacks.map(
                feedback => {
                    if (feedback.imageId === this.state.selectedImage.id)
                        return (
                            <Feedbacks name={feedback.name} 
                                rating={feedback.rating} 
                                comment={feedback.comment}
                                key={feedback.id}
                            />
                        );
                } 
            );
            return (
                <div className="container">
                    <Modal isOpen={this.state.isModalOpen} onClick={this.getFeedbacks}>
                        <ModalHeader>
                            <img style={{marginLeft:'100px',marginRight:'100px'}}
                                src={this.state.selectedImage.link}
                                alt={this.state.selectedImage.category}
                            />
                        </ModalHeader>
                        <ModalBody>
                            {callFeedbacks}
                            <FeedbackForm 
                                imageId={this.state.selectedImage.id}
                                feedbacks={this.state.feedbacks}/>
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={this.toggleModal}>Close</Button>
                        </ModalFooter>
                    </Modal>
                </div>
                
            );
        } else {
            if (this.state.images != null) {
                switch(this.props.category) {
                    case 'natural':
                        return (
                            <div>
                                <h5 className="message">Click on an image to give feedback</h5>
                                <div className="d-flex">
                                    <img className='image' 
                                        src={this.state.images[0].link} 
                                        alt={this.state.images[0].category}
                                        onClick={()=>this.selectImage(0)}
                                    />
                                    <img className='image' 
                                        src={this.state.images[1].link} 
                                        alt={this.state.images[1].category}
                                        onClick={()=>this.selectImage(1)}
                                    />
                                </div>
                            </div>   
                        );
                    case 'food':
                        return (
                            <div>
                                <h5 className="message">Click on an image to give feedback</h5>
                                <div className="d-flex">
                                    <img className='image' 
                                        src={this.state.images[2].link} 
                                        alt={this.state.images[2].category}
                                        onClick={()=>this.selectImage(2)}
                                    />
                                    <img className='image' 
                                        src={this.state.images[3].link} 
                                        alt={this.state.images[3].category}
                                        onClick={()=>this.selectImage(3)}
                                    />
                                </div>
                            </div>
                        );
                    case 'technology':
                        return (
                            <div>
                                <h5 className="message">Click on an image to give feedback</h5>
                                <div className="d-flex">
                                    <img className='image' 
                                        src={this.state.images[4].link} 
                                        alt={this.state.images[4].category}
                                        onClick={()=>this.selectImage(4)}    
                                    />
                                    <img className='image' 
                                        src={this.state.images[5].link} 
                                        alt={this.state.images[5].category}
                                        onClick={()=>this.selectImage(5)}    
                                    />
                                </div>
                            </div>
                        );
                    default:
                        return (
                            <div><p>No category is selected</p></div>
                        );
                }
            } else {
                <Loading/>
            }  
        }
    }
}

export default DisplayPhotos;