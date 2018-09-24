import React, {Component} from "react";
import {
    Nav,
    NavDropdown,
    MenuItem
} from "react-bootstrap";

class HeaderLinks extends Component {
    constructor() {
        super();
        this.handleClickLogOut = this.handleClickLogOut.bind(this);
    }

    handleClickLogOut() {
        this.props.history.push('/login');
    }

    render() {
        return (
            <div>
                <Nav pullRight>
                    <NavDropdown
                        eventKey={4}
                        title={
                            <div>
                                <i className="fa fa-list"/>
                                <p className="hidden-md hidden-lg">
                                    More
                                    <b className="caret"/>
                                </p>
                            </div>
                        }
                        noCaret
                        id="basic-nav-dropdown-3"
                        bsClass="dropdown-with-icons dropdown"
                    >
                        <MenuItem eventKey={4.5} onClick={this.handleClickLogOut}>
                            <div className="text-danger">
                                <i className="pe-7s-close-circle"/> Log out
                            </div>
                        </MenuItem>
                    </NavDropdown>
                </Nav>
            </div>
        );
    }
}

export default HeaderLinks;
