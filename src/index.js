
import React from "react";
import {render} from "react-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { reset, themes, List, ListItem, Divider } from "react95";

const ResetStyles = createGlobalStyle`
  ${reset}
`;

render(
    <div className="App">
        <ResetStyles />
        <ThemeProvider theme={themes.default}>
            <List>
                <ListItem>🎤 Sing</ListItem>
                <ListItem>💃🏻 Dance</ListItem>
                <Divider />
                <ListItem disabled>😴 Sleep</ListItem>
            </List>
        </ThemeProvider>
    </div>, 
    document.getElementById("root")
);
