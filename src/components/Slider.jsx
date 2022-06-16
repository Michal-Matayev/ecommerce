import { ArrowLeftOutlined ,ArrowRightOutlined} from "@mui/icons-material"
import styled from "styled-components"
import jewellery from "../pictures/jewellery.jpg"

const Container = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    position:relative;

 `
 
const Arrow = styled.div`
    // height:50vh;
    // width:50vh;


    width:50px;
    height:50px;
    background-color: #f5e9f5;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    botton: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    margin:auto;
    cursor:pointer;
    opacity:0.5;
    `

const Wrapper = styled.div`
    height:100%;`

const Slide = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    align-items:center;
`;

const ImagContainer = styled.div`
    height :100%;
    flex:1`
    ;

const Image = styled.img`
    height:80%
`

const InfoContainer = styled.div`
    flex:1`
    ;

const Title = styled.h1`
    font-size:70px;
    `;

const Desc = styled.p`
    margin:50px 0px;
    font-size:20px;
    font-weight:500;
    letter-spacing:3px;
    `;

const Button = styled.button``;

const Slider = () => {
  return (
      <Container>
          <Arrow direction="left">
              <ArrowLeftOutlined/>
          </Arrow>


          <Wrapper>
              <Slide>
              <ImagContainer>
                  {/* <img src={jewellery} alt="jewellery"/> */}
                 <Image src={jewellery} alt="jewellery"/> 
              </ImagContainer>
                  <InfoContainer>
                      <Title>Jewellery</Title>
                      <Desc>choose your jewellery</Desc>
                        <Button>SHOP NOW</Button>
                  </InfoContainer>
              </Slide>
          </Wrapper>


          <Arrow  direction="right">
              <ArrowRightOutlined/>
          </Arrow>
    </Container>
  )
}

export default Slider