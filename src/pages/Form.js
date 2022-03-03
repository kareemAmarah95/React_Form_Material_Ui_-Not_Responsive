import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
// import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
// import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import { grey } from "@mui/material/colors";
import { orange } from "@mui/material/colors";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { SlantedEdge } from "./SlantedEdge.style";
import { SlantedEdgeChild } from "./SlantedEdgeChild.style";
import { Video } from './Video.style';
import { OrangeBox } from './OrangeBox.style';
import { Icons } from './Icons.styles';
import aladin2b from "../images/aladin2b.jpg";
const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
  input_bgColor: {
    backgroundColor: "#e0e0e0",
  },
  btn_mt: {
    marginTop: 20,
  },
  btn_color: {
    backgroundColor: "orange",
  },
  m_top:{
     marginTop:20
  },
  m_bottom:{
    marginBottom: 20
  },
  material_icons:{
    display:"flex",
    flexDirection:"row",
    position:"absolute",
    bottom:0,
    top:100,
    left:35
  }, img_size:{
    width: 500,
    height:100,
    // marginTop: 20 ,
    marginBottom: 20 ,
  }
});


function Form() {
  const classes = useStyles();

  return (
    <>
      <Container>
        <Box>
          <Grid container spacing={0.5}>
            <Grid item xs={12} md={6}>
              <Grid
                container
                gutterbottom="true"
                sx={{
                  mt: 12,
                  mb: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  // textAlign: "center",
                }}
              >
                <Grid item xs={12} md={12}>
                  <img
                    className={classes.img_size}
                    src={`${aladin2b}?w=164&h=164`}
                    alt=""
                  />
                </Grid>
                <Grid item xs={12} md={6} gutterbottom="true">
                  <TextField
                    className={classes.input_bgColor}
                    label="First Name"
                    id="outlined-basic"
                    variant="outlined"
                    required
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    className={classes.input_bgColor}
                    label="Last Name"
                    id="outlined-basic"
                    variant="outlined"
                    required
                  />
                </Grid>

                <Grid item xs={12} md={12}>
                  <TextField
                    className={classes.input_bgColor}
                    sx={{ mt: 2, width: "58ch" }}
                    size="large"
                    label="Email"
                    id="outlined-basic"
                    variant="outlined"
                    required
                  />
                </Grid>

                <Grid item xs={12} md={12}>
                  <TextField
                    className={classes.input_bgColor}
                    sx={{ mt: 2, width: "58ch" }}
                    size="large"
                    label="Contact Number"
                    id="outlined-basic"
                    variant="outlined"
                    required
                  />
                </Grid>

                <Grid
                  container
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    mt: 2,
                  }}
                >
                  <Grid item>
                    <Button
                      variant="contained"
                      sx={{ mr: 2, py: 1.2, px: 3, bgcolor: "warning.main" }}
                      className={classes.btn_color}
                    >
                      Save
                    </Button>
                    <Button
                      sx={{
                        ml: 0.3,
                        mr: 9,
                        py: 1.2,
                        px: 1.2,
                        textAlign: "center",
                        ouline: "error.main",
                      }}
                      variant="outlined"
                      color="error"
                    >
                      Continue
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}></Grid>
            <OrangeBox></OrangeBox>
            <Video controls>
              <source src="mov_bbb.mp4" type="video/mp4"></source>
            </Video>

            <SlantedEdge>
              <SlantedEdgeChild>
                {/* icons */}
                <Icons>
                  <FacebookRoundedIcon
                    sx={{ mr: 1 }}
                    fontSize="large"
                  ></FacebookRoundedIcon>
                  <InstagramIcon
                    sx={{ mr: 1 }}
                    fontSize="large"
                  ></InstagramIcon>
                  <TwitterIcon sx={{ mr: 1 }} fontSize="large"></TwitterIcon>
                </Icons>
              </SlantedEdgeChild>
            </SlantedEdge>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default Form;
