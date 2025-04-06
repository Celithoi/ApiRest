import globals from 'globals';

/** @type {import('eslint').Linter.Config} */
export default [
  {
    languageOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
      globals: globals.node, // Definindo os globais do Node.js
    },
    plugins: {}, // Caso você tenha plugins no futuro
    rules: {
      'indent': ['error', 2], // Configura indentação para 2 espaços
      'linebreak-style': ['error', 'unix'], // Força estilo de quebra de linha Unix
      'quotes': ['error', 'single'], // Força o uso de aspas simples
      'semi': ['error', 'always'], // Força o uso de ponto e vírgula no final das declarações
    },
  },
  {
    // Incluindo as regras recomendadas diretamente
    rules: {
      'no-console': 'off', // Exemplo de como configurar uma regra adicional
      'class-methods-use-this': 'off'
    },
  },
];
