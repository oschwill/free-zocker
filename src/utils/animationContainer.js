/* ANIMATIONS */
import styled, { keyframes } from 'styled-components';
import { fadeIn, zoomIn } from 'react-animations';

// FadeIn Animations
export const FadeIn = (duration, limit) => {
  return styled.div`
    animation: ${duration}s ${keyframes`${fadeIn}`} ${limit};
  `;
};

// FadeIn Animations
export const ZoomIn = (duration, limit) => {
  return styled.div`
    animation: ${duration}s ${keyframes`${zoomIn}`} ${limit};
  `;
};

// No Animations
export const empty = () => {
  return styled.div``;
};
