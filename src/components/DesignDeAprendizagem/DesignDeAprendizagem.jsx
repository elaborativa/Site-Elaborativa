import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { useState } from 'react';
import {
  ResponsiveContainer,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
} from 'recharts';

import styles from './DesignDeAprendizagem.module.css';
import Footer from '../Footer';
import { FormikProvider, useFormik, useFormikContext } from 'formik';
import fonte from '../../imgs/fonte.png';

const GRUPOS = [
  [
    'Eu consigo manter o ritmo de uma música com um instrumento de percussão',
    'Eu consigo me lembrar com detalhes importantes de lugares que visitei',
    'Eu percebo como as pessoas se sentem em seus relacionamentos',
    'Eu geralmente sei como me sinto em relação às coisas e a meus sentimentos',
    'Eu sempre quero saber como as coisas funcionam',
    'Minhas melhores ideias surgem em uma caminhada ou corrida',
    'Sou ótimo em jogos de palavras cruzadas, anagramas e cruzadinhas',
  ],
  [
    'Aprendo novos esportes com facilidade',
    'Eu tenho um interesse grande em saber mais sobre mim mesmo',
    'Línguas e estudos sociais são mais fáceis para mim do que ciências exatas',
    'Matemática e ciências são minhas matérias preferidas na escola',
    'Para mim, Geometria é mais fácil do que outras matérias da escola',
    'Quando sei alguma coisa, gosto de ensinar para outras pessoas',
    'Toco um instrumento musical',
  ],
  [
    'Eu organizo as coisas em minha mesa de trabalho com categoria e padrão',
    'Eu prefiro passar a noite em casa do que em uma festa animada',
    'Eu tenho facilidade para resolver quebra cabeça',
    'Gosto de passar meu tempo ao ar livre',
    'Minha coleção musical está entre as coisas mais preciosas para mim',
    'Prefiro praticar esportes em equipes',
    'Meus livros estão entre as coisas mais preciosas para mim',
  ],
  [
    'Eu acho difícil ficar sentado quieto por muito tempo',
    'Eu acredito que quase tudo tem uma explicação racional',
    'Eu consigo facilmente me orientar em locais pouco conhecidos',
    'Eu consigo perceber quando uma nota musical está desafinada',
    'Eu me sinto confortável em meio a uma multidão',
    'Penso em ter meu próprio negócio e ser meu chefe',
    'Eu percebo erros gramaticais quando outras pessoas falam, nem sempre as corrijo',
  ],
  [
    'As pessoas costumam me ver como solitário',
    'As pessoas dizem que eu tenho uma voz agradável',
    'Costumo desafiar meus amigos em jogos estratégicos',
    'Costumo gesticular bastante quando estou conversando com as pessoas',
    'Eu consigo visualizar imagens claramente quando fecho os olhos',
    'Eu me lembro de frases de efeito ou citações e uso-as como em conversas',
    'Tenho pelo menos, três amigos íntimos',
  ],
];

const ESCALAS = ['0', '1', '2', '3', '4', '5', '6'];
const TOTAL_ESCALAS = ESCALAS.length;

function validate(values) {
  const grupos = [
    values.grupo1,
    values.grupo2,
    values.grupo3,
    values.grupo4,
    values.grupo5,
  ];

  const hasAllOptionsSelected = grupos.every(
    (grupo) =>
      grupo.filter((opcao) => ESCALAS.includes(opcao)).length === TOTAL_ESCALAS
  );

  if (!hasAllOptionsSelected) {
    return 'Selecione todas as opções para cada grupo';
  }

  return null;
}

const INTELIGENCIAS = {
  MATEMATICA: 'Matemática',
  ESPACIAL: 'Espacial',
  CINESTESICA: 'Cinestésica',
  LINGUISTICA: 'Linguística',
  MUSICAL: 'Musical',
  INTERPESSOAL: 'Interpessoal',
  INTRAPESSOAL: 'Intrapessoal',
};

const INTELIGENCIAS_MAP_PARA_OPCOES = {
  [INTELIGENCIAS.MATEMATICA]: [4, 10, 14, 22, 30],
  [INTELIGENCIAS.ESPACIAL]: [1, 11, 16, 23, 32],
  [INTELIGENCIAS.CINESTESICA]: [5, 7, 17, 21, 31],
  [INTELIGENCIAS.LINGUISTICA]: [6, 9, 20, 27, 33],
  [INTELIGENCIAS.MUSICAL]: [0, 13, 18, 24, 29],
  [INTELIGENCIAS.INTERPESSOAL]: [2, 12, 19, 25, 34],
  [INTELIGENCIAS.INTRAPESSOAL]: [3, 8, 15, 26, 28],
};

