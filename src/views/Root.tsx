import NavBar from "../Components/AppBars/NavBar";
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
      gridTemplateRows={"100px 1fr 2fr"}
      gridTemplateColumns={"350px 1fr"}
      color="blackAlpha.700"
      fontWeight="bold"
      height={"100vh"}
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
