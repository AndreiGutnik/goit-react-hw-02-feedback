import React from 'react';
import {
  StatisticsItem,
  StatisticsList,
  TitleStatistics,
} from './statistics.styled';

export function Statistics({ good, neutral, bad }) {
  return (
    <>
      <TitleStatistics>Statistics</TitleStatistics>
      <StatisticsList>
        <StatisticsItem>Good: {good}</StatisticsItem>
        <StatisticsItem>Neutral: {neutral}</StatisticsItem>
        <StatisticsItem>Bad: {bad}</StatisticsItem>
      </StatisticsList>
    </>
  );
}
