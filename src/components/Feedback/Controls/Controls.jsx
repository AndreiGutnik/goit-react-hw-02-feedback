import React from 'react';
import { ButtonWrap, Button } from './Controls.styled';

export function Controls({ onClickGood, onClickNeutral, onClickBad }) {
  return (
    <ButtonWrap>
      <Button type="button" onClick={onClickGood}>
        Good
      </Button>
      <Button type="button" onClick={onClickNeutral}>
        Neutral
      </Button>
      <Button type="button" onClick={onClickBad}>
        Bad
      </Button>
    </ButtonWrap>
  );
}
