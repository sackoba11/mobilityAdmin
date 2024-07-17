/* eslint-disable @typescript-eslint/no-explicit-any */
import { TableContainer, Table } from "@chakra-ui/react";
import {
  StyledTable,
  StylesAppContent,
} from "../../Components/Main-content/StyledAppContent";
import { StyledHeaderContent } from "../../Components/Main-content/StyledHeaderContent";
import { TableBody } from "../../Components/Main-content/TableBody";
import { TableHeaderContent } from "../../Components/Main-content/TableHeader";
import { Station, TableHeaderStation } from "../../interfaces/station";
import { Suspense,  useEffect, useState } from "react";
import { Await } from "react-router-dom";
import { StyledSkeleton } from "../../Components/Main-content/StyledSkeleton";
import { StationDataState } from "../../Data/data_remote/StationData";
import { signal, Signal } from "@preact/signals-react";

// eslint-disable-next-line react-refresh/only-export-components
export const listStation: Signal<Station[]> = signal([]);

const Gares = () => {
  const [state, setState] = useState<boolean>(false);
  listStation.value = StationDataState.loaderStation().data
    .stationListPromise as Station[];
  const [isEditable, setSetEditable] = useState<boolean>(false);
  const switchToEdit = () => {
    setSetEditable(() => !isEditable);
  };
  const reload = () => {
    setState(() => !state);
  };
  const getData = async () => {
    listStation.value = (await StationDataState.loaderStation().data
      .stationListPromise) as Station[];
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
          page={"Gares"}
        />
        <StyledTable>
          <TableContainer>
            <Table variant="striped" size="sm">
              <TableHeaderContent title={TableHeaderStation} />
              <Suspense
                fallback={<StyledSkeleton title={TableHeaderStation} />}
              >
                <Await
                  resolve={listStation.value}
                  errorElement={<p>Error loading package location!</p>}
                >
                  {(listStation) => (
                    <TableBody
                      submitImput={StationDataState.addStation}
                      editable={isEditable}
                      editImput={switchToEdit}
                      restartPage={reload}
                      deleteFunction={StationDataState.deleteStation}
                      data={listStation}
                      dataTitle={TableHeaderStation}
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

export default Gares;
