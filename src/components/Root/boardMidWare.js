/* eslint-disable no-param-reassign, no-unused-vars */

const gems = ['試', 'し', 'の', 'ち', 'で', 'す', '太'];
const newGame = [
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
];

const haphazardSelection = (selection) => (
  Math.floor(Math.random() * (selection))
);
const fillBoard = (game) => {
  game.forEach((column) => {
    /* move any empty tiles to the start of array and full further down,
    count number of empties and then fill the start of the array with new random tiles
    */
    column.forEach((tile, index, arr) => {
      let count = 0;
      if (tile === 'empty') {
        do {
          arr[index] = arr[index - 1];
          arr[index - 1] = {
            symbol: 'empty',
            status: 'standard',
          };
          index -= 1;
        } while (index > 0);
        count += 1;
      }
      do {
        arr[count - 1] = {
          symbol: gems[haphazardSelection(gems.length)],
          status: 'standard',
        };
        count -= 1;
      } while (count > 0);
    });
  });
};
const checkTiles = (store, game) => {
  const queue = {
    current: '',
    length: 1,
    points: 0,
  };
  // check columns for matches
  game.forEach((column) => {
    column.forEach((tile, index, arr) => {
      if (index === 7) {
        if (queue.current === tile.symbol) {
          //  little bit hacky way to include final ele if it matches a chain
          queue.length += 1;
          index += 1;
        }
        if (queue.length > 2) {
          do {
            arr[index - 1] = 'empty';
            index -= 1;
            queue.length -= 1;
          } while (queue.length > 0);
          queue.points += 1;
        }
        queue.current = '';
        queue.length = 1;
      } else if (queue.current === tile.symbol) {
        queue.length += 1;
      } else if (queue.current !== tile.symbol) {
        queue.current = tile.symbol;
        if (queue.length > 2) {
          do {
            arr[index - 1] = 'empty';
            index -= 1;
            queue.length -= 1;
          } while (queue.length > 0);
          queue.points += 1;
        }
        queue.length = 1;
      }
    });
  });
  // check rows for matches
  [0, 1, 2, 3, 4, 5, 6, 7].forEach((num) => {
    game.forEach((column, index, arr) => {
      if (index === 7) {
        if (queue.current === column[num].symbol) {
          //  little bit hacky way to include final ele if it matches a chain
          queue.length += 1;
          index += 1;
        }
        if (queue.length > 2) {
          do {
            arr[index - 1][num] = 'empty';
            index -= 1;
            queue.length -= 1;
          } while (queue.length > 0);
          queue.points += 1;
        }
        queue.current = '';
        queue.length = 1;
      } else if (queue.current === column[num].symbol) {
        queue.length += 1;
      } else if (queue.current !== column[num].symbol) {
        queue.current = column[num].symbol;
        if (queue.length > 2) {
          do {
            arr[index - 1][num] = 'empty';
            index -= 1;
            queue.length -= 1;
          } while (queue.length > 0);
          queue.points += 1;
        }
        queue.length = 1;
      }
    });
  });
  fillBoard(game);
  if (queue.points > 0) {
    do {
      store.dispatch({ type: 'INCREASE_SCORE' });
      queue.points -= 1;
    } while (queue.points > 0);
    return true;
  }
  return false;
};

const boardMidWare = store => next => action => {
  if (action.type === 'START_GAME') {
    action.freeze = false;
    action.game = newGame.map((ele) => (
      ele.map((gem) => (
        gem = {
          symbol: gems[haphazardSelection(gems.length)],
          status: 'standard',
        }
      ))
    ));
    checkTiles(store, action.game);
  } else if (action.type === 'ACTIVATE_TILE') {
    action.game = store.getState().board.get('game');
    const actTile = action.game[+action.pos[0]][+action.pos[1]];
    actTile.status = 'active';
    /* highlighting all of the selected tile's neighbors
    so that they can be passed their click event
    */
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
    /* check to see if move was legal, and if so,
    keep checking tiles until there are no more matches
    */
    if (!checkTiles(store, action.game)) {
      swapTile.symbol = actTile.symbol;
      actTile.symbol = placeholder;
    } else {
      let keepChecking = true;
      do {
        keepChecking = checkTiles(store, action.game);
      } while (keepChecking !== false);
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
