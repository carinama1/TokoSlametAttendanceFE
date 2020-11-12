import routes from "./router";
import { useRoutes } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";

function App() {
  const routing = useRoutes(routes);
  return <ThemeProvider theme={theme}>{routing}</ThemeProvider>;
}

export default App;
