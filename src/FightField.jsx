import React from 'react';
import Scissors from './scissors.svg';
import Forword from './Forward.svg';
import Hand from './star.svg';
import Question from './Question.svg';

const FightField = ({ handleStake, selected, handleSelect }) => {
  const handleChange = (event) => {
    event.preventDefault();
    console.log(selected);
    handleStake(event.currentTarget.value);
  }

  return (
    <div id="fightField">
      <div className="fight_elem enemy_elem" style={{justifyContent:'center'}}>
        <img src={Question} alt=""/>
      </div>
      <div className="fight_elem our_elem">
        <img
          src={Scissors}
          alt=""
          style={
            (selected===0)
              ? {transform: 'rotate(-70deg)', borderColor: 'tomato'}
              : {transform: 'rotate(-70deg)'}
          }
          onClick={() => handleSelect(0)}
        />
        <img
          src={Forword}
          alt=""
          style={
            (selected===1)
              ? {transform: 'rotate(4deg)', borderColor: 'tomato'}
              : {transform: 'rotate(4deg)'}
          }
          onClick={() => handleSelect(1)}
        />
        <img
          src={Hand}
          alt=""
          style={
            (selected===2)
              ? {transform: 'rotate(4deg)', borderColor: 'tomato'}
              : {transform: 'rotate(4deg)'}
          }
          onClick={() => handleSelect(2)}
        />
        <div>
          <label htmlFor="deal">Your Stake:</label>
          <input
            type="text"
            id="deal"
            value="0"
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default FightField;
