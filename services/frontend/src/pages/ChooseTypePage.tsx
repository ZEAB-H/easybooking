import { FC, useContext } from 'react';
import bookingFlowContext from '../bookingFlowContext';
import { PrimaryButton } from '../components/buttons';

const ChooseTypePage: FC = () => {
  const { onProceed, state, updateState } = useContext(bookingFlowContext);

  return (
    <div>
      <div className="text-2xl font-bold">How can we help you?</div>
      <div className="text-gray-700">
        We offer multiple services. Quickly decide what you need and we'll get
        you started.
      </div>
      <div className="my-4 flex flex-col">
        <textarea
          value={state.description}
          onChange={({ target }) => updateState({ description: target.value })}
          className="rounded border border-gray-300 p-2"
        />
        <div className="mt-4 flex flex-col">
          <h1 className="font-bold">Choose a service type:</h1>
          <ul className="space-y-2">
            <li className="flex flex-row items-center space-x-2">
              <input
                className="cursor-pointer"
                type="radio"
                name="type"
                id="type-1"
                checked={state.serviceTypeID == 1}
                onChange={() => {
                  updateState({ serviceTypeID: 1 });
                }}
              />
              <label className="cursor-pointer" htmlFor="type-1">
                Type 1
              </label>
            </li>
            <li className="flex flex-row items-center space-x-2">
              <input
                className="cursor-pointer"
                type="radio"
                name="type"
                id="type-2"
                checked={state.serviceTypeID == 2}
                onChange={() => {
                  updateState({ serviceTypeID: 2 });
                }}
              />
              <label className="cursor-pointer" htmlFor="type-2">
                Type 2
              </label>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-4 flex flex-row justify-end">
        <PrimaryButton onClick={onProceed}>Choose Time</PrimaryButton>
      </div>
    </div>
  );
};

export default ChooseTypePage;
