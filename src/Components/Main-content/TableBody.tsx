/* eslint-disable @typescript-eslint/no-explicit-any */
import { Tbody } from "@chakra-ui/react";
import { TableHeaderBus } from "../../interfaces/Bus";
import { TableRow } from "./TableRow";
import { TableRowImput } from "./TableRowImput";

type DataList = {
  dataTitle: TableHeaderBus[];
  data: any;
  editImput: () => void;
  // editupdate: () => void;
  submitImput?: (data: any) => Promise<void>;
  editable: boolean;
  // update: boolean;
  restartPage?: () => void;
  deleteFunction?: (id: string) => Promise<void>;
};

export const TableBody = ({
  data,
  dataTitle,
  editImput,
  editable,
  submitImput,
  restartPage,
  deleteFunction,
}: // update,
// editupdate
DataList) => {
  return (
    <Tbody>
      {data.map((dataItem: never, index: number) => (
        <TableRow
          // editupdate={editupdate}
          // update={update}
          key={index}
          data={dataItem}
          dataTitle={dataTitle}
          index={index}
          resetOnDelete={restartPage}
          deleteFunction={deleteFunction}
        />
      ))}
      {editable ? (
        <TableRowImput
          nextId={data.length}
          submit={submitImput!}
          editImput={editImput}
          dataTitle={dataTitle}
          restartPage={restartPage}
        />
      ) : (
        <></>
      )}
    </Tbody>
  );
};
