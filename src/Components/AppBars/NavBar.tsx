import { styled } from "styled-components";
import { Link } from "react-router-dom";
import AppColors from "../../Common/Theme/Colors";
import { IoMdBus } from "react-icons/io";
import { Stack } from "@chakra-ui/react";
import {  MdHome } from "react-icons/md";
import {  BiStopCircle, BiUser } from "react-icons/bi";
import {  GiSteeringWheel } from "react-icons/gi";

const HeaderStyled = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 50px 50px;
  justify-content: space-between;
  color: ${AppColors.white};
  font-size: 31px;
`;

const StyledItem = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

function NavBar() {
  return (
    <HeaderStyled>
      <Stack direction={"column"} spacing={90}>
        <StyledItem to="/" > 
          <MdHome style={{ marginRight: "25px" }} />
          Accueil
        </StyledItem>
        <StyledItem to="/bus">
          {" "}
          <IoMdBus style={{ marginRight: "25px" }} /> Bus
        </StyledItem>
        
        <StyledItem to="/drivers">
          {" "}
          <GiSteeringWheel style={{ marginRight: "25px" }} />
          Conducteurs
        </StyledItem>
        <StyledItem to="/gares">
          {" "}
          <BiStopCircle style={{ marginRight: "25px" }} />
          Gares 
        </StyledItem>
        <StyledItem to="/users">
          {" "}
          <BiUser style={{ marginRight: "25px" }} />
          Users
        </StyledItem>
      </Stack>
    </HeaderStyled>
  );
}

export default NavBar;
