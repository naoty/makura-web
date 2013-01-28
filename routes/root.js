exports.root = function (io) {
    return {
        index: function (req, res) {
            res.render('root', { title: 'Express' });
        },
        stream: function (req, res) {
            var data = req.param('data');
            io.sockets.emit('stream', data);
            res.send({});
        }
    };
};
