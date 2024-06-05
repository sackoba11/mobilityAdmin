import { TableContainer, Table } from "@chakra-ui/react";
import { StyledTable, StylesAppContent } from "../../Components/Main-content/StyledAppContent";
import { StyledHeaderContent } from "../../Components/Main-content/StyledHeaderContent";
import { TableBody } from "../../Components/Main-content/TableBody";
import { TableHeaderContent } from "../../Components/Main-content/TableHeader";
import {  TableheaderDriver } from "../../interfaces/Driver";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";


const DriverPage = () => {
const driverList=useLoaderData()
  const [isEditable, setSetEditable] = useState<boolean>(false)
    const switchToEdit = () => {
        setSetEditable(() => !isEditable)
    }
  return (
    <>
      <StylesAppContent>
      <StyledHeaderContent onPressed={()=>{
        setSetEditable(true)
      }} page={"Conducteurs"} />
      <StyledTable>
        <TableContainer>
          <Table variant="striped" size="sm">
            <TableHeaderContent title={TableheaderDriver} />
            <TableBody editable={isEditable} editImput={switchToEdit} data={driverList} dataTitle={TableheaderDriver}/>
          </Table>
        </TableContainer>
      </StyledTable>
      </StylesAppContent>
    </>
  );
};

export default DriverPage;
