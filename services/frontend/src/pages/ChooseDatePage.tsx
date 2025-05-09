import { addMonths, format, startOfMonth } from 'date-fns';
import { FC, useContext, useState } from 'react';
import { PrimaryButton, SecondaryButton } from '../components/buttons';
import bookingFlowContext from '../bookingFlowContext';
import OneMonth from '../components/oneMonth';

const ChooseDatePage: FC = () => {
  const { onGoBack, onProceed } = useContext(bookingFlowContext);
  const [thisMonth, setThisMonth] = useState(startOfMonth(new Date()));
  const nextMonth = addMonths(thisMonth, 1);
  const [selectedDay, setSelectedDay] = useState<Date | undefined>();

  const goToPreviousMonth = () => setThisMonth(addMonths(thisMonth, -1));
  const goToNextMonth = () => setThisMonth(addMonths(thisMonth, 1));
  const availableDays = {};

  return (
    <div>
      <div className="text-2xl font-bold">Please select a day</div>
      <div className="mt-4 flex flex-col space-y-4">
        <div className="flex flex-col justify-between space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
          <OneMonth
            month={thisMonth}
            availabilityMap={availableDays}
            onSelectDay={setSelectedDay}
            selectedDay={selectedDay}
            onGoToPreviousMonth={goToPreviousMonth}
            onGoToNextMonth={goToNextMonth}
          />
          <OneMonth
            month={nextMonth}
            availabilityMap={availableDays}
            onSelectDay={setSelectedDay}
            selectedDay={selectedDay}
            onGoToPreviousMonth={goToPreviousMonth}
            onGoToNextMonth={goToNextMonth}
          />
        </div>
        <div className="mt-4 flex flex-row justify-between">
          <SecondaryButton onClick={onGoBack}>Go Back</SecondaryButton>
          <PrimaryButton onClick={onProceed}>Proceed</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default ChooseDatePage;
