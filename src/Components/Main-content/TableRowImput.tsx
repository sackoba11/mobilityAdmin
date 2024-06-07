import { Button, Input, Td, Tr } from "@chakra-ui/react";
import { TableHeaderBus } from "../../interfaces/Bus";
import { CloseIcon } from "@chakra-ui/icons";
import AppColors from "../../Common/Theme/Colors";
import { useEffect, useRef } from "react";
type DataList = {
  dataTitle: TableHeaderBus[];
  editImput: () => void;
  nextId: number;
};

export const TableRowImput = ({ dataTitle, editImput, nextId }: DataList) => {

  let dataList: (string | undefined)[] = [];
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const inputRefs = dataTitle.map(() => useRef<HTMLInputElement>(null));
  
  const handleSubmit = (
    e: React.KeyboardEvent<HTMLInputElement>,
    inputIndex: number
  ) => {
    if (e.key == "Enter") {
      if (inputIndex < inputRefs.length - 1) {
        const nextInput = inputRefs[inputIndex + 1];
        nextInput.current?.focus();
      } else {
        dataList = [];
        inputRefs.forEach((element) => {
          const data = element.current?.value;
          dataList.push(data);
        });

        alert(dataList);
      }
    }
  };

  useEffect(()=>{
    inputRefs[1].current?.focus()
  },[])

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
                  dataList = [];
                  inputRefs.forEach((element) => {
                    const data = element.current?.value;
                    dataList.push(data);
                  });

                  alert(dataList);
                }}
              >
                Valider
              </Button>
            </>
          )}
        </Td>
      ))}
    </Tr>
  );
};
