class Modal {
    constructor() {
        this._modal = document.querySelector('#modal') //bringing in the modal
        this._modalBtn = document.querySelector('#modal-btn') //bringing in the modal btn
    }

    open() { //when button is clicked we want the modal to display
        this._modal.style.display = 'block';
     }
     
    close() {
        this._modal.style.display = 'none';
     }
     
    outsideClick(e) {
         if (e.target === this._modal) { //clicking the dark area of the modal will close it
            this.close();
         }
     }
}