import Home from "pages/Home";
import {ThemeProvider} from "styled-components";
import GlobalStyles from "styles/GlobalStyles";
import {theme} from "styles/theme";

function App() {
  return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
          <div>
            <Home />
          </div>
      </ThemeProvider>
  );
}

export default App;
