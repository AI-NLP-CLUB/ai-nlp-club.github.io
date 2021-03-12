noOfImages = 12

const renderImages = ()=>{

    let rowTag = document.getElementById('images-row')
    let cardTemplate = ``
    for (let i = 1; i <= noOfImages; i++) {
        cardTemplate += `<div class="col-lg-4 col-md-4 col-xs-6 thumb">
            <a href="images/gallery/${i}.jpg" class="fancybox" rel="ligthbox">
                <img  src="images/gallery/${i}.jpg" class="zoom img-fluid "  alt="">
            
            </a>
        </div>`
    }

    rowTag.innerHTML += cardTemplate

}

renderImages()