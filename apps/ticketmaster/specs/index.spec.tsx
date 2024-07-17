// index.spec.tsx

import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import Index from '../app/page'; // Adjust the path to your Index component
import { EventsFeedPage } from '@ticketmaster/ticketmaster-core-lib';

const queryClient = new QueryClient();

describe('Index', () => {
  it('should render EventsFeedPage', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <EventsFeedPage />
      </QueryClientProvider>
    );
  });
});
