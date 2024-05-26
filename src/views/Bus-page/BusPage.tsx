import { AddIcon } from "@chakra-ui/icons";
import { Button, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import styled from "styled-components";
import AppColors from "../../Common/Theme/Colors";

const StylesAppContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-size: 31px;
  
`;

const StyledHead=styled.div`
display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  width: 100%;
  font-size: 31px;
`;

const StyledTable=styled.div`
width: 100%;
`;

const BusPage = () => {
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
        >
          Ajouter
        </Button>
        </StyledHead>
        <StyledTable>
        <TableContainer>
  <Table variant='simple' >
    <TableCaption>Imperial to metric conversion factors</TableCaption>
    <Thead>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td isNumeric>25.4</Td>
      </Tr>
      <Tr>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
        <Td isNumeric>30.48</Td>
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>0.91444</Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
        </StyledTable>
      </StylesAppContent>
    </>
  );
};

export default BusPage;
