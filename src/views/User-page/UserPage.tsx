import { TableContainer, Table } from "@chakra-ui/react";
import { StyledTable, StylesAppContent } from "../../Components/Main-content/StyledAppContent";
import { StyledHeaderContent } from "../../Components/Main-content/StyledHeaderContent";
import { TableBody } from "../../Components/Main-content/TableBody";
import { TableHeaderContent } from "../../Components/Main-content/TableHeader";
import {  getUsersData } from "../../Data/data-mock/data-mock";
import { TableHeaderUsers } from "../../interfaces/User";


const UserPage = () => {
  const userList = getUsersData();
  return (
    <>
      <StylesAppContent>
      <StyledHeaderContent page={"Utilisateurs"} />
      <StyledTable>
        <TableContainer>
          <Table variant="striped" size="sm">
            <TableHeaderContent title={TableHeaderUsers} />
            <TableBody data={userList} dataTitle={TableHeaderUsers}/>
          </Table>
        </TableContainer>
      </StyledTable>
      </StylesAppContent>
    </>
  );
};

export default UserPage;
