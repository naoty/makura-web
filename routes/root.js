exports.root = function (io) {
    return {
        index: function (req, res) {
            res.render('root', { title: 'Express' });
        },
        stream: function (req, res) {
            var pressure = req.param('pressure');
            io.sockets.emit('stream', pressure);
            res.send({});
        }
    };
};
