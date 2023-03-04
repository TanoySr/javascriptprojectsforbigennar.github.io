document.getElementById('tanoy_sr').innerHTML = '<div class="blockquotes">'+
    '<div id="editletter_head"><Strong>EDITLETTER.COM</Strong></div>'+
    '<div class="nation_title"> Types Of Items</div>'+
    
    '<div class="pagination"></div>'+
    
    '<div id="content-container" class="p-2"></div>'+
    
    '<div id="editletter_footer">'+
      
      '<div class="edit_tools">'+
        '<center>'+
      '<span class="at-tool" id="edit_button"> <i class="fa-solid fa-file-pen"></i> </span>'+
      '<span class="at-tool" id="copy_letter"> <i class="fa-solid fa-copy"></i> </span>'+

      '<span class="at-tool">'+
        '<select style="width: 55px;" onchange="changeFont(this);">'+
        '<option value="Sans Serif" selected>Font</option>'+
            '<option value="Arial">Arial</option>'+
            '<option value="Sans Serif">Sans Serif</option>'+
            '<option value="Comic Sans MS">Comic Sans MS</option>'+
            '<option value="Times New Roman">Times New Roman</option>'+
            '<option value="Courier New">Courier New</option>'+
            '<option value="Verdana">Verdana</option>'+
            '<option value="Trebuchet MS">Trebuchet MS</option>'+
            '<option value="Arial Black">Arial Black</option>'+
            '<option value="Impact">Impact</option>'+
            '<option value="Bookman">Bookman</option>'+
            '<option value="Garamond">Garamond</option>'+
            '<option value="Palatino">Palatino</option>'+
            '<option value="Georgia">Georgia</option>'+
        '</select>'+
      '</span>'+
      '<span class="at-tool">'+ 
        '<select id="" style="width: 55px;" onchange="changeFont_size (this);">'+
        '<option  selected>Size</option>'+
            '<option value="16px">Default</option>'+ 
            '<option value="13px">13px</option>'+
            '<option value="14px">14px</option>'+
            '<option value="15px">15px</option>'+
            '<option value="16px">16px</option>'+
            '<option value="17px">17px</option>'+
            '<option value="18px">18px</option>'+
            '<option value="19px">19px</option>'+
            '<option value="20px">20px</option>'+
        '</select>'+ 
      '</span>'+
      
      '<span class="at-tool" id="download-btn"> <i class="fa-solid fa-file-word"></i> </span>'+
      '<span class="at-tool" id="save_pdf"> <i class="fa-solid fa-file-pdf fa-1x"></i> </span>'+
      '</center>'+
      '</div>'+

      '<div class="social">'+
      '<div class="AT-share-wrapper">'+
      '<span class="at-share-w"> <i class="fab fa-whatsapp"></i></span>'+
      '<span class="at-share-f"> <i class="fab fa-facebook"></i></span>'+
      '<span class="at-share-tg"> <i class="fab fa-telegram"></i></span>'+
      '<span class="at-share-t"> <i class="fab fa-twitter"></i></span>'+
      '<span class="at-share-t bg-danger" onclick="shareViaGmail()"> <i class="fa-solid fa-envelope"></i></span>'+
      '</div><div class="AT-share-wrapper cp2"></div>'+
      '</div>'+
    '</div>'+
    '<div id="popup-container">'+
      '<div id="popup-content" >'+
        '<strong ><span class="text-danger">PDF</span>  Setting</strong>'+
        '<hr>'+
        '<strong class="text-primary mb-2">Customiz Your Edited PDF File and Download</strong>'+

        '<div class="d-flex justify-content-around p-2 mb-3" >'+
         ' <div>'+
            '<label>Margin</label>'+
            '<select style="width: 55px;" id="margin"  >'+
               ' <option value="1" selected>Default</option>'+
                '<option value="0.10">0</option>'+
                '<option value="0.20">2</option>'+
                '<option value="0.30">3</option>'+
                '<option value="0.40">4</option>'+
                '<option value="0.50">5</option>'+
            '</select>'+
          '</div>'+
          '<div>'+
            '<label>Quality</label>'+
            '<select style="width: 55px;" id="quality" >'+
                '<option value="2" selected>Default</option>'+
                '<option value="1">Low</option>'+
                '<option value="4">Midume</option>'+
                '<option value="6">High</option>'+
                '<option value="8">Ultra</option>'+
                '<option value="10">Pro</option>'+
            '</select>'+
          '</div>'+
          '<div>'+
            '<label>Page Size</label>'+
            '<select style="width: 55px;" id="page_size" >'+
                '<option value="a4" selected>A4</option>'+
                '<option value="letter">Letter</option>'+
                '<option value="a3">A3</option>'+
                '<option value="a5">A5</option>'+
                '<option value="a6">A6</option>'+
            '</select>'+
          '</div>'+
          '<div>'+
            '<label>Layout</label>'+
            '<select style="width: 55px;" id="layout" >'+
                '<option value="portrait" selected>Portrait</option>'+
                '<option value="landscape">Landscape</option>'+
            '</select>'+
          '</div>'+
        '</div>'+
        '<div class="d-flex justify-content-center ">'+
          '<div id="download_PDF" class="btn btn-sm  btn-outline-primary">Generate <strong class="text-danger">PDF</strong>  Link</strong></div>'+
        '</div>'+
        '<hr>'+
        '<div class="">'+
          '<div id="close-btn" >Close</div>'+
        '</div>'+
        
      '</div>'+
    '</div>'+
  '</div>';

    // Fetch all blockquote elements and store their content in an array
    const blockquotes = document.querySelectorAll('blockquote');
    const contentArr = Array.from(blockquotes).map(quote => quote.innerHTML);
    
    // Create pagination links and add event listeners to display corresponding content
    const contentContainer = document.getElementById('content-container');
    const paginationContainer = document.querySelector('.pagination');
    const PAGE_SIZE = 1; // number of items per page
    const MAX_BUTTONS = 5; // maximum number of buttons to show
    let currentPage = 1; // current page number
    
    const totalPages = Math.ceil(contentArr.length / PAGE_SIZE);
    let startPage, endPage;

    if (totalPages <= MAX_BUTTONS) {
      // Show all buttons if the total number of pages is less than or equal to the maximum number of buttons
      startPage = 1;
      endPage = totalPages;
    } else {
      // Calculate the start and end page based on the current page and maximum number of buttons
      if (currentPage <= Math.floor(MAX_BUTTONS / 2)) {
        startPage = 1;
        endPage = MAX_BUTTONS;
      } else if (currentPage + Math.floor(MAX_BUTTONS / 2) >= totalPages) {
        startPage = totalPages - MAX_BUTTONS + 1;
        endPage = totalPages;
      } else {
        startPage = currentPage - Math.floor(MAX_BUTTONS / 2);
        endPage = currentPage + Math.floor(MAX_BUTTONS / 2);
      }
    }
    
    for (let i = startPage; i <= endPage; i++) {
      const pageLink = document.createElement('button');
      pageLink.textContent = i;
      pageLink.addEventListener('click', () => {
        currentPage = i;
        displayContent();

      });
      paginationContainer.appendChild(pageLink);
    }
    
    // Display content for current page

    function displayContent() {
      const start = (currentPage - 1) * PAGE_SIZE;
      const end = start + PAGE_SIZE;
      const pageContent = contentArr.slice(start, end);
        contentContainer.innerHTML = '';
        contentContainer.contentEditable = 'false';
        pageContent.forEach((content, index) => {
        const title = document.createElement('h3');
        title.setAttribute("contenteditable", "false");
        title.setAttribute("class", "mb-2");
        title.setAttribute("id", "subject");
        title.style.textAlign="center";
        title.style.marginTop= "1px";
        title.style.fontSize= "20px";
        title.style.backgroundColor="#FC913A";
        title.textContent = blockquotes[start + index].getAttribute('title');

        const contentEl = document.createElement('div');
        contentEl.setAttribute("class", "content");
       
        contentEl.innerHTML = content;
        contentContainer.appendChild(title);
        contentContainer.appendChild(contentEl);

      });

  
  updatePagination();
}

