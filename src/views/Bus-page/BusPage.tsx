import {  Table, TableContainer } from "@chakra-ui/react";
import { Bus, tableHeaderBus } from "../../interfaces/Bus";
import {
  StyledTable,
  StylesAppContent,
} from "../../Components/Main-content/StyledAppContent";
import { StyledHeaderContent } from "../../Components/Main-content/StyledHeaderContent";
import { TableHeaderContent } from "../../Components/Main-content/TableHeader";
import { TableBody } from "../../Components/Main-content/TableBody";
import { Suspense, useEffect, useState } from "react";
import { Await } from "react-router-dom";
import { StyledSkeleton } from "../../Components/Main-content/StyledSkeleton";
import { BusDataState } from "../../Data/data_remote/busData";
import { signal, Signal } from "@preact/signals-react";

// eslint-disable-next-line react-refresh/only-export-components
export const busListPromise: Signal<Bus[]> = signal([]);

const BusPage = () => {
  const [state, setState] = useState<boolean>(false);
  busListPromise.value = BusDataState.loaderBus().data
    .busListPromise as Bus[];
  const [isEditable, setSetEditable] = useState<boolean>(false);
  const switchToEdit = () => {
    setSetEditable(() => !isEditable);
  };

  const reload = () => {
    setState(() => !state);
  };
  const getData = async () => {
    busListPromise.value = (await BusDataState.loaderBus().data
      .busListPromise) as Bus[];
    console.log(busListPromise.value);
  };

  useEffect(() => {
    getData();
    setState(false);
  }, [state]);

  return (
    <StylesAppContent>
      <StyledHeaderContent
        page={"Bus"}
        onPressed={() => {
          setSetEditable(true);
        }}
      />
      <StyledTable>
        <TableContainer>
          <Table variant="striped" size="sm">
            <TableHeaderContent title={tableHeaderBus} />
            <Suspense fallback={<StyledSkeleton title={tableHeaderBus}/>}>
              <Await
                resolve={busListPromise.value}
                errorElement={<p>Erreur de chargement des données</p>}
              >
                {(busList) => (
                  <TableBody
                  submitImput={BusDataState.addBus}
                    editable={isEditable}
                    editImput={switchToEdit}
                    resetOnDelete={reload}
                    deleteFunction={BusDataState.deleteBus}
                    data={busList}
                    dataTitle={tableHeaderBus}
                  
                  />
                )}
              </Await>
            </Suspense>
          </Table>
        </TableContainer>
      </StyledTable>
    </StylesAppContent>
  );
};

export default BusPage;
