import { Card, CardContent, Grid, TextField, Button, Typography } from "@mui/material";
import { flexbox, maxHeight, palette } from '@mui/system';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import worship from './images/worship.png';
import { Link } from "react-router-dom";

function SignIn(props) {

    const theme = createTheme({
        palette: {
          primary: {
            main: 'rgb(0, 224, 131)'
          },
          secondary: {
            main: 'rgb(255, 255, 255)'
          },
        },
    });
    
    return (
        
        <div className="App">
            <ThemeProvider theme={theme}>
                <Card
                    variant="contained"
                    sx={{marginTop: 10, bgcolor: "transparent", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}
                >
                    <CardContent
                        sx={{marginTop: 0, width: 350, display: "flex", alignItems: "center", justifyContent: "center"}}
                    >
                        <img src={worship} className='Logo'/>
                    </CardContent>
                </Card>
                <Card
                    variant="contained"
                    sx={{marginTop: 10, bgcolor: "transparent", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}
                >
                    <CardContent
                        sx={{width: 500, height: "90%"}}
                    >
                        <Grid>
                            <Grid
                                container spacing={3}
                                direction="column"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Grid item sx={{ width: 400 }}>
                                    <TextField sx={{ bgcolor: 'white',  }} label="Login" placeholder="Enter Login" variant="outlined" fullWidth/>
                                </Grid>
                                <Grid item sx={{ width: 400 }}>
                                    <TextField sx={{ bgcolor: 'white' }} label="Password" placeholder="Enter Password" variant="outlined" fullWidth/>
                                </Grid>
                                <Grid item sx={{ width: 400, display: flexbox}}>
                                    <Button sx={{ border: "2px solid white", color: 'black', display: flexbox,justifyContent: 'center', alignItems: 'center'}} variant="contained" size="medium" fullWidth>ENTER</Button>
                                </Grid>
                                <Grid sx={{marginTop: 4}}>
                                    <Typography sx={{color: "white", marginTop: 1, fontSize: "calc(15px + 1vmin)"}}>You are not a Member?</Typography>
                                </Grid>
                                <Grid item sx={{ marginTop: 4, width: 400, display: flexbox}}>
                                    <Link to="/SignUp" style={{textDecoration: "none"}}>
                                        <Button color="secondary" sx={{ border: "2px solid white", color: 'black', display: flexbox,justifyContent: 'center', alignItems: 'center'}} variant="contained" size="medium" fullWidth>SIGN UP</Button>
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </ThemeProvider>
        </div>
    );

}

export default SignIn;