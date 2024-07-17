import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { http } from 'msw';
import { setupServer } from 'msw/node';
import EventsFeedPage from './events-feed-page'; // Adjust the path as per your project structure
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Setup Mock Service Worker (MSW) to mock API requests
const server = setupServer(
  http.get(`${process.env.NEXT_PUBLIC_API_URL}/events.json`, (req:any, res:any, ctx:any) => {
    return res(
      ctx.json({
        // Mock response data structure as per your API response
        pages: [
          { payload: { _embedded: { events: [{ id: '1', name: 'Event 1' }] } } },
          { payload: { _embedded: { events: [{ id: '2', name: 'Event 2' }] } } },
        ],
      })
    );
  })
);

// Setup beforeAll and afterAll to start and stop Mock Service Worker
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('EventsFeedPage Component', () => {
  it('renders loading skeleton initially', async () => {
    const queryClient = new QueryClient();

    render(
      <QueryClientProvider client={queryClient}>
        <EventsFeedPage />
      </QueryClientProvider>
    );

    // Verify loading skeleton is rendered initially
    const loadingSkeleton = screen.getByTestId('event-card-skeleton');
    expect(loadingSkeleton).toBeInTheDocument();

    // Wait for data to be fetched and loading state to resolve
    await waitFor(() => screen.getByTestId('event-card'));
  });

  it('renders fetched events', async () => {
    const queryClient = new QueryClient();

    render(
      <QueryClientProvider client={queryClient}>
        <EventsFeedPage />
      </QueryClientProvider>
    );

    // Wait for data to be fetched and loading state to resolve
    await waitFor(() => screen.getByTestId('event-card'));

    // Verify events are rendered
    const eventCards = screen.getAllByTestId('event-card');
    expect(eventCards.length).toBe(2); // Assuming two events are mocked
  });

  // Add more test cases as per your component behavior
});
