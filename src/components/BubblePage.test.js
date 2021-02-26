import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";

import { fetchColors as mockFetchColors } from '../api/fetchColors';

jest.mock('../api/fetchColors.js');

const colors = {
    data: [
      { color: 'aliceblue', code: { hex: '#f0f8ff' }, id: 1 },
      { color: 'limegreen', code: { hex: '#99ddbc' }, id: 2 },
      { color: 'aqua', code: { hex: '#00ffff' }, id: 3 },
      { color: 'aquamarine', code: { hex: '#7fffd4' }, id: 4 },
      { color: 'lilac', code: { hex: '#9a99dd' }, id: 5 },
      { color: 'softpink', code: { hex: '#dd99ba' }, id: 6 },
      { color: 'bisque', code: { hex: '#dd9a99' }, id: 7 },
      { color: 'softyellow', code: { hex: '#dcdd99' }, id: 8 },
      { color: 'blanchedalmond', code: { hex: '#ffebcd' }, id: 9 },
      { color: 'blue', code: { hex: '#6093ca' }, id: 10 },
      { color: 'blueviolet', code: { hex: '#8a2be2' }, id: 11 },
  ]
};

test("Renders BubblePage without errors", async () => {
  // Finish this test
  await mockFetchColors.mockResolvedValueOnce(colors);
  // 🔼 Needs to receive our colors data in order to render properly, or else on mount it tries to map over a non-existent data set and throws errors.
  render(<BubblePage />);
});

test("Fetches data and renders the bubbles on mounting", async () => {
  // Finish this test

  mockFetchColors.mockResolvedValueOnce(colors);

  render(<BubblePage />);

  const apiData = await screen.findAllByTestId('apiData');

  expect(apiData).toHaveLength(11);

  // ⚠ Do some research to find more efficient ways to run this exact test without it popping errors where it thinks items we're fetching don't exist even after making our mock call - until some time passes.

});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading