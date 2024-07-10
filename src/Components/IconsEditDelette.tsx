import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { Td } from "@chakra-ui/react";
import AppColors from "../Common/Theme/Colors";

export const IconsEditDelette = () => {
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
        onClick={() => alert("Suppression")}
      />
    </Td>
  );
};
