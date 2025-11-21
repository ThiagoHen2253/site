const provasCorretas = ["sangue", "corpo"];
const suspeitoCulpado = 3;
const suspeitos = {
    1: {
        nome: "Carlos Mendes",
    },
    2: {
        nome: "Juliana Rocha",
    },
    3: {
        nome: "Rogério Silva",
    },
    4: {
        nome: "Bruno Almeida",
    },
    5: {
        nome: "Marina Torres",
    }
};

function pegarProvasSelecionadas() {
    return Array.from(document.querySelectorAll('.evidence:checked')).map(el => el.value);
}

function mostrarResultado(texto, tipo = 'danger') {
    const box = document.getElementById('resultado');
    box.innerHTML = `
        <div class="alert alert-${tipo}" role="alert">
            ${texto}
        </div>
    `;
}

function atualizarSuspeitoCard(id) {
    const card = document.getElementById('suspeitoCard');
    const desc = document.getElementById('suspeitoDescricao');

    if (!id) {
        card.innerHTML = "";
        desc.textContent = "";
        return;
    }

    const s = suspeitos[id];

    card.innerHTML = `
        <div class="card bg-dark text-light border-secondary mx-auto" style="max-width:220px;">
            <img src="${s.img}" class="card-img-top rounded-top" alt="${s.nome}" style="height:220px; object-fit:cover;">
            <div class="card-body p-2">
                <h6 class="card-title mb-0">${s.nome}</h6>
            </div>
        </div>
    `;

    desc.textContent = s.descricao;
}

document.getElementById('suspeito').addEventListener('change', (e) => {
    atualizarSuspeitoCard(e.target.value);
});

document.getElementById('finalizar').addEventListener('click', () => {
    const provas = pegarProvasSelecionadas();
    const suspeitoSelecionado = document.getElementById('suspeito').value;

    if (provasCorretas.some(p => !provas.includes(p))) {
        mostrarResultado("Você deixou provas importantes para trás.", "danger");
        return;
    }

    if (!suspeitoSelecionado) {
        mostrarResultado("Selecione um suspeito antes de finalizar.", "warning");
        return;
    }

    if (parseInt(suspeitoSelecionado) === suspeitoCulpado) {
        mostrarResultado("✔ Caso resolvido! Você encontrou o verdadeiro culpado.", "success");
    } else {
        mostrarResultado("❌ Você prendeu uma pessoa inocente. O verdadeiro culpado permanece livre.", "danger");
    }
});