import { Component } from 'react';
import {Card,CardBody,CardHeader,CardFooter,Button} from 'reactstrap';
import DisplayPhotos from './Display/displayPhotos';
import './body.css';

class Body extends Component {
    state = {
        category: null,
        selected: false
    }

    showPhotos = category => {
        this.setState(
            {
                category: category,
                selected: true
            }
        )
    }

    render () {
        if (!this.state.selected) {
            return (
                <div className='container'>
                    <Card>
                        <CardHeader className='cardheader' style={{backgroundColor:'brown',color:'aqua'}}>Select a Category</CardHeader>
                        <CardBody className='cardbody'>
                            <Button className='button btn-info' onClick={()=>this.showPhotos('natural')}>Natural</Button>
                            <Button className='button btn-info' onClick={()=>this.showPhotos('food')}>Food</Button>
                            <Button className='button btn-info' onClick={()=>this.showPhotos('technology')}>Technology</Button>
                        </CardBody>
                        <CardFooter className='cardfooter' style={{backgroundColor:'brown',color:'aqua'}}>Happy Browsing!!</CardFooter>
                    </Card>
                </div>
            );
        } else {
            return (
                <div className='container'>
                    <DisplayPhotos category={this.state.category}/>
                </div>
            );
        }
    }
}

export default Body;