/// <reference types="@altv/types-client" />
import alt from 'alt-client';

let chatVisible = false;
let chatLoaded = false;
let chatView = undefined;

alt.onServer('log', (message)=>{
    alt.log('[SERVER] ' + message)
    chatView.emit('chat:Message', '{FF4040}[SERVER] {FFFFFF}' + message);
});
chatView = new alt.WebView('http://resource/client/html/index.html');

chatView.on('chat:Ready', () => {
    chatLoaded = true;
    chatVisible = true;
});

export function log(message) {
    if (!chatLoaded) return;
    alt.log(message)
    chatView.emit('chat:Message', '{FFFF00}[CLIENT] {FFFFFF}' + message);
}



