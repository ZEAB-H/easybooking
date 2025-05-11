import { FC, useContext } from 'react';
import bookingFlowContext from '../bookingFlowContext';
import { PrimaryButton } from '../components/buttons';
import { trpc } from '../trpc';

const ChooseTypePage: FC = () => {
  const { onProceed, state, updateState } = useContext(bookingFlowContext);
  const { data, isLoading, isSuccess, error } = trpc.useQuery(['getServiceTypes']);

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
          {isLoading && <p>Loading service types...</p>}
          {error && <p className="text-red-500">Error loading service types: {error.message}</p>}
          {isSuccess && data && (
            <ul className="space-y-2">
              {data.map((serviceType: any) => (
                <li key={serviceType.id} className="flex flex-row items-center space-x-2">
                  <input
                    className="cursor-pointer"
                    type="radio"
                    name="type"
                    id={`type-${serviceType.id}`}
                    value={serviceType.id}
                    checked={state.serviceTypeID === serviceType.id}
                    onChange={({target}) => {
                      updateState({ serviceTypeID: Number(target.value)});
                    }}
                  />
                  <label className="cursor-pointer" htmlFor={`type-${serviceType.id}`}>
                    {serviceType.name || `Type ${serviceType.id}`}
                  </label>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="mt-4 flex flex-row justify-end">
        <PrimaryButton onClick={onProceed}>Choose Time</PrimaryButton>
      </div>
    </div>
  );
};

export default ChooseTypePage;
