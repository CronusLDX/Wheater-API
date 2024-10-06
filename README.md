Tecnologias Utilizadas
HTML5: Estruturação da aplicação e criação dos elementos de página.
CSS3: Estilização visual da aplicação, incluindo responsividade e design.
TypeScript (POO): Desenvolvimento utilizando programação orientada a objetos para aumentar a modularidade e reutilização de código.
API REST (Weather API): Integração de dados de previsão do tempo, fornecendo informações em tempo real.
Webpack: Empacotador de módulos JavaScript, responsável por otimizar e compilar os arquivos do projeto.
Babel: Ferramenta para compatibilizar o código TypeScript para navegadores antigos.
Git: Sistema de controle de versão para rastrear alterações e gerenciar o histórico do código.
GitHub: Plataforma para hospedagem do código e colaboração.
Instalação e Configuração
1. Clonando o Repositório
Primeiro, clone o repositório do GitHub para sua máquina local:

bash
Copiar código
git clone git@github.com:usuario/repositorio.git
cd repositorio
2. Instalando Dependências
Para configurar o projeto localmente, você precisará do Node.js instalado. Em seguida, instale as dependências necessárias via npm:

bash
Copiar código
npm install
3. Configuração do Webpack e Babel
O Webpack e Babel já estão configurados no projeto. Para iniciar o ambiente de desenvolvimento, utilize o comando:

bash
Copiar código
npm run start
Esse comando vai:

Iniciar o servidor de desenvolvimento;
Empacotar e transcompilar os arquivos com o Webpack e Babel.
Para construir a versão de produção:

bash
Copiar código
npm run build
Estrutura de Diretórios
A estrutura do projeto segue o padrão abaixo:

bash
Copiar código
/src
  /assets       # Arquivos estáticos (imagens, ícones, etc.)
  /styles       # Estilos CSS
  /scripts      # Código TypeScript
  /api          # Integração da API Weather
/dist           # Arquivos otimizados para produção
webpack.config.js  # Configuração do Webpack
babel.config.js    # Configuração do Babel
package.json       # Arquivo de dependências
TypeScript - POO
Este projeto faz uso da orientação a objetos com TypeScript. A estrutura de classes facilita a organização e modularização do código. Exemplos de uso incluem:

Exemplo de Classe
typescript
Copiar código
class WeatherService {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async getWeather(city: string): Promise<any> {
    const response = await fetch(`https://api.weather.com/v1/city?name=${city}&key=${this.apiKey}`);
    return response.json();
  }
}
Integração com a API REST (Weather API)
A aplicação usa uma API de previsão do tempo para obter informações meteorológicas em tempo real. A API é chamada via requisições HTTP (usando fetch), e os dados são exibidos na interface da aplicação.

Exemplo de uso da API:

typescript
Copiar código
const weatherService = new WeatherService('sua-chave-api');
weatherService.getWeather('São Paulo').then(data => {
  console.log(data);
});
Fluxo de Desenvolvimento
Implementação dos componentes e classes TypeScript: Utilizando POO para organizar os dados e lógicas.
Estilização com CSS3: Garantir que a aplicação esteja responsiva e visualmente agradável.
Integração da API REST: Usar a API Weather para buscar e exibir as condições climáticas de várias cidades.
Compilação com Webpack e Babel: Garantir que o código seja otimizado para diferentes navegadores e ambientes.
Controle de Versão com Git: Comitar e enviar alterações periodicamente para o repositório GitHub.
Comandos Git Importantes
Inicializar o repositório:
bash
Copiar código
git init
Adicionar arquivos:
bash
Copiar código
git add .
Fazer commit:
bash
Copiar código
git commit -m "Mensagem do commit"
Enviar para o GitHub:
bash
Copiar código
git push origin main
Deploy
Para fazer o deploy, basta utilizar os arquivos da pasta /dist gerados após a build, e hospedar em um serviço como GitHub Pages, Netlify, ou Vercel.

Licença
Este projeto está sob a licença MIT.

