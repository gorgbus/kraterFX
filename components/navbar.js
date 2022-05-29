class Navbar extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = `
            <nav>
                <div class="shadow"></div>

                <ul>
                    <li class="logo"><a href="./index.html">krater<span>FX</span></a></li>
                    <li><a href="./kontakt.html">Kontakt</a></li>
                    <li>
                        <a href="./produkty.html">Produkty</a>

                        <ul>
                            <li onclick="window.location.href='./movx.html'"><a href="./movx.html">movX Pro</a></li>
                            <li onclick="window.location.href='./paintx.html'"><a href="./paintx.html">paintX Pro</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        `;
    }
}

customElements.define('navbar-component', Navbar);