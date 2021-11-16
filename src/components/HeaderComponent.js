import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap'
import { NavLink } from 'react-router-dom';
import React, {Component} from "react";




class Header extends Component {
    constructor(props) {
        super(props);
    
        
        this.state = {
          isNavOpen: false,
          isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleNodal =this.toggleNodal.bind(this);
        this.handleLogin =this.handleLogin.bind(this);

      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

      toggleNodal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
          });
      }

      handleLogin(event) {
        this.toggleModal();
        alert("Number of guests: " + this.guests.value + "Date and Time: " + this.date.value + this.time.value + " Remember: " + this.remember.checked);
        event.preventDefault();

    }

    render() {
        return(
            <React.Fragment >                
                <Navbar dark expand="md ">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link"  to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                                </NavItem>
                                </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button onClick={this.toggleNodal}  className="btn btn-warning btn-large">
                                        <span className=" fa fa-sign-in fa-lg">                                     
                                        </span>
                                        Reserve
                                    </Button>
                                </NavItem>
                            </Nav> 
                        </Collapse>
                    </div>                   
                </Navbar>
               
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                            <div className="col-12 col-sm-6 row">
                                <div className="col-sm-6">
                                    <img src='assets/images/logo.png'/>
                                   
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    
                    <ModalHeader toggle={this.toggleModal}>
                        Login
                    </ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <h5>Number of Guests</h5>

                                <label htmlFor="1">1</label>
                                <Input type="radio" id="guests" name="guests" innerRef={(input) => this.guests = input} />

                                <label htmlFor="1">2</label>
                                <Input type="radio" id="guests" name="guests" innerRef={(input) => this.guests = input} />

                                <label htmlFor="1">3</label>
                                <Input type="radio" id="guests" name="guests" innerRef={(input) => this.guests = input} />

                                <label htmlFor="1">4</label>
                                <Input type="radio" id="guests" name="guests" innerRef={(input) => this.guests = input} />

                                <label htmlFor="1">5</label>
                                <Input type="radio" id="guests" name="guests" innerRef={(input) => this.guests = input} />

                                <label htmlFor="1">6</label>
                                <Input type="radio" id="guests" name="guests" innerRef={(input) => this.guests = input} />

    

                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="dateandtime">Date and Time</Label>
                                <Input type="text" id="date" name="date" innerRef={(input) => this.date = input}  />
                                <Input type="text" id="time" name="time" innerRef={(input) => this.time = input}  />
                                
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember my choices
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Reserve</Button>
                        </Form>

                    </ModalBody>

                </Modal>
            </React.Fragment>
            
        );
    }
}

export default Header;