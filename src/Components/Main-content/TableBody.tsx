import { Tbody } from "@chakra-ui/react";
import { TableHeaderBus } from "../../interfaces/Bus";
import { TableRow } from "./TableRow";
import { TableRowImput } from "./TableRowImput";

type DataList = {
  dataTitle: TableHeaderBus[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  editImput:()=>void
  editable:boolean
};

export const TableBody = ({ data, dataTitle, editImput, editable}: DataList) => {
    
  return (
    <Tbody>
      {data.map((dataItem:never, index: number) => (
        <TableRow
          key={index}
          data={dataItem}
          dataTitle={dataTitle}
          index={index}  
        />
      ))}
    { editable? <TableRowImput nextId={data.length} editImput={editImput} dataTitle={dataTitle}/>:<></>}
    </Tbody>
  );
};
