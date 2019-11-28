import { html, render } from "lit-html";

// import "@ui5/webcomponents/dist/Table.js";
// import "@ui5/webcomponents/dist/TableColumn.js";
// import "@ui5/webcomponents/dist/TableRow.js";
// import "@ui5/webcomponents/dist/TableCell.js";

import "@ui5/webcomponents/dist/List.js";
import "@ui5/webcomponents/dist/StandardListItem.js";
import "@ui5/webcomponents/dist/CustomListItem.js";
import "@ui5/webcomponents/dist/GroupHeaderListItem.js";

export class compPage1 extends HTMLElement {
  set datos_lista(datos) {
    this.state = datos;
    this.connectedCallback();
  }

  constructor() {
    super();
    this.state = [];
  }

  connectedCallback() {
    const template = html`
    <ui5-list id="myList" class="full-width">
      <ui5-li icon="sap-icon://nutrition-activity" description="Tropical plant with an edible fruit" info="In-stock" info-state="Success">Pineapple</ui5-li>
      <ui5-li icon="sap-icon://nutrition-activity" description="Occurs between red and yellow" info="Expires" info-state="Warning">Orange</ui5-li>
      <ui5-li icon="sap-icon://nutrition-activity" description="The yellow lengthy fruit" info="Re-stock" info-state="Error">Banana</ui5-li>
      <ui5-li icon="sap-icon://nutrition-activity" description="The tropical stone fruit" info="Re-stock" info-state="Error">Mango</ui5-li>
    </ui5-list>
      
    `;

    render(template, this);
  }

  get_rows() {
    return this.state.map(
      el => html`

      `
    );
  }


  // get_rows() {
  //   return this.state.map(
  //     el => html`
  //       <ui5-table-row>
  //         <ui5-table-cell>${el.LQNUM}</ui5-table-cell>
  //         <ui5-table-cell>${el.LGTYP}</ui5-table-cell>
  //         <ui5-table-cell>${el.LGPLA}</ui5-table-cell>
  //         <ui5-table-cell>${el.MATNR}</ui5-table-cell>
  //         <ui5-table-cell>${el.MAKTX}</ui5-table-cell>
  //         <ui5-table-cell>${el.VERME}</ui5-table-cell>
  //         <ui5-table-cell>${el.MEINS}</ui5-table-cell>
  //       </ui5-table-row>
  //     `
  //   );
  // }




}
