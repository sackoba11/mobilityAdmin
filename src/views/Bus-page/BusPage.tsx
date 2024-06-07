import {  Table, TableContainer } from "@chakra-ui/react";
import { tableHeaderBus } from "../../interfaces/Bus";
import {
  StyledTable,
  StylesAppContent,
} from "../../Components/Main-content/StyledAppContent";
import { StyledHeaderContent } from "../../Components/Main-content/StyledHeaderContent";
import { TableHeaderContent } from "../../Components/Main-content/TableHeader";
import { TableBody } from "../../Components/Main-content/TableBody";
import { Suspense, useState } from "react";
import { Await, useLoaderData } from "react-router-dom";
import { StyledSkeleton } from "../../Components/Main-content/StyledSkeleton";

const BusPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const busListPromise: any = useLoaderData();
  
  const [isEditable, setSetEditable] = useState<boolean>(false);
  const switchToEdit = () => {
    setSetEditable(() => !isEditable);
  };

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
                resolve={busListPromise.busListPromise}
                errorElement={<p>Error loading package location!</p>}
              >
                {(busList) => (
                  <TableBody
                    editable={isEditable}
                    editImput={switchToEdit}
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
