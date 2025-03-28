import React from 'react';
import Navbar from './navbar';
import "./Main.css";
import { Grid, Typography, Button, Container, Card, CardMeida, CardActionArea, CardContent, Box } from '@mui/material';
import content from './Typography.json';

const App = () => {
    const buttonStyle = {
        color: '#fff',
        fontSize: '20px',
        padding: '10px 15px',
        border: '1px solid #ff0000',
        maxWidth: '25%',
        '&:hover': {
            backgroundColor: '#b71c1c',
            border: '1px solid #fff',
        }
    };

    return (
        <>
            <Navbar />
            <section id='landing'>
                <Container maxWidth='xxl' disableGutters
                    sx={{
                        minHeight: '100vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        pb:0,
                    }}
                >
                    <Grid container
                        sx={{
                            maxWidth: '1400px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Grid item lg={6} md={6} sm={12} xs={12}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'center',
                            }}
                        >
                            <Typography sx={{ fontSize: '62px', fontWeight: 'bold', pb: 2 }} color="#FFF">
                                {content.greeting}
                            </Typography>
                            <Typography sx={{ fontSize: '28px' }} color="#FFF">
                                {content.intro1}
                            </Typography>
                            <Typography sx={{ fontSize: '20px' }} color="#808080">
                                {content.intro2}
                            </Typography>
                            <Typography sx={{ fontSize: '20px', pb: 2 }} color="#808080">
                                {content.intro3}
                            </Typography>
                            <Button sx={buttonStyle}>Contact Me</Button>
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                            <img
                                alt="Nico"
                                src="public/images/Nico.png"
                                style={{
                                    maxWidth: '65%',
                                    height: 'auto'
                                }} />
                        </Grid>
                        <Grid item sx={{mt:'10vh'} }>
                            <img alt="Divider Line"
                                src="public/images/Line1.png" />
                        </Grid>
                    </Grid>
                </Container>
            </section>

            <section id='aboutme'>
                <Container
                    maxWidth='xxl'
                    disableGutters
                    sx={{
                        minHeight: '70vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        pt:0,
                    }}
                >
                    <Grid container
                        sx={{
                            maxWidth: '1400px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        {/* Title Section */}
                        <Grid item xs={12}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'center',
                                width: '100%',
                            }}
                        >
                            <Typography sx={{ fontSize: '62px', fontWeight: 'bold', pb: 2 }} color="#FFF">
                                {content.info.title}
                            </Typography>
                        </Grid>

                        {/* Content Section*/}
                        <Grid container
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                width: '100%',
                                gap: 4,
                            }}
                        >
                            <Grid item lg={5} md={6} sm={12} xs={12}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start', 
                                    justifyContent: 'center',
                                    backgroundImage: 'url(/public/images/introductionbg.png)',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    borderRadius: '24px',
                                    minHeight: '500px',
                                    p: 4, 
                                }}
                            >
                                <Typography sx={{ fontSize: '34px', fontWeight: 'bold', pb: 2 }} color="#FFF">
                                    {content.info.intro1}
                                </Typography>
                                <Typography sx={{ fontSize: '20px', pb: 2 }} color="#FFF">
                                    {content.info.intro2}
                                </Typography>
                                <Typography sx={{ fontSize: '20px', pb: 2 }} color="#FFF">
                                    {content.info.intro3}
                                </Typography>
                                <Typography sx={{ fontSize: '20px'}} color="#FFF">
                                    {content.info.intro4}
                                </Typography>
                            </Grid>
                            <Grid item lg={5} md={6} sm={12} xs={12}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'center',
                                    backgroundImage: 'url(/public/images/experience.png)',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    borderRadius: '24px',
                                    minHeight: '500px',
                                    p: 4,
                                }}
                            >
                                <Typography sx={{ fontSize: '34px', fontWeight: 'bold', pb: 2 }} color="#FFF">
                                    {content.experience.title}
                                </Typography>
                                <Typography sx={{ fontSize: '22px', pb: 2 }} color="#FFF">
                                    {content.experience.intro1}
                                </Typography>
                                <Typography sx={{ fontSize: '20px', pb: 2 }} color="#808080">
                                    {content.experience.intro2}
                                </Typography>
                                <Typography sx={{ fontSize: '20px', pb: 2 }} color="#FFF">
                                    {content.experience.intro3}
                                </Typography>
                                <Typography sx={{ fontSize: '20px' }} color="#FFF">
                                    {content.experience.intro4}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </section>

            <section id='technologies'>
                <Container
                    maxWidth='xxl'
                    disableGutters
                    sx={{
                        minHeight: '10vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        pt: 20,
                    }}
                >
                    <Grid container
                        sx={{
                            maxWidth: '1400px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        {/* Title Section */}
                        <Grid item xs={12}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'center',
                                width: '100%',
                            }}
                        >
                            <Typography sx={{ fontSize: '62px', fontWeight: 'bold', pb: 2 }} color="#FFF">
                                {content.technology.title}
                            </Typography>
                        </Grid>

                        {/* Content Section*/}
                        <Grid container
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                width: '100%',
                                gap: 4,
                            }}
                        >
                            <Grid item lg={12} md={6} sm={12} xs={12}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '24px',
                                    minHeight: '500px',
                                    p: 4,
                                }}
                            >
                                <Typography sx={{ fontSize: '26px', pb: 2 }} color="#FFF">
                                    {content.technology.subtitle}
                                </Typography>
                            </Grid>
                            <Grid item lg={5} md={6} sm={12} xs={12}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'center',
                                    borderRadius: '24px',
                                    minHeight: '500px',
                                    p: 4,
                                }}
                            >
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </section>


        </>
    );
};

export default App;