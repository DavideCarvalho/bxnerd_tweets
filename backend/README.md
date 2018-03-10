# Tweets BaixadaNerd
> Aplicação para mostrar atividade do movimento BaixadaNerd no Twitter

Para colaborar com esse projeto, você precisa ter o Flow em sua máquina, para isso, faça ```npm i -g flow-bin```. Caso use o Visual Studio Code, baixe a extensão Flow Language Support. No Atom, existem várias opções, eu utilizo o autocomplete-flow e o linter-flow-plus.

### Porque Flow?
  Flow é uma ferramenta de static type checking para JavaScript, sem ter a necessidade de colocar uma linguagem por cima (como TypeScript ou Reason). Isso ajuda a evitar alguns erros de runtime e criar uma documentação da própria sem precisar de comentários.


## Como rodar o projeto
Após instalar o Flow:
1. Baixe o repo
2. De ```npm install``` ou ```yarn install``` caso tenha o yarn
3. Dê ```npm run build```, será criado uma pasta chamada lib
4. Entre na pasta lib e use o comando ```node index.js```, o projeto deverá começar a rodar.

## Como posso contribuir
1. Baixe o repo
2. crie sua branch com o nome de /feature/#numero_da_issue#+#nome_do_que_esta_fazendo# (Caso não tenha uma issue relacionada com a tarefa, crie). e.g: branch /feature/#3_separar_responsabilidades_controller_model
  1. Para criar uma branch via linha de comando, escreva ```git checkout -b ``` e o nome da sua branch, e.g: ```git checkout -b /feature/#3_separar_responsabilidades_controller_model```
3. As branches master e develop estão protegidas tanto por code review dos coordenadores do repo quanto pelas ferramentas de Code Quality. Para juntar o seu código com o repo, por favor, faça um pull request. Caso seu código não esteja dentro dos padrões do projeto, tanto a ferramenta de Code Quality quando os coodenadores não irão aceitar o pull request
  1. Não iremos simplesmente recusar, daremos um feedback sobre o que pode melhorar para que possamos aceitar a sua contribuição. Apenas queremos garantir que a manutenção do código não ficará debilitada, então queremos manter um padrão de projeto
  2. Quando der o pull request, escreva "close " + número da issue, e.g: "close #3", desse modo, a issue será finalizada automaticamente caso o pull request seja aceito. [Veja nesse link as keyworks que fazem isso](https://help.github.com/articles/closing-issues-using-keywords/)

Algumas dicas quando for contribuir:
1. Não encha o projeto de libs desnecessárias ou que terão pouca utilidade. Caso esteja usando uma lib, cheque se não pode fazer o mesmo sem ela;
2. Tente seguir a mesma estrutura de pastas, nome de métodos, variáveis e lingua que o projeto já usa (não queremos metade do projeto em português e outra em inglês);
3. Variáveis e métodos bem descritivos. Precisamos saber o que eles fazem apenas de ver o nome deles;
4. Façam testes unitários. Nesse projeto temos o [jest](https://facebook.github.io/jest/);
  1. Os testes precisam cubrir tanto os caminhos de sucesso quanto de erro. Caso os coordenadores percebam que faltam casos de teste, não aceitaremos o pull request;
  2. Para ajuda-los com os testes, estamos tentando implementar testes mutantes no projeto, assim quem for contribuir poderá checar se a maioria dos casos de teste estão passando;
  3. O projeto não precisa ter 100% de cobertura de testes, mas pelo menos cubram o máximo possível;

Precisamos de:
  Ajuda para criar um pipeline de CI/CD efetivo. Atualmente temos o Codacy para Code Quality (E ele verifica apenas quando fazem pull request para a branch develop), porém precisamos checar se temos alguma alternativa melhor, ou se alguém do BaixadaNerd já tem algum expertise em uma ferramenta, assim não precisamos nos preocupar com curva de aprendizado com a ferramenta. A respeito do CD, existe uma ferramenta chamada Buddy capaz de criar pipelines de deploy, porém se alguém já conhecer e souber utilizar outra ferramenta, agradecemos.

  Atualmente esse projeto apenas foca no Twitter, mas caso alguém saiba como implementar realtime feed com Facebook ou Instagram (ou apenas dizer onde estão as apis), seria de extrema ajuda. A ideia é podermos ver o crescimento do BaixadaNerd com as pessoas usando nossa hashtag em qualquer mídia social.
