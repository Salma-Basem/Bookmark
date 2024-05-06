var siteNameInput =document.getElementById('userSiteName');
var siteUrlInput= document.getElementById('siteURL');
var notValid = document.getElementById('siteNotValid');
var siteContainer;
var siteIndex;

if(localStorage.getItem('Website name:')== null)
{
    siteContainer=[];
}
else{

    siteContainer =JSON.parse(localStorage.getItem('Website name:'));
    displaySite();
}

function submitInput()
{ if(validateInput() && validateUrl())
    {
    var site={

        siteName:siteNameInput.value,
        siteUrl:siteUrlInput.value
    };

    console.log(site);
    siteContainer.push(site);
    console.log(siteContainer);
    clearInput();
    displaySite();
    localStorage.setItem('Website name:',JSON.stringify(siteContainer));
    }
else{
    
  var alertWindow=``;
  alertWindow+=`   <div class=" bg-black bg-opacity-50 position-absolute top-0 bottom-0 start-0 end-0 z-2 d-flex justify-content-center align-items-center ">
  <div class=" bg-light  window  mx-auto">
    <div class=" pt-2 d-flex justify-content-between mb-4">
      <span class="ms-2">
    <i class="fa-solid fa-circle" style="color: #E85E5C;"></i>
    <i class="fa-solid fa-circle" style="color: #F2BD2B;"></i>
    <i class="fa-solid fa-circle" style="color: #57B749;"></i>
  </span>
    <button class="ms-auto border-0 bg-light" onclick="cancelWindow()";><i class="fa-solid fa-x"></i></button>
    </div>
    <h6 class="ms-2 mb-4">Site Name or Url is not valid, Please follow the rules below :</h6>
    <div class="d-flex align-items-baseline ms-3">
      <span class="fa-stack small me-1" style="vertical-align: top;">
        <i class="fa-regular fa-circle fa-stack-2x" style="color: red;"></i>
        <i class="fa-solid fa-arrow-right fa-stack-1x" style="color: red;"></i>
      </span>
      Site name must contain at least 3 characters
    </div>
    <div class="d-flex align-items-baseline ms-3">
      <span class="fa-stack small me-1" style="vertical-align: top;">
        <i class="fa-regular fa-circle fa-stack-2x" style="color: red;"></i>
        <i class="fa-solid fa-arrow-right fa-stack-1x" style="color: red;"></i>
      </span>
      Site URL must be a valid one
    </div>
  </div>
</div> `
   document.getElementById('window').innerHTML= alertWindow;
    }

}


function displaySite()
{
    var cartona =``;
    for(var i=0;i<siteContainer.length;i++)
   { cartona+=` <div class="row p-2 pt-3 flex-nowrap border-bottom" >
   <div class="col ">
    <div class="d-flex justify-content-center">
     <h3 class="h6 fw-light">${i+1}</h3>
   </div> 
    </div>
    <div class="col">
     <div class="d-flex justify-content-center">
       <h3 class="h6 fw-semibold ">${siteContainer[i].siteName}</h3>  
     </div>
        
    </div>
    <div class="col">
     <div class="d-flex justify-content-center align-items-center ">
     <button class="btn btn-success " onclick="visitWebsite(${i});"><i class="fa-solid fa-eye me-2"></i>Visit</button>
     </div>
    </div>
    
    <div class="col">
     <div class="d-flex justify-content-center align-items-center">
     <button class="btn btn-danger " onclick="DeleteWebsite(${i});"><i class="fa-solid fa-trash me-2"></i>Delete</button>
     </div>
     </div>
     <div class="col">
     <div class="d-flex justify-content-center align-items-center">
     <button class="btn btn-warning " onclick="updateWebsite(${i});"><i class="fa-solid fa-pen-to-square me-2"></i>Update</button>
     </div>
     </div>
    </div>`
}
document.getElementById('rowData').innerHTML= cartona;
}

function clearInput()
{
    siteNameInput.value=null;
    siteUrlInput.value=null;   
}

function visitWebsite(index)
{
    window.open(siteContainer[index].siteUrl,"_blank");
    console.log(siteContainer[index].siteUrl)
}

function DeleteWebsite(id){
    siteContainer.splice(id,1);
    localStorage.setItem('Website name:',JSON.stringify(siteContainer)); 
    displaySite()
}

