// declaring html elements'
const imgDiv = document.querySelector('profile-pic');
const img = document.querySelector('#photo');
const file = document.querySelector('#file');
const uploadBtn = document.getElementById('#uploadBtn');
 //if hover on profile div
 imgDiv.addEventListener('mouseenter', function()
 {
     uploadBtn.style.display = "block"
 });
 //if we hover out from img div
 imgDiv.addEventListener('mouseLeave', function(){
    uploadBtn.style.display = "block"
 });
 file.addEventListener('change', function(){
     const choosefile = this.files[0];
     if (choosedFile){
         const reader = new FileReader();
         reader.addEventListener('Load' , function(){
             img.setAttribute('src', reader.result);

         });
         reader.readAsDataURL(choosefile);
     }

 });