import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { EventCard, EventCardProps } from './card';

describe('EventCard', () => {
  const mockPayload: EventCardProps['payload'] = {
    id: "2",
    image: 'https://via.placeholder.com/150',
    name: 'Sample Event',
    date: '2024-07-17',
    time: '15:51:00',
    location: 'Sample Location',
    latitude: 'Latitude Value',
    longitude: 'Longitude Value',
  };

  const mockPayloadWithoutImage: EventCardProps['payload'] = {
    id: "1",
    image: '',
    name: 'Sample Event Without Image',
    date: '2024-07-17',
    time: '15:51:00',
    location: 'Sample Location',
    latitude: 'Latitude Value',
    longitude: 'Longitude Value',

  };

  it('renders event details correctly', () => {
    render(<EventCard payload={mockPayload} />);

    const heading = screen.getByRole('heading', { name: /Sample Event/i });
    const dateText = screen.getByText(/Data:2024-07-17 time:15:51:00/i);


    expect(heading).toBeInTheDocument();
    expect(dateText).toBeInTheDocument();
   

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
