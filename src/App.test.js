import React from 'react';
import { render, act, waitForElement, fireEvent } from '@testing-library/react';
import App from './App';

describe('Complete application', () => {
  it('runs complete application', async () => {
    const { getByTestId, container, getByText } = render(<App />);
    const inputNode = await waitForElement(
      () => getByTestId('teacher-input')
    );

    const valueInput = 'ana';

    fireEvent.change(
      inputNode,
      { target: { value: valueInput }}
    );

    const cardNode = await waitForElement(
      () => getByTestId('conteudo-curriculo')
    );

    const curriculoFragment = 'Sed cursus turpis vitae tortor';
    
    expect(cardNode.textContent).toMatch(curriculoFragment);
    //expect(100).toBe(200);
  })
});
