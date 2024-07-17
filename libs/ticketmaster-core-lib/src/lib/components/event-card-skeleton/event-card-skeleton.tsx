import { Card, Stack, Skeleton, CardBody, CardFooter } from '@chakra-ui/react';

interface EventCardSkeletonProps {
  SkeletonNum:number
}
const EventCardSkeleton = ({SkeletonNum}:EventCardSkeletonProps) => {
  // Array to iterate 10 times
  const skeletonItems = Array.from({ length: SkeletonNum }, (_, index) => (
    <Card key={index} direction={{ base: 'column', sm: 'row' }} overflow="hidden" variant="outline" borderWidth="1px">
      {/* Image Section */}
      <Skeleton width={{ base: '100%', sm: '200px' }} height={{ base: '200px', sm: '200px' }} />

      {/* Content Section */}
      <Stack flex="1">
        <CardBody>
          {/* Event Name */}
          <Skeleton height="80px" width="100%" />
        </CardBody>

        {/* Footer Section */}
        <CardFooter>
          {/* Latitude and Longitude */}
          <Skeleton height="20px" width="50%" />
        </CardFooter>
      </Stack>
    </Card>
  ));

  return skeletonItems
};

export default EventCardSkeleton;
