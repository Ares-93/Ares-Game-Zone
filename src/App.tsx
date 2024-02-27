import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav nav"  "main"`, //we set how it will look in mobile
        lg: `"nav nav" "aside main"`, // how it will look in laptops or PCs
      }}
    >
      <GridItem area="nav" bg="crimson">
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="blueviolet">
          Aside
        </GridItem>
        <GridItem area="main" bg="yellowgreen">
          Main
        </GridItem>
      </Show>
    </Grid>
  );
}
export default App;
