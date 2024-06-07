import { Tr } from "@chakra-ui/react";
import { Itineraire, TableHeaderBus } from "../../interfaces/Bus";
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
  overflow-x: hidden;
  align-items: center;
  align-content: center;
  justify-content: center;
`;

export const TableRow = ({ dataTitle, data, index }: DataList) => {
  return (
    <Tr key={index}>
      {dataTitle.map((dataTitleItem, i) =>
        dataTitleItem.label.toLowerCase() == "itineraire" ? (
          <StyledTd key={i}>
            {data[dataTitleItem.label.toLowerCase()].map(
              (data: Itineraire, ind: number) => (
                <span
                  key={ind}
                  style={{ whiteSpace: "wrap" }}
                >{`lat: ${data.lat}; long: ${data.long}`}</span>
              )
            )}
          </StyledTd>
        ) : dataTitleItem.label.toLowerCase() == "localisation" ? (
          <StyledTd key={i}>{`lat: ${
            data[dataTitleItem.label.toLowerCase()].lat
          };  long:${data[dataTitleItem.label.toLowerCase()].long}`}</StyledTd>
        ) : (
          <StyledTd key={i}>{data[dataTitleItem.label.toLowerCase()]}</StyledTd>
        )
      )}
      <IconsEditDelette key={index} />
    </Tr>
  );
};

