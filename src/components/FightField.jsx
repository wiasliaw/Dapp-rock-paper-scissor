import React from 'react';
import Scissors from '../svg/scissors.svg';
import Forword from '../svg/Forward.svg';
import Hand from '../svg/star.svg';
import Question from '../svg/Question.svg';

const FightField = ({ handleStake, selected, enemy, handleSelect }) => {
  const handleChange = (event) => {
    event.preventDefault();
    handleStake(event.currentTarget.value);
  }

  return (
    <div id="fightField">
      <div className="fight_elem enemy_elem" style={{justifyContent:'center'}}>
        <img src={
          enemy===0 ? (
            Scissors
          ) : enemy===1 ? (
            Forword
          ) : enemy===2 ? (
            Hand
          ) : (Question)
        } alt=""/>
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
            placeholder="Number"
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default FightField;
