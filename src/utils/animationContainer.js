/* ANIMATIONS */
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

// FadeIn Animations
export const FadeIn = (duration, limit) => {
  return styled.div`
    animation: ${duration}s ${keyframes`${fadeIn}`} ${limit};
  `;
};

// No Animations
export const empty = () => {
  return styled.div``;
};
