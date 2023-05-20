
const imgs={
    signupImg:`https://res.cloudinary.com/dii16awkb/image/upload/v1684522130/signgupSvg_hawhuc.webp`
}

export  const imgService={
    getImg,
}

function getImg(type){
        return imgs[type]
}
