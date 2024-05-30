import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Button,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import styled from "styled-components";
import AppColors from "../../Common/Theme/Colors";

const StylesAppContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-size: 31px;
  overflow-y: scroll;
`;

const StyledHead = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  width: 100%;
  font-size: 31px;
  color: ${AppColors.primary};
`;

const StyledTable = styled.div`
  width: 100%;
  padding: 25px;
  background-color: ${AppColors.white};
  overflow-y: scroll;
  height: 80vh;
  border: 1px solid ${AppColors.gray};
  border-radius: 15px;
`;

type Bus = {
  id: number;
  number: string;
  source: string;
  destination: string;
  itineraire: string;
  statut: boolean;
};

const BusPage = () => {
  const tableRow: Bus[] = [];
  for (let index = 0; index < 50; index++) {
    tableRow.push({
      id: index,
      number: "85",
      source: "Gare Campus",
      destination: " Youpgon kouté",
      itineraire: "Youpgon kouté - Gare Campus",
      statut: index % 2 == 0 ? true : false,
    });
  }

  return (
    <>
      <StylesAppContent>
        <StyledHead>
          <h1>Bus</h1>
          <Button
            leftIcon={<AddIcon fontSize={20} color={AppColors.white} />}
            bg={AppColors.primary}
            color={AppColors.white}
            fontSize={20}
            variant="solid"
            onClick={() => alert("Ajouter")}
          >
            Ajouter
          </Button>
        </StyledHead>
        <StyledTable>
          <TableContainer>
            <Table variant="striped" size="sm">
              <Thead>
                <Tr>
                  <Th
                    style={{
                      fontWeight: "bold",
                      fontSize: "20px",
                      paddingBottom: "15px",
                    }}
                  >
                    Id
                  </Th>
                  <Th
                    style={{
                      fontWeight: "bold",
                      fontSize: "20px",
                      paddingBottom: "15px",
                    }}
                  >
                    Numéro
                  </Th>
                  <Td
                    style={{
                      fontWeight: "bold",
                      fontSize: "20px",
                      paddingBottom: "15px",
                    }}
                  >
                    Source
                  </Td>
                  <Th
                    style={{
                      fontWeight: "bold",
                      fontSize: "20px",
                      paddingBottom: "15px",
                    }}
                  >
                    Destination
                  </Th>
                  <Th
                    style={{
                      fontWeight: "bold",
                      fontSize: "20px",
                      paddingBottom: "15px",
                    }}
                  >
                    Itinéraire
                  </Th>
                  <Th
                    style={{
                      fontWeight: "bold",
                      fontSize: "20px",
                      paddingBottom: "15px",
                    }}
                  >
                    Statut
                  </Th>
                  <Th
                    style={{
                      fontWeight: "bold",
                      fontSize: "20px",
                      paddingBottom: "15px",
                    }}
                  >
                    Actions
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {tableRow.map((bus) => (
                  <Tr>
                    <Td
                      style={{
                        fontSize: "18px",
                        fontWeight: "500",
                        padding: "15px 10px",
                      }}
                    >
                      {bus.id}
                    </Td>
                    <Td style={{ fontSize: "18px", fontWeight: "500" }}>
                      {bus.number}
                    </Td>
                    <Td style={{ fontSize: "18px", fontWeight: "500" }}>
                      {bus.source}
                    </Td>
                    <Td style={{ fontSize: "18px", fontWeight: "500" }}>
                      {bus.destination}
                    </Td>
                    <Td style={{ fontSize: "18px", fontWeight: "500" }}>
                      {bus.itineraire}
                    </Td>
                    <Td style={{ fontSize: "18px", fontWeight: "500" }}>
                      {bus.statut ? "En Service" : "Pas en Service"}
                    </Td>
                    <Td>
                      <EditIcon style={{ fontSize:'20px', color:AppColors.editIconColor, marginRight:"25px"}} onClick={()=>alert("Modification")}/>
                      
                      <DeleteIcon style={{ fontSize:'20px', color:AppColors.erro}} onClick={()=>alert("Suppression")}  />
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </StyledTable>
      </StylesAppContent>
    </>
  );
};

export default BusPage;
