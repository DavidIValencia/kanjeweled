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
    flex: 1,
    display: 'flex',
    color: '#FDD610',
    fontSize: '3em',
    width: '100%',
    height: '100%',
    ':hover': {
      backgroundColor: 'rgba(0,0,0,0.7)',
    },
  },
  silver: {
    flex: 1,
    display: 'flex',
    color: '#B0B0B0',
    fontSize: '3em',
    width: '100%',
    height: '100%',
    ':hover': {
      backgroundColor: 'rgba(0,0,0,0.7)',
    },
  },
  bronze: {
    flex: 1,
    display: 'flex',
    color: '#DB7200',
    fontSize: '3em',
    width: '100%',
    height: '100%',
    ':hover': {
      backgroundColor: 'rgba(0,0,0,0.7)',
    },
  },
  emerald: {
    flex: 1,
    display: 'flex',
    color: '#01831F',
    fontSize: '3em',
    width: '100%',
    height: '100%',
    ':hover': {
      backgroundColor: 'rgba(0,0,0,0.7)',
    },
  },
  ruby: {
    flex: 1,
    display: 'flex',
    color: '#B1220F',
    fontSize: '3em',
    width: '100%',
    height: '100%',
    ':hover': {
      backgroundColor: 'rgba(0,0,0,0.7)',
    },
  },
  sapphire: {
    flex: 1,
    display: 'flex',
    color: '#333B67',
    fontSize: '3em',
    width: '100%',
    height: '100%',
    ':hover': {
      backgroundColor: 'rgba(0,0,0,0.7)',
    },
  },
  turqoise: {
    flex: 1,
    display: 'flex',
    color: '#84E6BA',
    fontSize: '3em',
    width: '100%',
    height: '100%',
    ':hover': {
      backgroundColor: 'rgba(0,0,0,0.7)',
    },
  },
  standard: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.1)',
    width: '100%',
    height: '100%',
    textAlign: 'center',
  },
};

const Tiles = ({ game }) => (
  <div style={styles.board} >
  {
    game.map((ele, index) => (
      <div key={index} style={styles.column} >
        {
          ele.map((gem, gemIdx) => (
            <div key={`${index}${gemIdx}`} style={styles[kanjiMap[gem]]} >
              <div style={styles.standard} >
                {gem}
              </div>
            </div>
          ))
        }
      </div>
    ))
  }
  </div>
);
Tiles.propTypes = {
  game: PropTypes.array,
};
export default radium(Tiles);
