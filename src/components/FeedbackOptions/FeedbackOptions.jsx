import React from 'react';
import { ButtonWrap, Button } from './FeedbackOptions.styled';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ButtonWrap>
      {options.map(option => {
        return (
          <Button key={option} onClick={() => onLeaveFeedback(option)}>
            {option[0].toUpperCase() + option.substring(1)}
          </Button>
        );
      })}
    </ButtonWrap>
  );
}