const INTELIGENCIAS_MAP_PARA_DESCRICAO = {
  [INTELIGENCIAS.MATEMATICA]:
    'Capacidade de solucionar problemas envolvendo números e outros elementos matemáticos, perceber a relação entre as coisas, saber, por exemplo, como um computador funciona. Envolve todas as ciências exatas. Exemplos de profissões: engenheiros, físicos, químicos, técnicos em informática e médicos. Albert Einstein é um exemplo de pessoa com inteligência lógico-matemática.',
  [INTELIGENCIAS.ESPACIAL]:
    'Habilidade para memorizar cenas, noção de espaço e direção, saber onde está e quais são as referências a sua volta, criatividade e imaginação. Exemplos de profissões: arquitetos, engenheiros e decoradores. Um bom exemplo é o arquiteto Oscar Niemeyer.',
  [INTELIGENCIAS.CINESTESICA]:
    'Capacidade de usar o corpo de maneiras diferentes e hábeis, saber como se movimentar, gostar de exercícios físicos, pessoas que desenvolvem essa inteligência costumam usar muitos gestos quando falam. Exemplos de profissões: atletas, dançarinos e atores. Essa aptidão pode ser encontrada em atletas como Pelé e Rebeca Andrade.',
  [INTELIGENCIAS.LINGUISTICA]:
    'Habilidade para lidar com as palavras, para expressar idéias, memorizar o que se fala, gostar e saber como falar, usar a linguagem para representar o mundo - é a inteligência responsável pela comunicação. Exemplos de profissões: políticos, professores, jornalistas, vendedores e escritores. Grandes autores, como Jorge Amado, têm grande potencial linguístico.',
  [INTELIGENCIAS.MUSICAL]:
    'Pessoas com o chamado "ouvido absoluto", capacidade de organizar sons de maneira criativa, ouvir uma melodia e não esquecer mais, tocar uma música que nunca tocou antes, reconhecer notas e acordes. Exemplo de profissões: músicos, cantores, compositores. Os compositores Beethoven e Mozart possuíam inteligência musical.',
  [INTELIGENCIAS.INTERPESSOAL]:
    'Habilidade de compreender os outros, se dar bem com as pessoas, saber se comunicar, ter empatia (saber o que o outro está sentindo), gostar de estar entre outras pessoas - indivíduos com inteligência interpessoal em evidência costumam ser bons líderes. Exemplos de profissões: psicólogos, advogados, assistentes sociais, apresentadores de TV e administradores. Silvio Santos, por exemplo, tem capacidade interpessoal.',
  [INTELIGENCIAS.INTRAPESSOAL]:
    'Capacidade de relacionamento consigo mesmo, saber se entender, gostar de passar tempo sozinho, compreender os próprios sentimentos - relacionada com a auto-estima. Exemplos de profissões: psicólogos e filósofos. Os filósofos clássicos, como Platão, podem ser exemplos de inteligência intrapessoal.',
};

function calcularResultado(opcoesSelecionadas) {
  return Object.entries(INTELIGENCIAS_MAP_PARA_OPCOES).map(
    ([inteligencia, opcoes]) => {
      const total = opcoes.reduce(
        (acc, opcao) => acc + parseInt(opcoesSelecionadas[opcao]),
        0
      );

      return {
        inteligencia,
        total,
      };
    }
  );
}

function getResultadoSalvo() {
  const resultadoSalvo = localStorage.getItem('resultado');
  try {
    return resultadoSalvo ? JSON.parse(resultadoSalvo) : null;
  } catch {
    return null;
  }
}

function DesignDeAprendizagem() {
  const [carregandoResultado, setCarregandoResultado] = useState(false);
  const [resultado, setResultado] = useState(getResultadoSalvo());

  const formik = useFormik({
    initialValues: {
      grupo1: [],
      grupo2: [],
      grupo3: [],
      grupo4: [],
      grupo5: [],
    },
    onSubmit(values) {
      const error = validate(values);

      if (error) {
        alert(error);
        return;
      }

      setCarregandoResultado(true);

      const opcoesSelecionadas = [
        ...values.grupo1,
        ...values.grupo2,
        ...values.grupo3,
        ...values.grupo4,
        ...values.grupo5,
      ];

      setTimeout(() => {
        const resultadoCalculado = calcularResultado(opcoesSelecionadas);
        setResultado(resultadoCalculado);
        localStorage.setItem('resultado', JSON.stringify(resultadoCalculado));
        setCarregandoResultado(false);
      }, 1000);
    },
  });

  const onRefazerTeste = () => {
    setResultado(null);
    localStorage.removeItem('resultado');
  };

  return (
    <div className={styles.container}>
      <div className={styles.divImgNavBar}>
        <a href="/">
          <img
            src={fonte}
            className={styles.imgNavBar}
            alt="Logo da Elaborativa"
          />
        </a>
      </div>
      <div className={styles.content}>
        <h1 className={styles.titulo}>Design de Aprendizagem</h1>
        <FormikProvider value={formik}>
          {resultado ? (
            <Resultado resultado={resultado} onRefazerTeste={onRefazerTeste} />
          ) : (
            <QuestoesForm carregandoResultado={carregandoResultado} />
          )}
        </FormikProvider>
        <p className={styles.credito}>
          Este teste é baseado na Teoria das Inteligências Múltiplas de Howard
          Gardner.
        </p>
      </div>
      <Footer hideLinks />
    </div>
  );
}

