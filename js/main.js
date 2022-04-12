
console.log(window.innerWidth)

if (window.innerWidth <= 1100) {
    $('.services__portfolio').appendTo( $('.services__main') );
}

/*
*/
$(document).ready(function(){
    $('.portfolio-detail__gallery-list').owlCarousel({
        margin: 10,
        responsive: {
            0: {
                items: 2
            },
            810: {
                items: 3
            },
            1061: {
                items: 4
            }

        }
    })
});


let productList = document.querySelector('.product-list')
let filterLines = document.querySelector('.filter-lines')
let filterGrid = document.querySelector('.filter-grid')

filterLines.addEventListener('click', (e)=> {
    e.preventDefault()
    productList.classList.remove('grid')
    productList.classList.add('lines')
})
filterGrid.addEventListener('click', (e)=> {
    e.preventDefault()
    productList.classList.remove('lines')
    productList.classList.add('grid')
})

console.log(filterLines)
console.log(filterGrid)

//
