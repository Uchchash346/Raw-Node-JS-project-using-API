/* 
* Title: Sample Handler
* Description: Sample Handler
* Author: Mahmudur Rahman
* Date: 10/12/2021
*/

// module scaffolding
const handler = {};
handler.sampleHandler = (requestProperties, callback) => {
    console.log(requestProperties);
    callback(200, {
        message: 'This is a small sample url'
    });
};

module.exports = handler;