function QuestoesForm({ carregandoResultado }) {
  const formik = useFormikContext();

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <p>
        Preencha o teste utilizando a escala de 0 a 6 (sem repetir) de acordo
        com a sua aptidão, em que 0 é a de menor aptidão e 6 é a de maior
        aptidão.
      </p>
      <div className={styles.grupos}>
        {GRUPOS.map((grupo, index) => (
          <Grupo key={index} numeroGrupo={index + 1} opcoes={grupo} />
        ))}
      </div>
      <button
        type="submit"
        className={styles.buttonEnviar}
        disabled={carregandoResultado}
        style={{
          opacity: carregandoResultado ? 0.5 : 1,
        }}
      >
        {carregandoResultado ? 'Calculando...' : 'Calcular'}
      </button>
    </form>
  );
}

function Resultado({ resultado, onRefazerTeste }) {
  const resultadoOrdenado = resultado.sort(
    (a, b) => b.total - a.total || a.inteligencia.localeCompare(b.inteligencia)
  );

  const inteligenciaComMaiorAptidao = resultadoOrdenado[0].inteligencia;

  const resultadoFormatadoChart = resultado.map((item) => ({
    ...item,
    fullMark: 30,
  }));

  const totalPorInteligencia = resultadoFormatadoChart.reduce((acc, item) => {
    acc[item.inteligencia] = item.total;
    return acc;
  }, {});

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleConfirmRefazerTeste = () => {
    onRefazerTeste();
    handleCloseModal();
  };

  return (
    <div>
      <p style={{ fontWeight: 'bold', fontSize: '20px' }}>Resultado do Teste</p>
      <ul className={styles.listResultContainer}>
        {resultadoOrdenado.map(({ inteligencia, total }) => (
          <li key={inteligencia}>
            {inteligencia}: {total}
          </li>
        ))}
      </ul>
      <div className={styles.chartContainer}>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart
            cx="50%"
            cy="50%"
            outerRadius="60%"
            data={resultadoFormatadoChart}
          >
            <PolarGrid />
            <PolarAngleAxis
              dataKey="inteligencia"
              tickFormatter={(inteligencia) =>
                `${inteligencia}: ${totalPorInteligencia[inteligencia]}`
              }
            />
            <PolarRadiusAxis dataKey="total" />
            <Radar
              name="Inteligencia"
              dataKey="total"
              stroke="#ff06b4"
              fill="#85009f"
              fillOpacity={0.6}
            />
            <Tooltip formatter={(value) => [value]} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
      <p>
        Sua inteligência predominante é:{' '}
        <span className={styles.inteligenciaPredominante}>
          {inteligenciaComMaiorAptidao}
        </span>
      </p>
      <p style={{ textAlign: 'justify' }}>
        {INTELIGENCIAS_MAP_PARA_DESCRICAO[inteligenciaComMaiorAptidao]}
      </p>
      <button
        className={styles.buttonEnviar}
        style={{ marginInline: 'auto', marginTop: '32px' }}
        onClick={handleOpenModal}
      >
        Refazer Teste
      </button>
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          className={styles.alertDialogTitle}
        >
          {'Refazer Teste'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            className={styles.alertDialogText}
          >
            Tem certeza de que deseja refazer o teste?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button
            onClick={handleCloseModal}
            className={styles.buttonCancelarRefazer}
          >
            Cancelar
          </button>
          <button
            onClick={handleConfirmRefazerTeste}
            className={styles.buttonConfirmarRefazer}
          >
            Confirmar
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

function Grupo({ numeroGrupo, opcoes }) {
  const formik = useFormikContext();

  const [escalasSelecionadas, setEscalasSelecionadas] = useState(
    Array(opcoes.length).fill(null)
  );

  const handleChange = (index, value) => {
    const newEscalasSelecionadas = [...escalasSelecionadas];
    newEscalasSelecionadas[index] = value;
    setEscalasSelecionadas(newEscalasSelecionadas);
    formik.setFieldValue(`grupo${numeroGrupo}`, newEscalasSelecionadas);
  };

  return (
    <div>
      <h2>Grupo {numeroGrupo}</h2>
      <div className={styles.opcoes}>
        {opcoes.map((opcao, index) => (
          <div key={opcao} className={styles.opcao}>
            <select
              value={escalasSelecionadas[index] || ''}
              onChange={(e) => handleChange(index, e.target.value)}
            >
              <option value="">-</option>
              {ESCALAS.map((num) => (
                <option
                  key={num}
                  value={num}
                  disabled={escalasSelecionadas.includes(num)}
                >
                  {num}
                </option>
              ))}
            </select>
            <label>{opcao}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DesignDeAprendizagem;
