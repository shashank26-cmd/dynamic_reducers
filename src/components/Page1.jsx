
import { useContext } from 'react';
import userContext from '../context/userContext';

const Page1 = () => {
  const { state, dispatch } = useContext(userContext);

  const updateField = (id, value) => {
    dispatch({ type: 'UPDATE_FIELD', payload: { id, value } });
  };

  const goToNextPage = () => {
    dispatch({ type: 'GO_TO_NEXT_PAGE' });
  };

  return (
    <div>
      <h2>Page 1</h2>
      {state.fields.slice(0, 2).map((field) => (
        <div key={field.id}>
          <label>{field.label}</label>
          <input
            type="text"
            value={field.value}
            onChange={(e) => updateField(field.id, e.target.value)}
          />
        </div>
      ))}
      <button onClick={goToNextPage}>Next Page</button>
    </div>
  );
};

export default Page1;
