/* eslint-disable @typescript-eslint/no-explicit-any */
import { EditIcon } from "@chakra-ui/icons";
import { Td } from "@chakra-ui/react";
import AppColors from "../Common/Theme/Colors";
import { CustomAlertDialog } from "./CustomAlertDialog";
type Data={
  id: any,
  resetOnDelete?:()=>void;
  deleteFunction?:(id:string)=>Promise<void>
}

export const IconsEditDelette = ({id,resetOnDelete, deleteFunction}:Data) => {
  
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
      <CustomAlertDialog id={id} resetOnDelete={resetOnDelete} deleteFunction={deleteFunction}/>
    </Td>
  );
};
