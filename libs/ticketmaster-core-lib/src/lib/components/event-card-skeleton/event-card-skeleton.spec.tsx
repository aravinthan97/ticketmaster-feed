import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { EventCard, EventCardProps } from './event-card-skeleton';

describe('EventCard', () => {
  const mockPayload: EventCardProps['payload'] = {
    image: 'https://via.placeholder.com/150',
    name: 'Sample Event',
    date: '2024-07-17',
    time: '15:51:00',
  };

  const mockPayloadWithoutImage: EventCardProps['payload'] = {
    image: '',
    name: 'Sample Event Without Image',
    date: '2024-07-17',
    time: '15:51:00',
  };

  it('renders event details correctly', () => {
    render(<EventCard payload={mockPayload} />);

    const heading = screen.getByRole('heading', { name: /Sample Event/i });
    const dateText = screen.getByText(/Data:2024-07-17 time:15:51:00/i);
    const button = screen.getByRole('button', { name: /Buy Latte/i });

    expect(heading).toBeInTheDocument();
    expect(dateText).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    const image = screen.getByRole('img', { name: /Caffe Latte/i });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://via.placeholder.com/150');
  });

  it('renders fallback text when image is not provided', () => {
    render(<EventCard payload={mockPayloadWithoutImage} />);

    const fallbackText = screen.getByText(/Image Not found/i);
    expect(fallbackText).toBeInTheDocument();

    const heading = screen.getByRole('heading', { name: /Sample Event Without Image/i });
    expect(heading).toBeInTheDocument();
  });
});
