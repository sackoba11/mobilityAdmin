import { TableContainer, Table } from "@chakra-ui/react";
import {
  StyledTable,
  StylesAppContent,
} from "../../Components/Main-content/StyledAppContent";
import { StyledHeaderContent } from "../../Components/Main-content/StyledHeaderContent";
import { TableBody } from "../../Components/Main-content/TableBody";
import { TableHeaderContent } from "../../Components/Main-content/TableHeader";
import { TableHeaderUsers } from "../../interfaces/User";
import { Suspense, useState } from "react";
import { Await, useLoaderData } from "react-router-dom";
import { StyledSkeleton } from "../../Components/Main-content/StyledSkeleton";

const UserPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const usersListPromise:any = useLoaderData();
  const [isEditable, setSetEditable] = useState<boolean>(false);
  const switchToEdit = () => {
    setSetEditable(() => !isEditable);
  };
  return (
    <>
      <StylesAppContent>
        <StyledHeaderContent
          onPressed={() => {
            setSetEditable(true);
          }}
          page={"Utilisateurs"}
        />
        <StyledTable>
          <TableContainer>
            <Table variant="striped" size="sm">
              <TableHeaderContent title={TableHeaderUsers} />
              <Suspense fallback={<StyledSkeleton title={TableHeaderUsers}/>}>
              <Await
                resolve={usersListPromise.usersListPromise}
                errorElement={<p>Error loading package location!</p>}
              >
               {(listUsers)=><TableBody
               editable={isEditable}
               editImput={switchToEdit}
               data={listUsers}
               dataTitle={TableHeaderUsers}
             />}
              </Await>
            </Suspense>
              
            </Table>
          </TableContainer>
        </StyledTable>
      </StylesAppContent>
    </>
  );
};

export default UserPage;
