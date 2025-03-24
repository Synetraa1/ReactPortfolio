import React from 'react';
import Navbar from './navbar';
import "./Main.css";
import { Grid, Typography, Box, Stack } from '@mui/material';
import content from './Typography.json';

const App = () => {
    return (
        <section id ="landing" sx={{ height: '100vh', width: '100vw', overflow: 'hidden' }}>
            <Navbar />
            {/* Introduction */}
            <Grid container maxWidth= "xl" sx={{position: 'absolute', top: '40%', left: '10%', maxWidth: '50%'}}>
                <Grid item>
                    <Typography variant="h2" gutterBottom sx={{
                    fontSize: { xs: '2rem', md: '4rem', lg: '4rem', xl: '5rem' },
                    fontWeight: 'bold'}}>
                    {content.greeting}
                    </Typography>
                </Grid>

                <Grid item width="70%">
                    <Typography variant="body1" sx={{
                        fontSize: { xs: '1rem', md: '1.25rem', lg: '2rem', xl: '1.5rem' }, lineHeight: 1.4}}>
                        {content.intro.intro1}
                        {content.intro.intro2}
                        {content.intro.intro3}
                    </Typography>
                </Grid>
            </Grid>

            <Grid container maxWidth="xl" sx={{justifyContent:"center",} }>
                    <Grid item>
                <img src={content.divider.path}/>
                    </Grid>
                </Grid>
        </section>
    );
    
};
export default App;
