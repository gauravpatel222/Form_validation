const form=document.getElementById("form");
const username=document.getElementById("username");

const email=document.getElementById("email");
const phone=document.getElementById("pnumber");


const password=document.getElementById("password");

const cpassword=document.getElementById("cpassword");



// add events
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    // validate function
    validate();})

    ////   validate function  

    const validate=()=>{
        const usernameval=username.value.trim();
        const emailval=email.value.trim();
        const phoneval=phone.value.trim();
            const passwordval=password.value.trim();
            const cpasswordval=cpassword.value.trim();


        // for usernamee
            if(usernameval===""){
               
                setErrorMsg(username,'username cannot be blank')
                
            }
            else if(usernameval.length<=2){
                    setErrorMsg(username,'length should be greater then 2');
            }
            else {
                setSuccessMsg(username,'success');
            }



            // for email
            if(emailval==""){
                setErrorMsg(email,'email cannot ne empty');
            }
            else {
                setSuccessMsg(email,"success");
            }



            // for phone number
                
            if(phoneval.length!=10){
                setErrorMsg(phone,'length should be equal to 10')
            }
            else{
                setSuccessMsg(phone,'success');
            }    



            // for password
            let sp = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
            let uppercase=/[A-Z]/;
            let lowercase=/[a-z]/;
            let num=/[0-9]/;
                if(passwordval.length<6){
                    setErrorMsg(password,'size should be 6');
                }
               else  if(sp.test(passwordval)==false){
                    setErrorMsg(password,'no special character')
                      
                 }
                 else if(uppercase.test(passwordval)==false){
                    setErrorMsg(password,'no uppercase letter');
                    
                 }
                 else if(lowercase.test(passwordval)==false){
                    setErrorMsg(password,'no lowercase character')
                 }
                 else if(num.test(passwordval)==false){
                    setErrorMsg(password,'no number')
                 }
                 else {
                    setSuccessMsg(password,"success");
                 }
                 



       // for confirm password
       if(passwordval!=cpasswordval){
        setErrorMsg(cpassword,"password doesn't match");
       }          
       else{
        setSuccessMsg(cpassword,"success");
       }

       printsuccessMsg(usernameval);



                }



            // function for displaying error message
    function setErrorMsg(input,errormsgs){
        const formcontrol=input.parentElement;   //username ka parent element liya jo ki hai divh form conrotl
        const small=formcontrol.querySelector('small');  // then i select small
        
        formcontrol.className="form-control error"    // adding one class name 
        
      
        small.innerHTML=errormsgs;

    }
    function setSuccessMsg(input,success){
        const formcontrol=input.parentElement;   //username ka parent element liya jo ki hai divh form conrotl
        const small=formcontrol.querySelector('small');  // then i select small
        
        formcontrol.className="form-control success"    // adding one class name 
        
      
        small.innerHTML=success;
    }

const submit=document.querySelector(".btn");
//submit.addEventListener('submit',printsuccessMsg());
function printsuccessMsg(usernameval){
        
    const formcon=document.getElementsByClassName('form-control');
        var count=0;
        for(var i=0;i<formcon.length;i++){
            
            if(formcon[i].className=="form-control success"){
                count++;
                console.log(count);
            }
           if(count==formcon.length-1){
            //alert("Registration successfull");
            alert(`congratulations ${usernameval} registartion successfull`);
           }
        }
        
}

    /// function for validation  
  

    