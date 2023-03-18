import { Component } from "react";
import Feedbacks from '../Feedback/feedbacks';
import FeedbackForm from "../Feedback/feedbackForm";
import { Button,Modal,ModalBody,ModalFooter,ModalHeader } from "reactstrap";
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
            const imageFeedbacks = this.state.feedbacks.filter(
                feedback => feedback.imageId === this.state.selectedImage.id
            );
            const callFeedbacks = imageFeedbacks.map(imageFeedback => {
                return (
                    <Feedbacks name={imageFeedback.name} 
                        rating={imageFeedback.rating} 
                        comment={imageFeedback.feedback}
                        key={imageFeedback.id}
                    />
                );
            });
            return (
                <div className="container">
                    <Modal isOpen={this.state.isModalOpen}  onClick={this.getFeedbacks}>
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
                                feedbacks={this.state.feedbacks}
                            />
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
                    case 'nature':
                        const naturalImages = this.state.images.filter(
                            image => this.props.category === image.category 
                        );
                        const callNaturalImages = naturalImages.map(image => {
                            return (
                                <img className="image col-4" src={image.link}
                                    alt={image.category}
                                    onClick={() => this.selectImage(image.id-1)}
                                    key={image.id}
                                />
                            );
                        });
                        return (
                            <div>
                                <h5 className="message">Click in the middle of an image to give feedback</h5>
                                <div className="row">
                                    {callNaturalImages}
                                </div>
                            </div>   
                        );
                    case 'food':
                        const foodImages = this.state.images.filter(
                            image => this.props.category === image.category 
                        );
                        const callFoodImages = foodImages.map(image => {
                            return (
                                <img className="image col-4" src={image.link}
                                    alt={image.category}
                                    onClick={() => this.selectImage(image.id-1)}
                                    key={image.id}
                                />
                            );
                        });
                        return (
                            <div>
                                <h5 className="message">Click on an image to give feedback</h5>
                                <div className="row">
                                    {callFoodImages}
                                </div>
                            </div>
                        );
                    case 'technology':
                        const techImages = this.state.images.filter(
                            image => this.props.category === image.category 
                        );
                        const callTechImages = techImages.map(image => {
                            return (
                                <img className="image col-4" src={image.link}
                                    alt={image.category}
                                    onClick={() => this.selectImage(image.id-1)}
                                    key={image.id}
                                />
                            );
                        });
                        return (
                            <div>
                                <h5 className="message">Click on an image to give feedback</h5>
                                <div className="row">
                                    {callTechImages}
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