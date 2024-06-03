import { styled } from "styled-components";
import {  NavLink } from "react-router-dom";
import AppColors from "../../Common/Theme/Colors";
import { IoMdBus } from "react-icons/io";
import { MdHome } from "react-icons/md";
import { BiStopCircle, BiUser } from "react-icons/bi";
import { GiSteeringWheel } from "react-icons/gi";

const HeaderStyled = styled.div`
  color: ${AppColors.white};
  font-size: 25px;
`;

const StyledItem = styled(NavLink)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 50px;
  margin-top: 30px;
  border-radius: 0px 100px 100px 0px;
`;

function NavBar() {

  return (
    <HeaderStyled>
      <StyledItem
        to="/"
        style={({ isActive }) =>
          isActive
            ? { backgroundColor: AppColors.gray }
            : { }
        }
      >
        <MdHome style={{ marginRight: "25px" }} />
        Accueil
      </StyledItem>
      <StyledItem
        to="/bus"
        style={({ isActive }) =>
          isActive
            ? { backgroundColor: AppColors.gray }
            : {}
        }
      >
        {" "}
        <IoMdBus style={{ marginRight: "25px" }} /> Bus
      </StyledItem>

      <StyledItem
        to="/drivers"
        style={({ isActive }) =>
          isActive
            ? { backgroundColor: AppColors.gray }
            : {}
        }
      >
        {" "}
        <GiSteeringWheel style={{ marginRight: "25px" }} />
        Conducteurs
      </StyledItem>
      <StyledItem
        to="/gares"
        style={({ isActive }) =>
          isActive
            ? { backgroundColor: AppColors.gray }
            : {}
        }
      >
        {" "}
        <BiStopCircle style={{ marginRight: "25px" }} />
        Gares
      </StyledItem>
      <StyledItem
        to="/users"
        style={({ isActive }) =>
          isActive
            ? { backgroundColor: AppColors.gray }
            : {}
        }
      >
        {" "}
        <BiUser style={{ marginRight: "25px" }} />
        Utilisateurs
      </StyledItem>
    </HeaderStyled>
  );
}

export default NavBar;
