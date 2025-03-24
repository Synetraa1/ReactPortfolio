import React from "react";
import "./navbar.css";
import { ButtonGroup, Button } from '@mui/material';

const Navbar = () => {
    const buttonStyle = {
        color: '#fff',
        border: '1px solid #ff0000', // Initial border color (or whatever your current color is)
        '&:hover': {
            backgroundColor: '#b71c1c', // darker red background on hover
            border: '1px solid #fff', // deeper border color on hover
        }
    };
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <div className="label">
                    <div className="text-wrapper">Portfolio by Nicholas Hickman</div>
                </div>
            </div>
            <div className="navbar-right">
                <ButtonGroup
                    color="error"
                    orientation="horizontal"
                    size="lg"
                    spacing={2}
                >
                    <Button sx={buttonStyle}>C.V</Button>
                    <Button sx={buttonStyle}>Projects</Button>
                    <Button sx={buttonStyle}>Resume</Button>
                </ButtonGroup>
            </div>
        </nav>
    );
};

export default Navbar;