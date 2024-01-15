

function modifyImages() {
    const allImages = document.querySelectorAll('img');
  
    allImages.forEach(img => {
      img.src = 'https://cdn.britannica.com/54/60154-050-055103B9/Joseph-Stalin-1950.jpg?w=300&h=169&c=crop';
    });
  }
  
  // Run the function when the DOM is ready or if it changes
  document.addEventListener('DOMContentLoaded', modifyImages);
  document.addEventListener('yt-navigate-finish', modifyImages);
  
  // Observe DOM changes for dynamically loaded content
  const observer = new MutationObserver(modifyImages);
  observer.observe(document.body, { childList: true, subtree: true });
  