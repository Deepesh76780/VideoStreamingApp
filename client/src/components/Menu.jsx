import React from 'react'
import styled from 'styled-components'
import logo from "../assets/Logo.svg"
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
// import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import { Link } from "react-router-dom";


const Container=styled.div`
flex:1;
background-color:#1A224B;
height:100vh;
color:white;
font-size:14px;
`
const Wrapper=styled.div`
padding:18px 26px;
`
const Logo=styled.div`
display:flex;
align-items:center;
gap:5px;
font-size:18px;
font-weight:bold;
margin-bottom:25px;
background: linear-gradient(93.07deg, #F52AF5 4.14%, #DD37F5 31.35%, #219BF2 73.51%, #00ADF2 95.21%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;
`
const Img=styled.img`
height:25px;
`
const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;

  &:hover {
    background: #27336F;
    border-radius:16px;
    padding-left:5px
  };
  
`;

const Hr = styled.hr`
  margin: 16px 0px;
  border: 0.1px border #aaaaaa;
;
`;

const Login = styled.div`

`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #eeeeee;
  margin-bottom: 20px;
`;


const Menu = () => {
  return (
    <Container>
        <Wrapper>
            <Logo>
                <Img src={logo}/>
                CIPHERTUBE
            </Logo>
            <Item>
              <HomeIcon/>
              Home
            </Item>
            <Item>
          <ExploreOutlinedIcon />
          Explore
        </Item>
        <Item>
          <SubscriptionsOutlinedIcon />
          Subscriptions
        </Item>
        <Hr />
        <Item>
          <VideoLibraryOutlinedIcon />
          Library
        </Item>
        <Item>
          <HistoryOutlinedIcon />
          History
        </Item>
        <Hr />
        <Login>
          Sign in to like videos, comment, and subscribe.
            <Button>
              <AccountCircleOutlinedIcon />
              SIGN IN
            </Button>
        </Login>
        <Hr />
        <Title>BEST OF LAMATUBE</Title>
        <Item>
          <LibraryMusicOutlinedIcon />
          Music
        </Item>
        <Item>
          <SportsBasketballOutlinedIcon />
          Sports
        </Item>
        <Item>
          <SportsEsportsOutlinedIcon />
          Gaming
        </Item>
        <Item>
          <MovieOutlinedIcon />
          Movies
        </Item>
        <Item>
          <ArticleOutlinedIcon />
          News
        </Item>
        <Item>
          <LiveTvOutlinedIcon />
          Live
        </Item>
        <Hr />
        <Item>
          <SettingsOutlinedIcon />
          Settings
        </Item>
        <Item>
          <FlagOutlinedIcon />
          Report
        </Item>
        <Item>
          <HelpOutlineOutlinedIcon />
          Help
        </Item>
        {/* <Item onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessOutlinedIcon />
          {darkMode ? "Light" : "Dark"} Mode
        </Item> */}
        </Wrapper>
    </Container>
  )
}

export default Menu