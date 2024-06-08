/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Input, Td, Tr } from "@chakra-ui/react";
import { TableHeaderBus } from "../../interfaces/Bus";
import { CloseIcon } from "@chakra-ui/icons";
import AppColors from "../../Common/Theme/Colors";
import { useEffect, useRef } from "react";
type DataList = {
  dataTitle: TableHeaderBus[];
  submit: (data: any) => Promise<void>;
  editImput: () => void;
  nextId: number;
};

export const TableRowImput = ({
  dataTitle,
  editImput,
  nextId,
  submit,
}: DataList) => {
  let dataList: string[] = [];
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const inputRefs = dataTitle.map(() => useRef<HTMLInputElement>(null));

  const SubmitData = () => {
    dataList = [];
    inputRefs.forEach((element) => {
      const data = element.current!.value;
      dataList.push(data);
    });

    submit(dataList);
  };

  const handleSubmit = (
    e: React.KeyboardEvent<HTMLInputElement>,
    inputIndex: number
  ) => {
    if (e.key == "Enter") {
      if (inputIndex < inputRefs.length - 1) {
        const nextInput = inputRefs[inputIndex + 1];
        nextInput.current?.focus();
      } else {
        SubmitData();
      }
    }
  };

  useEffect(() => {
    inputRefs[1].current?.focus();
  }, []);

  return (
    <Tr>
      {dataTitle.map((column, i) => (
        <Td key={i}>
          {column.label == "Id" ? (
            <Input
              ref={inputRefs[i]}
              onKeyDown={(e) => handleSubmit(e, i)}
              readOnly
              w="80%"
              border={`1px solid ${AppColors.gray}`}
              name={column.label}
              placeholder={`${nextId}`}
              size="lg"
            />
          ) : (
            <>
              {column.label == "Email" ? (
                <Input
                  w="80%"
                  ref={inputRefs[i]}
                  onKeyDown={(e) => handleSubmit(e, i)}
                  type="email"
                  border={`1px solid ${AppColors.gray}`}
                  name={column.label}
                  placeholder={column.label}
                  size="lg"
                />
              ) : (
                <Input
                  w="80%"
                  ref={inputRefs[i]}
                  onKeyDown={(e) => handleSubmit(e, i)}
                  border={`1px solid ${AppColors.gray}`}
                  name={column.label}
                  placeholder={column.label}
                  size="lg"
                />
              )}
            </>
          )}
          {i == dataTitle.length - 1 && (
            <>
              <Button
                style={{ marginLeft: "5%" }}
                onClick={() => {
                  editImput();
                }}
                children={<CloseIcon color={AppColors.erro} />}
              />
              <Button
                style={{
                  marginLeft: "10%",
                  backgroundColor: AppColors.editIconColor,
                }}
                type="submit"
                onClick={() => {
                  SubmitData()
                }}
              >
                Valider
              </Button>
            </>
          )}
        </Td>
      ))}
    </Tr>
    //  <Tr>
    //   <CustomControlsExample></CustomControlsExample>
    // </Tr>
  );
};

// function CustomControlsExample() {

//   function EditableControls() {
//     const {
//       isEditing,
//       getSubmitButtonProps,
//       getCancelButtonProps,
//       getEditButtonProps,
//     } = useEditableControls()

//     return isEditing ? (
//       <ButtonGroup justifyContent='center' size='sm'>
//         <Button children={<CheckIcon />} {...getSubmitButtonProps()} />
//         <Button children={<CloseIcon />} {...getCancelButtonProps()} />
//       </ButtonGroup>
//     ) : (
//       <Flex justifyContent='center'>
//         <Button size='sm' children={<EditIcon />} {...getEditButtonProps()} />
//       </Flex>
//     )
//   }

//   return (
//     <Tr
//     display={"flex"}
//     ><Editable
//     display={"flex"}
//       textAlign='center'
//       defaultValue='Rasengan ⚡️'
//       fontSize='2xl'
//       isPreviewFocusable={false}
//     >
//       <EditablePreview />
//       {/* Here is the custom input */}
//       <Input as={EditableInput} />
//       {/* <EditableControls /> */}
//     </Editable>
//     <Editable
//     display={"flex"}
//       textAlign='center'
//       defaultValue='sacko ⚡️'
//       fontSize='2xl'
//       isPreviewFocusable={false}
//     >
//       <EditablePreview />
//       {/* Here is the custom input */}
//       <Input as={EditableInput} />
//       <EditableControls />
//     </Editable>
//       </Tr>
//   )
// }
