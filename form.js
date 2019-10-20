function form(){
    name=document.getElementById("n1");
    err=document.getElementById("f");
    expr1=/^[a-zA-Z]{3,20}$/;
    if(name.vale==""&&expr1.test==false){
        err.innerHTML="please enter your valid  name";
        name.focus;
        return false;
    }
    else{
        err.innerHTML="";
    }
    phone=document.getElementById("p1");
    err2=document.getElementById("e1");
    expr2=/^[6-9]{0,9}$/;
    if(phone.value=""&&expr1.test==false)
    {
       return false;
       err2.innerHTML="enter the valid phone numbers"
    }
    else{
        err2.innerHTML="";
    }//gender selection
     gender=document.getElementsByName("gen");
     err3=document.getElementById("e3");
     if(gender[0].checked==false||gender[1].checked==false)
     {
         err3.innerHTML="please select one gender";
         return false;
     }
     else{
         err3.innerHTML="";
     }//skill
   skill=document.getElementsByName("SK");
   err4=document.getElementById("e4");
   count=0;
   for(i=0;i<skill.length;i++)
   {
       if(skill.checked==true){
           count++;
       }
       else if(count<2){
           err4.innerHTMML="PLEASE SELECT TWO SKILL"
          return false 
       }
       else {
           err4.innerHTML="";
       }
   }
   //department
   deparment=document.getElementById("dep");
   err5=document.getElementById("e5");
   rment.selectedindex;
}