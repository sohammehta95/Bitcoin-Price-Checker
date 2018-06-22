var btn = document.querySelector("#find");
var para = document.querySelector("#parag");
var jara = document.querySelector("#jarag");


//listen for clicks
btn.addEventListener("click", function(){
  //make the request
  var XHR = new XMLHttpRequest();
  
  XHR.onreadystatechange = function(){
    if(XHR.readyState == 4 && XHR.status == 200) {
      var value = JSON.parse(XHR.responseText).bpi.USD.rate;
      var updated = JSON.parse(XHR.responseText).time.updated;
      para.innerHTML = "$ " + value;
      
      var today  = new Date();
      var options = {  
          weekday: "long", year: "numeric", month: "short",  
          day: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit"  
      };  

      jara.innerHTML = "Updated at: " + today.toLocaleTimeString("en-us", options);

    }
  }
  
  XHR.open("GET","https://api.coindesk.com/v1/bpi/currentprice.json");
  XHR.send();
})