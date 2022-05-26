class Navbar extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = `
            <nav>
                <div class="shadow"></div>

                <ul>
                    <li class="logo"><a href="index.html">krater<span>FX</span></a></li>
                    <li><a href="kontakt.html">Kontakt</a></li>
                    <li><a href="produkty.html">Produkty</a></li>
                    <li><a href="o_nas.html">O nás</a></li>
                </ul>
            </nav>
        `;
    }
}

customElements.define('navbar-component', Navbar);