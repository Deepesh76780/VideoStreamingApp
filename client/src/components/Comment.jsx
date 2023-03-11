import React from 'react'
import styled from 'styled-components'


const Container=styled.div`
display:flex;
gap:10px;
margin:30px 0px;
`

const Avatar =styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`

const Details=styled.div`
    display:flex;
    flex-direction:column;
    gap:10px;
    color:${({theme})=> theme.text}

`

const Name=styled.span`
font-size:13px;
font-weight:500;
color:${({theme})=> theme.textSoft}

`
const Date=styled.span`
font-size:12px;
font-weight:400;
margin-left:5px;
color:${({theme})=> theme.textSoft}
`
const Text=styled.span`
font-size:14px;
font-weight:400;
color:${({theme})=> theme.textSoft}
margin-left:5px;
`

const Comment = () => {
  return (
    <Container>
        <Avatar src='https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo'/>
        <Details>
            <Name>
                Deepesh
                <Date>
                    1 day ago
                </Date>
            </Name>
            <Text>
                nkjnkndkskfnksdknkfksndk
                dnfjksnkjksdnkdksnkksdnks
                ndjkjsnknfkdjbfkdnskjkfjkk
            </Text>
        </Details>
    </Container>
  )
}

export default Comment