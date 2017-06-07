/**
 * Created by peter on 6-6-17.
 */
var board,
    game = new Chess();

var makeRandomMove = function() {
    var possibleMoves = game.moves();

    // exit if the game is over
    if (game.game_over() === true ||
        game.in_draw() === true ||
        possibleMoves.length === 0) return;

    var randomIndex = Math.floor(Math.random() * possibleMoves.length);
    game.move(possibleMoves[randomIndex]);
    board.position(game.fen());

    window.setTimeout(makeRandomMove, 500);
};

board = ChessBoard('board', 'start');

window.setTimeout(makeRandomMove, 500);