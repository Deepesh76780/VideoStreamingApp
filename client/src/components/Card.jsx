import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container=styled.div`
width:360px;
margin-bottom:45px;
cursor:pointer;
`
const Image=styled.img`
width:100%;
height:202px;
background-color:#999
`

const Details=styled.div`
display:flex;
margin-top:16px;
gap:12px
`
const ChannelImg=styled.img`
width:36px;
height:36px;
border-radius:50%;
background-color:#999;
`
const Texts=styled.div`

`
const Title=styled.h1`
  font-size:16px;
  font-weight:500;
  color:${({theme})=>theme.text}
`
const ChannelName=styled.h2`
font-size:14px;
color:${({theme})=>theme.textSoft};
margin:9px 0px;
`
const Info=styled.div`
font-size:14px;
color:${({theme})=>theme.textSoft};
`

const Card = () => {
  return (
    <Link to="/video/test" style={{textDecoration:"none"}}>
    <Container>
    <Image alt='natureImg' src='https://images.unsplash.com/photo-1546587348-d12660c30c50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'/>
    <Details>
    <ChannelImg src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYHj_wwGvIyJUUCId9pr11kuJfNLK1ok9TcI-iRAUFVscO9jQ5CUutpjCwYNvFH-d19Ss&usqp=CAU'/>
    <Texts>
      <Title>Test Video</Title>
      <ChannelName>CiperTube</ChannelName>
      <Info>60000views 1 day</Info>
    </Texts>
    </Details>
    </Container>
    </Link>
  )
}

export default Card