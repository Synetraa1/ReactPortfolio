import React from 'react';
import Navbar from './navbar';
import "./Main.css";
import { Grid, Typography, Button, Container, Card, CardMedia, CardActionArea, CardContent, Box, List, ListItem, ListSubheader } from '@mui/material';
import content from './Typography.json';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
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
                    sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', pb: 0, }}>

                    <Grid container
                        sx={{ maxWidth: '1400px', display: 'flex', alignItems: 'center', justifyContent: 'center', }}>

                        <Grid item lg={6} md={6} sm={12} xs={12}
                            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center',}}>
                            <Typography sx={{ fontSize: '62px', fontWeight: 'bold', pb: 2 }} color="#FFF">{content.greeting}</Typography>
                            <Typography sx={{ fontSize: '28px' }} color="#FFF">{content.intro1}</Typography>
                            <Typography sx={{ fontSize: '20px' }} color="#808080">{content.intro2}</Typography>
                            <Typography sx={{ fontSize: '20px', pb: 2 }} color="#808080">{content.intro3}</Typography>
                            <Button sx={buttonStyle}>Contact Me</Button>
                        </Grid>

                        <Grid item lg={6} md={6} sm={12} xs={12}
                            sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <img alt="Nico" src="public/images/Nico.png"
                                style={{maxWidth: '65%', height: 'auto'}}/>
                        </Grid>

                        <Grid item sx={{mt:'10vh'} }>
                            <img alt="Divider Line" src="public/images/Line1.png"/>
                        </Grid>
                    </Grid>
                </Container>
            </section>

            <section id='aboutme'>
                <Container maxWidth='xxl' disableGutters
                    sx={{ minHeight: '85vh', display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 0, }}>

                    <Grid container
                        sx={{ maxWidth: '1400px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }}>

                        {/* Title Section */}
                        <Grid item xs={12}
                            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', width: '100%', }}>
                            <Typography sx={{ fontSize: '62px', fontWeight: 'bold', pb: 2 }} color="#FFF">{content.info.title}</Typography>
                        </Grid>

                        {/* Content Section*/}
                        <Grid container
                            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: 4, }}>

                            <Grid item lg={5} md={6} sm={12} xs={12}
                                sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start',  justifyContent: 'center',
                                    backgroundImage: 'url(/public/images/introductionbg.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
                                    borderRadius: '24px', minHeight: '500px', p: 4, }}>
                                <Typography sx={{ fontSize: '34px', fontWeight: 'bold', pb: 2 }} color="#FFF">{content.info.intro1}</Typography>
                                <Typography sx={{ fontSize: '20px', pb: 2 }} color="#FFF">{content.info.intro2}</Typography>
                                <Typography sx={{ fontSize: '20px', pb: 2 }} color="#FFF">{content.info.intro3}</Typography>
                                <Typography sx={{ fontSize: '20px'}} color="#FFF">{content.info.intro4}</Typography>
                            </Grid>

                            <Grid item lg={5} md={6} sm={12} xs={12}
                                sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center',
                                    backgroundImage: 'url(/public/images/experience.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center', borderRadius: '24px', minHeight: '500px', p: 4,}}>
                                <Typography sx={{ fontSize: '34px', fontWeight: 'bold', pb: 2 }} color="#FFF">{content.experience.title}</Typography>
                                <Typography sx={{ fontSize: '22px', pb: 2 }} color="#FFF">{content.experience.intro1}</Typography>
                                <Typography sx={{ fontSize: '20px', pb: 2 }} color="#808080">{content.experience.intro2}</Typography>
                                <Typography sx={{ fontSize: '20px', pb: 2 }} color="#FFF">{content.experience.intro3}</Typography>
                                <Typography sx={{ fontSize: '20px' }} color="#FFF">{content.experience.intro4}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </section>

            <section id='technologies'>
                <Container maxWidth='xxl' disableGutters
                    sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', pt: 20, pb: 10,}}>
                    <Grid container
                        sx={{maxWidth: '1400px', display: 'flex', flexDirection: 'column',
                            alignItems: 'flex', justifyContent: 'center', gap: 4,}}>

                        {/* Title Section */}
                        <Grid item xs={12}>
                            <Typography sx={{ fontSize: '62px', fontWeight: 'bold' }} color="#FFF">{content.technology.title}</Typography>
                        </Grid>

                        {/* Subtitle Section */}
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Typography sx={{ fontSize: '26px', textAlign: 'center' }} color="#FFF">{content.technology.subtitle}</Typography>
                        </Grid>

                        <Grid container item xs={12} sx={{ pt: 8, gap: 5, display: 'flex', justifyContent: 'center', }}>

                            {/* Figma */}
                            <Grid item lg={1} md={4} sm={6} xs={12}>
                                <Card sx={{
                                    display: "flex", flexDirection: "column", backgroundColor: "#808080",
                                    maxWidth: 110, borderRadius: '16px', height: '100%'}}>

                                    <CardMedia
                                        component="img" image="/public/images/Logos/Figma.png" alt="Figma logo"/>
                                    <Box sx={{
                                        display: "flex", flexDirection: "column", textAlign: "center",}}>
                                        <CardContent>
                                            <Typography>{content.technology.figma}</Typography>
                                        </CardContent>
                                    </Box>
                                </Card>
                            </Grid>

                            {/* Javascript */}
                            <Grid item lg={1} md={4} sm={6} xs={12}>
                                <Card sx={{
                                    display: "flex", flexDirection: "column", backgroundColor: "#808080",
                                    maxWidth: 110, borderRadius: '16px', height: '100%'}}>
                                    <CardMedia component="img" image="/public/images/Logos/Javascript.png" alt="Javascript logo"/>
                                    <Box sx={{display: "flex", flexDirection: "column", textAlign: "center",}}>
                                        <CardContent>
                                            <Typography>{content.technology.javascript}</Typography>
                                        </CardContent>
                                    </Box>
                                </Card>
                            </Grid>

                            {/* HTML5 */}
                            <Grid item lg={1} md={4} sm={6} xs={12}>
                                <Card sx={{
                                    display: "flex", flexDirection: "column", backgroundColor: "#808080",
                                    maxWidth: 110, borderRadius: '16px', height: '100%'}}>
                                    <CardMedia component="img" image="/public/images/Logos/HTML.png" alt="Figma logo"/>
                                    <Box sx={{
                                        display: "flex", flexDirection: "column", textAlign: "center",}}>
                                        <CardContent>
                                            <Typography>{content.technology.html}</Typography>
                                        </CardContent>
                                    </Box>
                                </Card>
                            </Grid>

                            {/* CSS */}
                            <Grid item lg={1} md={4} sm={6} xs={12}>
                                <Card sx={{
                                    display: "flex", flexDirection: "column", backgroundColor: "#808080",
                                    maxWidth: 110, borderRadius: '16px', height: '100%'}}>
                                    <CardMedia component="img" image="/public/images/Logos/CSS.png" alt="Figma logo"/>
                                    <Box sx={{
                                        display: "flex", flexDirection: "column", textAlign: "center",}}>
                                        <CardContent>
                                            <Typography>{content.technology.css}</Typography>
                                        </CardContent>
                                    </Box>
                                </Card>
                            </Grid>

                            {/* React */}
                            <Grid item lg={1} md={4} sm={6} xs={12}>
                                <Card sx={{
                                    display: "flex", flexDirection: "column", backgroundColor: "#808080",
                                    maxWidth: 110, borderRadius: '16px', height: '100%'}}>
                                    <CardMedia component="img" image="/public/images/Logos/React.png" alt="Figma logo"/>
                                    <Box sx={{
                                        display: "flex", flexDirection: "column", textAlign: "center",}}>
                                        <CardContent>
                                            <Typography>{content.technology.react}</Typography>
                                        </CardContent>
                                    </Box>
                                </Card>
                            </Grid>
                        </Grid>
                            <Grid container item xs={12} sx={{
                                gap:5, display: 'flex', justifyContent: 'center',
                                alignItems: 'center', pt:2}}>

                            {/* MUI */}
                            <Grid item lg={1} md={4} sm={6} xs={12}>
                                <Card sx={{
                                    display: "flex", flexDirection: "column",  backgroundColor: "#808080",
                                    maxWidth: 110, borderRadius: '16px', height: '100%'}}>
                                    <CardMedia component="img" image="/public/images/Logos/MaterialUI.png" alt="Figma logo" />
                                    <Box sx={{
                                        display: "flex", flexDirection: "column", textAlign: "center",}}>
                                        <CardContent>
                                            <Typography>{content.technology.materialui}</Typography>
                                        </CardContent>
                                    </Box>
                                </Card>
                            </Grid>

                            {/* Wordpress */}
                            <Grid item lg={1} md={4} sm={6} xs={12}>
                                <Card sx={{
                                    display: "flex", flexDirection: "column", backgroundColor: "#808080",
                                    maxWidth: 110, borderRadius: '16px', height: '100%'}}>
                                    <CardMedia
                                        component="img" image="/public/images/Logos/Wordpress.png" alt="Figma logo"/>
                                    <Box sx={{
                                        display: "flex", flexDirection: "column", textAlign: "center",}}>
                                        <CardContent>
                                            <Typography>{content.technology.wordpress}</Typography>
                                        </CardContent>
                                    </Box>
                                </Card>
                            </Grid>

                            {/* Lua */}
                            <Grid item lg={1} md={4} sm={6} xs={12}>
                                <Card sx={{
                                    display: "flex", flexDirection: "column", backgroundColor: "#808080",
                                    maxWidth: 110, borderRadius: '16px', height: '100%'}}>
                                    <CardMedia
                                        component="img" image="/public/images/Logos/Lua.png" alt="Figma logo"/>
                                    <Box sx={{
                                        display: "flex", flexDirection: "column", textAlign: "center",}}>
                                        <CardContent>
                                            <Typography>{content.technology.lua}</Typography>
                                        </CardContent>
                                    </Box>
                                </Card>
                            </Grid>

                            {/* Git */}
                            <Grid item lg={1} md={4} sm={6} xs={12}>
                                <Card sx={{
                                    display: "flex", flexDirection: "column", backgroundColor: "#808080",
                                    maxWidth: 110, borderRadius: '16px', height: '100%'}}>
                                    <CardMedia
                                        component="img" image="/public/images/Logos/Git.png" alt="Figma logo"/>
                                    <Box sx={{
                                        display: "flex", flexDirection: "column", textAlign: "center",}}>
                                        <CardContent>
                                            <Typography>{content.technology.git}</Typography>
                                        </CardContent>
                                    </Box>
                                </Card>
                            </Grid>

                    </Grid>
                    </Grid>
                </Container>
            </section>

            <section id='projects1'>
                <Container maxWidth='xxl' disableGutters
                    sx={{minHeight: '85vh', display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 0,}}>
                    <Grid container
                        sx={{ maxWidth: '1400px', display: 'flex', flexDirection: 'column', alignItems: 'left', justifyContent: 'center', }}>

                        {/* Title Section */}
                        <Grid item xs={12}
                            sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', width: '100%', }}>
                            <Typography sx={{ fontSize: '62px', fontWeight: 'bold', pb: 2 }} color="#FFF">{content.projects.title}</Typography>
                        </Grid>

                        {/* Subtitle Section */}
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                            <Typography sx={{ fontSize: '26px'}} color="#FFF">{content.projects.subtitle}</Typography>
                        </Grid>


                        {/* Content Section*/}
                        <Grid container
                            sx={{display: 'flex', alignItems: 'center', width: '100%', gap: 4,}}>
                            <Grid item lg={6} md={6} sm={12} xs={12}
                                sx={{mt:10}}>
                                <img alt='karbon footprint management landing' src='public/Images/Projects/karpon.png'/>
                            </Grid>
                            <Grid item lg={5} md={6} sm={12} xs={12}
                                sx={{ mt: 10 }}>
                                <Typography sx={{color:'#FFF', fontSize:'52px', fontWeight:'bold'}}>{content.projects.karpontitle}</Typography>
                                <Typography sx={{ color: '#FFF', fontSize: '32px', }}>{content.projects.karponsub}</Typography>
                                <Typography sx={{ color: '#FFF', fontSize: '24px', }}><KeyboardArrowRightIcon></KeyboardArrowRightIcon>{content.projects.karpontask1}</Typography>
                                <Typography sx={{ color: '#FFF', fontSize: '24px', }}><KeyboardArrowRightIcon></KeyboardArrowRightIcon>{content.projects.karpontask2}</Typography>
                                <Typography sx={{ color: '#FFF', fontSize: '24px', }}><KeyboardArrowRightIcon></KeyboardArrowRightIcon>{content.projects.karpontask3}</Typography>
                            </Grid>
                            </Grid>
                        </Grid>
                </Container>
            </section>

        </>
    );
};

export default App;