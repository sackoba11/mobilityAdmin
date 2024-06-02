import styled from "styled-components";
import AppColors from "../../Common/Theme/Colors";

export const StylesAppContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-size: 31px;
  overflow-y: scroll;
`;

export const StyledTable = styled.div`
  width: 100%;
  padding: 15px;
  background-color: ${AppColors.white};
  overflow-y: scroll;
  height: 80vh;
  border: 1px solid ${AppColors.gray};
  border-radius: 10px;
`;