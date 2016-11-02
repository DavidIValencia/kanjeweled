/* eslint-disable no-param-reassign, no-unused-vars */
const gems = ['試', 'し', 'の', 'ち', 'で', 'す', '太'];
const haphazardSelection = (selection) => (
  Math.floor(Math.random() * (selection))
);
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

const carouselMid = store => next => action => {
  if (action.type === 'START_GAME') {
    action.freeze = false;
    action.game = game.map((ele) => (
      ele.map((symbol) => (
        symbol = gems[haphazardSelection(gems.length)]
      ))
    ));
  } else if (action.type === 'STOP_GAME') {
    action.freeze = true;
  }
  next(action);
};
export default carouselMid;
