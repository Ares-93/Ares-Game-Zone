import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav nav"  "main"`, //we set how it will look in mobile
        lg: `"nav nav" "aside main"`, // how it will look in laptops or PCs
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
        <GridItem area="main">
          <GameGrid />
        </GridItem>
      </Show>
    </Grid>
  );
}
export default App;
