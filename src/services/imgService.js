
const imgs={
    signupImg:`https://res.cloudinary.com/dii16awkb/image/upload/v1684522130/signgupSvg_hawhuc.webp`,
    hero:`https://pbs.twimg.com/media/DrgpTAGXgAg9ZAg?format=jpg&name=large`,
    user:`https://top10a.ru/wp-content/uploads/2018/11/2-ispolzujte-nejrolingvisticheskoe-programmirovanie.jpg`

}

export  const imgService={
    getImg,
}

function getImg(type){
        return imgs[type]
}
