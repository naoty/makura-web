exports.root = function () {
    return {
        index: function (req, res) {
            res.render('root', { title: 'Express' });
        }
    };
};
