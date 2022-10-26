import React from 'react'
import Button from '@material-ui/core/Button';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export default function Contact() {

    return(
        <div className='child-container'>
            <h1>Email me</h1>
            <Button color='primary' startIcon={<MailOutlineIcon sx={{width:50, height: 50}} />}></Button>
            
        </div>
    )
}