// Update pagination links
function updatePagination() {
  paginationContainer.innerHTML = '';
  
  let startPage, endPage;
  if (totalPages <= MAX_BUTTONS) {
    // Show all buttons if the total number of pages is less than or equal to the maximum number of buttons
    startPage = 1;
    endPage = totalPages;
  } else {
    // Calculate the start and end page based on the current page and maximum number of buttons
    if (currentPage <= Math.floor(MAX_BUTTONS / 2)) {
      startPage = 1;
      endPage = MAX_BUTTONS;
    } else if (currentPage + Math.floor(MAX_BUTTONS / 2) >= totalPages) {
      startPage = totalPages - MAX_BUTTONS + 1;
      endPage = totalPages;
    } else {
      startPage = currentPage - Math.floor(MAX_BUTTONS / 2);
      endPage = currentPage + Math.floor(MAX_BUTTONS / 2);
    }
  }
  
  for (let i = startPage; i <= endPage; i++) {
    const pageLink = document.createElement('button');
    pageLink.textContent = i;
    if (i === currentPage) {
      pageLink.classList.add('active');
    }
    pageLink.addEventListener('click', () => {
      currentPage = i;
      displayContent();
    });
    paginationContainer.appendChild(pageLink);
  }
  
  // Add previous and next buttons
  const prevButton = document.createElement('button');
  prevButton.textContent = 'Prev';
  prevButton.classList.add('prev');
  prevButton.addEventListener('click', () => {
    currentPage--;
    displayContent();
  });
  paginationContainer.insertBefore(prevButton, paginationContainer.firstChild);
  
  const nextButton = document.createElement('button');
  nextButton.textContent = 'Next';
  nextButton.classList.add('next');
  nextButton.addEventListener('click', () => {
    currentPage++;
    displayContent();
  });
  paginationContainer.appendChild(nextButton);
  
  // Disable previous and next buttons if necessary
  if (currentPage === 1) {
    prevButton.classList.add('disabled');
  } else {
    prevButton.classList.remove('disabled');
  }
  if (currentPage === Math.ceil(contentArr.length / PAGE_SIZE)) {
    nextButton.classList.add('disabled');
  } else {
    nextButton.classList.remove('disabled');
  }
  
  // Hide or show previous and next buttons based on the number of pages
  if (totalPages <= 1) {
    prevButton.style.display = 'none';
    nextButton.style.display = 'none';
  } else {
    prevButton.style.display = 'inline-block';
    nextButton.style.display = 'inline-block';
  }
}

