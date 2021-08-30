
function twice(imgnum){
    var a;
    a = Math.floor(Math.random()*3+1);
    document.getElementById("changeimage").src  = a+".png";
    document.getElementById("changeimage").style.display="block";
    if((imgnum == a )){
        document.getElementById("changeimage").style.display="none";
        document.getElementById("resultdisplay").innerHTML="both are same so try again";
    }   
    if(imgnum == 1){
        if(a == 2) {
            document.getElementById("resultdisplay").innerHTML=" computer win";
        }
        else if(a ==3){
            document.getElementById("resultdisplay").innerHTML="you win";
        }
    }
    if(imgnum==2){
        if(a==1){
            document.getElementById("resultdisplay").innerHTML="you win";
        }
        else if(a==3){
            document.getElementById("resultdisplay").innerHTML="computer win";
        }

    }
    if(imgnum==3){
        if(a==1){
            document.getElementById("resultdisplay").innerHTML="computer win";
        }
        else if(a==2){
            document.getElementById("resultdisplay").innerHTML="you win";
        }
    }
    
   
    
}