let kg = document.getElementById("kg");
let cm = document.getElementById("cm");

let tot = document.getElementById("tot");
let ha3 = document.querySelector(".ha3");

let yourweight = document.getElementById("your-weight");
let situation = document.getElementById("situation");
let blockindex = document.getElementById("block-index");
let indexrate = document.getElementById("index-rate");

let hc1 = document.querySelector(".hc1");

let rer = document.getElementById("rer");

// let img1 = document.getElementById("img1");
// let img2 = document.getElementById("img2");
// let img3 = document.getElementById("img3");
// let img4 = document.getElementById("img4");
// let img5 = document.getElementById("img5");

let span =document.querySelector('.span')

let imgss =document.getElementById('imgss')


// remove
function clen() {
  kg.value = "";
  cm.value = "";
}

function re() {
  tot.innerHTML = "";
  //اضافة المحتواء
  yourweight.innerHTML = "";
  situation.innerHTML = "";
  blockindex.innerHTML = "";
  // img1.style.display = "none";
  // img2.style.display = "none";
  // img3.style.display = "none";
  // img4.style.display = "none";
  // img5.style.display = "none";
  qq.style.display = "block";
  rer.style.display = "none";  
  imgss.style.display = "none";
  span.style.display = "block";

}
function removes() {
  tot.innerHTML = "";
  //اضافة المحتواء
  yourweight.innerHTML = "";
  situation.innerHTML = "";
  blockindex.innerHTML = "";
  // img1.style.display = "none";
  // img2.style.display = "none";
  // img3.style.display = "none";
  // img4.style.display = "none";
  // img5.style.display = "none";
  qq.style.display = "block";
  rer.style.display = "none"; 
  imgss.style.display = "none";
  span.style.display = "none";



}


let abdo = localStorage.getItem("mohamed")

if(abdo !== null){
  console.log(abdo)
  console.log(typeof(abdo))
  
}


//onclick
function uu() {
  if ((kg.value, cm.value != "")) {
    let m = +cm.value / 100;
    let abdo = +kg.value / (m * m);
    const roundedNumber = Math.round(abdo * 100) / 100;
    tot.innerHTML = roundedNumber;
    var intvalue = roundedNumber;
    localStorage.setItem('mohamed',intvalue)

    //The value is from 18 to 25, the condition is normal
    if (intvalue <= 24.9 && intvalue >= 18.5) {
      ha3.style.display = "flex";
      hc1.style.display = "block";
      // img1.style.display = "block";
      imgss.style.display = "block";
  
      //اضافة المحتواء
      yourweight.innerHTML = `( ${kg.value}  ): وزنك الحالي`;
      situation.innerHTML = `( ${intvalue}  ): مواشر كتلة الجسم الحالي`;
      blockindex.innerHTML = `الوضع الصحي : ( طبيعي ) `;
    }
    //The value is from 25 to 30, the case is overweight
    if (intvalue >= 25 && intvalue <= 29.9) {
      ha3.style.display = "flex";
      hc1.style.display = "block";
      // img2.style.display = "block";
      imgss.style.display = "block";   
      // اضافة المحتواء
      yourweight.innerHTML = `( ${kg.value}  ): وزنك الحالي`;
      situation.innerHTML = `( ${intvalue}  ): مواشر كتلة الجسم الحالي`;
      blockindex.innerHTML = `الوضع الصحي : ( زياده في الوزن )`;
    }
    //The value is from 30 to 34.9, the case is obese
    if (intvalue >= 30 && intvalue <= 34.9) {
      ha3.style.display = "flex";
      hc1.style.display = "block";
      // img3.style.display = "block";
      imgss.style.display = "block";

      //اضافة المحتواء
      yourweight.innerHTML = `( ${kg.value}  ): وزنك الحالي`;
      situation.innerHTML = `( ${intvalue}  ): مواشر كتلة الجسم الحالي`;
      blockindex.innerHTML = ` ( مصاب بسمنه ) :  الوضع الصحي  `;
    }
    //The value is from 35 to 39.9, the case is obese
    if (intvalue >= 35 && intvalue <= 39.9) {
      ha3.style.display = "flex";
      hc1.style.display = "block";
      // img4.style.display = "block";
      imgss.style.display = "block";

      //اضافة المحتواء
      yourweight.innerHTML = `( ${kg.value}  ): وزنك الحالي`;
      situation.innerHTML = `( ${intvalue}  ): مواشر كتلة الجسم الحالي`;
      blockindex.innerHTML = ` ( مصاب بسمنه مفرطه ):  الوضع الصحي `;
    }
    //The value of 40 The case is fatal obesity
    if (intvalue >= 40) {
      ha3.style.display = "flex";
      hc1.style.display = "block";
      // img5.style.display = "block";
      imgss.style.display = "block";  

      //اضافة المحتواء
      yourweight.innerHTML = `( ${kg.value}  ): وزنك الحالي`;
      situation.innerHTML = `( ${intvalue}  ): مواشر كتلة الجسم الحالي`;
      blockindex.innerHTML = ` ( سمنه قاتله ): الوضع الصحي `;
    }
    // اقل من 18
    if (intvalue < 18) {
      ha3.style.display = "flex";
      hc1.style.display = "block";
      //اضافة المحتواء
      yourweight.innerHTML = `( ${kg.value}  ): وزنك الحالي`;
      situation.innerHTML = `( ${intvalue}  ): مواشر كتلة الجسم الحالي`;
      blockindex.innerHTML = ` ( نحيف  ): الوضع الصحي `;
    }
  } else {
    tot.innerHTML = "برجاء ادخال البيانات المطلوبه";
  }
  qq.style.display = "none";
  rer.style.display = "block";

  clen();
}
