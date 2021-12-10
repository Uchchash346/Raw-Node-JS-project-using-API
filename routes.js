/* 
* Title: Routes 
* Description: Application Routes
* Author: Mahmudur Rahman
* Date: 10/12/2021
*/

// dependencies
const { sampleHandler } = require('./handlers/routeHandlers/sampleHandler')

const routes = {
    sample: sampleHandler,
};

module.exports = routes;