import { Table, TableContainer, } from "@chakra-ui/react";
import { tableHeaderBus } from "../../interfaces/Bus";
import { getBusData } from "../../Data/data-mock/data-mock";
import { StyledTable, StylesAppContent } from "../../Components/Main-content/StyledAppContent";
import { StyledHeaderContent } from "../../Components/Main-content/StyledHeaderContent";
import { TableHeaderContent } from "../../Components/Main-content/TableHeader";
import { TableBody } from "../../Components/Main-content/TableBody";





const BusPage = () => {
  const busList = getBusData();
  return (
    <StylesAppContent>
      <StyledHeaderContent page={"Bus"} />
      <StyledTable>
        <TableContainer>
          <Table variant="striped" size="sm">
            <TableHeaderContent title={tableHeaderBus} />
            <TableBody data={busList} dataTitle={tableHeaderBus}/>
          </Table>
        </TableContainer>
      </StyledTable>
    </StylesAppContent>
  );
};

export default BusPage;
