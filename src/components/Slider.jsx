import { ArrowLeftOutlined ,ArrowRightOutlined} from "@mui/icons-material"
import { useState } from "react"
import styled from "styled-components"
import  jewellery from "../pictures/jewellery.jpg"
import  jewellery2 from "../pictures/jewellery2.jpg"


const Container = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    position:relative;
    // overflow:hidden;

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
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin:auto;
    cursor:pointer;
    opacity:0.5;
    z-index:2;
    `;

const Wrapper = styled.div`
    height:100%;
    display:flex;
    transition :all 1.5s ease;
    transform:translateX(${(props) => props.slideIndex * -100}vw);
    `;

const Slide = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    align-items:center;
    background-color:#${props=>props.bg}
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

const Button = styled.button`
    padding:10px;
    font-size:20px;
    background-color:pink;
//   background-color:transparent;
    font-wight:900;
    cursor:pointer`;

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction == "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        }
        else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };
    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>


            <Wrapper slideIndex={slideIndex}>
                <Slide bg="f5fad">
                    <ImagContainer>
                        {/* <img src={jewellery} alt="jewellery"/> */}
                        <Image src={jewellery} alt="jewellery" />
                    </ImagContainer>
                    <InfoContainer>
                        <Title> populare Jewellery </Title>
                        <Desc>choose your jewellery</Desc>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                </Slide>
                <Slide bg="f6fad">
                    <ImagContainer>
                        {/* <img src={jewellery} alt="jewellery"/> */}
                        <Image src={jewellery2} alt="jewellery2" />
                    </ImagContainer>
                    <InfoContainer>
                        <Title>special  Jewellery</Title>
                        <Desc>choose your jewellery</Desc>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                </Slide>
            </Wrapper>


            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )

};
export default Slider