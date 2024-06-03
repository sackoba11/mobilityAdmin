import { TableContainer, Table } from "@chakra-ui/react";
import { StyledTable, StylesAppContent } from "../../Components/Main-content/StyledAppContent";
import { StyledHeaderContent } from "../../Components/Main-content/StyledHeaderContent";
import { TableBody } from "../../Components/Main-content/TableBody";
import { TableHeaderContent } from "../../Components/Main-content/TableHeader";
import {  getUsersData } from "../../Data/data-mock/data-mock";
import { TableHeaderUsers } from "../../interfaces/User";
import { useState } from "react";


const UserPage = () => {
  const userList = getUsersData();
  const [isEditable, setSetEditable] = useState<boolean>(false)
    const switchToEdit = () => {
        setSetEditable(() => !isEditable)
    }
  return (
    <>
      <StylesAppContent>
      <StyledHeaderContent onPressed={()=>{
        setSetEditable(true)
      }} page={"Utilisateurs"} />
      <StyledTable>
        <TableContainer>
          <Table variant="striped" size="sm">
            <TableHeaderContent title={TableHeaderUsers} />
            <TableBody editable={isEditable} editImput={switchToEdit} data={userList} dataTitle={TableHeaderUsers}/>
          </Table>
        </TableContainer>
      </StyledTable>
      </StylesAppContent>
    </>
  );
};

export default UserPage;
