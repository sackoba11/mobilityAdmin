import { Table, TableContainer } from "@chakra-ui/react";
import {  tableHeaderBus } from "../../interfaces/Bus";
import {
  StyledTable,
  StylesAppContent,
} from "../../Components/Main-content/StyledAppContent";
import { StyledHeaderContent } from "../../Components/Main-content/StyledHeaderContent";
import { TableHeaderContent } from "../../Components/Main-content/TableHeader";
import { TableBody } from "../../Components/Main-content/TableBody";
import {  useState } from "react";
import { useLoaderData } from "react-router-dom";

const BusPage = () => {

const busList=useLoaderData()
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
