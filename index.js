
const reductions = require('./reductions.json');





function reduce(from) {

    return reductions[(from || '').toLowerCase()];

}





module.exports = { reduce: reduce, reductions: reductions };
