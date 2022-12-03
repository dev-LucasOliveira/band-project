import { Card, CardContent, Grid, TextField, Button, Typography } from "@mui/material";
import { flexbox, maxHeight, palette } from '@mui/system';
import { createTheme, ThemeProvider } from '@mui/material/styles';



function SignUp(props) {

    const theme = createTheme({
        palette: {
          primary: {
            main: 'rgb(0, 223, 130)'
          },
          
        },
    });
    
    return (
        
        <div className="App">
            <ThemeProvider theme={theme}>
                
                <Card>
                    <CardContent
                        variant="outlined"
                        sx={{ width: 500, backgroundColor: 'var(--color3)', border: '2px solid white'}}
                    >
                        <Grid 
                        container spacing={2}
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        >
                            <Grid>
                                <Typography sx={{color: "white", marginTop: 1, fontSize: "calc(20px + 1vmin)"}}>Member Data</Typography>
                            </Grid>
                            <Grid item sx={{ width: 500, backgroundColor: 'var(--color3)' }}>
                                <TextField sx={{ backgroundColor: 'var(--color1)' }} label="First Name" placeholder="Enter First Name" variant="outlined" fullWidth/>
                            </Grid>
                            <Grid item sx={{ width: 500, backgroundColor: 'var(--color3)' }}>
                                <TextField sx={{ backgroundColor: 'var(--color1)' }} label="Last Name" placeholder="Enter Last Name" variant="outlined" fullWidth/>
                            </Grid>
                            <Grid item sx={{ width: 500, backgroundColor: 'var(--color3)' }}>
                                <TextField sx={{ backgroundColor: 'var(--color1)' }} label="E-mail" placeholder="Enter E-mail" variant="outlined" fullWidth/>
                            </Grid>
                            <Grid item sx={{ width: 500, backgroundColor: 'var(--color3)' }}>
                                <TextField sx={{ backgroundColor: 'var(--color1)' }} label="Confirm E-mail" placeholder="Confirm E-mail" variant="outlined" fullWidth/>
                            </Grid>
                            <Grid item sx={{ width: 500, backgroundColor: 'var(--color3)' }}>
                                <TextField sx={{ backgroundColor: 'var(--color1)' }} label="Password" placeholder="Enter Password" variant="outlined" fullWidth/>
                            </Grid>
                            <Grid item sx={{ width: 500, backgroundColor: 'var(--color3)' }}>
                                <TextField sx={{ backgroundColor: 'var(--color1)' }} label="Confirm Password" placeholder="Confirm Password" variant="outlined" fullWidth/>
                            </Grid>
                            <Grid item sx={{ backgroundColor: 'var(--color3)', display: flexbox}}>
                                <Button sx={{ color: 'white', width: 350, backgroundColor: 'var(--color4)', display: flexbox,justifyContent: 'center', alignItems: 'center'}} variant="contained" size="medium">Submit</Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </ThemeProvider>
        </div>
    );

}

export default SignUp;