function validateInput()
{  
    var regex= /^[a-z]|[A-Z]{3,}$/; 
    return regex.test(siteNameInput.value)
}

function validateUrl()
{
    var regex =/^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/;
    return regex.test(siteUrlInput.value)
}

function cancelWindow()
{
    alertWindow=``;
//     alertWindow+=`   <div class=" bg-black bg-opacity-50 position-absolute top-0 bottom-0 start-0 end-0 z-2 d-flex justify-content-center align-items-center d-none">
//     <div class=" bg-light  window  mx-auto">
//       <div class=" pt-2 d-flex justify-content-between mb-4">
//         <span class="ms-2">
//       <i class="fa-solid fa-circle" style="color: #E85E5C;"></i>
//       <i class="fa-solid fa-circle" style="color: #F2BD2B;"></i>
//       <i class="fa-solid fa-circle" style="color: #57B749;"></i>
//     </span>
//       <button class="ms-auto border-0 bg-light" onclick="cancelWindow()";><i class="fa-solid fa-x"></i></button>
//       </div>
//       <h6 class="ms-2 mb-4">Site Name or Url is not valid, Please follow the rules below :</h6>
//       <div class="d-flex align-items-baseline ms-3">
//         <span class="fa-stack small me-1" style="vertical-align: top;">
//           <i class="fa-regular fa-circle fa-stack-2x" style="color: red;"></i>
//           <i class="fa-solid fa-arrow-right fa-stack-1x" style="color: red;"></i>
//         </span>
//         Site name must contain at least 3 characters
//       </div>
//       <div class="d-flex align-items-baseline ms-3">
//         <span class="fa-stack small me-1" style="vertical-align: top;">
//           <i class="fa-regular fa-circle fa-stack-2x" style="color: red;"></i>
//           <i class="fa-solid fa-arrow-right fa-stack-1x" style="color: red;"></i>
//         </span>
//         Site URL must be a valid one
//       </div>
//     </div>
//   </div> `
     document.getElementById('window').innerHTML= alertWindow;
      
  
}



function validateBorderColor(input) {
    var regexSiteName= /^[a-z]|[A-Z]{3,}$/; 
   var regexSiteUrl =/^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/;

    if (!regexSiteName.test(siteNameInput.value) )
    {
      input.classList.remove('orange');
      input.classList.remove("valid");
      validIcon.classList.add('d-none');
      notValidIcon.classList.remove('d-block');
      input.classList.add("invalid");
      notValidIcon.classList.replace('d-none','d-block');
      
      
    } 
    else 
    {input.classList.remove('orange')
    input.classList.remove("invalid");
    notValidIcon.classList.remove('d-block');
      notValidIcon.classList.add('d-none');
      input.classList.add('valid');
      validIcon.classList.replace('d-none','d-block');
    
    }
  }

function valid(input){ 
    var regexSiteUrl =/^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/;
  
    if(!regexSiteUrl.test(siteUrlInput.value))
    {
      input.classList.remove('orange');
      input.classList.remove("valid");
      validIcon1.classList.add('d-none');
      notValidIcon2.classList.remove('d-block');
      input.classList.add("invalid");
      notValidIcon2.classList.replace('d-none','d-block');
      
    } 
    else 
    {input.classList.remove('orange')
    input.classList.remove("invalid");
    notValidIcon2.classList.remove('d-block');
      notValidIcon2.classList.add('d-none');
      input.classList.add('valid');
      validIcon1.classList.replace('d-none','d-block');
      // validIcon.classList.remove('d-none');
      // validIcon.classList.add('d-block')
    }

   
  }


  function updateWebsite(index)
  { siteIndex=index;

    siteNameInput.value=siteContainer[index].siteName;
    siteUrlInput.value=siteContainer[index].siteUrl;


    submitBtn.classList.replace('d-none','d-block');
    btn.classList.replace('d-block','d-none');
  }

  function update()
{
  var site={

    siteName:siteNameInput.value,
    siteUrl:siteUrlInput.value
};

    siteContainer.splice(siteIndex,1,site);
  
    localStorage.setItem('Website name:',JSON.stringify(siteContainer));
    displaySite(); 

    btn.classList.replace('d-none','d-block');
    submitBtn.classList.replace('d-block','d-none');
}