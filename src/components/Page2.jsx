// Page2.js
import { useContext } from 'react';
import userContext from '../context/userContext';

const Page2 = () => {
  const { state, dispatch } = useContext(userContext);

  const updateField = (id, value) => {
    dispatch({ type: 'UPDATE_FIELD', payload: { id, value } });
  };

  const goToPrevPage = () => {
    dispatch({ type: 'GO_TO_PREV_PAGE' });
  };

  const goToNextPage = () => {
    dispatch({ type: 'GO_TO_NEXT_PAGE' });
  };

  return (
    <div>
      <h2>Page 2</h2>
      {state.fields.slice(2, 4).map((field) => (
        <div key={field.id}>
          <label>{field.label}</label>
          <input
            type="text"
            value={field.value}
            onChange={(e) => updateField(field.id, e.target.value)}
          />
        </div>
      ))}
      <button onClick={goToPrevPage}>Prev</button>
      <button onClick={goToNextPage}>Submit</button>
    </div>
  );
};

export default Page2;
