
const firstSneaker = document.querySelector(".nail1");
const XfOrProductDT = document.querySelector(".cancled-icon");
const Productdetails = document.querySelector(".product-details");
 
const NextArrow = document.querySelector("#next-arrow");
const NailOne = document.querySelector(".thumbnail1");
const NailTwo = document.querySelector(".thumbnail2");
const NailThree = document.querySelector(".thumbnail3");
const NailFour = document.querySelector(".thumbnail4");
const sneakerseries = document.querySelectorAll(".sneakers-series");
// const noOfPieces = document.querySelectorAll(".btn");
const zero = document.querySelector(".zero-cart");
const NeG = document.querySelector("#negative");
const PoS = document.querySelector("#postitive");
const btns = document.querySelectorAll(".btn");
const notificationCont = document.querySelector(".notification");
const NOTIFICATION = document.querySelector("#notificaton-box");
const cartIcon = document.querySelector(".cart-at-the-menu");
const CATADDEDMAINCONT = document.querySelector(".cart-added-main-container");
const NONEMPTYCARTBOX = document.querySelector(".non-empty-cart-box");
const EMPTYCARTBOX = document.querySelector(".empty-cart-box");
const cartbox_body = document.querySelector(".cart-box-body");
const CKECKBOX = document.querySelector("#checkout");
const checkout_container = document.querySelector(".checkout-button-container");
/* VARIABLES FOR CLASS CALCULATION*/ 

const no_of_piecies = document.querySelector("#nuber_of_pieces")
const totprice = document.querySelector("#price");
const selectedSneaker = document.querySelector(".cart-added-products");

const sneakType =["./images/image-product-1-thumbnail.jpg",
                 "./images/image-product-2-thumbnail.jpg",
                 "./images/image-product-3-thumbnail.jpg",
                 "./images/image-product-4-thumbnail.jpg"];

/*VARIABLES FOR CLASS CALCULATION*/ 


/*HARMBURGER AREA*/

const hambuger = document.querySelector(".three-menu-bar");
const close = document.querySelector(".xx-bar");
const MENU = document.querySelector(".menu");
const logoWrapper = document.querySelector(".logo-wrapper");

/*HARMBURGER AREA  */

const menuButtons = document.querySelectorAll(".menu-button");
const cartitsef = document.querySelector(".cart-button-itself");
const deletecart = document.querySelector("#a");

const ArRnExTiNg = document.querySelectorAll(".mbletggler");
const thumbtwo = document.querySelectorAll(".pro")

const fstproduct = document.querySelector(".first_product");
const images = ["./images/image-product-1.jpg",
    "./images/image-product-2.jpg",
    "./images/image-product-3.jpg",
    "./images/image-product-4.jpg"
  ];

const firstimage = 0;
const lstimg = images.length-1;
let psntimg = 0;
let nextingcount = 0;
let denext = 0;
let count = 0;
let determimer = 0;
let COUNT = 0;

hambuger.addEventListener("click", ()=>{
  MENU.classList.toggle("navdisplay");
  logoWrapper.classList.toggle("logexit");
  close.classList.toggle("block");
  
});

close.addEventListener("click", function(){
  MENU.classList.remove("navdisplay");
  logoWrapper.classList.remove("logexit");
  close.classList.remove("block");
});


sneakerseries.forEach(function(pics){
  pics.addEventListener("click", function (e){
    const main = e.currentTarget.classList

    if (main.contains("A")){
      psntimg=0;
    }
    else if (main.contains("B")){
      psntimg = 1;
    }
    else if (main.contains("C")){
      psntimg = 2;
    }
    else if(main.contains("D")){
      psntimg = 3;
    }

    fstproduct.src = images[psntimg];
    
    fstproduct.addEventListener("click", function (){
      Productdetails.classList.toggle("switch");
      firstSneaker.src= images[psntimg];
    });

    //nextingcount = psntimg;

    thumbtwo.forEach(function(swapamplified){
      swapamplified.addEventListener("click", function(e){
        const paramchk = e.currentTarget.classList
        if (paramchk.contains("O")){
          psntimg = 0;
        }

        else if(paramchk.contains("P")){
          psntimg = 1;
        }

        else if (paramchk.contains("Q")){
          psntimg = 2;
        }

        else if(paramchk.contains("R")){
          psntimg = 3; 
        }
        firstSneaker.src= images[psntimg];
         
  
      });

    });


    //denext = nextingcount;

   


  });
});

ArRnExTiNg.forEach(function(nexting){
  nexting.addEventListener("click",function (e){
    const chkbtn = e.currentTarget.classList
    if (chkbtn.contains("F") && psntimg< 3){
      psntimg++;
    }

    else if(chkbtn.contains("F")  && psntimg == 3){
      psntimg = 3;
    }
    else if(chkbtn.contains("B")  && psntimg > 0){
      psntimg--;
    }

    else if(chkbtn.contains("B")  && psntimg == 0){
      psntimg=0;
    }
    firstSneaker.src= images[psntimg];
  });

});






btns.forEach( function(btn){
  btn.addEventListener("click", function(e){
    const hold = e.currentTarget.classList
    if  (hold.contains("subtract")){
      COUNT--;
      if (COUNT<=0){
        COUNT=0;
       zero.textContent=COUNT;
      //  notificationCont.style.display = "none";
       NOTIFICATION.textContent=COUNT;
      }
      else{
       zero.textContent=COUNT;
      //  notificationCont.style.display = "flex";
       NOTIFICATION.textContent=COUNT;
      }
    }
    else if (hold.contains("addition")){
      COUNT++;
  
      NOTIFICATION.textContent=COUNT;
      zero.textContent=COUNT;
      // notificationCont.style.display = "flex";
    }
    else{
      COUNT= 0;
      NOTIFICATION.textContent=COUNT;
      zero.textContent=COUNT;
     

    }

    selectedSneaker.src = sneakType[psntimg];

    let totalnumber = COUNT;
    var pRICE = 125;
    let totamount = (pRICE)*(totalnumber);  
    totprice.textContent = '$'+ totamount;
  });
}); 
cartitsef.addEventListener("click", function (){
 
  notificationCont.style.display = "flex";
});


cartIcon.addEventListener("click", function(){
  if (COUNT<=0){
    NONEMPTYCARTBOX.style.display = "none";
    EMPTYCARTBOX.style.display = "flex";
  }
  else{
    NONEMPTYCARTBOX.style.display = "flex";
    EMPTYCARTBOX.style.display = "none";
  }
  CATADDEDMAINCONT.style.display = "block";

});


XfOrProductDT.addEventListener("click", function (){
  Productdetails.style.display =  "none";
});


deletecart.addEventListener("click", function(){
  EMPTYCARTBOX.style.display = "flex";
  COUNT=0;
  cartbox_body.style.display = "none";
  checkout_container.style.display = "none";
  NOTIFICATION.textContent=COUNT;
  zero.textContent=COUNT;
});

CKECKBOX.addEventListener("click", function(){
  CATADDEDMAINCONT.style.display = "none";
})

