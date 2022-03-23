import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { IGrocery } from './common/types/IGrocery';
import { GroceryList } from './features/GroceryList';


function App() {
  const [groceries, setGroceries] = useState<IGrocery[]>([]);
  const [input, setInput] = useState<string | null>(null);

  const onChange = (updatedItems: IGrocery[]) => {
    setGroceries([...updatedItems]);  
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);
  }

  const handleAdd = () => {
    if (input) {
      const newItem = {
        id: uuidv4(),
        name: input
      }
      setGroceries([...groceries, newItem]);
      setInput(null);
    }
  };

  return (
    <div className="container App">
      <div className="input-container">
        <input 
          className="field"
          placeholder="Enter a new item here!" 
          type="text" 
          value={input || ''} 
          onChange={handleInput} 
        />
        <button className="btn" type="button" onClick={handleAdd}>
            Add
        </button>
      </div>

      <GroceryList items={groceries} onChange={onChange} />
      
      {groceries.length !== 0 && (
        <pre className="mt-8 font-mono bg-inherit">
          {JSON.stringify(groceries, null, 2)}
        </pre>
      )}
    </div>
  );
}

export default App;
