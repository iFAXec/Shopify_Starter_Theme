class DeleteBtn extends HTMLElement { 
    constructor() { 
        super();
    }

    connectedCallback() { 
        console.log("added to DOM");
    }
}


customElements.define("delete-btn", DeleteBtn);