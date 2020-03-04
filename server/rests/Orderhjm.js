 
// const entity = require('../biz/Customer');

const list = function (query) {
    const data = [
        {orderNum: 10},
        {orderNum: 20}
    ];
    return Promise.resolve({
        items: data
    })
};

module.exports = {
    url: '/formes/api/orderhjm',
    rests: [
        {
            type: 'query',
            element: 'Orderhjm',
            handler: list
        }
    ]
}
/*

const list = function (query) {
    const data = [
        {code: '1001'},
        {code: '1002'}
    ];
    return Promise.resolve({
        items: data
    })
};


module.exports = {
    url: '/formes/api/Orderhjm',
    rests: [
        {
            type: 'query',
            element: 'Orderhjm',
            handler: list
        }
    ]
}
*/