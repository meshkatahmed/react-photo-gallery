import {Navbar,Nav,NavbarBrand,NavItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import './navigation.css'; 

const Navigation = () => {
    return (
        <div className='navigation'>
            <Navbar>
                <Nav className='d-flex'>
                    <NavbarBrand href='/'>
                        <img src='Assets/Images/logo.jpg' alt='Brand'/>
                    </NavbarBrand>
                    <NavItem className='navitem'>
                        <Link to='/home' className='nav-link active'>Home</Link>
                    </NavItem>
                    <NavItem className='navitem'>
                        <Link to='/register' className='nav-link active'>Sign Up</Link>
                    </NavItem>
                    <NavItem className='navitem'>
                        <Link to='/gallery' className='nav-link'>Gallery</Link>
                    </NavItem>
                </Nav>
            </Navbar>
        </div> 
    );
}

export default Navigation;