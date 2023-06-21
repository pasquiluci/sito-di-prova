const characters = document.querySelectorAll(".character");

characters.forEach(function(element){
    element.addEventListener("click", function() {
        console.log(element.dataset.character)
    })
})




