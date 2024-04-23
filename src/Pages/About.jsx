import React from 'react'
import Layout from '../Component/Layout'
import { Box,Typography } from '@mui/material'

function About() {
  return (
    <Layout>
<Box sx={{
  my:15,
  textAlign:'center',
  '& h4':{
    fontWeight:'bold',
    my:2,
    fontSize:"2rem"
  },
  "& p":{
    textAlign:'justify'
  },
 " @media (max-width:600px)":{
  mt:0,
"& h4":{
fontSize:'1.2rem'
}
}
}}>
  <Typography variant='h4'>
    Welcome To My Resturant
  </Typography>
  <p>
  Fast Food Restaurants: Quick-service restaurants that offer affordable and convenient meals. Examples include McDonald's, Burger King, and KFC.
Casual Dining Restaurants: Mid-range restaurants that offer a more relaxed dining experience with table service. Examples include Applebee's, Chili's, and Olive Garden.
Fine Dining Restaurants: Upscale restaurants that offer high-quality food, elegant atmosphere, and exceptional service. Examples include Michelin-starred restaurants and luxury dining establishments.
Cafés and Coffee Shops: Establishments that primarily serve coffee, tea, and light meals. Examples include Starbucks, local coffee shops, and brunch cafes.
Ethnic Restaurants: Restaurants that specialize in specific cuisines from around the world, such as Italian, Mexican, Chinese, Indian, and more.
  </p>
  <br/>
  <p>
   Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    Accusamus perspiciatis eaque non possimus veniam velit eligendi fuga quae magnam perferendis praesentium
     blanditiis cupiditate, sint facilis repellat quaerat beatae enim dolorem quas a dicta tempore aliquam maxime 
     incidunt? Est ipsam enim numquam corporis similique repellat molestias provident repellendus nostrum illum
      optio veritatis cumque aliquid earum quos, esse dolor vel harum labore aliquam culpa sit quia eveniet fugit! 
      Amet dicta ea corrupti earum modi fugit. Blanditiis, asperiores, culpa eligendi quo nostrum placeat ipsa voluptatem debitis 
      laboriosam id recusandae! Illo culpa nisi, laborum iste exercitationem in, impedit, animi possimus obcaecati provident dolorum 
      praesentium!
  </p>
</Box>
    </Layout>
  
  )
}

export default About