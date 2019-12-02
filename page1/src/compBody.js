import { html, render } from "lit-html";


export class compBody extends HTMLElement{
    
    set render_vista(n){
        this.vista = n;
        
    }
    
    constructor(){
        super();
        // valores iniciales
        document.store = {
            compBody : {
                "v" : 1
            }
        }
    }
    connectedCallback(){
        //solo inputs
        const template1 = html`
            <div class="fd-page__content fd-has-background-color-neutral-2">

                <div style="padding: 1rem">
                    <ui5-label required wrap="true" style="vertical-align: text-top">Material</ui5-label>
                    <ui5-input id="input1" value="81075" required="true" style="width : 20em"></ui5-input>
                </div>
            </div>
        `;

        // tabla
            const template2 = html`
             <div class="fd-page__content fd-has-background-color-neutral-2">
                <comp-page1 id="lista1"></comp-page1>
             </div>
            `;

       if (document.store.compBody.v == 1 ) {
        render(template1, this);
       } 
       else if (document.store.compBody.v == 2){
        render(template2, this);
       }
       
       ;
        
    }

}