import React, { useState, useEffect } from 'react';

import { Dialog, DialogContent, TextField, Box, Button, Typography, styled } from '@mui/material';



const Component = styled(DialogContent)`
    height: 70vh;
    width: 90vh;
    padding: 0;
    padding-top: 0;
`;
const LoginDialog = ({ open,setOpen }) => {
    const handleClose = () => {
        setOpen(false);
        
    }

    return (
        <Dialog open={open} onClose={handleClose} sx={{ '& .MuiBackdrop-root': { backgroundColor: 'transparent' } }} >
            <Component>
              <h3>Basic Model</h3>
              <hr></hr>
              <div className="md">
              <Typography display="inline" variant="h5" className="fd">Name</Typography> <TextField variant="outlined"  name='username' label='Enter Email' className="f"/><br></br>
              <Typography display="inline" variant="h5">Email</Typography> <TextField variant="outlined"  name='email' label='Enter Phone' className="f" /><br></br>
              <Typography display="inline" variant="h5">Phone</Typography><TextField variant="outlined"  name='lastname' label='Enter name' className="f"/><br></br>
              <Typography display="inline" variant="h5">Website</Typography><TextField variant="outlined"  name='firstname' label='Enter Website' className="f" /><br></br>
              <hr></hr>
              <div className="b">
                    <button>cancle</button>
                    <button>ok</button>
              </div>
              </div>
            </Component>
                
        </Dialog>
    )
}

export default LoginDialog;