import { TableContainer, Table } from "@chakra-ui/react";
import {
  StyledTable,
  StylesAppContent,
} from "../../Components/Main-content/StyledAppContent";
import { StyledHeaderContent } from "../../Components/Main-content/StyledHeaderContent";
import { TableBody } from "../../Components/Main-content/TableBody";
import { TableHeaderContent } from "../../Components/Main-content/TableHeader";
import { TableHeaderStation } from "../../interfaces/station";
import { Suspense, useState } from "react";
import { Await, useLoaderData } from "react-router-dom";
import { StyledSkeleton } from "../../Components/Main-content/StyledSkeleton";
import { StationDataState } from "../../Data/data_remote/StationData";

const Gares = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const stationListPromise: any = useLoaderData();
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
          page={"Gares"}
        />
        <StyledTable>
          <TableContainer>
            <Table variant="striped" size="sm">
              <TableHeaderContent title={TableHeaderStation} />
              <Suspense fallback={<StyledSkeleton title={TableHeaderStation}/>}>
                <Await
                  resolve={stationListPromise.stationListPromise}
                  errorElement={<p>Error loading package location!</p>}
                >
                  {(listStation) => (
                    <TableBody
                    submitImput={StationDataState.addStation}
                      editable={isEditable}
                      editImput={switchToEdit}
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
