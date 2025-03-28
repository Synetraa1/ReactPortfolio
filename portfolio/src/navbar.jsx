import React from "react";
import { Box, ButtonGroup, Button, Typography } from '@mui/material';
import content from './Typography.json';

const Navbar = () => {
    const buttonStyle = {
        color: '#fff',
        border: '1px solid #ff0000',
        '&:hover': {
            backgroundColor: '#b71c1c',
            border: '1px solid #fff',
        }
    };

    return (
        <Box
            component="nav"
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 20px',
                backgroundColor: '#000', // or your preferred color
                position: 'fixed', // keeps navbar at top
                top: 0,
                left: 0,
                zIndex: 1000, // ensures navbar stays above other content
                boxSizing: 'border-box' // includes padding in width calculation
            }}
        >
            <Box>
                <Typography sx={{ fontSize: '18px', color: '#fff'}}>{content.Navbar.portfolio}</Typography>
            </Box>
            <ButtonGroup
                color="error"
                orientation="horizontal"
                size="large"
                sx={{ gap: '2px' }}
            >
                <Button sx={buttonStyle}><Typography>{content.Navbar.cv}</Typography></Button>
                <Button sx={buttonStyle}><Typography>{content.Navbar.projects}</Typography></Button>
                <Button sx={buttonStyle}><Typography>{content.Navbar.resume}</Typography></Button>
            </ButtonGroup>
        </Box>
    );
};

export default Navbar;