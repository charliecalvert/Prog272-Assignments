var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(request, response) { 
    'use strict';
    response.render('index', { 
        title: 'Click Routes LastName'
    });
});

router.get('/Item01', function(request, response) {
    'use strict';
    var result = {
        'result': 'Success'
    };
    response.send(result);
});

module.exports = router;
