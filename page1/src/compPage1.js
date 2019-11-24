import { html, render } from "lit-html";

import "@ui5/webcomponents/dist/Table.js";
import "@ui5/webcomponents/dist/TableColumn.js";
import "@ui5/webcomponents/dist/TableRow.js";
import "@ui5/webcomponents/dist/TableCell.js";
import { tableRow } from "./tableRow";
window.customElements.define("custom-table-row", tableRow);

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
      <div class="header">
        <span>Comentarios</span>
      </div>

      <ui5-table
        class="demo-table"
        id="table"
        no-data-text="No Data"
        show-no-data
      >
        <!-- Columns -->
        <ui5-table-column slot="columns" first>
          <span style="line-height: 1.4rem">Id</span>
        </ui5-table-column>

        <ui5-table-column slot="columns" popin-text="Supplier">
          <span style="line-height: 1.4rem">Name</span>
        </ui5-table-column>

        <ui5-table-column slot="columns" popin-text="Dimensions" demand-popin>
          <span style="line-height: 1.4rem">e-mail</span>
        </ui5-table-column>

        <ui5-table-column slot="columns" popin-text="Weight" demand-popin last>
          <span style="line-height: 1.4rem">body</span>
        </ui5-table-column>
        ${this.get_rows()}
      </ui5-table>
    `;

    render(template, this);
  }

  get_rows() {
    return this.state.map(
      el => html`
        <ui5-table-row>
          <ui5-table-cell>${el.id}</ui5-table-cell>
          <ui5-table-cell>${el.name}</ui5-table-cell>
          <ui5-table-cell>${el.email}</ui5-table-cell>
          <ui5-table-cell>${el.body}</ui5-table-cell>
        </ui5-table-row>
      `
    );
  }
}
