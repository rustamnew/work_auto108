
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

//
