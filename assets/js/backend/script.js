$(document).ready(function () {
    if (!Modernizr.websockets) {
        alert('WebSockets are not supported.');
        return;
    }

    var settings = {
    	host: 'ws://localhost:9000',
    	pictureContainerID: 'menu-area',
    	pictureID: 'picture',
    	titleID: 'title'
    };

    pixSocket.connect(settings);
});



