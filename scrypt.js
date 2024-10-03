incipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "o futuro da humanidade parece caminhar para o que muitos filmes previam: uma sociedade em que a inteligência artificial e os robôs terão um papel decisivo na umanidade mais essa tecnologia tambem pode acabar com o mundo e nos humanos nao teremos mais o nosso proposito?
            {
                texto: "Isso é assustador!",
                afirmacao: "No início ficou com medo do que essa tecnologia pode fazer. "
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "os robos vao ajudar muito a humanidade."
            }
        ]
    },
    {
        enunciado: "Em um mundo em que a tecnologia está cada vez mais presente no cotidiano, é imprescindível ter habilidades e competências tecnológicas para desenvolver uma atitude crítica e realista frente às novas tecnologias. Nesse sentido, o aprendizado contínuo é a escolha certa para se capacitar, fazer bom uso e se beneficiar dos avanços tecnológicos. 

        alternativas: [
            {
                texto: "isso e de dar medo"
                afirmacao: "isso e perigoso para a humanidade."
            },
            {
                texto: "isso e magico.",
                afirmacao: "e incrivel e sera de grande ajuda para a humanidade."
            }
        ]
    },
    {
        enunciado: "Antes a internet servia para conectar as pessoas mundo afora. Para isso, bastava ter um computador e um ponto de acesso. Mas, de 2008 para cá, o número de coisas conectadas superou o de pessoas conectadas.

O problema é que não sabemos usar a tecnologia a nosso favor. Nossa cultura não busca o prazer da vida, pois é voltada para o trabalho. Um dia continua tendo 24 horas e a gente não conseguiu entender como usar melhor nosso tempo, mesmo com todas as ferramentas disponíveis.

        alternativas: [
            {
                texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao: "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA."
            },
            {
                texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."
            }
        ]
    },
    {
        enunciado: "Apesar de a chamarmos de IA, ela não tem nada de inteligente. Sobretudo se compararmos com o ser humano, que é dotado de raciocínio. A gente consegue raciocinar, além de combinar sentimentos, cognições, instinto, intuição. Isso não se consegue simular de forma alguma. A IA é baseada em treinamento, o que é bem diferente.

        alternativas: [
            {
                texto: "isso e uma verdade.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais"
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "O que é inteligência artificial? A Inteligência Artificial descreve um processo no qual as máquinas “aprendem” a aprender. Sistemas de computador imitam a inteligência humana, simulando um comportamento inteligente baseado em padrões especificados ou aprendidos. Um sistema de AI percebe seu ambiente (como o uso de câmeras e sensores), reconhece relacionamentos e deriva ações deles.
        alternativas: [I
            
            
            
            
                texto: "a inteligentcia artificial e perigosa para a humanidade".",
                afirmacao: "ela n vai ser neficiente para os humanos."
            },
            {
                texto: "e incrivel para a humanidade.",
                afirmacao: "vai ser majico para a humanidade e sera de grande ajuda. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();