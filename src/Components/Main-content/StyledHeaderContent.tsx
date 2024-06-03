import styled from "styled-components";
import AppColors from "../../Common/Theme/Colors";
import { AddIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

const StyledHead = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  justify-content: space-between;
  padding: 5px;
  width: 100%;
  font-size: 25px;
  color: ${AppColors.primary};
`;

type Title={
    page:string
    onPressed:()=>void
}
export const StyledHeaderContent  =({page, onPressed}:Title) =>{
  return (
    <StyledHead>
      <span>{page}</span>
      <Button
        leftIcon={<AddIcon fontSize={15} color={AppColors.white} />}
        bg={AppColors.primary}
        color={AppColors.white}
        fontSize={18}
        variant="solid"
        onClick={() => onPressed()}
      >
        Ajouter
      </Button>
    </StyledHead>
  );
}
