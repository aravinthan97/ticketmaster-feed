'use client';

import { useEffect, useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import InfiniteScroll from 'react-infinite-scroll-component';
import { EventCard } from '../../components/card/card';
import { SelectedLocation } from '../../components/form-input/selected-input';
import {
  coreFetch,
  FeedPayload,
  form,
  formatDate,
  payloadPasser,
} from '@ticketmaster/shared';
import EventCardSkeleton from '../../components/event-card-skeleton/event-card-skeleton';

// Initialize current date and one year from now for default date range
const currentDate = new Date();
const oneYearFromNow = new Date(currentDate);
oneYearFromNow.setFullYear(currentDate.getFullYear() + 1);

// Initial selected filter values
const initialSeletedValue: form = {
  countryCode: 'AU',
  startDateTime: formatDate(currentDate),
  endDateTime: formatDate(oneYearFromNow), // Make this one year from current date
};

export function EventsFeedPage() {
  // get base url from env
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  // get key from env
  const key = process.env.NEXT_PUBLIC_API_KEY;
  // State for selected filter values
  const [selectedFilterValue, setselectedfilterValue] =
    useState<form>(initialSeletedValue);
  // State to hold formatted events for rendering
  const [formattedEvents, setFormattedEvents] = useState<FeedPayload[]>([]);

  // Function to fetch events
  const fetchEvents = async ({ pageParam = 0 }) => {
    const response = await coreFetch(`${apiUrl}/events.json`, 'GET', {
      queryParams: {
        countryCode: selectedFilterValue.countryCode,
        startDateTime: selectedFilterValue.startDateTime,
        endDateTime: selectedFilterValue.endDateTime,
        apikey: key as string,
        page: pageParam.toString(),
      },
    });
    return response;
  };

  // UseInfiniteQuery hook for fetching paginated data
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    status,
    refetch, // Function to manually refetch data
  } = useInfiniteQuery({
    queryKey: [
      'events',
      selectedFilterValue.countryCode,
      selectedFilterValue.endDateTime,
      selectedFilterValue.startDateTime,
    ], // Include dependencies in queryKey to fetch api if selectedFiterValue change
    queryFn: fetchEvents,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage?.payload?._links?.next?.href;
      if (nextPage) {
        const nextPageNum = parseInt(nextPage.split('page=')[1], 10);
        return nextPageNum;
      }
      return undefined;
    },
  });

  // function for handling selection changes in SelectedLocation component
  const handleSelectedValue = (value: any) => {
    setselectedfilterValue({
      countryCode: value.country,
      startDateTime: value.startDate,
      endDateTime: value.endDate,
    });
  };

  // UseEffect to refetch data when selectedDateTime or selectedcountry changes
  useEffect(() => {
    refetch();
  }, [
    selectedFilterValue.countryCode,
    selectedFilterValue.endDateTime,
    selectedFilterValue.startDateTime,
    refetch,
  ]);

  // UseEffect to format fetched data into required format for rendering
  useEffect(() => {
    if (data?.pages) {
      const allEvents = data.pages.flatMap(
        (page) => page.payload?._embedded?.events || []
      );
      const formatEventsFeed = payloadPasser(allEvents);
      setFormattedEvents(formatEventsFeed);
    }
  }, [data]);

  // Render loading state while data is being fetched
  if (status === 'pending')
    return (
      <div className="w-full h-full">
        <EventCardSkeleton SkeletonNum={5} />
      </div>
    );

  // Render error message if there's an error fetching data
  if (status === 'error') return <div>Error: {error.message}</div>;

  // Render main content once data is fetched
  return (
    <div className="w-full h-full bg-gray-100">
      <div className="fixed top-0 z-10 bg-gray-100 w-full">
        <SelectedLocation
          onSelectionChange={handleSelectedValue}
          formSelectedValue={selectedFilterValue}
        />
      </div>

      <InfiniteScroll
        className="pt-[70px]"
        dataLength={formattedEvents.length}
        next={fetchNextPage}
        hasMore={hasNextPage}
        loader={<EventCardSkeleton SkeletonNum={1} />}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>END OF Events</b>
          </p>
        }
      >
        {formattedEvents.map((value, index) => (
          <EventCard payload={value} key={index} />
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default EventsFeedPage;
