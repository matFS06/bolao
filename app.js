// CONFIGURAÇÕES DE CONEXÃO DO SUPABASE
const SUPABASE_URL = "https://seu-projeto.supabase.co"; 
const SUPABASE_ANON_KEY = "sua-chave-anon-aqui";
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const tournamentData = {
    "A": [{ id: "a1", team1: "México", team2: "África do Sul" }, { id: "a2", team1: "Coreia do Sul", team2: "Rep. Tcheca" }, { id: "a3", team1: "República Tcheca", team2: "África do Sul" }, { id: "a4", team1: "México", team2: "Coreia do Sul" }, { id: "a5", team1: "África do Sul", team2: "Coreia do Sul" }, { id: "a6", team1: "República Tcheca", team2: "México" }],
    "B": [{ id: "b1", team1: "Canadá", team2: "Bósnia" }, { id: "b2", team1: "Catar", team2: "Suíça" }, { id: "b3", team1: "Suíça", team2: "Bósnia" }, { id: "b4", team1: "Canadá", team2: "Catar" }, { id: "b5", team1: "Suíça", team2: "Canadá" }, { id: "b6", team1: "Bósnia", team2: "Catar" }],
    "C": [{ id: "c1", team1: "Brasil", team2: "Marrocos" }, { id: "c2", team1: "Haiti", team2: "Escócia" }, { id: "c3", team1: "Escócia", team2: "Marrocos" }, { id: "c4", team1: "Brasil", team2: "Haiti" }, { id: "c5", team1: "Marrocos", team2: "Haiti" }, { id: "c6", team1: "Escócia", team2: "Brasil" }],
    "D": [{ id: "d1", team1: "Estados Unidos", team2: "Paraguai" }, { id: "d2", team1: "Austrália", team2: "Turquia" }, { id: "d3", team1: "Estados Unidos", team2: "Austrália" }, { id: "d4", team1: "Turquia", team2: "Paraguai" }, { id: "d5", team1: "Turquia", team2: "Estados Unidos" }, { id: "d6", team1: "Paraguai", team2: "Austrália" }],
    "E": [{ id: "e1", team1: "Alemanha", team2: "Curaçao" }, { id: "e2", team1: "Costa do Marfim", team2: "Equador" }, { id: "e3", team1: "Alemanha", team2: "Costa do Marfim" }, { id: "e4", team1: "Equador", team2: "Curaçao" }, { id: "e5", team1: "Equador", team2: "Alemanha" }, { id: "e6", team1: "Curaçao", team2: "Costa do Marfim" }],
    "F": [{ id: "f1", team1: "Holanda", team2: "Japão" }, { id: "f2", team1: "Suécia", team2: "Tunísia" }, { id: "f3", team1: "Holanda", team2: "Suécia" }, { id: "f4", team1: "Tunísia", team2: "Japão" }, { id: "f5", team1: "Tunísia", team2: "Holanda" }, { id: "f6", team1: "Japão", team2: "Suécia" }],
    "G": [{ id: "g1", team1: "Bélgica", team2: "Egito" }, { id: "g2", team1: "Irã", team2: "Nova Zelândia" }, { id: "g3", team1: "Bélgica", team2: "Irã" }, { id: "g4", team1: "Nova Zelândia", team2: "Egito" }, { id: "g5", team1: "Egito", team2: "Irã" }, { id: "g6", team1: "Nova Zelândia", team2: "Bélgica" }],
    "H": [{ id: "h1", team1: "Espanha", team2: "Cabo Verde" }, { id: "h2", team1: "Arábia Saudita", team2: "Uruguai" }, { id: "h3", team1: "Espanha", team2: "Arábia Saudita" }, { id: "h4", team1: "Uruguai", team2: "Cabo Verde" }, { id: "h5", team1: "Cabo Verde", team2: "Arábia Saudita" }, { id: "h6", team1: "Uruguai", team2: "Espanha" }],
    "I": [{ id: "i1", team1: "França", team2: "Senegal" }, { id: "i2", team1: "Iraque", team2: "Noruega" }, { id: "i3", team1: "França", team2: "Iraque" }, { id: "i4", team1: "Noruega", team2: "Senegal" }, { id: "i5", team1: "Senegal", team2: "Iraque" }, { id: "i6", team1: "Noruega", team2: "França" }],
    "J": [{ id: "j1", team1: "Argentina", team2: "Argélia" }, { id: "j2", team1: "Áustria", team2: "Jordânia" }, { id: "j3", team1: "Argentina", team2: "Áustria" }, { id: "j4", team1: "Jordânia", team2: "Argélia" }, { id: "j5", team1: "Jordânia", team2: "Argentina" }, { id: "j6", team1: "Argélia", team2: "Áustria" }],
    "K": [{ id: "k1", team1: "Portugal", team2: "RD do Congo" }, { id: "k2", team1: "Uzbequistão", team2: "Colômbia" }, { id: "k3", team1: "Portugal", team2: "Uzbequistão" }, { id: "k4", team1: "Colômbia", team2: "RD do Congo" }, { id: "k5", team1: "RD do Congo", team2: "Uzbequistão" }, { id: "k6", team1: "Colômbia", team2: "Portugal" }],
    "L": [{ id: "l1", team1: "Inglaterra", team2: "Croácia" }, { id: "l2", team1: "Gana", team2: "Panamá" }, { id: "l3", team1: "Inglaterra", team2: "Gana" }, { id: "l4", team1: "Panamá", team2: "Croácia" }, { id: "l5", team1: "Croácia", team2: "Gana" }, { id: "l6", team1: "Panamá", team2: "Inglaterra" }]
};

