noOfImages = 12
image_category = ['ai_lang_pro', 'workshop', 'meteor', 'ai_catechism', 'innopreneurs', 'prize_distribution']
const renderImages = ()=>{

    let imageRowTag = document.getElementById('images-row')

    let imageTemplate = ``
    for (let i = 1; i <= noOfImages; i++) {
        let category = image_category[(i-1)%image_category.length]
        imageTemplate += `<div class="col-lg-4 col-md-4 col-xs-6 thumb filter ${category}">
            <a href="images/gallery/${i}.jpg" class="fancybox" rel="ligthbox">
                <img  src="images/gallery/${i}.jpg" class="zoom img-fluid "  alt="">
            
            </a>
        </div>`

    }

    imageRowTag.innerHTML += imageTemplate


}

renderImages()