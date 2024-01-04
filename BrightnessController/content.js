chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "toggleDarkness") {
        var overlay = document.getElementById('darkness-overlay');
        if (overlay) {
            overlay.remove();
        } else {
            overlay = document.createElement('div');
            overlay.id = 'darkness-overlay';
            overlay.style.position = 'fixed';
            overlay.style.top = 0;
            overlay.style.left = 0;
            overlay.style.width = '100%';
            overlay.style.height = '100%';
            overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
            overlay.style.zIndex = 999999;
            document.body.appendChild(overlay);
        }
    }
});