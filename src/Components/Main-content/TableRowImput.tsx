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
  const inputRefs = dataTitle.map(() => useRef<HTMLInputElement >(null));
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const inputRefSelect = dataTitle.map(() => useRef<HTMLSelectElement>(null));

  const SubmitData =async () => {
    dataList = [];
    inputRefs.forEach((element) => {
      const data = element.current!.value;
      dataList = [...dataList, data];
    });
   await submit(dataList);
   window.location.reload()
  };

  const handleSubmit = (
    e: React.KeyboardEvent<HTMLInputElement | HTMLSelectElement>,
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
              h={"40px"}
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
                  h={"40px"}
                  ref={inputRefs[i]}
                  onKeyDown={(e) => handleSubmit(e, i)}
                  type="email"
                  border={`1px solid ${AppColors.gray}`}
                  name={column.label}
                  placeholder={column.label}
                  size="lg"
                />
              ) : (
                <>
                  {column.label == "Type" ? (
                    <>
                      <Input
                        w="80%"
                        h={"40px"}
                        ref={inputRefs[i]}
                        onKeyDown={(e) => handleSubmit(e, i)}
                        border={`1px solid ${AppColors.gray}`}
                        name={"Type"}
                        placeholder={"Type"}
                        size="lg"
                        marginRight={5}
                      ></Input>
                      {/* <Select w="110%"
                        h={"40px"}
                        ref={inputRefSelect[i]}
                        onKeyDown={(e) => handleSubmit(e, i)}
                        border={`1px solid ${AppColors.gray}`}
                        name={"latitude"}
                        
                        size="lg"
                        marginRight={5}>
                        <option value="Gbaka">Gbaka</option>
                        <option value="Taxi">Taxi</option>
                      </Select> */}
                    </>
                  ) : (
                    <Input
                      w="80%"
                      h={"40px"}
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
            </>
          )}
          {i == dataTitle.length - 1 && (
            <>
              <Button
                style={{
                  marginLeft: "4%",
                  height: "40px",
                  marginBottom: "8px",
                  backgroundColor: AppColors.editIconColor,
                }}
                type="submit"
                onClick={() => {
                  SubmitData();
                }}
              >
                Valider
              </Button>
              <Button
                style={{
                  marginLeft: "4%",
                  height: "40px",
                  marginBottom: "8px",
                }}
                onClick={() => {
                  editImput();
                }}
                children={<CloseIcon color={AppColors.erro} />}
              />
            </>
          )}
        </Td>
      ))}
    </Tr>
  );
};
