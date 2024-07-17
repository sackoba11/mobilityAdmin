import { TableContainer, Table } from "@chakra-ui/react";
import {
  StyledTable,
  StylesAppContent,
} from "../../Components/Main-content/StyledAppContent";
import { StyledHeaderContent } from "../../Components/Main-content/StyledHeaderContent";
import { TableBody } from "../../Components/Main-content/TableBody";
import { TableHeaderContent } from "../../Components/Main-content/TableHeader";
import { AllUsers, TableHeaderUsers } from "../../interfaces/User";
import { Suspense, useEffect, useState } from "react";
import { Await } from "react-router-dom";
import { StyledSkeleton } from "../../Components/Main-content/StyledSkeleton";
import { signal, Signal } from "@preact/signals-react";
import { UsersDataState } from "../../Data/data_remote/UsersData";


// eslint-disable-next-line react-refresh/only-export-components
export const usersListPromise: Signal<AllUsers[]> = signal([]);

const UserPage = () => {
  const [state, setState] = useState<boolean>(false);
  usersListPromise.value = UsersDataState.loaderUsers().data
    .usersListPromise as AllUsers[];
  const [isEditable, setSetEditable] = useState<boolean>(false);
  const switchToEdit = () => {
    setSetEditable(() => !isEditable);
  };

  const reload = () => {
    setState(() => !state);
  };
  const getData = async () => {
    usersListPromise.value = (await UsersDataState.loaderUsers().data
      .usersListPromise) as AllUsers[];
  };

  useEffect(() => {
    getData();
    setState(false);
  }, [state]);
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
                resolve={usersListPromise.value}
                errorElement={<p>Error loading package location!</p>}
              >
               {(listUsers)=><TableBody
               editable={isEditable}
               editImput={switchToEdit}
               data={listUsers}
               dataTitle={TableHeaderUsers}
               resetOnDelete={reload}
               deleteFunction={UsersDataState.deleteUser}
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
