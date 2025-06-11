document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".menu-container");

    fetch("../data/principal.json")
        .then(res => {
            if (!res.ok) throw new Error("Erro ao carregar JSON");
            return res.json();
        })
        .then(data => {
            container.innerHTML = ""; // limpa os cards fixos
            data.principal.forEach(item => {
                const card = document.createElement("div");
                card.classList.add("card-prato");

                card.innerHTML = `
                    <img src="${item.imagem}" alt="${item.nome}">
                    <div class="info">
                        <h2>${item.nome}</h2>
                        <p>${item.descricao}</p>
                        <span class="preco">R$ ${item.preco.toFixed(2)}</span>
                    </div>
                `;
                container.appendChild(card);
            });
        })
        .catch(err => {
            container.innerHTML = "<p style='color: red;'>Erro ao carregar o cardápio.</p>";
            console.error(err);
        });
});
