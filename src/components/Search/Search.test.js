import React from 'react';
import { render, waitForElement, fireEvent } from '@testing-library/react';
import Search from './index';

describe('Specific component', () => {
  it('sets the input value correctly', async () => {
    const { getByTestId } = render(<Search />);
    const inputNode = await waitForElement(
      () => getByTestId('teacher-input')
    );

    const valueInput = 'ana';

    fireEvent.change(
      inputNode,
      { target: { value: valueInput }}
    );
    
    expect(inputNode.value).toMatch(valueInput);
    //expect(100).toBe(200);
  })
});
