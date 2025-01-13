const {defineAPIProductEndpoints} = require("./product");
const {defineAPICategoryEndpoints} = require("./category");
const {defineAPIAlergenEndpoints} = require("./alergen");
const {defineAPIOrderEndpoints} = require("./order");

function defineAPIEndpoints(aplication, dbPoolPromise) {
    defineAPIProductEndpoints(aplication, dbPoolPromise);
    defineAPICategoryEndpoints(aplication,dbPoolPromise);
    defineAPIAlergenEndpoints(aplication,dbPoolPromise);
    defineAPIOrderEndpoints(aplication, dbPoolPromise);
}
module.exports = {defineAPIEndpoints}