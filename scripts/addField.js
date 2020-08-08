// function to clone job location on user click
function cloneField() {

    const addFieldContainer = document.querySelector('.location-item').cloneNode(true)
    const fields = addFieldContainer.querySelectorAll('input')
    
    fields.forEach(function(field) { 
        field.value = ''
    })
    
    document.querySelector('#location-items').appendChild(addFieldContainer)
}

document.querySelector('#add-location')
.addEventListener('click', cloneField)

