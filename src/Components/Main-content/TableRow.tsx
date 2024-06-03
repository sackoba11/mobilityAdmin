import { Tr } from "@chakra-ui/react";
import { TableHeaderBus } from "../../interfaces/Bus";
import { IconsEditDelette } from "../IconsEditDelette";
import styled from "styled-components";

type DataList = {
  dataTitle: TableHeaderBus[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  index: number;
};

const StyledTd = styled.td`
  font-size: 18px;
  font-weight: 500;
  padding: 10px 10px;
`;

export const TableRow = ({ dataTitle, data, index }: DataList) => {
  return (
    <Tr key={index}>
      {dataTitle.map((dataTitleItem, i) => (
        <StyledTd key={i} align="center">
          {data[dataTitleItem.label.toLowerCase()]}
        </StyledTd>
      ))}
      <IconsEditDelette />{" "}
    </Tr>
  );
};
