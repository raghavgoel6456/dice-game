


var randoms= Math.floor(Math.random() * 6 + 1);
var randomdiceimage = "dice"+ randoms + ".png";
var randomimagesource =  randomdiceimage;
var image1 = document.querySelectorAll(".img-1")[0];
image1.setAttribute("src" , randomimagesource);





var randoms2 = Math.floor(Math.random()*6 +1 );
randomimage2 = "dice"+ randoms2 + ".png";
randomimagesource2 =  randomimage2;
var image2 = document.querySelectorAll(".img-2")[0];
image2.setAttribute("src" , randomimagesource2 );



if(randoms>randoms2)  {
  document.querySelector("h3").innerHTML = " Player one wins..!!";
}
else if (randoms2>randoms) {
  document.querySelector("h3").innerHTML =  "Player two wins..!!"
}
else {
  document.querySelector("h3").innerHTML=" DRAW..!!";
}
