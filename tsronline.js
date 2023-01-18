

         
var allblockquote = document.querySelectorAll("blockquote");
for(let i=0; i<=allblockquote.length-1; i++ ){
var quote1   = allblockquote[i].innerText;
var quote   = allblockquote[i].innerHTML;
var socialiconBox =
'<div class="blockquotes">'+
    '<div class="copy-content text-justify" id="'+i+'">'+quote+'</div>'+
   '<div class="AT-share-wrapper">'+
    '<span class="ats " id="edit_letter'+i+'"> <i class="fas fa-edit"></i></span>'+
    '<span class="at-share-w"> <i class="fab fa-whatsapp"></i></span>'+
    '<span class="at-share-f"> <i class="fab fa-facebook"></i></span>'+
    '<span class="at-share-tg"> <i class="fab fa-telegram"></i></span>'+
    '<span class="at-share-t"> <i class="fab fa-twitter"></i></span>'+
   '<span class="at-copy" id="copy_letter'+i+'"><i class="fas fa-copy"></i> </span>'+
  '</div><div class="AT-share-wrapper cp2"></div>'+
'</div>';

allblockquote[i].innerHTML= socialiconBox;
 

copyFun(quote1,quote,i);
social_shear();

}

function copyFun(text,text1,id){
document.getElementById('copy_letter'+id+'').addEventListener("click",()=>{
navigator.clipboard.writeText(text)
.then(() => { alert("Copied"); });
})




document.getElementById('edit_letter'+id+'').addEventListener("click",()=>{

document.getElementById('letter_body').innerHTML = text1;
document.getElementById('edit_social').innerHTML =
// '<center class="text-danger">Share This Letter</center>'+
'<div class="blockquotes">'+
'<div class="copy-content " id="edited_letter"></div>'+
  '<div class="AT-share-wrapper">'+
    '<span class="at-share-w"> <i class="fab fa-whatsapp"></i></span>'+
    '<span class="at-share-f"> <i class="fab fa-facebook"></i></span>'+
    '<span class="at-share-tg"> <i class="fab fa-telegram"></i></span>'+
    '<span class="at-share-t"> <i class="fab fa-twitter"></i></span>'+
    '</div><div class="AT-share-wrapper cp2"></div>'+
  '</div>';

myFunction();


})

}


function myFunction() {
  social_shear();
  var myModal = document.getElementById("myModal");
  var hide_mobal = document.getElementById("hide_mobal");
  var edit_letter_button = document.getElementById("edit_letter");
  var ok_letter_button = document.getElementById("ok_letter");
  var letter_body = document.getElementById("letter_body");
  
  
  if (myModal.style.display === "block") {
    myModal.style.display = "none";
  } else {
    myModal.style.display = "block";
  };

  
  hide_mobal.addEventListener("click", ()=>{
    myModal.style.display = "none";
    $(".popup_div").hide();
    document.querySelector("#popup_close").style.display = "none";
  });
  
  
  edit_letter_button.addEventListener("click", ()=>{
               
          letter_body.setAttribute("contenteditable", "true");
          letter_body.style.border = "2px solid red";
                edit_letter_button.style.display = "none";
                ok_letter_button.style.display = "block";
       
  });
  ok_letter_button.addEventListener("click", ()=>{
               
          letter_body.setAttribute("contenteditable", "none");
          letter_body.style.border = "2px solid #36D6F5";
                edit_letter_button.style.display = "block";
                ok_letter_button.style.display = "none";
                var edited_letter = letter_body.innerHTML;
              document.getElementById("edited_letter").innerHTML = edited_letter;
  });
 letter_body.style.border="2px solid #11d6f5"; 
if (letter_body.contentEditable == "true") {
letter_body.setAttribute("contenteditable", "none");
//letter_body.style.border = "none";

letter_body.style.border="2px solid #11d6f5";
ok_letter_button.style.display = "none";
  edit_letter_button.style.display = "block";
}
 document.getElementById("edited_letter").innerHTML = letter_body.innerHTML;
}

function changeFont(font){
        document.getElementById("letter_body").style.fontFamily = font.value;
    } 
var checking
   document.getElementById("downloadimage").addEventListener("click",()=>{
      checking = "downloadimage";
     togglePopup(checking);
   });
   document.getElementById("word-export").addEventListener("click",()=>{
      checking = "word-export";
     togglePopup(checking);
   });
   document.getElementById("copy_letter").addEventListener("click",()=>{
      checking = "copy_letter";
     togglePopup(checking);
   });
  

    

