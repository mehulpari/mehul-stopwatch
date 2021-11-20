// var min = 00;
// var sec = 00;

// minvalue.innerhtml = min



var setting = document.getElementById("setting")
setting.addEventListener("click", () => {
   var valuebtn = document.getElementById("valuebtn")
   valuebtn.style.display = "block"
});

// get values of min and sec from textbox
class hmValues {
   constructor(minvalue, secvalue) {
      this.minvalue = minvalue;
      this.secvalue = secvalue;
   }
}
class display {
   add(values) {
      var sec1 = document.getElementById("sec")
      var min1 = document.getElementById("min")
      sec1.innerHTML = values.secvalue
      min1.innerHTML = values.minvalue
   }

      clear(){
         document.getElementById("minvalue").value = "00";
         document.getElementById("secvalue").value = "00";
      }


}
minvalue.innerText = "00"
secvalue.innerHTML = "00"

var submit = document.getElementById("submit")

submit.addEventListener("click", gettinValues)


function gettinValues(e) {
   var minvalue = document.getElementById("minvalue").value;
   var secvalue = document.getElementById("secvalue").value;

   let values = new hmValues(minvalue, secvalue);
   console.log(values);
   valuebtn.style.display = "none"

   let Display = new display()
   Display.add(values)
   Display.clear()
   e.preventDefault;

}


window.onload = function () {
   var sec = 00;
   var min = 00;
   var strtbtn = document.getElementById("strt-btn");
   var stopbtn = document.getElementById("stop-btn");
   var rstbtn = document.getElementById("rst-btn");
   var sec1 = document.getElementById("sec");
   var min1 = document.getElementById("min"); 
   var interval;

   strtbtn.addEventListener("click", () => {
      clearInterval(interval);
      interval = setInterval(setsec, 1000);
   });
   stopbtn.addEventListener("click", () => {
      clearInterval(interval);
   });
   rstbtn.addEventListener("click", () => {
      clearInterval(interval);
      sec = "00"
      min = "00"
      sec1.innerHTML = sec;
      min1.innerHTML = min;
   })


   function setsec() {
      sec++;
      if (sec <= 9) {
         sec1.innerHTML = "0" + sec 
      }
      if (sec > 9) {
         sec1.innerHTML = sec

      }
      if (sec >= 59) {
         min++;
         min1.innerHTML = "0" + min;
         sec = 00;
         sec1.innerHTML = "0" + 0

         if (min > 9) {
            let min1 = document.getElementById("min");
            min1, innerHTML = min
         }
      }
   }
}
