import { CloseIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import AppColors from "../Common/Theme/Colors";
import { BiSave } from "react-icons/bi";
type Data = {
  resetOnDelete: () => void;
  setEdit: (value: boolean) => void;
};
export const OnEditMode = ({ setEdit, resetOnDelete }: Data) => {
  return (
    <>
      <Button
        style={{
          marginLeft: "4%",
          height: "40px",
          marginBottom: "8px",
          backgroundColor: AppColors.editIconColor,
        }}
        type="submit"
        children={
          <BiSave
            size={"20px"}
            onClick={() => {
              alert("Not yet implement");
            }}
          />
        }
      />

      <Button
        style={{
          marginLeft: "4%",
          height: "40px",
          marginBottom: "8px",
        }}
        onClick={() => {
          setEdit(true);
          resetOnDelete();
        }}
        children={<CloseIcon color={AppColors.erro} />}
      />
    </>
  );
};