document.addEventListener("DOMContentLoaded", function() {
    // Inicialização condicional dependendo da página em execução
    if (document.getElementById("groupsContainer")) {
        renderFormStructures();
        checkLogin();
        
        document.getElementById("btnGoBets").addEventListener("click", () => showSection('bets'));
        document.getElementById("btnGoRanking").addEventListener("click", () => showSection('ranking'));
        document.getElementById("btnLogout").addEventListener("click", logout);

        // Processamento do Login
        document.getElementById("loginForm").addEventListener("submit", async function(e) {
            e.preventDefault();
            const user = document.getElementById("loginUsername").value.trim().toLowerCase();
            const pass = document.getElementById("loginPassword").value;

            const { data, error } = await supabase.from('palpites_usuarios').select('username, nome, password').eq('username', user).single();

            if (error || !data || data.password !== pass) {
                alert("Usuário ou senha incorretos!");
            } else {
                localStorage.setItem("bolao_user", data.username);
                localStorage.setItem("bolao_name", data.nome);
                checkLogin();
            }
        });

        // Gravação de Palpites
        document.getElementById("betForm").addEventListener("submit", async function(e) {
            e.preventDefault();
            const user = localStorage.getItem("bolao_user");

            let dadosExtras = {
                username: user,
                palpite_primeiro_gol_brasil: document.getElementById("palpiteGolBrasil").value.trim(),
                palpite_campeao: document.getElementById("p_campeao").value.trim(),
                palpite_vice: document.getElementById("p_vice").value.trim(),
                palpite_terceiro: document.getElementById("p_terceiro").value.trim(),
                palpite_quarto: document.getElementById("p_quarto").value.trim(),
            };

            for(const g in tournamentData) {
                dadosExtras[`p1_${g}`] = document.getElementById(`p1_${g}`).value.trim();
                dadosExtras[`p2_${g}`] = document.getElementById(`p2_${g}`).value.trim();
            }

            await supabase.from('palpites_usuarios').update(dadosExtras).eq('username', user);

            let capsulaJogos = [];
            for (const group in tournamentData) {
                tournamentData[group].forEach(match => {
                    const s1 = document.querySelector(`input[name="score_${match.id}_1"]`).value;
                    const s2 = document.querySelector(`input[name="score_${match.id}_2"]`).value;
                    if(s1 !== "" && s2 !== "") {
                        capsulaJogos.push({
                            username: user,
                            jogo_id: match.id,
                            gols_time1_palpite: parseInt(s1),
                            gols_time2_palpite: parseInt(s2)
                        });
                    }
                });
            }

            if(capsulaJogos.length > 0) {
                await supabase.from('palpites_jogos').upsert(capsulaJogos);
            }

            alert("Seus palpites foram salvos com sucesso!");
            showSection('ranking');
        });
    }

    // Processamento do Formulário de Cadastro (Apenas na cadastro.html)
    if (document.getElementById("registerForm")) {
        document.getElementById("registerForm").addEventListener("submit", async function(e) {
            e.preventDefault();
            const user = document.getElementById("regUsername").value.trim().toLowerCase();
            const nomeCompleto = document.getElementById("regNome").value.trim();
            const pass = document.getElementById("regPassword").value;

            const { data: userExist } = await supabase.from('palpites_usuarios').select('username').eq('username', user).maybeSingle();
            if(userExist) {
                alert("Este nome de usuário já está sendo utilizado!");
                return;
            }

            const { error } = await supabase.from('palpites_usuarios').insert({
                username: user, nome: nomeCompleto, sobrenome: "", password: pass
            });

            if(!error) {
                alert("Cadastro realizado com sucesso!");
                localStorage.setItem("bolao_user", user);
                localStorage.setItem("bolao_name", nomeCompleto);
                window.location.href = "index.html"; // Retorna logado para a dashboard
            } else {
                alert("Erro ao realizar o cadastro.");
            }
        });
    }
});

