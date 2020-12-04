import React from "react";
import { ThemeContext } from "./context/Theme";
import { Layout } from "./util/Layout";
//router
import { Route, Switch } from "wouter";
//Components
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
//Pages
import { Details, Fav, Home, NotFound, Login, Register } from "./pages";
//Context
import { Content } from "./util/Content";

function App() {
  const [theme, setTheme] = React.useState({ isDark: false });
  return (
    <ThemeContext.Provider value={theme}>
      <Layout>
        <Header setTheme={setTheme} />
        <Switch>
          <Content>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/home" component={Home} />
            <Route path="/details/:film" component={Details} />
            <Route path="/details" component={Details} />
            <Route path="/fav" component={Fav} />
            <Route component={NotFound} />
          </Content>
        </Switch>
        <Nav />
      </Layout>
    </ThemeContext.Provider>
  );
}

export default App;
