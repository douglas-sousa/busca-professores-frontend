import React from 'react';
import { render, waitForElement, fireEvent } from '@testing-library/react';
import Main from './index';

describe('Specific component', () => {
  it('renders the Card component by the number of elements in the array of teachers', async () => {
    const { getByTestId } = render(<Main />);

    const numberOfChildren = await waitForElement(
      () => getByTestId('card-container').childElementCount
    );
    
    expect(numberOfChildren).toBe(5);
    //expect(100).toBe(200);
  })
});
