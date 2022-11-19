import { Card, CardContent, Grid, TextField, Button } from "@mui/material";
import { flexbox, maxHeight, palette } from '@mui/system';



function SignUp(props) {
    
    return (
        <div style={{display: 'flex', height: '90vh', backgroundColor: 'var(--color3)',alignItems: 'center', justifyContent: 'center'}}>
            <Card>
                    <CardContent
                        variant="outlined"
                        sx={{ width: 500, bgcolor: 'white'}}
                    >
                        <Grid 
                        container spacing={2}
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        >
                            <Grid item sx={{ width: 500, bgcolor: 'white' }}>
                                <TextField sx={{ bgcolor: 'white',  }} label="First Name" placeholder="Enter First Name" variant="outlined" fullWidth/>
                            </Grid>
                            <Grid item sx={{ width: 500, bgcolor: 'white' }}>
                                <TextField sx={{ bgcolor: 'white' }} label="Last Name" placeholder="Enter Last Name" variant="outlined" fullWidth/>
                            </Grid>
                            <Grid item sx={{ width: 500, bgcolor: 'white' }}>
                                <TextField sx={{ bgcolor: 'white' }} label="E-mail" placeholder="Enter E-mail" variant="outlined" fullWidth/>
                            </Grid>
                            <Grid item sx={{ width: 500, bgcolor: 'white' }}>
                                <TextField sx={{ bgcolor: 'white' }} label="Confirm E-mail" placeholder="Confirm E-mail" variant="outlined" fullWidth/>
                            </Grid>
                            <Grid item sx={{ width: 500, bgcolor: 'white' }}>
                                <TextField sx={{ bgcolor: 'white' }} label="Password" placeholder="Enter Password" variant="outlined" fullWidth/>
                            </Grid>
                            <Grid item sx={{ width: 500, bgcolor: 'white' }}>
                                <TextField sx={{ bgcolor: 'white' }} label="Confirm Password" placeholder="Confirm Password" variant="outlined" fullWidth/>
                            </Grid>
                            <Grid item sx={{ bgcolor: 'white', display: flexbox}}>
                                <Button sx={{ width: 300, display: flexbox,justifyContent: 'center', alignItems: 'center'}} variant="contained" size="medium">Submit</Button>
                            </Grid>
                        </Grid>
                    </CardContent>
            </Card>
        </div>
    );

}

export default SignUp;