import React, { PropTypes } from 'react';
import radium from 'radium';

const kanjiMap = {
  試: 'gold',
  し: 'silver',
  の: 'bronze',
  ち: 'emerald',
  で: 'ruby',
  す: 'sapphire',
  太: 'turqoise',
};

const styles = {
  board: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    border: '0.15em solid #221300',
    borderRadius: '0.5em',
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gold: {
    textDecoration: 'none',
    flex: 1,
    display: 'flex',
    color: '#FDD610',
    fontSize: '3em',
    width: '100%',
    height: '100%',
    ':hover': {
      backgroundColor: 'rgba(0,0,0,0.2)',
    },
  },
  silver: {
    textDecoration: 'none',
    flex: 1,
    display: 'flex',
    color: '#808080',
    fontSize: '3em',
    width: '100%',
    height: '100%',
    ':hover': {
      backgroundColor: 'rgba(0,0,0,0.2)',
    },
  },
  bronze: {
    textDecoration: 'none',
    flex: 1,
    display: 'flex',
    color: '#DB7200',
    fontSize: '3em',
    width: '100%',
    height: '100%',
    ':hover': {
      backgroundColor: 'rgba(0,0,0,0.2)',
    },
  },
  emerald: {
    textDecoration: 'none',
    flex: 1,
    display: 'flex',
    color: '#01831F',
    fontSize: '3em',
    width: '100%',
    height: '100%',
    ':hover': {
      backgroundColor: 'rgba(0,0,0,0.2)',
    },
  },
  ruby: {
    textDecoration: 'none',
    flex: 1,
    display: 'flex',
    color: '#B1220F',
    fontSize: '3em',
    width: '100%',
    height: '100%',
    ':hover': {
      backgroundColor: 'rgba(0,0,0,0.2)',
    },
  },
  sapphire: {
    textDecoration: 'none',
    flex: 1,
    display: 'flex',
    color: '#333B67',
    fontSize: '3em',
    width: '100%',
    height: '100%',
    ':hover': {
      backgroundColor: 'rgba(0,0,0,0.2)',
    },
  },
  turqoise: {
    textDecoration: 'none',
    flex: 1,
    display: 'flex',
    color: '#73D5CB',
    fontSize: '3em',
    width: '100%',
    height: '100%',
    ':hover': {
      backgroundColor: 'rgba(0,0,0,0.2)',
    },
  },
  standard: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.1)',
    width: '100%',
    height: '100%',
    textAlign: 'center',
  },
  active: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    width: '100%',
    height: '100%',
    textAlign: 'center',
  },
  live: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    width: '100%',
    height: '100%',
    textAlign: 'center',
  },
  inactive: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    width: '100%',
    height: '100%',
    textAlign: 'center',
  },
};

const Tiles = ({ game, swapTile, activateTile }) => (
  <div style={styles.board} >
  {
    game.map((ele, index) => (
      <div key={index} style={styles.column} >
        {
          ele.map((gem, gemIdx) => {
            if (gem.status === 'standard') {
              return (
                <a
                  href="#"
                  key={`${index}${gemIdx}`}
                  style={styles[kanjiMap[gem.symbol]]}
                  onClick={() => { activateTile(`${index}${gemIdx}`); }}
                >
                  <div style={styles[gem.status]} >
                    {gem.symbol}
                  </div>
                </a>
              );
            } else if (gem.status === 'live') {
              return (
                <a
                  href="#"
                  key={`${index}${gemIdx}`}
                  style={styles[kanjiMap[gem.symbol]]}
                  onClick={() => { swapTile(`${index}${gemIdx}`); }}
                >
                  <div style={styles[gem.status]} >
                    {gem.symbol}
                  </div>
                </a>
              );
            }
            return (
              <div
                key={`${index}${gemIdx}`}
                style={styles[kanjiMap[gem.symbol]]}
              >
                <div style={styles[gem.status]} >
                  {gem.symbol}
                </div>
              </div>
            );
          })
        }
      </div>
    ))
  }
  </div>
);
Tiles.propTypes = {
  game: PropTypes.array,
  swapTile: PropTypes.func,
  activateTile: PropTypes.func,
};
export default radium(Tiles);
