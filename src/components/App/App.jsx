import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

function App() {
  const dispatch = useDispatch();
  const reduxState = useSelector(reduxState => reduxState)
  const [newElement, setNewElement] = useState('');


  const handleChange = (event) => {
    setNewElement(event.target.value);
  }

  const getElements = () => {
    dispatch({type: 'FETCH_ELEMENTS'})

    //all below was moved to index.js generator function fetchElements

    // axios.get('/api/element').then(response => {
    //   dispatch({ type: 'SET_ELEMENTS', payload: response.data });
    // })
    //   .catch(error => {
    //     console.log('error with element get request', error);
    //   });
  }

  useEffect(() => {
    getElements();
  }, []);

  const handleClick = () => {
    dispatch({type: 'POST_ELEMENT', payload: newElement})
    setNewElement('');
    
    // axios.post('/api/element', {newElement}).then(() => {
    //   getElements();
    //   setNewElement('');
    // })
    //   .catch(error => {
    //     console.log('error with element get request', error);
    //   });
  }


  return (
    <div>
      <button onClick={() => dispatch({ type: 'BUTTON_ONE' })}>Button One</button>
      <button onClick={() => dispatch({ type: 'BUTTON_TWO' })}>Button Two</button>
      <input value={newElement} onChange={handleChange} />
      <button onClick={handleClick}>Add Element</button>
      <pre>{JSON.stringify(reduxState)}</pre>
    </div>
  );
}


export default App;
