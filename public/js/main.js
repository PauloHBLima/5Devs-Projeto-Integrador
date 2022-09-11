window.addEventListener('load', function (){

    let deleteButtonForm = document.querySelector('form.deleteButton');

    deleteButtonForm.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log("deleteButtonForm'")
    })

})