import { TableContainer, Table } from "@chakra-ui/react";
import { StyledTable, StylesAppContent } from "../../Components/Main-content/StyledAppContent";
import { StyledHeaderContent } from "../../Components/Main-content/StyledHeaderContent";
import { TableBody } from "../../Components/Main-content/TableBody";
import { TableHeaderContent } from "../../Components/Main-content/TableHeader";
import {  getStationData } from "../../Data/data-mock/data-mock";
import { TableHeaderStation } from "../../interfaces/station";



const Gares = () => {
  const stationList = getStationData();
    return (
      <> 
      <StylesAppContent>
      <StyledHeaderContent page={"Gares"} />
      <StyledTable>
        <TableContainer>
          <Table variant="striped" size="sm">
            <TableHeaderContent title={TableHeaderStation} />
            <TableBody data={stationList} dataTitle={TableHeaderStation}/>
          </Table>
        </TableContainer>
      </StyledTable>
      </StylesAppContent></>
     );
}
 
export default Gares;