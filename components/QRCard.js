const QRCode = require('qrcode');
const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {
            --light-gray: hsl(212, 45%, 89%);
            --grayish-blue: hsl(220, 15%, 55%);
            --dark-blue: hsl(218, 44%, 22%);
        }

        .card, .description {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        ::slotted(h2), ::slotted(p) {
            margin: 0;
            padding: 0;
        }

        ::slotted(h2) {
            font-size: 1.5rem;
        }

        ::slotted(p) {
            margin-bottom: 2rem;
            color: var(--grayish-blue);
        }

        .card {
            gap: 1.5rem;
            box-sizing: border-box;
            font-family: 'Outfit', system-ui, sans-serif;
            border-radius: 1rem;
            background-color: white;
            padding: 1rem;
            max-width: calc(290px + 2rem);
        }

        .qr-code {
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="0" y="0" width="100" height="100" fill="%232b7dfa"></rect><circle cx="0" cy="0" r="60" fill="%233685fe"></circle><circle cx="95" cy="125" r="55" fill="%233685fe"></circle></svg>');
            width: 290px;
            height: 290px;
            border-radius: 0.75rem;
        }
        
        .description {
            gap: 0.75rem;
            color: var(--dark-blue);
            text-align: center;
            padding: 0 0.5rem;
        }
    </style>

    <div class="card">
        <div class="qr-code">
            <canvas></canvas>
        </div>
        <div class="description">
            <slot name="heading"></slot>
            <slot name="caption"></slot>
        </div>
    </div>
`;

class QRCard extends HTMLElement
{
    constructor()
    {
        super();

        const shadow = this.attachShadow({ mode: 'open'});
        // Append the content
        shadow.append(template.content.cloneNode(true));
    }

    static get observedAttributes()
    {
        return['url'];
    }

    get url() {
        return this.getAttribute('url');
    }

    set url(resource) {
        this.setAttribute('url', resource);
    }
}

customElements.define("qr-card", QRCard);