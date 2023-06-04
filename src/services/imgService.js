
const imgs={
    signupImg:`https://res.cloudinary.com/dii16awkb/image/upload/v1684522130/signgupSvg_hawhuc.webp`,
    hero:`https://pbs.twimg.com/media/DrgpTAGXgAg9ZAg?format=jpg&name=large`,
    user:`https://res.cloudinary.com/dii16awkb/image/upload/v1684053261/unprofile_ji7zus_z2immz.png`

}

export  const imgService={
    getImg,
}

function getImg(type){
        return imgs[type]
}
