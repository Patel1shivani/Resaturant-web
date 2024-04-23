import React from "react";
// import { MenuList } from "../data/data";
import {  MenuList } from '../Data/data';
import Layout from '../Component/Layout';

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Menu = () => {
  return (
    <Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
        {MenuList.map((menu) => (
          <Card sx={{ maxWidth: "390px", display: "flex", m:3, mt:5 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {menu.name}
                </Typography>
                <Typography variant="body2" mb={2}>{menu.discription}</Typography>
                <Typography variant="body2">price - {menu.price}</Typography>

              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;