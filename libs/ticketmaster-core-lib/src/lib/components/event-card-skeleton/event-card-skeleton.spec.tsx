import React from 'react';
import { render } from '@testing-library/react';
import EventCardSkeleton from './event-card-skeleton'; // Adjust the import based on your component path

describe('EventCardSkeleton', () => {
  it('renders the correct number of skeleton cards', () => {
    const skeletonNum = 5;

    // Render the component with the given SkeletonNum
    render(<EventCardSkeleton SkeletonNum={skeletonNum} />);

  });
});
