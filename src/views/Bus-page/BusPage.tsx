import { Table, TableContainer } from "@chakra-ui/react";
import { Bus, tableHeaderBus } from "../../interfaces/Bus";
import {
  StyledTable,
  StylesAppContent,
} from "../../Components/Main-content/StyledAppContent";
import { StyledHeaderContent } from "../../Components/Main-content/StyledHeaderContent";
import { TableHeaderContent } from "../../Components/Main-content/TableHeader";
import { TableBody } from "../../Components/Main-content/TableBody";
import { useEffect, useState } from "react";
import { getListBus } from "../../Data/data_remote/dataRemoteFromFirebase";

const BusPage = () => {
  const [busList, setBuslist] = useState<Bus[]>([]);

  useEffect(() => {
    async function fechData() {
      setBuslist(await getListBus());
    }
    fechData();
  }, []);

  const [isEditable, setSetEditable] = useState<boolean>(false);
  const switchToEdit = () => {
    setSetEditable(() => !isEditable);
  };
  return (
    <StylesAppContent>
      <StyledHeaderContent
        page={"Bus"}
        onPressed={() => {
          setSetEditable(true);
        }}
      />
      <StyledTable>
        <TableContainer>
          <Table variant="striped" size="sm">
            <TableHeaderContent title={tableHeaderBus} />
            <TableBody
              editable={isEditable}
              editImput={switchToEdit}
              data={busList}
              dataTitle={tableHeaderBus}
            />
          </Table>
        </TableContainer>
      </StyledTable>
    </StylesAppContent>
  );
};

export default BusPage;
