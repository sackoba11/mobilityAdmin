import { Th, Thead, Tr } from "@chakra-ui/react";
import AppColors from "../../Common/Theme/Colors";

const styledTh = {
  paddingTop:"15px",
  alignItems: "center",
  alignContent: "center",
  fontWeight: "700",
  fontSize: "18px",
  paddingBottom: "15px",
  color: AppColors.primary,
};

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
          <Th key={index} style={styledTh}>{label.label}</Th>
        ))}
      </Tr>

    </Thead>
  );
};
