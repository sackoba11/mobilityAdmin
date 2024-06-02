import { styled } from "styled-components";
import { Link } from "react-router-dom";
import AppColors from "../../Common/Theme/Colors";
import { IoMdBus } from "react-icons/io";
import { MdHome } from "react-icons/md";
import { BiStopCircle, BiUser } from "react-icons/bi";
import { GiSteeringWheel } from "react-icons/gi";
import { useState } from "react";

const HeaderStyled = styled.div`
  /* display: flex; */
  flex-direction: column;
  color: ${AppColors.white};
  font-size: 25px;
`;

const StyledItem = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 50px;
  margin-top: 30px;
  border-radius: 0px 100px 100px 0px;
`;

function NavBar() {
  const [index, setIndex] = useState(0);
  
  return (
    <HeaderStyled>
        <StyledItem
          to="/"
          onClick={() => setIndex(0)}
          style={
            index == 0
              ? { backgroundColor: AppColors.gray }
              : { backgroundColor: "transparent" }
          }
        >
          <MdHome style={{ marginRight: "25px" }} />
          Accueil
        </StyledItem>
        <StyledItem
          to="/bus"
          onClick={() => setIndex(1)}
          style={index == 1 ? { backgroundColor: AppColors.gray } : {}}
        >
          {" "}
          <IoMdBus style={{ marginRight: "25px" }} /> Bus
        </StyledItem>

        <StyledItem
          to="/drivers"
          onClick={() => setIndex(2)}
          style={index == 2 ? { backgroundColor: AppColors.gray } : {}}
        >
          {" "}
          <GiSteeringWheel style={{ marginRight: "25px" }} />
          Conducteurs
        </StyledItem>
        <StyledItem
          to="/gares"
          onClick={() => setIndex(3)}
          style={index == 3 ? { backgroundColor: AppColors.gray } : {}}
        >
          {" "}
          <BiStopCircle style={{ marginRight: "25px" }} />
          Gares
        </StyledItem>
        <StyledItem
          to="/users"
          onClick={() => setIndex(4)}
          style={index == 4 ? { backgroundColor: AppColors.gray } : {}}
        >
          {" "}
          <BiUser style={{ marginRight: "25px" }} />
          Utilisateurs
        </StyledItem>
     
    </HeaderStyled>
  );
}

export default NavBar;
