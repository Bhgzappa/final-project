import React, { useContext } from "react";
import {
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavDropdown,
} from "react-bootstrap";
import { FiPower, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import { StaffContext } from "../contexts/StaffContext";

const Header = () => {
  const { logout, staffInfo } = useContext(StaffContext);

  // const staff = JSON.parse(localStorage.getItem("staffInfo"));

  const handlelogout = () => {
    logout();
  };

  return (
    <Navbar className="bg-danger navbar-expand text-white">
      <Container>
        <NavbarBrand className="text-white">
          <marquee className="text-center" behavior="stay" direction="">
            WELCOME, PLEASE SIGN IN/SIGN UP
          </marquee>{" "}
        </NavbarBrand>
        {staffInfo.token ? (
          <Nav>
            <>
              <Nav.Link>
                <Link to="/patients" className="nav-link">
                  PATIENTS
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/addpatient" className="nav-link">
                  ADD
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/services" className="nav-link">
                  SERVICES
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/about" className="nav-link">
                  ABOUT
                </Link>
              </Nav.Link>
              <NavDropdown
                title={
                  <FiUser
                    size={25}
                    style={{
                      border: "2px solid #000",
                      borderRadius: 20,
                      padding: 1,
                    }}
                  />
                }
              >
                <NavDropdown.Item>{staffInfo.name}</NavDropdown.Item>
                <NavDropdown.Item>{staffInfo.email}</NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    to="/logout"
                    className="text-dark nav-link"
                    onClick={handlelogout}
                  >
                    <FiPower size={30} />
                    Logout
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </>
          </Nav>
        ) : (
          <></>
        )}
      </Container>
    </Navbar>
  );
};

export default Header;
