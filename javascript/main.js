function carregarFavicons() {
    const protocol = window.location.protocol;
    if (protocol === 'http:' || protocol === 'https:') {
        fetch('favicons.html')
            .then(response => response.text())
            .then(data => {
                console.log('Favicons carregados com sucesso:', data);
                document.head.insertAdjacentHTML('beforeend', data);
            })
            .catch(error => console.error('Erro ao carregar favicons:', error));
    } else {
        console.warn('Favicons não carregados: abertura via file:// em Firefox pode bloquear fetch. Sirva via HTTP/HTTPS para carregar favicons.');
    }
}
window.addEventListener('DOMContentLoaded', carregarFavicons);

// Renderização de conteúdo dinâmico
console.log('Esperando para renderizar conteúdo dinâmico...')

function renderUFFNoticias() {

    personalDocument();
    updateHeaderTitle('UFF: Notícias');
    toggleBackButton(true);

    document.getElementById('content-dinamico').innerHTML = `
        <h2>UFF: Notícias - Grupo</h2>
        <p>Debates, fofocas, gatinhos e muita gente para conversar. Aqui a discussão é livre (seguindo as regras, é claro).</p>
        <img class="logo" src="img/uffnoticiasgrupo.png" alt="Logo do grupo UFF: Notícias">
        <div class="social-icons">
            <a class="cta-link" href="https://chat.whatsapp.com/EXg3JWt52DnIkmIZMcwEbs" target="_blank" rel="noopener noreferrer">Entrar no Grupo</a>
        </div>
        <h3>Regras do Grupo</h3>
        <ul>
            <li>Respeite os outros membros do grupo.</li>
            <li>Evite postar conteúdo que não seja relacionado à UFF.</li>
            <li>Proibido figurinhas de cunho sexual ou discriminatório.</li>
            <li>Proibido conteúdo de violência explícita.</li>
        </ul>
        <hr>
        <h2>UFF: Notícias - Canal</h2>
        <p>Canal onde só administradores podem falar. Melhor escolha caso você queira ficar mais atualizado só com as notícias.</p>
        <img class="logo" src="img/uffnoticiascanal.png" alt="Logo do canal UFF: Notícias">
        <div class="social-icons">
            <a class="cta-link" href="https://whatsapp.com/channel/0029VaeUeMGAe5VmRIlMT71x" target="_blank" rel="noopener noreferrer">Abrir Canal</a>
        </div>
    `;
    console.log('Renderizou UFF Notícias');
}

