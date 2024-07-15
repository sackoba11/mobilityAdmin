/* eslint-disable @typescript-eslint/no-explicit-any */
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { Td } from "@chakra-ui/react";
import AppColors from "../Common/Theme/Colors";
import { StationDataState } from "../Data/data_remote/StationData";

export const IconsEditDelette = (id:any) => {
 
  return (
    <Td>
      <EditIcon
        cursor={"pointer"}
        style={{
          fontSize: "20px",
          color: AppColors.editIconColor,
          marginRight: "15px",
        }}
        onClick={() => alert("Modification")}
      />

      <DeleteIcon
        cursor={"pointer"}
        style={{ fontSize: "20px", color: AppColors.erro }}
        onClick={async () =>{ 
          alert(id.id)
          await StationDataState.deletteStation(id)}}
      />
    </Td>
  );
};
