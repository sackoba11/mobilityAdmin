import { TableContainer, Table } from "@chakra-ui/react";
import {
  StyledTable,
  StylesAppContent,
} from "../../Components/Main-content/StyledAppContent";
import { StyledHeaderContent } from "../../Components/Main-content/StyledHeaderContent";
import { TableBody } from "../../Components/Main-content/TableBody";
import { TableHeaderContent } from "../../Components/Main-content/TableHeader";
import { Driver, TableheaderDriver } from "../../interfaces/Driver";
import { Await } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";
import { StyledSkeleton } from "../../Components/Main-content/StyledSkeleton";
import { DriversDataState } from "../../Data/data_remote/DriverData";
import { signal, Signal } from "@preact/signals-react";

// eslint-disable-next-line react-refresh/only-export-components
export const driverListPromise: Signal<Driver[]> = signal([]);

const DriverPage = () => {
  const [state, setState] = useState<boolean>(false);
  driverListPromise.value = DriversDataState.loaderDriver().data
    .driverListPromise as Driver[];
  const [isEditable, setSetEditable] = useState<boolean>(false);
  const switchToEdit = () => {
    setSetEditable(() => !isEditable);
  };
  const reload = () => {
    setState(() => !state);
  };
  const getData = async () => {
    driverListPromise.value = (await DriversDataState.loaderDriver().data
      .busListPromise) as Driver[];
    console.log(driverListPromise.value);
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
          page={"Conducteurs"}
        />
        <StyledTable>
          <TableContainer>
            <Table variant="striped" size="sm">
              <TableHeaderContent title={TableheaderDriver} />
              <Suspense fallback={<StyledSkeleton title={TableheaderDriver} />}>
                <Await
                  resolve={driverListPromise.value}
                  errorElement={<p>Error loading package location!</p>}
                >
                  {(listDriver) => (
                    <TableBody
                    submitImput={DriversDataState.addDriver}
                      editable={isEditable}
                      editImput={switchToEdit}
                      data={listDriver}
                      dataTitle={TableheaderDriver}
                      restartPage={reload}
                      deleteFunction={DriversDataState.deleteDriver}
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
