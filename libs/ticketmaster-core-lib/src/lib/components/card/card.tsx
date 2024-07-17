import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Button,
  Heading,
  Text,
  Image,
} from '@chakra-ui/react';
import { FeedPayload } from '@ticketmaster/shared';

export interface EventCardProps {
  payload: FeedPayload;
}

export function EventCard({ payload  }: EventCardProps) {
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

          <Text py="2">
            Data:{payload.date} time:{payload.time}
          </Text>
          <Text py="2">
            location:{payload.date}
          </Text>
        </CardBody>

        <CardFooter>
        <Text py="2">
            latitiud :{payload.date} -   longtiud :{payload.date}
          </Text>
        </CardFooter>
      </Stack>
    </Card>
  );
}

export default Card;
