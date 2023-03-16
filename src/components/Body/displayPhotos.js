import { Component } from "react";
import FeedbackForm from "./feedbackForm";
import { Button, Modal,ModalBody,ModalFooter,ModalHeader } from "reactstrap";
import data from '../../Data/data';
import './displayPhotos.css';

class DisplayPhotos extends Component {
    state = {
        selectedImage: null,
        isModalOpen: false
    }
    selectImage = (index) => {
        this.setState (
            {
                isModalOpen: !this.state.isModalOpen,
                selectedImage: data.images[index]
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
    render () {
        if (this.state.selectedImage != null) {
            return (
                <div className="container">
                    <Modal isOpen={this.state.isModalOpen}>
                        <ModalHeader>
                            <img style={{marginLeft:'100px',marginRight:'100px'}}
                                src={this.state.selectedImage.link}
                            />
                        </ModalHeader>
                        <ModalBody>
                            <FeedbackForm/>
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={this.toggleModal}>Close</Button>
                        </ModalFooter>
                    </Modal>
                </div>
                
            );
        } else {
            switch(this.props.category) {
                case 'natural':
                    return (
                        <div>
                            <h5 className="message">Click on an image to give feedback</h5>
                            <div className="d-flex">
                                <img className='image' 
                                    src={data.images[0].link} 
                                    alt={data.images[0].category}
                                    onClick={()=>this.selectImage(0)}
                                />
                                <img className='image' 
                                    src={data.images[1].link} 
                                    alt={data.images[1].category}
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
                                    src={data.images[2].link} 
                                    alt={data.images[2].category}
                                    onClick={()=>this.selectImage(2)}
                                />
                                <img className='image' 
                                    src={data.images[3].link} 
                                    alt={data.images[3].category}
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
                                    src={data.images[4].link} 
                                    alt={data.images[4].category}
                                    onClick={()=>this.selectImage(4)}    
                                />
                                <img className='image' 
                                    src={data.images[5].link} 
                                    alt={data.images[5].category}
                                    onClick={()=>this.selectImage(5)}    
                                />
                            </div>
                        </div>
                    );
            }
        }
        
    }
}

export default DisplayPhotos;