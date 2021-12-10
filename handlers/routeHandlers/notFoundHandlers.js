/* 
* Title: Not found handler
* Description: 404 Not found handler
* Author: Mahmudur Rahman
* Date: 10/12/2021
*/

// module scaffolding
const handler = {};
handler.notFoundHandlers = (requestProperties, callback) => {
    console.log(requestProperties)
    callback(404, {
        message: 'Your requested URL is Not found'
    })
};

module.exports = handler;