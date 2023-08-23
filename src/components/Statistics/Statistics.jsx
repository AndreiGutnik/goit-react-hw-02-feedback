import React from 'react';
import { StatisticsItem, StatisticsList } from './statistics.styled';

export function Statistics({ state, total, positiveFeedback }) {
  return (
    <StatisticsList>
      {Object.keys(state).map(el => {
        return (
          <StatisticsItem key={el}>
            {el[0].toUpperCase() + el.substring(1)}: {state[el]}
          </StatisticsItem>
        );
      })}
      <StatisticsItem>Total: {total}</StatisticsItem>
      <StatisticsItem>Positive feedback: {positiveFeedback}%</StatisticsItem>
    </StatisticsList>
  );
}
