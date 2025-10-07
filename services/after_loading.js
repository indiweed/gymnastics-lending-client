document.addEventListener('DOMContentLoaded', function() {
    const maxLoaderTime = 8000;
    const loader = document.getElementById('pageLoader');
    
    function hideLoader() {
        document.body.classList.add('loaded');
        loader.style.opacity = '0';
        setTimeout(function() {
            loader.style.display = 'none';
        }, 500);
    }
    
    window.addEventListener('load', hideLoader);
    
    const backupTimer = setTimeout(hideLoader, maxLoaderTime);
    
    window.addEventListener('load', function() {
        clearTimeout(backupTimer);
    });
});