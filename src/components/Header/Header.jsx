import React, {Component} from "react";
import {Navbar} from "react-bootstrap";
import HeaderLinks from "./HeaderLinks.jsx";
import dashboardRoutes from "routes/dashboard.jsx";

class Header extends Component {
    constructor(props) {
        super(props);
        this.handleMinimizeSidebar = this.handleMinimizeSidebar.bind(this);
        this.mobileSidebarToggle = this.mobileSidebarToggle.bind(this);
    }

    makeBrand() {
        var name;
        dashboardRoutes.map((prop, key) => {
            if (prop.collapse) {
                prop.views.map((prop, key) => {
                    if (prop.path === this.props.location.pathname) {
                        name = prop.name;
                    }
                    return null;
                });
            } else {
                if (prop.redirect) {
                    if (prop.path === this.props.location.pathname) {
                        name = prop.name;
                    }
                } else {
                    if (prop.path === this.props.location.pathname) {
                        name = prop.name;
                    }
                }
            }
            return null;
        });
        return name;
    }

    // function that makes the sidebar from normal to mini and vice-versa
    handleMinimizeSidebar() {
        document.body.classList.toggle("sidebar-mini");
    }

    // function for responsive that hides/shows the sidebar
    mobileSidebarToggle(e) {
        document.documentElement.classList.toggle("nav-open");
    }

    render() {
        return (
            <Navbar fluid>
                <div className="navbar-minimize">
                    <button
                        id="minimizeSidebar"
                        className="btn btn-default btn-fill btn-round btn-icon"
                        onClick={this.handleMinimizeSidebar}
                    >
                        <i className="fa fa-ellipsis-v visible-on-sidebar-regular"/>
                        <i className="fa fa-navicon visible-on-sidebar-mini"/>
                    </button>
                </div>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#pablo">{this.makeBrand()}</a>
                    </Navbar.Brand>
                    <Navbar.Toggle onClick={this.mobileSidebarToggle}/>
                </Navbar.Header>
                {window.innerWidth > 992 ? (
                    <Navbar.Collapse>
                        <HeaderLinks props{...this.props} />
                    </Navbar.Collapse>
                ) : null}
            </Navbar>
        );
    }
}

export default Header;
