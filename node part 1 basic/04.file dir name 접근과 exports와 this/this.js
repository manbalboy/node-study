console.log('전역 this > :',this);


console.log('전역 this > :',this === module.exports);


function a() {
    console.log('function a this > :' , this);
    console.log('function a this > :' , this === global);
}

a();