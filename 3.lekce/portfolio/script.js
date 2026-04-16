function showCard(num) {
    let content = "";

    if (num === 1) {
        content = `
        <h1>Adéla Čadilová</h1>
        <p>Jsem studentkou na Pražské konzervatoři a vítám Vás na mém portfoliu.</p>
        <p><b>Oblíbené předměty:</b> Hlavní obor, dějiny hudby, harmonie.</p>
        <p>Momentálně sedím na počítačích, ale nejradši bych spala ve své posteli.</p>
        <p><i>Pro více informací jsem většinou do večera ve škole.</i></p>
        `;
    }

    if (num === 2) {
        content = `
        <h1>Adéla Čadilová</h1>
        <p>Jsem studentkou Pražské konzervatoře a hraju na housle.</p>
        <p><b>Oblíbené činnosti:</b> poslouchání hudby, pečení, běh</p>
        <p style="color:red;">Dnes dobrovolničím se symfonickým orchestrem PK.</p>
        <p>Tohle je moje první stylovaná karta.</p>
        `;
    }

    if (num === 3) {
        content = `
        <h2>AČ</h2>
        <h1>Adéla Čadilová</h1>
        <p>Studentka Pražské konzervatoře. Miluji programování.</p>
        <p>Doufám, že za tuto práci dostanu jedničku.</p>
        <p>Studentka | housle | miluju ovesnou kaši</p>
        <button>Možná vám odpovím :).</button>
        `;
    }

    if (num === 4) {
        content = `
        <h1>Adéla Čadilová</h1>
        <p>Studentka Pražské konzervatoře.</p>

        <h3>O mně</h3>
        <p>Zajímám se o hudbu, sport a programování.</p>

        <h3>Dovednosti</h3>
        <p>Je jich tolik, že je velmi složité je vyjmenovat…</p>

        <h3>Kontakt</h3>
        <p>Email: adela1.cadilova@gmail.com</p>
        `;
    }

    document.getElementById("card").innerHTML = content;
}