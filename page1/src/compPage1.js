import { html, render } from "lit-html";

import "@ui5/webcomponents/dist/Table.js";
import "@ui5/webcomponents/dist/TableColumn.js";
import "@ui5/webcomponents/dist/TableRow.js";
import "@ui5/webcomponents/dist/TableCell.js";

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

      <ui5-table
        class="demo-table"
        id="table"
        no-data-text="No Data"
        show-no-data
      >
        <!-- Columns -->
        <ui5-table-column slot="columns" first>
          <span style="line-height: 1.4rem">Quanto</span>
        </ui5-table-column>

        <ui5-table-column slot="columns" popin-text="Tipo de almacén" demand-popin>
          <span style="line-height: 1.4rem">Tipo Alm.</span>
        </ui5-table-column>

        <ui5-table-column slot="columns" popin-text="Ubicación" 
          <span style="line-height: 1.4rem">Ubic.</span>
        </ui5-table-column>

        <ui5-table-column slot="columns" popin-text="Nº material" demand-popin>
          <span style="line-height: 1.4rem">Mat.</span>
        </ui5-table-column>

        <ui5-table-column slot="columns" popin-text="Descripción" demand-popin>
        <span style="line-height: 1.4rem">Descripción</span>
        </ui5-table-column>

        <ui5-table-column slot="columns" popin-text="Cantidad">
        <span style="line-height: 1.4rem">Cantidad</span>
        </ui5-table-column>

        <ui5-table-column slot="columns" popin-text="Unidad" last>
        <span style="line-height: 1.4rem">Unidad</span>
        </ui5-table-column>

        ${this.get_rows()}
      </ui5-table>
    `;

    render(template, this);
  }

  // get_rows() {
  //   return this.state.map(
  //     el => html`
  //       <ui5-table-row>
  //         <ui5-table-cell>${el.id}</ui5-table-cell>
  //         <ui5-table-cell>${el.name}</ui5-table-cell>
  //         <ui5-table-cell>${el.email}</ui5-table-cell>
  //         <ui5-table-cell>${el.body}</ui5-table-cell>
  //       </ui5-table-row>
  //     `
  //   );
  // }

  get_rows() {
    return this.state.map(
      el => html`
        <ui5-table-row>
          <ui5-table-cell>${el.LQNUM}</ui5-table-cell>
          <ui5-table-cell>${el.LGTYP}</ui5-table-cell>
          <ui5-table-cell>${el.LGPLA}</ui5-table-cell>
          <ui5-table-cell>${el.MATNR}</ui5-table-cell>
          <ui5-table-cell>${el.MAKTX}</ui5-table-cell>
          <ui5-table-cell>${el.VERME}</ui5-table-cell>
          <ui5-table-cell>${el.MEINS}</ui5-table-cell>
        </ui5-table-row>
      `
    );
  }




}
