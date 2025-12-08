
function showPage(pageId) {
   
    const allPages = document.querySelectorAll('.page-content');
    
   
    allPages.forEach(function(page) {
        
        page.style.display = 'none';
    });
    
    const targetPage = document.getElementById(pageId);
    
   
    if (targetPage) {
        targetPage.style.display = 'block';
    }
}

function initializeWebsite() {
   
    showPage('intro-page'); 
}

window.onload = initializeWebsite;