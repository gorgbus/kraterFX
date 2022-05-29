class Footer extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="footer">
                <div class="footer_info">
                    <a href="./index.html">krater<span>FX</span></a>
                    <p>Přinášíme příležitost a rovnováhu do kreativního průmyslu. Společně s naší komunitou vytváříme dostupné nástroje a podporu pro tvůrce po celém světě.</p>
                </div>

                <ul class="top">
                    <li>
                        <a href="./kontakt.html">Kontakt</a>

                        <ul>
                            <li><a href="./kontakt.html#kontakt">Kontakt</a></li>
                            <li><a href="./kontakt.html#zamestnanci">Zaměstnanci</a></li>
                        </ul>
                    </li>

                    <li>
                        <a href="./produkty.html">Produkty</a>

                        <ul>
                            <li><a href="./movx.html">movX Pro</a></li>
                            <li><a href="./paintx.html">paintX Pro</a></li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div class="copyright">
                <p>&copy; 2022 kraterFX. Všechna práva vyhrazena.</p>
            </div>
        `;
    }
}

customElements.define("footer-component", Footer);