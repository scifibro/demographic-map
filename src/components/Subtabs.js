import React from "react";
import { Tab, Tabs } from "react-tabify";
import  SVGMap  from '../SVGMap';
import Kazakhstan from "../SVG-files/Kazakhstan";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const theme = {
  tabs: {
    color: "#FF000",
    active: {
      color: "green"
    }
  },
  menu: {
    color: "hsl(248, 39%, 39%)",
    borderRight: "darkmagenta",
    active: {
      backgroundColor: "rgb(165,42,42)"
    },
    hover: {
      color: "hsl(240, 100%, 50%)"
    }
  }
};

const SubTabs = () => (
  <div style={styles}>
    <Tabs  theme={theme}>
      <Tab label="Плотность населения  и этнический состав населения">
        <Tabs theme={theme}>
          <Tab label="Subtab 1.1" >Tab 1 Content 1</Tab>
          <Tab label="Subtab 1.2"><div><SVGMap
					    className = 'svg-map-kaz'
						map={Kazakhstan}
						 /></div></Tab>
          <Tab label="Subtab 1.3">Tab 1 Content 3</Tab>
        </Tabs>
      </Tab>
      <Tab label="Процессы урбанизация населения">
        <Tabs theme={theme}>
          <Tab label="Subtab 2.1">Tab 2 Content 1</Tab>
          <Tab label="Subtab 2.2">Tab 2 Content 2</Tab>
          <Tab label="Subtab 2.3">Tab 2 Content 3</Tab>
        </Tabs>
      </Tab>
      <Tab label="Поло-возрастная структура населения">
        <Tabs theme={theme}>
          <Tab label="Subtab 3.1">Tab 3 Content 1</Tab>
          <Tab label="Subtab 3.2">Tab 3 Content 2</Tab>
          <Tab label="Subtab 3.3">Tab 3 Content 3</Tab>
        </Tabs>
      </Tab>
      <Tab label="Воспроизводство населения">
        <Tabs theme={theme}>
          <Tab label="Subtab 3.1">Tab 3 Content 1</Tab>
          <Tab label="Subtab 3.2">Tab 3 Content 2</Tab>
          <Tab label="Subtab 3.3">Tab 3 Content 3</Tab>
        </Tabs>
      </Tab>
      <Tab label="Миграционные процессы населения">
        <Tabs theme={theme}>
          <Tab label="Subtab 3.1">Tab 3 Content 1</Tab>
          <Tab label="Subtab 3.2">Tab 3 Content 2</Tab>
          <Tab label="Subtab 3.3">Tab 3 Content 3</Tab>
        </Tabs>
      </Tab>
    </Tabs>
  </div>
);



export default SubTabs

