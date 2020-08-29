/**
 * Arquivo intencionado para uso na AWS!
 * Serve ao propósito de gerenciar a api através de um endpoint criado
 * pelo framework Architect (https://arc.codes/)
 */

const functions = require('@architect/functions')
/** Solicitamos a aplicação dentro do diretório 'dist' */
const app = require('./dist/app')

exports.handler = functions.http.express(app)
