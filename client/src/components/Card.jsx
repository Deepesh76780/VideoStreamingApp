import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container=styled.div`
width:${(props)=>props.type!=="sm" && "360px"};
margin-bottom:${(props)=>props.type==="sm" ? "10px" : "45px"};
cursor:pointer;
display:${(props)=>props.type==="sm" && "flex"};
gap:10px
`
const Image=styled.img`
width:100%;
height:${(props)=>props.type==="sm" ? "100px" : "202px"};
background-color:#999;
flex:1;
`

const Details=styled.div`
display:flex;
margin-top:${(props)=>props.type!=="sm" && "16px"};
gap:12px;
flex:1
`
const ChannelImg=styled.img`
width:36px;
height:36px;
border-radius:50%;
background-color:#999;
display:${(props)=>props.type==="sm" && "none"}
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

const Card = ({type}) => {
  return (
    <Link to="/video/test" style={{textDecoration:"none"}}>
    <Container type={type}>
    <Image type={type} alt='natureImg' src='https://images.unsplash.com/photo-1546587348-d12660c30c50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'/>
    <Details type={type}>
    <ChannelImg  type={type} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYHj_wwGvIyJUUCId9pr11kuJfNLK1ok9TcI-iRAUFVscO9jQ5CUutpjCwYNvFH-d19Ss&usqp=CAU'/>
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