import styled from "styled-components";
import { listBus } from "../../Data/data_remote/dataRemoteFromFirebase";

const StylesAppContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  height: 100vh;
`;
const HomePage = () => {
  console.log(listBus)
  return (
    <>
      <StylesAppContent>
        <h1>Home Page</h1>
      </StylesAppContent>
    </>
  );
};

export default HomePage;
