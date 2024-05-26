import styled from "styled-components";

const StylesAppContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  height: 100vh;
`;
const UserPage = () => {
  return (
    <>
      <StylesAppContent>
        <h1>User Page</h1>
      </StylesAppContent>
    </>
  );
};

export default UserPage;
