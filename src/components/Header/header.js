import {Navbar,Nav,NavLink,NavItem} from 'reactstrap';

import './header.css'; 

const Header = () => {
    return (
        <div className='navigation'>
            <Navbar>
                <Nav className='d-flex'>
                    <NavItem className='navitem'>
                        <NavLink href='#'>Sign Up</NavLink>
                    </NavItem>
                    <NavItem className='navitem'>
                        <NavLink href='#'>Select a Category</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div> 
    );
}

export default Header;