function togglePopup(data) {
  
  if (data == "downloadimage") {
    $(".popup_div").show();
    startschedule(data);
  }else if (data == "word-export") {
    $(".popup_div").show();
    startschedule(data);
  }else 

  if (data == "copy_letter") {
    $(".popup_div").show();
    startschedule(data);
  }else{
    alert("Something went wrong !");
  }

}

document.getElementById("popup_close").addEventListener("click",()=>{
$(".popup_div").hide();
document.querySelector("#popup_close").style.display = "none";
})       

var timeout, interval
var threshold = 5000;
var secondsleft = threshold;
var tanoy = "tanoy";


function startschedule(data) {
    clearInterval(interval);
    secondsleft = threshold;
    document.querySelector("#countdown").innerHTML = "Please wait in " + Math.abs((secondsleft / 1000)) + " secs";
    interval = setInterval(function() {
        startChecking(data);
    }, 1000)
}

function startChecking(data) {
    secondsleft -= 1000;
    document.querySelector("#countdown").innerHTML = "Please wait in " + Math.abs((secondsleft / 1000)) + " secs";
    if (secondsleft == 0) {
        clearInterval(interval);
        
         if (data == "downloadimage") {
          downloadimage(document.querySelector("#countdown").innerHTML = "Processing For Dwonload");
          document.querySelector("#popup_close").style.display = "";
          data = "";
         }else if(data == "word-export"){
          word_export(document.querySelector("#countdown").innerHTML = "Word File Dwonloaded ! ");
          document.querySelector("#popup_close").style.display = "";
          data = "";
         }else 
         if(data == "copy_letter"){
          copyDivToClipboard(document.querySelector("#countdown").innerHTML = "Copied Letter ! ");
          document.querySelector("#popup_close").style.display = "";
          data = "";
         }else{
          document.querySelector("#countdown").innerHTML = "Something went wrong ! "
         }
        
    }
}


function word_export(){
$("#letter_body").wordExport();
document.querySelector("#countdown").innerHTML = " Word file Dwonloaded !";
}

function downloadimage() {
var container = document.getElementById("letter_body");
var link = document.createElement("a");
container.style.width = "500px";
container.style.textAlign = "";
html2canvas(container, { allowTaint: true }).then(function (canvas) {
document.body.appendChild(link);
link.download = "letter_TSR.jpg";
link.href = canvas.toDataURL();
link.target = '_blank';
link.click();
container.style.width = "";
container.style.textAlign = "justify";
});
}

function copyDivToClipboard() {
var copy_letter = document.getElementById("copy_letter");
var range = document.createRange();
range.selectNode(document.getElementById("letter_body"));
window.getSelection().removeAllRanges(); // clear current selection
window.getSelection().addRange(range); // to select text
document.execCommand("copy");
copy_letter.style.backgroundColor = "green";
window.getSelection().removeAllRanges();// to deselect
}


function social_shear() {
  
  $(".at-share-w").click(function () { window.location.origin; var t = $(this).parent(".AT-share-wrapper").parent(".blockquotes").find(" > .copy-content").text(), n = "https://api.whatsapp.com/send?text=" + encodeURIComponent(t) + '%0A' + location.href + ""; window.open(n, "_blank") }), 
  $(".at-share-f").click(function () { window.location.origin; var t = $(this).parent(".AT-share-wrapper").parent(".blockquotes").find(" > .copy-content").text(), n = "https://www.facebook.com/sharer/sharer.php?u=" + location.href + "&quote=" + encodeURIComponent(t); window.open(n, "_blank") }), 

  $(".at-share-tg").click(function (){ 
    window.location.origin; 
    var t = $(this).parent(".AT-share-wrapper").parent(".blockquotes").find(" > .copy-content").text(), n = "https://telegram.me/share/url?url=" + encodeURIComponent(t) + '%0A' + ""; 

    window.open(n, "_blank") 
  }),
  $(".at-share-t").click(function (){ 
    window.location.origin; 
    
    var t = $(this).parent(".AT-share-wrapper").parent(".blockquotes").find(" > .copy-content").text(), n = "https://twitter.com/intent/tweet?url=" + encodeURIComponent(t) + '%0A' + ""; 

    window.open(n, "_blank") 
  })
}



