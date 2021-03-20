noOfImages = 12

const renderImages = ()=>{

    let introTag = document.getElementById('images-row-intro')
    let workshopTag = document.getElementById('images-row-workshop')
    let meteorTag = document.getElementById('images-row-meteor')
    let aicatTag = document.getElementById('images-row-aicat')
    let innoTag = document.getElementById('images-row-inno')
    let prizeTag = document.getElementById('images-row-prize')

    let introTemplate = ``
    let workshopTemplate = ``
    let meteorTemplate = ``
    let aicatTemplate = ``
    let innoTemplate = ``
    let prizeTemplate = ``
    for (let i = 1; i <= noOfImages; i++) {
        introTemplate += `<div class="col-lg-4 col-md-4 col-xs-6 thumb">
            <a href="images/gallery/${i}.jpg" class="fancybox" rel="ligthbox">
                <img  src="images/gallery/${i}.jpg" class="zoom img-fluid "  alt="">
            
            </a>
        </div>`
        workshopTemplate += `<div class="col-lg-4 col-md-4 col-xs-6 thumb">
            <a href="images/gallery/${i}.jpg" class="fancybox" rel="ligthbox">
                <img  src="images/gallery/${i}.jpg" class="zoom img-fluid "  alt="">
            
            </a>
        </div>`
        meteorTemplate += `<div class="col-lg-4 col-md-4 col-xs-6 thumb">
            <a href="images/gallery/${i}.jpg" class="fancybox" rel="ligthbox">
                <img  src="images/gallery/${i}.jpg" class="zoom img-fluid "  alt="">
            
            </a>
        </div>`
        aicatTemplate += `<div class="col-lg-4 col-md-4 col-xs-6 thumb">
            <a href="images/gallery/${i}.jpg" class="fancybox" rel="ligthbox">
                <img  src="images/gallery/${i}.jpg" class="zoom img-fluid "  alt="">
            
            </a>
        </div>`
        innoTemplate += `<div class="col-lg-4 col-md-4 col-xs-6 thumb">
            <a href="images/gallery/${i}.jpg" class="fancybox" rel="ligthbox">
                <img  src="images/gallery/${i}.jpg" class="zoom img-fluid "  alt="">
            
            </a>
        </div>`
        prizeTemplate += `<div class="col-lg-4 col-md-4 col-xs-6 thumb">
            <a href="images/gallery/${i}.jpg" class="fancybox" rel="ligthbox">
                <img  src="images/gallery/${i}.jpg" class="zoom img-fluid "  alt="">
            
            </a>
        </div>`

    }

    introTag.innerHTML += introTemplate
    workshopTag.innerHTML += workshopTemplate
    meteorTag.innerHTML += meteorTemplate
    aicatTag.innerHTML += aicatTemplate
    innoTag.innerHTML += innoTemplate
    prizeTag.innerHTML += prizeTemplate


}

renderImages()