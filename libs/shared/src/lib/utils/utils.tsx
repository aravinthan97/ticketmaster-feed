import { FeedPayload } from '../models/shared-models';

export const payloadPasser = (data: any): FeedPayload[] => {
  return data.map((item: any) => {
    console.log(item,"data")
    // Find the image with the 4_3 ratio
    const image = item.images.find((img: any) => img?.ratio === '4_3')?.url;

    return {
      id: item.id as string,
      name: item.name as string,
      date: item.dates.start.localDate as string,
      time: item.dates.start.localTime as string,
      image: image || ('' as string), // Default to empty string if no image found
      pleaseNote:item.pleaseNote as string,
      country:item._embedded.venues[0].country.name as string




    };
  });
};

export const formatDate = (date: Date): string => {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const day = String(date.getUTCDate()).padStart(2, '0');
  const hours = String(date.getUTCHours()).padStart(2, '0');
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  const seconds = String(date.getUTCSeconds()).padStart(2, '0');

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;
};
