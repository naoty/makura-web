$(function () {
    var $stream = $('#stream');

    var socket = io.connect();
    socket.on('stream', function (data) {
        $stream.prepend('<p>' + data + '</p>');
    });
});
