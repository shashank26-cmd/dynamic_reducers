// DynamicForm.js
import { useContext } from 'react';
import userContext from '../context/userContext';

const DynamicForm = () => {
  const { state, dispatch } = useContext(userContext);

  const updateField = (id, value) => {
    dispatch({ type: 'UPDATE_FIELD', payload: { id, value } });
  };

  const goToNextPage = () => {
    dispatch({ type: 'GO_TO_NEXT_PAGE' });
  };

  const calculatePercentage = () => {
    const filledFields = state.fields.filter((field) => field.value.trim() !== '');
    const percentage = (filledFields.length / state.fields.length) * 100;
    return percentage.toFixed(2);
  };

  const handleSubmit = async () => {
    // Assuming you have an API endpoint to handle form submissions
    const apiUrl = 'https://example.com/submit-form';
    
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(state.fields),
      });

      if (response.ok) {
        console.log('Form submitted successfully!');
      } else {
        console.error('Failed to submit form.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      {state.currentPage === 1 && (
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
      )}

      {state.currentPage === 2 && (
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
          <div>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      )}

      <div>
        <h2>Percentage of filled fields: {calculatePercentage()}%</h2>
      </div>
    </div>
  );
};

export default DynamicForm;
