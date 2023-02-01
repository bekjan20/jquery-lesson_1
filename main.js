



// let day = new Date(). getDate ()
// let month = new Date(). getMonth()
// month = month+1
// if(month < 10)  {
//     month = '0' + month
// }
// let year = new Date().getFullYear()
// console.log(day + ":" +month + ":" + year);



// let data = new Date().toLocaleDateString()
// console.log(data);



// let hours = new Date().getHours()
// console.log(hours ,  "hours");



// let min  = new Date().getMinutes()
// console.log(min);
// let  sec = new Date().getSeconds()
// console.log(sec);

// console.log(hours + ":"+ min +  ":" +sec);




// let time = new Date().toLocaleTimeString()
// console.log(time);


// let hours = new Date().getHours()
// let nan = document.querySelector('h1') 
// if(hours < 11) {
//     nan.innerHTML = "Доброе утро!"
//  document.querySelector(".moon").style.background = 'yelloow'
// } else if ( hours > 5 ) {
//     nan.innerHTML = "Добрый день!"
//     document.querySelector(".moon").style.background = 'red'
// } else if (hours < 23  ) {
//     nan.innerHTML = "Добрый вечер"
//     document.querySelector(".moon").style.background = 'black'
//     document.body.style.background = "black"
// }





// let month = new Date().getMonth()    
// month = month+1

// let img = document.querySelector('img')
// console.log(img);
// if (month == 1 || month == 2 || month == 3) {
// img.src == 'https://emosurff.com/i/00019J0r3n0a/1386792659_zimnie-peyzazhi-5.jpg'
// } else if ( month == 4 || month == 5 || month == 6) {
//     img.src == 'https://suiunchu.kg/wp-content/uploads/2020/03/images-8.jpeg'
// }  else if ( month == 7 || month == 8 || month == 9) {
//     img.src == 'https://aif-s3.aif.ru/images/011/707/29d7043dced25e5f45e701436bf1e984.jpg'
// } 




// hide()  жоготот                   display-none
// show()   корсотот                   display-block
//fadeIn()    замедленно показывает    display-block
//fadeOut()    медленно жоготот         display-none
//slideDown()  жок кылат                          display-block 
// slideUp()   бар кылат                         display-none
//slideToggle()                         display == block =>display=none  display == nonne => display = block


// $('.block').hide(5000)

// $('.block').show(6000)

// $('.block').fadeIn(2000)


// $('.block').fadeOut(7000)


// $('.block').slideDown(4000)


// $('.block').slideUp(3000)


// $('.block').slideToggle(3000)



// $ ('.block1').hide(1000)
// $ ('.block2').hide(2000)
// $ ('.block3').hide(3000)  
// $ ('.block4').hide(4000)
// $ ('.block5').hide(5000)


// $('.block1').show(6000)
// $('.block2').show(7000)
// $('.block3').show(8000)
// $('.block4').show(9000)
// $('.block5').show(10000)





// $ ('.block1').fadeOut(1000)
// $ ('.block2').fadeOut(2000)
// $ ('.block3').fadeOut(3000)  
// $ ('.block4').fadeOut(4000)
// $ ('.block5').fadeOut(5000)





//  $('.block1').fadeIn(6000)
// $('.block2').fadeIn(7000)
// $('.block3').fadeIn(8000)
// $('.block4').fadeIn(9000)
// $('.block5').fadeIn(10000)


$('#btn').click(() =>{
$ ('.block1').slideUp(1000)
$ ('.block2').slideUp(2000)
$ ('.block3').slideUp(3000)  
$ ('.block4').slideUp(4000)
$ ('.block5').slideUp(5000)




 $('.block1').slideDown(6000)
$('.block2').slideDown(7000)
$('.block3').slideDown(8000)
$('.block4').slideDown(9000)
$('.block5').slideDown(10000)



})

