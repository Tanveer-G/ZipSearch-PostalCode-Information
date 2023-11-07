import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { updateData, updateError } from '../app/slices/apiDataSlice';

const fetcher = async ({ countrycode, zipcode, BASE_URL }) => {
  try {
    const response = await fetch(`${BASE_URL}/${countrycode}/${zipcode}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Error While fetching data: ', error);
    throw error;
  }
};

export const useZipCodeAPI = () => {
  const dispatch = useDispatch();

  const mutation = useMutation(fetcher, {
    onSuccess: (data) => {
      dispatch(updateData(data));
      dispatch(updateError(''));
    },
    onError: (err) => {
      dispatch(updateError(`◘${err}!◘`));
      dispatch(updateData({}));
    },
  });

  return mutation;
};
