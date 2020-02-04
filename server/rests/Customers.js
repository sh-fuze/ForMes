// const entity = require('../biz/Customer');

const list = function (query) {
    const data = [
        {name: 'foo'},
        {name: 'fee'}
    ];
    return Promise.resolve({
        items: data
    })
};

module.exports = {
    url: '/formes/api/customers',
    rests: [
        {
            type: 'query',
            element: 'Customer',
            handler: list
        }
    ]
}