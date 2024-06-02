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
  font-size: 18px;
`;

const StyledLogo = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  height: 40px;
  width: 300px;
  align-items: center;
  justify-content: space-evenly;
`;

const Header = () => {
  return (
    <StyleHeader>
      <StyledLogo>
        <Image src={darkLogo} alt="Logo" />
        <span>Mobility Dashboard</span>
      </StyledLogo>
      <StyledLogo>
        <MdNotifications size={20} />
        <Button
          leftIcon={<MdLogout size={18} />}
          bg={AppColors.white}
          variant="solid"
          fontSize={13}
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
