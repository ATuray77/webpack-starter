class Modal {
    constructor() {
        this._modal = document.querySelector('#modal') //bringing in the modal
        this._modalBtn = document.querySelector('#modal-btn') //bringing in the modal btn
        this.addEventListeners();//calls it in the constructor cause it runs right away
    }

    addEventListeners() {
        this._modalBtn.addEventListener('click', this.open.bind(this))//bind(this) connects the open function to the Modal class
        window.addEventListener('click', this.outsideClick.bind(this));//clicking outside the modal should close it
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

export default Modal