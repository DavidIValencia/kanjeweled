import React, { PropTypes } from 'react';

const styles = {
  nav: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justfyContent: 'space-around',
    height: '50%',
    width: '100%',
  },
  button: {
    display: 'flex',
    flex: 1,
    minHeight: '5vh',
    width: '15vw',
    flexGrow: 0,
    alignItems: 'center',
    justfyContent: 'center',
    marginTop: '5em',
    border: '0.15em solid black',
    borderRadius: '0.5em',
  },
  innerButton: {
    fontFamily: 'custom',
    fontSize: '2.5em',
    display: 'flex',
    flex: 1,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  score: {
    fontFamily: 'custom',
    fontSize: '5em',
    display: 'flex',
    height: '100%',
    width: '100%',
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const Nav = ({ startGame, stopGame, gameOn, score }) => {
  if (!gameOn) {
    return (
      <div style={styles.nav}>
        <div
          style={styles.button}
          onClick={() => {
            startGame();
          }}
        >
          <div style={styles.innerButton} >
            start
          </div>
        </div>
      </div>
    );
  }
  return (
    <div style={styles.nav}>
      <div
        style={styles.button}
        onClick={() => {
          stopGame();
          startGame();
        }}
      >
        <div style={styles.innerButton} >
          restart
        </div>
      </div>
      <div style={styles.score} >
        {`score: ${score}`}
      </div>
    </div>
  );
};
Nav.propTypes = {
  startGame: PropTypes.func,
  stopGame: PropTypes.func,
  gameOn: PropTypes.bool,
  score: PropTypes.number,
};
export default Nav;
