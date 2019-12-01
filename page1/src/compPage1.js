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
    <ui5-list id="myList"   mode="SingleSelect" >
      <!-- cabecera de lista -->
      <ui5-li slot="header"   type="Inactive" id="cabec1">
        <ui5-li-custom class="cabecera" type="Inactive">
          <div class="col1 dest_tab">Cuanto</div> 
          <div class="col2 dest_tab">Tip.Alm.</div>
          <div class="col3 dest_mob">Ubicac.</div>
          <div class="col4 dest_mob">Nº Material</div>
          <div class="col5 dest_tab">Descripción</div>
          <div class="col6 dest_mob">Cant.</div>
          <div class="col7 dest_mob">Unidad</div>
        </ui5-li-custom>
      </ui5-li>
        <!-- posiciones -->
      ${this.get_rows()}
    </ui5-list>
    `;

    render(template, this);

    var oList = document.getElementById("myList");
    oList.addEventListener("selectionChange", function (oEvent) {
      // console.log("Evento");
      // console.log(oEvent);
      // deselecciona cabecera
      document.getElementById("cabec1").selected = false;
      document.getElementById("cabec1").getElementsByTagName("ui5-li-custom")[0].selected = false;
      // deselecciona elemento anterior
      if (oEvent.detail.previouslySelectedItems[0]) {
        oEvent.detail.previouslySelectedItems[0].selected = false
        if (oEvent.detail.previouslySelectedItems[0].getElementsByTagName("ui5-li-custom")[0]) {
          oEvent.detail.previouslySelectedItems[0].getElementsByTagName("ui5-li-custom")[0].selected = false
        }
      };
    });
  }

  get_rows() {
    return this.state.map(
      el => html`
       <ui5-li separators="Inner">
        <ui5-li-custom id="filas" >
          <div class="col1 dest_tab">${el.LQNUM}</div> 
          <div class="col2 dest_tab">${el.LGTYP}</div>
          <div class="col3 dest_mob">${el.LGPLA}</div>
          <div class="col4 dest_mob">${el.MATNR}</div>
          <div class="col5 dest_tab">${el.MAKTX}</div>
          <div class="col6 dest_mob">${el.VERME}</div>
          <div class="col7 dest_mob">${el.MEINS}</div> 
        </ui5-li-custom>
      </ui5-li> 
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
