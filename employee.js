function emfun(){
    n=document.getElementById("ename");
ex1=/^[a-zA-Z]{3,20}$/;
er1=document.getElementById("er1");
if(n.value==""){
    er1.innerHTML="PLEASE ENTER YOUR NAME"
    n.focus(); 
    return false;
    }
    else if(ex1.value==""){
    er1.innerHTML="PLEASE ENTER THE VALID NAME";
    return false;
    }  
    else{
        n.innerHTML="";
    }                                                                                                                                 
}
