import {Box, Typography } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  return (
    <div className='F'>
      <Box sx={{textAlign:'center', bgcolor:'#1A1A19', color:'white',p:3}}>
        <Box sx={{my:3, '& svg':{
            fontSize:'60px',
            cursor:'pointer'
        },
        '& svg:hover':{
            color:'goldenrod',
            transform:'translateX(5px)',
            transition:'all 400ms',
        }
        }}>
<InstagramIcon/>
<TwitterIcon/>
<YouTubeIcon/>
<GitHubIcon/>
        </Box>
        <Typography variant='h5' sx={{"@media (min-width:600px)":{
fontSize:'1rem'
        }}}>
All Rights Reserved $copy; Shivi Mukati
        </Typography>
      </Box>
    </div>
  )
}

export default Footer