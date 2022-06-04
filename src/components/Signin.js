import React from "react";
import Box from '@mui/material/Box';
import './Signin.css';

function Signin() {


    return (
        <div className='main-view-container'>

            <Box
                sx={{
                    width: 400,
                    height: 400,
                    backgroundColor: 'paleturquoise',
                    borderRadius: 10,
                }}>
                    
                <div className='signin-grid-item'>
                    Sign in
                </div>
            </Box>

        </div>

    )
}

export default Signin