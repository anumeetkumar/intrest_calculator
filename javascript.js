
    function cal()
    {
      var amt=document.getElementById("amt").value;
      var rate=document.getElementById("rate").innerHTML;
      var year=document.getElementById("year").value;
      if(amt=="" || rate=="" || year=="" || amt<=0)
      {
      alert("please enter a positive number")
      document.getElementById("output").style.display="none";

    }
      else
      {
        document.getElementById("errorpop").style.display="none";

            rate = rate.replace("%", "");
            var A= (amt*rate*year)/100;
            var temp=parseInt(A);
            var temp2=parseInt(amt);
            var final=temp+temp2;
            
            document.getElementById("d-amt").innerHTML=amt;
            var drate=document.getElementById("rate").innerHTML;
            document.getElementById("d-rate").innerHTML=drate;
            
            document.getElementById("d-final").innerHTML=final;
            document.getElementById("output").style.display="block";
            year=parseInt(year);
            var dt = new Date();
            var yr=dt.getYear();
            yr=yr+1900+year;
            document.getElementById("d-time").innerHTML=yr;
      }
    }
 
 
    function isInputNumber(event){
      var ch = String.fromCharCode(event.which);
      if(!(/[0-9]/.test(ch))){
        event.preventDefault();
      }
    }
    function showvalues(val) {
      document.getElementById('rate').innerHTML=val+"%"; 
     
    }
    function goBack(){
      window.history.back();
    }
