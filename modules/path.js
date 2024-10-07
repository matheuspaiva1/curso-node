const path = require('path');

// Nome do arquivo
console.log(path.basename(__filename));

// Diretorio do arquivo
console.log(path.dirname(__filename));

// Extensão do arquivo
console.log(path.extname(__filename));

// Criar obj Path
console.log(path.parse(__filename));

// Juntar caminhos dos arquivos
console.log(path.join(__dirname, 'test'))