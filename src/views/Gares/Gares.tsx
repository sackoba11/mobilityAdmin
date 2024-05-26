import styled from "styled-components";

const StylesAppContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  height: 100vh;
`;

const Gares = () => {
    return ( <StylesAppContent>
    <h1>Liste des gares</h1>
    </StylesAppContent> );
}
 
export default Gares;