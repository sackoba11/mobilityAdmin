import { TableContainer, Table } from "@chakra-ui/react";
import {
  StyledTable,
  StylesAppContent,
} from "../../Components/Main-content/StyledAppContent";
import { StyledHeaderContent } from "../../Components/Main-content/StyledHeaderContent";
import { TableBody } from "../../Components/Main-content/TableBody";
import { TableHeaderContent } from "../../Components/Main-content/TableHeader";
import { TableheaderDriver } from "../../interfaces/Driver";
import { Await, useLoaderData } from "react-router-dom";
import { Suspense, useState } from "react";
import { StyledSkeleton } from "../../Components/Main-content/StyledSkeleton";
import { DriversDataState } from "../../Data/data_remote/DriverData";

const DriverPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const driverListPromise: any = useLoaderData();
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
          page={"Conducteurs"}
        />
        <StyledTable>
          <TableContainer>
            <Table variant="striped" size="sm">
              <TableHeaderContent title={TableheaderDriver} />
              <Suspense fallback={<StyledSkeleton title={TableheaderDriver} />}>
                <Await
                  resolve={driverListPromise.driverListPromise}
                  errorElement={<p>Error loading package location!</p>}
                >
                  {(listDriver) => (
                    <TableBody
                    submitImput={DriversDataState.addDriver}
                      editable={isEditable}
                      editImput={switchToEdit}
                      data={listDriver}
                      dataTitle={TableheaderDriver}
                    />
                  )}
                </Await>
              </Suspense>
            </Table>
          </TableContainer>
        </StyledTable>
      </StylesAppContent>
    </>
  );
};

export default DriverPage;
