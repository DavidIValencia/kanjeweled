/* eslint-disable no-param-reassign, no-unused-vars */
const haphazardSelection = (selection) => (
  Math.floor(Math.random() * (selection))
);
const checkTiles = (game) => {
  let queue = {
    current: '',
    length: 0,
  };

  return true;
};

const gems = ['試', 'し', 'の', 'ち', 'で', 'す', '太'];
const game = [
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
];

const boardMidWare = store => next => action => {
  if (action.type === 'START_GAME') {
    action.freeze = false;
    action.game = game.map((ele) => (
      ele.map((gem) => (
        gem = {
          symbol: gems[haphazardSelection(gems.length)],
          status: 'standard',
        }
      ))
    ));
    checkTiles(action.game);
  } else if (action.type === 'STOP_GAME') {
    action.freeze = true;
  } else if (action.type === 'ACTIVATE_TILE') {
    action.game = store.getState().board.get('game');
    const actTile = action.game[+action.pos[0]][+action.pos[1]];
    actTile.status = 'active';
    if (+action.pos[0] - 1 >= 0) {
      action.game[+action.pos[0] - 1][+action.pos[1]].status = 'live';
    }
    if (+action.pos[0] + 1 < 8) {
      action.game[+action.pos[0] + 1][+action.pos[1]].status = 'live';
    }
    if (+action.pos[1] - 1 >= 0) {
      action.game[+action.pos[0]][+action.pos[1] - 1].status = 'live';
    }
    if (+action.pos[1] + 1 < 8) {
      action.game[+action.pos[0]][+action.pos[1] + 1].status = 'live';
    }
    action.game.forEach((column) => {
      column.forEach((tile) => {
        if (tile.status === 'standard') {
          tile.status = 'inactive';
        }
      });
    });
  } else if (action.type === 'SWAP_TILE') {
    action.game = store.getState().board.get('game');
    let actTile;
    action.game.forEach((column) => {
      column.forEach((tile) => {
        if (tile.status === 'active') {
          actTile = tile;
        }
      });
    });
    const swapTile = action.game[+action.pos[0]][+action.pos[1]];
    const placeholder = JSON.parse(JSON.stringify((actTile.symbol)));
    actTile.symbol = swapTile.symbol;
    swapTile.symbol = placeholder;
    if (!checkTiles(action.game)) {
      swapTile.symbol = actTile.symbol;
      actTile.symbol = placeholder;
    }
    action.game.forEach((column) => {
      column.forEach((tile) => {
        tile.status = 'standard';
      });
    });
  }
  next(action);
};
export default boardMidWare;
