import { TableContainer, Table } from "@chakra-ui/react";
import { StyledTable, StylesAppContent } from "../../Components/Main-content/StyledAppContent";
import { StyledHeaderContent } from "../../Components/Main-content/StyledHeaderContent";
import { TableBody } from "../../Components/Main-content/TableBody";
import { TableHeaderContent } from "../../Components/Main-content/TableHeader";
import { TableHeaderStation } from "../../interfaces/station";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";



const Gares = () => {
  const stationList = useLoaderData();
  const [isEditable, setSetEditable] = useState<boolean>(false)
    const switchToEdit = () => {
        setSetEditable(() => !isEditable)
    }
    console.log(stationList)
    return (
      <> 
      <StylesAppContent>
      <StyledHeaderContent onPressed={()=>{
        setSetEditable(true)
      }} page={"Gares"} />
      <StyledTable>
        <TableContainer>
          <Table variant="striped" size="sm">
            <TableHeaderContent title={TableHeaderStation} />
            <TableBody editable={isEditable} editImput={switchToEdit} data={stationList} dataTitle={TableHeaderStation}/>
          </Table>
        </TableContainer>
      </StyledTable>
      </StylesAppContent></>
     );
}
 
export default Gares;