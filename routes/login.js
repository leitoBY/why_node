var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('login.html', {
        var: 'value'
    });
});

module.exports = router;