function renderUFFBazareVendas() {

    personalDocument();
    updateHeaderTitle('UFF: Bazar/Vendas');
    toggleBackButton(true);

    document.getElementById('content-dinamico').innerHTML = `
        <h2>UFF: Bazar/Vendas</h2>
        <p>Bem-vindo ao grupo UFF: Bazar/Vendas. Aqui você pode comprar e vender itens entre a comunidade da Universidade Federal Fluminense. Conforme os grupos vão ficando lotados, novos vão surgindo.</p>
        <div class="bazar">
            <div class="grupo">
                <img src="img/BazareVendas1.png" alt="Logo do grupo UFF: Bazar/Vendas 1.0">
                <a class="cta-link" href="https://chat.whatsapp.com/GmifC2jS4naLPkmyzTZRfM" target="_blank" rel="noopener noreferrer">Entrar no Grupo 1.0</a>
            </div>
            <div class="grupo">
                <img src="img/BazareVendas2.png" alt="Logo do grupo UFF: Bazar/Vendas 2.0">
                <a class="cta-link" href="https://chat.whatsapp.com/EIroeF8YB306s2Y8OopaVH" target="_blank" rel="noopener noreferrer">Entrar no Grupo 2.0</a>
            </div>
            <div class="grupo">
                <img src="img/BazareVendas3.png" alt="Logo do grupo UFF: Bazar/Vendas 3.0">
                <a class="cta-link" href="https://chat.whatsapp.com/EDLWtpJ8zaGGVHRvwrbll2" target="_blank" rel="noopener noreferrer">Entrar no Grupo 3.0</a>
            </div>
            <div class="grupo">
                <img src="img/BazareVendas4.png" alt="Logo do grupo UFF: Bazar/Vendas 4.0">
                <a class="cta-link" href="https://chat.whatsapp.com/F9LeB58tXup1yywsJzKTeV" target="_blank" rel="noopener noreferrer">Entrar no Grupo 4.0</a>
            </div>
            <div class="grupo">
                <img src="img/BazareVendasUnificado.png" alt="Logo do grupo UFF: Bazar/Vendas Unificado">
                <a class="cta-link" href="https://t.me/+49xcZPKzKoIwMDgx" target="_blank" rel="noopener noreferrer">Entrar no Grupo (Telegram)</a>
            </div>
        </div>
        <h3>Regras do Grupo</h3>
        <ul>
            <li>Respeite os outros membros do grupo.</li>
            <li>Proibido figurinhas de cunho sexual ou discriminatório.</li>
            <li>Proibido conteúdo de violência explícita.</li>
            <li>Permitido apenas anúncios de venda pertencente a discentes da UFF, independente do curso.</li>
            <li>Os administradores não se responsabilizam por transações entre comprador e anunciante.</li>
            <li>Sempre apresentar o preço do produto no momento do anúncio.</li>
            <li>Opiniões sobre valores devem ser tratados diretamente com o anunciante.</li>
        </ul>
    `;
    console.log('Renderizou UFF: Bazar/Vendas');
}

function renderPatadeApoio() {

    personalDocument();
    updateHeaderTitle('Pata de Apoio');
    toggleBackButton(true);

    document.getElementById('content-dinamico').innerHTML = `
        <h2>Pata de Apoio</h2>
        <br>
        <p>😺 Não somos um abrigo!<p>
        <p>🐾 Projeto destinado ao resgate, cuidados, alimentação e adoções responsáveis em Niterói e RJ.<p>
        <p>🐾 Composto por voluntários</p>
        <img class="logo" src="img/patadeapoio.png" alt="Logo do grupo Pata de Apoio">
        <div class="social-icons">
            <a class="cta-link" href="https://www.instagram.com/patadeapoio/" target="_blank" rel="noopener noreferrer">Abrir Instagram</a>
            <a class="cta-link" href="https://chat.whatsapp.com/GmSvnZLLlX8AyyjzUPjXDG" target="_blank" rel="noopener noreferrer">Entrar no Grupo</a>
        </div>
        <h3>Regras do Grupo</h3>
        <ul>
            <li>Respeite os outros membros do grupo.</li>
            <li>Proibido figurinhas de cunho sexual ou discriminatório.</li>
            <li>Proibido conteúdo de violência explícita.</li>
            <li>Proibido flodar mensagens.</li>
            <li>Antes de enviar qualquer post de adoção conferir se não se trata de um golpe.</li>
        </ul>
`;
    console.log('Renderizou Pata de Apoio');
}

function renderCentral() {

    personalDocument();
    updateHeaderTitle('Central Avisy');
    toggleBackButton(true);

    document.getElementById('content-dinamico').innerHTML = `
        <h2>Central Avisy</h2>
        <br>
        <p>Aqui é onde toda a ação acontece! Juntamos todos os grupos oficiais da Avisy em um lugar só pra você não perder nadinha do que rola na nossa comunidade.<p>
        <img class="logo" src="img/central.png" alt="Logo do grupo Central Avisy">
        <div class="social-icons">
            <a class="cta-link" href="https://chat.whatsapp.com/BikQlKaqOvS9DSEd5ZZQZ3" target="_blank" rel="noopener noreferrer">Entrar na Central</a>
        </div>
        <h3>Regras do Grupo</h3>
        <ul>
            <li>Respeite os outros membros do grupo.</li>
            <li>Proibido figurinhas de cunho sexual ou discriminatório.</li>
            <li>Proibido conteúdo de violência explícita.</li>
            <li>Proibido flodar mensagens.</li>
            <li>Antes de enviar qualquer post de adoção conferir se não se trata de um golpe.</li>
        </ul>
`;
    console.log('Renderizou Central Avisy');
}


