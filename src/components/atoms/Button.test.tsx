import { render, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import Button from './Button';

const mockFn = vi.fn();

it('Button on click opens given link', () => {
  const link = 'https://www.example.com';
  const { getByTestId } = render(
    <Button onClick={() => mockFn(link)}>Button</Button>,
  );
  const button = getByTestId('button-component');
  fireEvent.click(button);

  expect(mockFn.called).toBe(true);
  expect(mockFn.calls[0][0]).toBe(link);
});