// Display initial content and pagination
displayContent();

const edit_button = document.getElementById("edit_button");
const letter_div = document.getElementById("content-container");
const save_pdf = document.getElementById('save_pdf');
const copy_letter = document.getElementById('copy_letter');
const content = document.getElementsByClassName("content");
const save_word = document.getElementById("download-btn");
const  w_share  = document.querySelector(".at-share-w");
const f_share   = document.querySelector(".at-share-f");
const tg_share   = document.querySelector(".at-share-tg");
const t_share   = document.querySelector(".at-share-t");


 function edit_letter() {
        if (letter_div.contentEditable === 'true') {
        letter_div.style.color = "";
        letter_div.style.backgroundColor = "";
        letter_div.contentEditable = 'false';
        edit_button.style.color = "black";
        
        edit_button.innerHTML = "<i class='fa-solid fa-file-pen'></i>";
      } else {
        letter_div.contentEditable = 'true';
        letter_div.style.color = "white";
        letter_div.style.backgroundColor = "#004440";
        edit_button.innerHTML = "<i class='fa-solid fa-floppy-disk'></i>";
        edit_button.style.color = "red";
        
      }
  } 

function copy() {
   navigator.clipboard.writeText(letter_div.innerText).then(() => { alert("Copied Format"); });
 }

 function changeFont(font){

    for(let i=0; i<=content.length-1; i++ ){
    content[i].style.fontFamily = font.value;
    
    }
    
} 

