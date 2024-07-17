import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Image,
  Divider,
} from '@chakra-ui/react';
import { FeedPayload } from '@ticketmaster/shared';

export interface EventCardProps {
  payload: FeedPayload;
}

export function EventCard({ payload }: EventCardProps) {
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="outline"
    >
      {payload.image !== '' ? (
        <Image
          objectFit="cover"
          maxW={{ base: '100%', sm: '200px' }}
          src={payload.image}
          alt="Caffe Latte"
        />
      ) : (
        <p>Image Not found</p>
      )}

      <Stack>
        <CardBody>
          <Heading size="md">{payload.name}</Heading>

          <Text py="1">
            <b>Data: </b>
            {payload.date}
          </Text>
          <Text py="1">
            <b>time: </b> {payload.time}
          </Text>
          <Text py="1">
            <b>country: </b>
            {payload.country}
          </Text>
        </CardBody>
        {payload.pleaseNote ? (
          <CardFooter>
            <Text>
              <b>Note: </b>
              {payload.pleaseNote}
            </Text>
          </CardFooter>
        ) : null}
      </Stack>
    </Card>
  );
}

export default Card;
