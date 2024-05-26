import styled from "styled-components";

const StylesAppContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  height: 100vh;
`;
const HomePage = () => {
  return (
    <>
      <StylesAppContent>
        <h1>Home Page</h1>
      </StylesAppContent>
    </>
  );
};

export default HomePage;
