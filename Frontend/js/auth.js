 const saveButton = document.querySelector("#save-btn");
 const allInputs = document.querySelectorAll('input');
 const allSelects = document.querySelectorAll('select');
 const infoBlock = document.querySelectorAll('.info-block');
 

for(let input of allInputs){
    input.addEventListener("blur", ()=> {
        input.nextElementSibling.style.display = "none";
    })
}

for(let select of allSelects){
    select.addEventListener("blur", ()=> {
        select.nextElementSibling.style.display = "none";
    })
}


 function checkInput() {
    let inputValidity = true;
    for(let info of infoBlock){
        const infoInputs = info.querySelectorAll('input');
        const selects = info.querySelectorAll('select');
        if(info.style.display != 'none' && getComputedStyle(info).display !== 'none'){
            
            for(let input of infoInputs){
                if(input.value == ""){
                    inputValidity = false;
                    // Set focus on the element (brings the cursor for input fields)
                    input.nextElementSibling.style.display = "block";
                    input.scrollIntoView({block: "center", behavior: "smooth"});
                    input.focus();
                    if(input.innerText != ""){
                        input.nextElementSibling.style.display = "none";
                    }
                    return inputValidity ;
                }              
                
            }
            for(let select of selects){
                if(select.value === "0"){
                    inputValidity = false ;            
                    // Set focus on the element (brings the cursor for input fields)
                    select.nextElementSibling.style.display = "block";
                    select.scrollIntoView({block: "center", behavior: "smooth"});
                    select.focus();
                    return inputValidity;
                }
                
            }
            

        
        }
    }
    return inputValidity ;
}
        
    
 