function checkLogin() {
    const user = localStorage.getItem("bolao_user");
    const name = localStorage.getItem("bolao_name");
    const loginScreen = document.getElementById("loginScreen");
    const mainDashboard = document.getElementById("mainDashboard");

    if(user) {
        if(loginScreen) loginScreen.classList.add("hide");
        if(mainDashboard) {
            mainDashboard.classList.remove("hide");
            document.getElementById("welcomeUser").innerText = `@${user}`;
            document.getElementById("welcomeName").innerText = `Bem-vindo, ${name}!`;
        }
        loadUserSavedData(user);
        showSection('bets');
    } else {
        if(loginScreen) loginScreen.classList.remove("hide");
        if(mainDashboard) mainDashboard.classList.add("hide");
    }
}

function logout() {
    localStorage.clear();
    window.location.href = "index.html";
}

async function showSection(section) {
    const secBets = document.getElementById("sectionBets");
    const secRanking = document.getElementById("sectionRanking");
    if(!secBets || !secRanking) return;

    if(section === 'bets') {
        secBets.classList.remove("hide");
        secRanking.classList.add("hide");
        document.getElementById("btnGoBets").className = "btn btn-success btn-lg w-100 py-3 shadow-sm fw-bold";
        document.getElementById("btnGoRanking").className = "btn btn-outline-success btn-lg w-100 py-3 shadow-sm fw-bold";
    } else {
        secBets.classList.add("hide");
        secRanking.classList.remove("hide");
        document.getElementById("btnGoBets").className = "btn btn-outline-success btn-lg w-100 py-3 shadow-sm fw-bold";
        document.getElementById("btnGoRanking").className = "btn btn-success btn-lg w-100 py-3 shadow-sm fw-bold";
        await fetchRankingGeral();
    }
}

