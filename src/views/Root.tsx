import NavBar from "../Components/NavBars/NavBar";
import { Outlet } from "react-router-dom";
import { Grid, GridItem } from "@chakra-ui/react";
import Header from "../Components/Header/Header";
import AppColors from "../Common/Theme/Colors";

function Root() {
  return (
    <Grid
      templateAreas={`"header header"
                  "nav main"
                  "nav main"`}
      gridTemplateRows={"60px 1fr"}
      gridTemplateColumns={"300px 1fr"}
      fontWeight="600"
      height={"100vh"}
      overflowY={"hidden"}
    >
      <GridItem pl="2" bg={AppColors.primary} area={"header"}>
        <Header />
      </GridItem>
      <GridItem pl="2" bg={AppColors.primary} area={"nav"}>
        <NavBar />
      </GridItem>
      <GridItem pl="2"   area={"main"}>
        <Outlet  />
      </GridItem>
    </Grid>
  );
}

export default Root;
