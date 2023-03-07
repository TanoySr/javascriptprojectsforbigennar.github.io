const blockquotes = document.querySelectorAll('blockquote');
    const contentArr = Array.from(blockquotes).map(quote => quote.innerHTML);
    const contentContainer = document.getElementById('content-container');
    const paginationContainer = document.querySelector('.pagination');
    const PAGE_SIZE = 1; 
    const MAX_BUTTONS = 5;
    let currentPage = 1; 
    const totalPages = Math.ceil(contentArr.length / PAGE_SIZE);
    let startPage, endPage;
    if (totalPages <= MAX_BUTTONS) {
      startPage = 1;
      endPage = totalPages;
    } else {
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
function updatePagination() {
  paginationContainer.innerHTML = '';
  let startPage, endPage;
  if (totalPages <= MAX_BUTTONS) {
    startPage = 1;
    endPage = totalPages;
  } else {
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
  if (totalPages <= 1) {
    prevButton.style.display = 'none';
    nextButton.style.display = 'none';
  } else {
    prevButton.style.display = 'inline-block';
    nextButton.style.display = 'inline-block';
  }
}
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
document.getElementById("download_PDF").addEventListener("click",()=>{
      var m = document.getElementById("margin").value;
      var quality = document.getElementById("quality").value;
      var page_size = document.getElementById("page_size").value;
      var layout = document.getElementById("layout").value;
                 console.log(m);              
                    const a4Div = letter_div.innerHTML;
                        var opt = {
                          margin:       [0.50, 0, 0, 0],
                          filename:     'Editletter.pdf',
                          image:        { type: 'jpg', quality: 0.98 },
                          html2canvas:  { scale: quality ,useCORS: true,letterRendering: true},
                          jsPDF:        { unit: 'in', format: page_size, orientation: layout },
                          pagebreak:{
                              mode: ['avoid-all', 'css', 'legacy'],
                              avoid: 'div.recgrid-item'
                          }
                        };
                        var count = 10; 
                        var downloadButton = document.getElementById("download_PDF");
                        downloadButton.disabled = true;
                        downloadButton.innerHTML = "Downloading in " + count + " seconds...";
                        var countdownInterval = setInterval(function() {
                          count--;
                          downloadButton.innerHTML = "Downloading in " + count + " seconds...";
                          if (count === 0) {
                            clearInterval(countdownInterval);
                            downloadButton.innerHTML = "Downloading....";
                            downloadButton.disabled = false;
                          }
                        }, 1000);
                        setTimeout(function() {
                          html2pdf().set(opt).from(a4Div).save();
                        }, 10000); 
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
  var shareText = letter_div.textContent; 
  var shareUrl = "https://api.whatsapp.com/send?text=" + encodeURIComponent(shareText) + '%0A' + location.href + ""; 
window.open(shareUrl, "_blank");  
}
function f_share_b() {
  var shareText = letter_div.textContent; 
  var shareUrl = "https://www.facebook.com/sharer/sharer.php?u=" + location.href + "&quote=" + encodeURIComponent(shareText); 
window.open(shareUrl, "_blank"); 
}
function tg_share_b() {
  var shareText = letter_div.textContent; 
  var shareUrl = "https://telegram.me/share/url?url=" + encodeURIComponent(shareText) + '%0A' + ""; 
window.open(shareUrl, "_blank");
}
function t_share_b() {
  var shareText = letter_div.textContent; 
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
