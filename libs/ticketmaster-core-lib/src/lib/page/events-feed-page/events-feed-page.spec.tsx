import React from 'react';
import { render } from '@testing-library/react';
import EventsFeedPage from './events-feed-page'; // Adjust the import path as per your project structure

describe('EventsFeedPage', () => {
  it('renders without error', () => {
    render(<EventsFeedPage />);
  });
});
