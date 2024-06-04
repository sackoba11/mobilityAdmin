import { Tr } from "@chakra-ui/react";
import { TableHeaderBus } from "../../interfaces/Bus";
import { IconsEditDelette } from "../IconsEditDelette";
import styled from "styled-components";

type DataList = {
  dataTitle: TableHeaderBus[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
};

const StyledTd = styled.td`
  font-size: 18px;
  font-weight: 500;
  padding: 10px 10px;
  overflow-x: hidden;

`;

export const TableRow = ({ dataTitle, data }: DataList) => {
  return (
    <Tr>
      {dataTitle.map((dataTitleItem, i) => (
        dataTitleItem.label.toLowerCase()=="itineraire"?<StyledTd>{data[dataTitleItem.label.toLowerCase()].map((data:any)=><span style={{whiteSpace:"wrap"}}>{`lat: ${data.lat}; long: ${data.long}`}</span>)}</StyledTd>:
        <StyledTd key={i} align="center">
          {data[dataTitleItem.label.toLowerCase()]}
        </StyledTd>
      ))}
      <IconsEditDelette />{" "}
    </Tr>
  );
};