function changeFont_size(font_size){
            
   for(let i=0; i<=content.length-1; i++ ){
    content[i].style.fontSize = font_size.value;
    }      
    
} 

document.getElementById("download_PDF").addEventListener("click",(e)=>{
  e.preventDefault();
      var m = document.getElementById("margin").value;
      var quality = document.getElementById("quality").value;
      var page_size = document.getElementById("page_size").value;
      var layout = document.getElementById("layout").value;
                 console.log(m);              
                    const a4Div =  letter_div.innerHTML;
                        var opt = {
                          margin:       [0.50, m, 0, m],
                          filename:     'Editletter.pdf',
                          image:        { type: 'jpg', quality: 0.98 },
                          html2canvas:  { scale: quality ,useCORS: true},
                          jsPDF:        { unit: 'in', format: page_size, orientation: layout }
                        };
                        
                      html2pdf().set(opt).from(a4Div).save();           
       })






function generatePDF() {

            document.getElementById("popup-container").style.display = "block";
            document.getElementById("close-btn").addEventListener("click", function() {
              document.getElementById("popup-container").style.display = "none";
              document.getElementById("download_PDF").innerHTML = 'Generate <strong class="text-danger">PDF</strong>  Link</strong>';
            });

            document.getElementById("popup-container").addEventListener("click", function(event) {
              if (event.target == this) {
                document.getElementById("popup-container").style.display = "none";
                document.getElementById("download_PDF").innerHTML = 'Generate <strong class="text-danger">PDF</strong>  Link</strong>';
              }
            });
                

}

    function exportHTML(){
       var header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' "+
            "xmlns:w='urn:schemas-microsoft-com:office:word' "+
            "xmlns='http://www.w3.org/TR/REC-html40'>"+
            "<head><meta charset='utf-8'><title>Editletter.com</title></head><body>";
       var footer = "</body></html>";
       var sourceHTML = header+letter_div.innerHTML+footer;
       
       var source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
       var fileDownload = document.createElement("a");
       document.body.appendChild(fileDownload);
       fileDownload.href = source;
       fileDownload.download = 'document.doc';
       fileDownload.click();
       document.body.removeChild(fileDownload);
    }


function w_share_b() {
  var shareText = letter_div.textContent; // Replace with your desired content
  var shareUrl = "https://api.whatsapp.com/send?text=" + encodeURIComponent(shareText) + '%0A' + location.href + ""; 
window.open(shareUrl, "_blank");  
}

function f_share_b() {
  var shareText = letter_div.textContent; // Replace with your desired content
  var shareUrl = "https://www.facebook.com/sharer/sharer.php?u=" + location.href + "&quote=" + encodeURIComponent(shareText); 
window.open(shareUrl, "_blank"); 
}
function tg_share_b() {
  var shareText = letter_div.textContent; // Replace with your desired content
  var shareUrl = "https://telegram.me/share/url?url=" + encodeURIComponent(shareText) + '%0A' + ""; 
window.open(shareUrl, "_blank");
}
function t_share_b() {
  var shareText = letter_div.textContent; // Replace with your desired content
  var shareUrl = "https://twitter.com/intent/tweet?url=" + encodeURIComponent(shareText) + '%0A' + "";
window.open(shareUrl, "_blank");
}
function shareViaGmail() {
  var subject = document.getElementById('subject').textContent;
  var body = letter_div.textContent;
  var mailtoLink = "mailto:?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  window.open(mailtoLink, "_blank");
  
}

copy_letter.addEventListener('click', copy);
save_pdf.addEventListener('click', generatePDF);
edit_button.addEventListener('click', edit_letter);
save_word.addEventListener('click', exportHTML);  
w_share.addEventListener('click', w_share_b);
f_share.addEventListener('click', f_share_b);  
tg_share.addEventListener('click', tg_share_b);
t_share.addEventListener('click', t_share_b);
