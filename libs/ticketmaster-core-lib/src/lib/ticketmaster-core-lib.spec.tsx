import { render } from '@testing-library/react';

import TicketmasterCoreLib from './ticketmaster-core-lib';

describe('TicketmasterCoreLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TicketmasterCoreLib />);
    expect(baseElement).toBeTruthy();
  });
});