function renderViewNormal() {
    document.getElementById('view-normal').style.display = 'block';
    document.getElementById('view-dinamica').style.display = 'none';
    document.getElementById('content-dinamico').innerHTML = '';
    updateHeaderTitle('UFF: POPULAR (v3.0)');
    toggleBackButton(false);
    console.log('Voltou para a visualização padrão');
}

function updateHeaderTitle(title) {
    const headerTitle = document.querySelector('.header h1');
    if (headerTitle) headerTitle.textContent = title;
}

function toggleBackButton(show) {
    const backBtn = document.getElementById('btn-back');
    if (!backBtn) return;
    backBtn.style.display = show ? 'inline-block' : 'none';
}

// Funções de apoio

function personalDocument() {
    document.getElementById('view-normal').style.display = 'none';
    document.getElementById('view-dinamica').style.display = 'block';
}

function atualizarHora() {
    document.getElementById('hora-atual').innerHTML = `Hora Atual: ${horaAtual()}`;
}

function horaAtual() {
    const agora = new Date();
    const hora = agora.getHours();
    const minuto = agora.getMinutes().toString().padStart(2, '0');
    return `${hora}:${minuto}`;
}

// Novas páginas: Auxílios e Bolsas, e Repúblicas
function renderAuxiliosEBolsas() {
    personalDocument();
    updateHeaderTitle('Auxílios e Bolsas');
    toggleBackButton(true);

    document.getElementById('content-dinamico').innerHTML = `
        <h2>Auxílios e Bolsas</h2>
        <p>Espaço para divulgação e discussão de auxílios, bolsas e oportunidades para estudantes da UFF.</p>
        <img class="logo" src="img/aux.jpeg" alt="Imagem Auxílios e Bolsas">
        <div class="social-icons">
            <a class="cta-link" href="https://chat.whatsapp.com/GnweZX5kG1vAHlCMT2N3Ld?mode=hqrt3" target="_blank" rel="noopener noreferrer">Entrar no Grupo</a>
        </div>
        <h3>Regras do Grupo</h3>
        <ul>
            <li>Respeite os outros membros do grupo.</li>
            <li>Mantenha o conteúdo relacionado a auxílios, bolsas e oportunidades acadêmicas.</li>
            <li>Proibido conteúdo discriminatório ou sexual.</li>
            <li>Evite spam.</li>
        </ul>
    `;
    console.log('Renderizou Auxílios e Bolsas');
}

function renderRepublicas() {
    personalDocument();
    updateHeaderTitle('Repúblicas');
    toggleBackButton(true);

    document.getElementById('content-dinamico').innerHTML = `
        <h2>Repúblicas</h2>
        <p>Divulgação de vagas e informações sobre repúblicas e moradias estudantis em Niterói.</p>
        <img class="logo" src="img/rep.jpeg" alt="Imagem Repúblicas">
        <div class="social-icons">
            <a class="cta-link" href="https://chat.whatsapp.com/GnweZX5kG1vAHlCMT2N3Ld?mode=hqrt3" target="_blank" rel="noopener noreferrer">Entrar no Grupo</a>
            <a class="cta-link" href="https://chat.whatsapp.com/GPVj0ackIIJEf6xBbCAs4t?mode=hq2tcla" target="_blank" rel="noopener noreferrer">Entrar no Grupo 2.0</a>
        </div>
        <h3>Regras do Grupo</h3>
        <ul>
            <li>Respeite os outros membros do grupo.</li>
            <li>Conteúdo focado em moradias estudantis e repúblicas.</li>
            <li>Proibido conteúdo discriminatório ou sexual.</li>
            <li>Evite spam.</li>
        </ul>
    `;
    console.log('Renderizou Repúblicas');
}