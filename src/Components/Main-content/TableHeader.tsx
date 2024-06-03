import { Thead, Tr } from "@chakra-ui/react";
import styled from "styled-components";
import AppColors from "../../Common/Theme/Colors";

const StyledTh = styled.th`
  align-items: center;
  align-content: center;
  font-weight: 700;
  font-size: 18px;
  padding-bottom: 15px;
  color: ${AppColors.primary};
`;

type TableHeaderText = {
  label: string;
};

type TableList = {
  title: TableHeaderText[];
};

export const TableHeaderContent = ({ title }: TableList) => {
    
  return (
    <Thead>
      <Tr>
        {title.map((label, index) => (
          <StyledTh key={index}>{label.label}</StyledTh>
        ))}
      </Tr>

    </Thead>
  );
};
