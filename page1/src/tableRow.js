import "@ui5/webcomponents/dist/TableRow.js"; 
import "@ui5/webcomponents/dist/TableCell.js"; 
import { html, render } from 'lit-html';


export class tableRow extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){

        const template = html`

    <ui5-table-row>
        <ui5-table-cell>1</ui5-table-cell>
        <ui5-table-cell>2</ui5-table-cell>
        <ui5-table-cell>3</ui5-table-cell>
        <ui5-table-cell>4</ui5-table-cell>         
    </ui5-table-row>

        `;

        render(template, this);
    }
}