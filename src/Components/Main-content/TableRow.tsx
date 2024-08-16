/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input, Tr } from "@chakra-ui/react";
import { TableHeaderBus } from "../../interfaces/Bus";
import { IconsEditDelette } from "../IconsEditDelette";
import styled from "styled-components";
import { useState } from "react";
import AppColors from "../../Common/Theme/Colors";
import { OnEditMode } from "../OnEditMode";

type DataList = {
  dataTitle: TableHeaderBus[];
  data: any;
  index: number;
  resetOnDelete?: () => void;
  deleteFunction?: (id: string) => Promise<void>;
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

export const TableRow = ({
  dataTitle,
  data,
  index,
  resetOnDelete,
  deleteFunction,
}: DataList) => {
  const [edit, setEdit] = useState(true);

  return (
    <>
      <Tr key={index}>
        {dataTitle.map((dataTitleItem, i) => {
          switch (dataTitleItem.label.toLowerCase()) {
            case "itineraire":
              return (
                <StyledTd key={i}>
                  {
                    // data[dataTitleItem.label.toLowerCase()].map(

                    // (data: Itineraire, ind: number) => (

                    <Input
                      readOnly={edit}
                      border={edit ? "0px" : "1px solid black"}
                      autoFocus={!edit}
                      focusBorderColor={edit ? "" : AppColors.editIconColor}
                      defaultValue={`lat: ${
                        data[dataTitleItem.label.toLowerCase()][0].lat
                      }, long: ${
                        data[dataTitleItem.label.toLowerCase()][0].long
                      } ...   
                   lat: ${
                     data[dataTitleItem.label.toLowerCase()][
                       data[dataTitleItem.label.toLowerCase()].length - 1
                     ].lat
                   }, 
                 long: ${
                   data[dataTitleItem.label.toLowerCase()][
                     data[dataTitleItem.label.toLowerCase()].length - 1 - 1
                   ].long
                 }`}
                    />
                    // )
                    // )
                  }
                </StyledTd>
              );

            case "localisation":
              return (
                <StyledTd key={i}>
                  <Input
                    readOnly={edit}
                    border={edit ? "0px" : "1px solid black"}
                    autoFocus={!edit}
                    focusBorderColor={edit ? "" : AppColors.editIconColor}
                    defaultValue={`lat: ${
                      data[dataTitleItem.label.toLowerCase()].lat
                    },  long:${data[dataTitleItem.label.toLowerCase()].long}`}
                  />
                </StyledTd>
              );
            case "index":
              return (
                <StyledTd key={i}>
                  <Input
                    readOnly={true}
                    border={edit ? "0px" : "1px solid black"}
                    autoFocus={!edit}
                    focusBorderColor={edit ? "" : AppColors.editIconColor}
                    defaultValue={data[dataTitleItem.label.toLowerCase()]}
                  />
                </StyledTd>
              );

            default:
              return (
                <StyledTd key={i}>
                  <Input
                    readOnly={edit}
                    border={edit ? "0px" : "1px solid black"}
                    autoFocus={!edit}
                    focusBorderColor={edit ? "" : AppColors.editIconColor}
                    defaultValue={data[dataTitleItem.label.toLowerCase()]}
                  />
                </StyledTd>
              );
          }
        })}

        {edit ? (
          <IconsEditDelette
            id={data["id"]}
            setEdit={setEdit}
            resetOnDelete={resetOnDelete}
            deleteFunction={deleteFunction}
          />
        ) : (
          <OnEditMode setEdit={setEdit} resetOnDelete={resetOnDelete!} />
        )}
      </Tr>
    </>
  );
};
