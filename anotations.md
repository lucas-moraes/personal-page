# Anotations 

## Implementação do typescript em projeto reactjs preexistente

___

&nbsp;

https://dev.to/christiantld/configurando-um-projeto-react-com-typescript-3kg

### Instalando typescript em um projeto preexistente

` yarn add TypeScript @types/node @types/react @types/react-dom @types/jest ` <br/>

&emsp;&emsp; ***Depois de instalar será necessaŕio substituir todos as extenções .js para .tsx***
<br/>
<br/>

### Configuração do ESLint
&emsp;&emsp; **Adicionando o ESLint** <br/>
&emsp;&emsp;&emsp;` yarn add eslint -D` </br>

&emsp;&emsp; **Iniciar o ESLint** <br/>
&emsp;&emsp;&emsp;` yarn eslint --init` </br>

&emsp;&emsp; **Configurações sugeridas para o ESLint** <br/>
> &emsp;&emsp;? How would you like to use ESLint? <br/>
> &emsp;&emsp;&emsp;To check syntax, find problems, and enforce code style <br/>
> &emsp;&emsp;? What type of modules does your project use? <br/>
> &emsp;&emsp;&emsp;JavaScript modules (import/export) <br/>
> &emsp;&emsp;? Which framework does your project use? <br/>
> &emsp;&emsp;&emsp;React <br/>
> &emsp;&emsp;? Does your project use TypeScript? <br/>
> &emsp;&emsp;&emsp;y <br/>
> &emsp;&emsp;? Where does your code run? (Press 'space' to select, 'a' to toggle all, 'i' to invert selection) <br/>
> &emsp;&emsp;&emsp;Browser <br/>
> &emsp;&emsp;? How would you like to define a style for your project? <br/>
> &emsp;&emsp;&emsp;Use a popular style guide <br/>
> &emsp;&emsp;? Which style guide do you want to follow? <br/>
> &emsp;&emsp;&emsp;Airbnb <br/>
> &emsp;&emsp;? What format do you want your config file to be in? <br/>
> &emsp;&emsp;&emsp;JSON <br/>
> &emsp;&emsp;? The style guide "airbnb" requires eslint@^5.16.0 || ^6.8.0. You are currently us ing eslint@7.1.0. Do you want to downgrade? <br/>
> &emsp;&emsp;&emsp;y <br/>
> &emsp;&emsp;? Would you like to install them now with npm? <br/>
> &emsp;&emsp;&emsp;n <br/>
&emsp;&emsp; ***Quando colocamos No para instalação via NPM, devemos adicionar ao projeto os itens conforme abaixo:*** <br/>
> &emsp;&emsp; `yarn add eslint-plugin-react@^7.19.0 @typescript-eslint/eslint-plugin@latest eslint-config-airbnb@latest eslint@^5.16.0 || ^6.8.0 eslint-plugin-import@^2.20.1 eslint-plugin-jsx-a11y@^6.2.3 eslint-plugin-react-hooks@^2.5.0 @typescript-eslint/parser@latest -D
`
<br/>

### Configuração do Prettier
&emsp;&emsp; **Adicionando o Prettier** <br/>
&emsp;&emsp; `yarn add prettier eslint-config-prettier eslint-plugin-prettier -D` 
<br/>
<br/>

&emsp;&emsp; **Configuração do Prettier** <br/>
&emsp;&emsp; Criar o arquivo de configuração `prettier.config.ts` e adicionar o código abaixo: <br/>
&emsp;&emsp; `module.exports = {  singleQuote: true,  trailingComma: 'all',  allowParens: 'avoid',};` <br/>