function renderFormStructures() {
    const winContainer = document.getElementById("groupWinnersContainer");
    if(!winContainer) return;
    winContainer.innerHTML = "";
    for(const g in tournamentData) {
        winContainer.innerHTML += `
            <div class="col-md-3 col-6 mb-2">
                <div class="p-2 border rounded bg-light">
                    <span class="fw-bold text-secondary d-block text-center mb-1">Grupo ${g}</span>
                    <input type="text" id="p1_${g}" class="form-control form-control-sm mb-1" placeholder="1º Colocado" required>
                    <input type="text" id="p2_${g}" class="form-control form-control-sm" placeholder="2º Colocado" required>
                </div>
            </div>`;
    }

    const container = document.getElementById("groupsContainer");
    if(!container) return;
    container.innerHTML = "";
    for (const group in tournamentData) {
        let html = `<div class="card card-custom p-4 mb-4 ${group === 'C' ? 'border-start border-warning border-4' : ''}">
                        <h4 class="text-success border-bottom pb-2 mb-3 fw-bold">Grupo ${group} ${group === 'C' ? '⭐ (Pts Dobrados)' : ''}</h4>`;
        tournamentData[group].forEach(match => {
            html += `
                <div class="row match-row text-center">
                    <div class="col-4 text-end team-name">${match.team1}</div>
                    <div class="col-4 d-flex justify-content-center align-items-center gap-2">
                        <input type="number" min="0" class="form-control score-input" name="score_${match.id}_1" required>
                        <span class="fw-bold text-muted">X</span>
                        <input type="number" min="0" class="form-control score-input" name="score_${match.id}_2" required>
                    </div>
                    <div class="col-4 text-start team-name">${match.team2}</div>
                </div>`;
        });
        html += `</div>`;
        container.innerHTML += html;
    }
}

async function loadUserSavedData(user) {
    const { data: userData } = await supabase.from('palpites_usuarios').select('*').eq('username', user).single();
    if(userData) {
        if(document.getElementById("palpiteGolBrasil")) document.getElementById("palpiteGolBrasil").value = userData.palpite_primeiro_gol_brasil || "";
        if(document.getElementById("p_campeao")) document.getElementById("p_campeao").value = userData.palpite_campeao || "";
        if(document.getElementById("p_vice")) document.getElementById("p_vice").value = userData.palpite_vice || "";
        if(document.getElementById("p_terceiro")) document.getElementById("p_terceiro").value = userData.palpite_terceiro || "";
        if(document.getElementById("p_quarto")) document.getElementById("p_quarto").value = userData.palpite_quarto || "";
        
        for(const g in tournamentData) {
            if(userData[`p1_${g}`] && document.getElementById(`p1_${g}`)) document.getElementById(`p1_${g}`).value = userData[`p1_${g}`];
            if(userData[`p2_${g}`] && document.getElementById(`p2_${g}`)) document.getElementById(`p2_${g}`).value = userData[`p2_${g}`];
        }
    }

    const { data: gamesData } = await supabase.from('palpites_jogos').select('*').eq('username', user);
    if(gamesData) {
        gamesData.forEach(p => {
            const i1 = document.querySelector(`input[name="score_${p.jogo_id}_1"]`);
            const i2 = document.querySelector(`input[name="score_${p.jogo_id}_2"]`);
            if(i1 && i2) {
                i1.value = p.gols_time1_palpite;
                i2.value = p.gols_time2_palpite;
            }
        });
    }
}

async function fetchRankingGeral() {
    const { data: ranking, error } = await supabase.from('ranking_geral').select('*');
    const tbody = document.getElementById("rankingBody");
    if(!tbody || error) return;
    tbody.innerHTML = "";

    ranking.forEach((row, index) => {
        let pos = index + 1;
        let cls = pos === 1 ? 'podium-1' : pos === 2 ? 'podium-2' : pos === 3 ? 'podium-3' : '';
        
        tbody.innerHTML += `
            <tr>
                <td class="${cls}">${pos}º</td>
                <td class="text-start fw-bold text-secondary">@${row.username}</td>
                <td><span class="badge bg-success fs-6">${row.pontuacao_total} Pts</span></td>
                <td>${row.desempate_1_placar_br}</td>
                <td>${row.desempate_2_placar_geral}</td>
                <td>${row.desempate_3_campeao === 1 ? '✅' : '❌'}</td>
                <td>${row.desempate_4_g1}</td>
                <td>${row.desempate_5_g2}</td>
                <td>${row.desempate_6_gol_br === 1 ? '✅' : '❌'}</td>
            </tr>`;
    });
}