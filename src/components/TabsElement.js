import * as React from "react";
import * as ReactDOM from "react-dom";
import { enableRipple } from "@syncfusion/ej2-base";
import { TabComponent, TabItemDirective, TabItemsDirective, ContextMenuComponent } from "@syncfusion/ej2-react-navigations";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { DatePickerComponent, CalendarComponent } from "@syncfusion/ej2-react-calendars";
enableRipple(true);
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.menuItems = [
            {
                text: "Cut"
            },
            {
                text: "Copy"
            },
            {
                text: "Paste"
            }
        ];
        this.btnClick = this.btnClick.bind(this);
    }
    btnClick() {
        this.cMenu.open(80, 20);
    }
    render() {
        let headertext;
        function contentTemplate() {
            return (<div>
      <ContextMenuComponent id="contextmenu" ref={scope => (this.cMenu = scope)} items={this.menuItems}/>
      <ButtonComponent onClick={this.btnClick}>Click me</ButtonComponent>
    </div>);
        }
        function contentTemplate1() {
            return <DatePickerComponent />;
        }
        function contentTemplate2() {
            return <CalendarComponent />;
        }
        headertext = [{ text: "Tab1" }, { text: "Tab2" }, { text: "Tab3" }];
        return (<div id="container">
    <TabComponent heightAdjustMode="Auto" id="tabelement">
      <TabItemsDirective>
        <TabItemDirective header={headertext[0]} content={contentTemplate.bind(this)}/>
        <TabItemDirective header={headertext[1]} content={contentTemplate1.bind(this)}/>
        <TabItemDirective header={headertext[2]} content={contentTemplate2.bind(this)}/>
      </TabItemsDirective>
    </TabComponent>
  </div>);
    }
}
ReactDOM.render(<App />, document.getElementById("element"));