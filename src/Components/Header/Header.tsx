import styled from "styled-components";
import darkLogo from "../../assets/react.svg";
import AppColors from "../../Common/Theme/Colors";
import { Button, Image } from "@chakra-ui/react";
import { MdLogout, MdNotifications } from "react-icons/md";

const StyleHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: ${AppColors.white};
  font-size: 30px;
  margin-right: 15px;
`;

const StyledLogo = styled.div`
  display: flex;
  flex-direction: row;
  margin: 15px;
  height: 50px;
  width: 400px;
  align-items: center;
  justify-content: space-evenly;
`;

const Header = () => {
  return (
    <StyleHeader>
      <StyledLogo>
        <Image src={darkLogo} alt="Logo" />
        <h1>Mobility Dashboard</h1>
      </StyledLogo>
      <StyledLogo>
        <MdNotifications size={25} />
        <Button
          leftIcon={<MdLogout size={25} />}
          bg={AppColors.white}
          variant="solid"
          onClick={() => {
            alert("Se Déconnecter");
          }}
        >
          Se Déconnecter
        </Button>
      </StyledLogo>
    </StyleHeader>
  );
};

export default Header;
