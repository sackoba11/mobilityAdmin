import styled from "styled-components"
import ImageSource from "../../Common/Images/ImageSoruce"

const StyledContainer=styled.div`
display: flex;
  flex-direction: column;
    align-items: center;
  align-content: center;
  justify-content: center;
  margin-left: 65px;
  margin-right: 65px;
  
  `


const StyleIllustration = styled.img`
width: 700px;
height: 300px;
`
const StyleTitle=styled.h2`
font-weight: 700;
font-size:31px;
margin-top: 70px;
margin-bottom: 35px;


`

function ErrorPage() {
    return (
        <StyledContainer>
            <StyleTitle >Oups...</StyleTitle>
           <StyleIllustration src={ImageSource.notFound} alt="Page Not Found"/>
           <StyleTitle style={{
            marginTop: "50px"
           }}>Il semblerait qu’il y ait un problème</StyleTitle>
        </StyledContainer>
    )
}
 
export default ErrorPage