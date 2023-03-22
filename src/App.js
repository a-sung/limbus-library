import Home from "pages/Home/Home";
import {ThemeProvider} from "styled-components";
import GlobalStyles from "styles/GlobalStyles";
import {theme} from "styles/theme";
import {Routes, Route} from "react-router";
import RouteChangeTracker from "RouteChangeTracker";

function App() {
  RouteChangeTracker();
  return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
          <Routes>
            <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
          </Routes>
      </ThemeProvider>
  );
}

export default App;
