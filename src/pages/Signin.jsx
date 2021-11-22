import React, {useEffect, useState} from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { Button, Card, CardContent, Container, Grid, Paper, TextField } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';

import {authenticate} from '../providers/Backend';

function Signin(props) {

    const [credentials, setCredentials] = useState({username:null, password:null});
    const [visibilities, setVisibility] = useState({ showUsernameError:false, showPasswordError:false, showSuccess:false, showFailure:false});
    const [errors, setErros] = useState({usernameError:null, passwordError:null});
    const [messages, setMessages] = useState({success:null, failure:null});

    let navigate = useNavigate();
    let location = useLocation();

    const handleChanges = (e)=>{
        
        if(e.target.name === "username" && e.target.value != null)
            setErros({...errors, usernameError:''});
            setVisibility({...visibilities, showUsernameError:false}); 
            
        if(e.target.name === "password" && e.target.value != null)
            setErros({...errors, passwordError:''});
            setVisibility({...visibilities, showPasswordError:false});
           
        setCredentials({...credentials, [e.target.name]:e.target.value});

    }



    const signin = async ()=>{

       let username = credentials.username;
       let password = credentials.password;

       if(username === null || username === ''){
            setErros({...errors, usernameError:'Enter Username.'});
            setVisibility({...visibilities, showUsernameError:true});
            return;
       }

       if(password === null || password === ''){
                setErros({...errors, passwordError:'Enter Password.'});
                setVisibility({...visibilities, showPasswordError:true});
                return;
        }

       let response = await authenticate({username, password});

       if (response.status === 200){
           if(location.state){
                let redirect = {
                    pathname: '/'+location.state.from,
                    search: location.state.search
                }
                navigate(redirect);
                return;
           }
           navigate('/');
       }
    }

    

    

    

    return (
        <Container maxWidth="sm">

            <Grid item container justify="center">
                <Grid item container alignItems="center" direction="column">
                    <Grid item>
                        <Typography component="h1" variant="h4" style={{marginTop:'calc(25vh - 75px)', marginBottom:'5px'}}>
                            Sample Client App
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Avatar sx={{ bgcolor: 'secondary.main' }} style={{marginBottom:'5px'}}>
                            <LockOutlinedIcon />
                        </Avatar>
                    </Grid>
                    <Grid item>
                        <Typography component="h1" variant="h5">
                            Sign In
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

            
            <Card sx={{ minWidth: 275 }} style={{marginTop:'10px'}}>
                <CardContent style={{marginTop:'20px'}}>

                <Grid container>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}>
                    { visibilities.showSuccess && <span style={{color:'green'}}>{messages.success}</span>}
                    { visibilities.showFailure && <span style={{color:'red'}}>{messages.failure}</span>}
                    <form>
                        <TextField label="Username" variant="standard" name="username" id="username" placeholder="Username" onChange={ handleChanges } />
                            {visibilities.showUsernameError && <label htmlFor="username" style={{color:'red'}}>{errors.usernameError}</label>}
                            <br/><br/>
                        <TextField label="Password" variant="standard" name="password" id="password" placeholder="Password" onChange={ handleChanges } />
                            {visibilities.showPasswordError && <label htmlFor="password" style={{color:'red'}}>{errors.passwordError}</label>}
                            <br/><br/>
                        <Button variant="contained" onClick={signin}>SIGN IN</Button>                                    
                    </form>
                    </Grid>
                </Grid>
                </CardContent>
            </Card>
        </Container>
    );
}

export default Signin;