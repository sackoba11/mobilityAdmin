/* eslint-disable @typescript-eslint/no-explicit-any */
import { Tr } from "@chakra-ui/react";
import { TableHeaderBus } from "../../interfaces/Bus";
import { IconsEditDelette } from "../IconsEditDelette";
import styled from "styled-components";

type DataList = {
  dataTitle: TableHeaderBus[];
  data: any;
  index: number;
  resetOnDelete?:()=>void;
  deleteFunction?:(id:string)=>Promise<void>
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

export const TableRow = ({ dataTitle, data, index,resetOnDelete, deleteFunction }: DataList) => {

 
  return (
    <Tr key={index}>
      {dataTitle.map((dataTitleItem, i) =>
        dataTitleItem.label.toLowerCase() == "itineraire" ? (
          <StyledTd key={i}>
            {
              // data[dataTitleItem.label.toLowerCase()].map(

              // (data: Itineraire, ind: number) => (
              <span key={i} style={{ whiteSpace: "wrap" }}>
                {`lat: ${
                  data[dataTitleItem.label.toLowerCase()][0].lat
                }, long: ${
                  data[dataTitleItem.label.toLowerCase()][0].long
                } ...   `}
                {`lat: ${
                  data[dataTitleItem.label.toLowerCase()][
                    data[dataTitleItem.label.toLowerCase()].length - 1
                  ].lat
                }, long: ${
                  data[dataTitleItem.label.toLowerCase()][
                    data[dataTitleItem.label.toLowerCase()].length - 1 - 1
                  ].long
                }`}
              </span>
              // )
              // )
            }
          </StyledTd>
        ) : dataTitleItem.label.toLowerCase() == "localisation" ? (
          <StyledTd key={i}>{`lat: ${
            
            data[dataTitleItem.label.toLowerCase()].lat
          },  long:${data[dataTitleItem.label.toLowerCase()].long}`}</StyledTd>
        ) : (
          <StyledTd key={i}>{data[dataTitleItem.label.toLowerCase()]}</StyledTd>
        )
      )}
      <IconsEditDelette  id={data['id']} resetOnDelete={resetOnDelete} deleteFunction={deleteFunction}/>
    </Tr> 
  );
};
