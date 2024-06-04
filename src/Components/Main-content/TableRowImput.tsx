import { Button, Input, Td, Tr } from "@chakra-ui/react";
import { TableHeaderBus } from "../../interfaces/Bus";
import { CloseIcon } from "@chakra-ui/icons";

type DataList = {
  dataTitle: TableHeaderBus[];
  editImput: ()=>void;
};

export const TableRowImput = ({ dataTitle, editImput }: DataList) => {
  
  return (
    <Tr>
      {dataTitle.map((column, i) => (
        <Td key={i}>
          <Input
            w="90%"
            name={column.label}
            placeholder={column.label}
            size="lg"
          />
          {i == dataTitle.length - 1 && (
            <Button
              style={{ marginLeft: "10%", }}
              onClick={() => {
                editImput()
              }}
              children={<CloseIcon />}
            />
          )}
        </Td>
      ))}{" "}
    </Tr>
  );
};
// <Td
//     key={i}>
//     <Input w="90%" ref={inputRefs[i]} value={inputsValuesStates.get(column)?.[0]} onChange={()=>inputsValuesStates.get(column)?.[1](()=>inputRefs[i].current!.value)} onKeyDown={(e)=>handleSubmit(e,i)}  name={column.label} placeholder={column.label} size='lg' />
//     {i==columns.length-1 && <Button style={{marginLeft:"3%"}} onClick={onEditPressed} children={<CloseIcon />} />}
// </Td>
