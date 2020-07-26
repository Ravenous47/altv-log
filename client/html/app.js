Vue.config.devtools = true;

const app = new Vue({
    el: '#app',
    data() {
        return {
            maxMessages: 50,
            currentMessage: '',
            visible: true,
            messages: []
        };
    },
    computed: {
        reversedMessages() {
            return this.messages.slice().reverse();
        }
    },
    methods: {
        appendMessage(message) {
            this.messages.push(message);

            if (this.messages.length > this.maxMessages) {
                this.messages.shift();
            }
        },
    },
    filters: {
        colorify(text) {
            let matches = [];
            let m = null;
            let curPos = 0;

            if (!text) {
                return;
            }
            do {
                m = /\{[A-Fa-f0-9]{3}\}|\{[A-Fa-f0-9]{6}\}/g.exec(text.substr(curPos));

                if (!m) {
                    break;
                }

                matches.push({
                    found: m[0],
                    index: m['index'] + curPos
                });

                curPos = curPos + m['index'] + m[0].length;
            } while (m != null);

            if (matches.length > 0) {
                text += '</font>';

                for (let i = matches.length - 1; i >= 0; --i) {
                    let color = matches[i].found.substring(1, matches[i].found.length - 1);
                    let insertHtml = (i != 0 ? '</font>' : '') + '<font color="#' + color + '">';
                    text = text.slice(0, matches[i].index) + insertHtml + text.slice(matches[i].index + matches[i].found.length, text.length);
                }
            }

            return text;
        }
    },
    mounted() {
        if ('alt' in window) {
            alt.on('chat:Message', this.appendMessage);
            alt.emit('chat:Ready');
        }
    }
});
