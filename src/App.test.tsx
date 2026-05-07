import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('Model Risk Oversight Hub', () => {
  it('renders the main model risk title and queue section', () => {
    render(<App />);

    expect(screen.getByText(/release gates, evaluation drift/i)).toBeTruthy();
    expect(screen.getByText(/priority model-risk workflows/i)).toBeTruthy();
    expect(screen.getByText(/release and review backlog/i)).toBeTruthy();
  });
});
