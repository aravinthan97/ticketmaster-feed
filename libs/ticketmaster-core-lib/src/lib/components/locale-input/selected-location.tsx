'use client';
// import styles from './card.module.scss';

import React, { useState, useMemo, Fragment } from 'react';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
} from '@chakra-ui/react';
import countryList from 'react-select-country-list';
import { form, formatDate } from '@ticketmaster/shared';

export interface SelectedLocationProps {
  onSelectionChange: (data: {
    country: string;
    startDate: string;
    endDate: string;
  }) => void;
  formSelectedValue: form;
}

export function SelectedLocation({
  onSelectionChange,
  formSelectedValue,
}: SelectedLocationProps) {
  const [country, setCountry] = useState<string>(formSelectedValue.countryCode);
  const options = useMemo(() => countryList().getData(), []);
  const [startDate, setStartDate] = useState<string>(
    formSelectedValue.startDateTime
  );
  const [endDate, setEndDate] = useState<string>(formSelectedValue.endDateTime);

  const changeHandlerCountry = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedValue = event.target.value;
    setCountry(selectedValue);
  };

  const stringToDateTime = (dateTime: string) => {
    const date = new Date(dateTime);
    return date;
  };

  const handleStartDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    const sletectedDate = stringToDateTime(value);
    const formatedsletectedDate = formatDate(sletectedDate);
    setStartDate(formatedsletectedDate);
  };

  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const sletectedDate = stringToDateTime(value);
    const formatedsletectedDate = formatDate(sletectedDate);
    setEndDate(formatedsletectedDate);
  };

  // const isEndDateValid = () => {
  //   return new Date(endDate) >= new Date(startDate);
  // };
  const isEndDateValid = () => {
    if (!startDate || !endDate) {
      return false; // If either startDate or endDate is not set, return false
    }
    return new Date(endDate) >= new Date(startDate);
  };

  const handleSubmit = () => {
    if (isEndDateValid()) {
      onSelectionChange({ country, startDate, endDate });
    } else {
      alert('End date cannot be before start date.');
    }
  };

  return (
    <Fragment>
      <div className="flex mx-5 my-3">
        <FormControl className="flex items-center ">
          <FormLabel>Country</FormLabel>
          <Select value={country} onChange={changeHandlerCountry} width="auto">
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>

          <FormLabel className="ml-5">Start Date</FormLabel>
          <Input
            width="auto"
            className="mr-5"
            required
            placeholder="Select Date and Time"
            size="md"
            type="datetime-local"
            onChange={handleStartDateChange}
            value={startDate ? startDate.slice(0, 16) : ''}
          />

          <FormLabel>End Date</FormLabel>
          <Input
            width="auto"
            required
            placeholder="Select Date and Time"
            size="md"
            type="datetime-local"
            onChange={handleEndDateChange}
            value={endDate ? endDate.slice(0, 16) : ''}
            isInvalid={!isEndDateValid()}
          />
        </FormControl>

        <div className="flex flex-col justify-center items-center ">
          <Button  colorScheme="teal" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
      {!isEndDateValid() && (
        <div className="flex flex-row ml-5">
          <p className=" text-red-500">
            End date cannot be before start date or empty.
          </p>
        </div>
      )}
    </Fragment>
  );
}

export default SelectedLocation;
