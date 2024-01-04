document.getElementById('opacity-slider').addEventListener('input', function() {
    var opacity = this.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: toggleDarkness,
            args: [opacity]
        })
        .catch(error => console.error('Error executing script:', error));
    });
});


function toggleDarkness(opacity) {
    var overlay = document.getElementById('darkness-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'darkness-overlay';
        overlay.style.position = 'fixed';
        overlay.style.top = 0;
        overlay.style.left = 0;
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.zIndex = 999999;
        overlay.style.pointerEvents = 'none';
        document.body.appendChild(overlay);
    } 
    overlay.style.backgroundColor = 'rgba(0, 0, 0, ' + opacity + ')';
}