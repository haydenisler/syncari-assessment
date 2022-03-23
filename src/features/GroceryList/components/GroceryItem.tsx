import type { FC } from 'react'; 
import { useEffect, useState } from 'react';
import { XIcon } from '@heroicons/react/solid';

import { IGrocery } from '../../../common/types/IGrocery';

export type GroceryItemProps = {
  items: IGrocery[];
  index: number;
  onChange: (updatedItems: IGrocery[]) => void;
}

export const GroceryItem: FC<GroceryItemProps> = ({ 
  items,
  index,
  onChange
}) => {
  const [value, setValue] = useState<string>(items[index].name);

  useEffect(() => {
    const updatedValues = items;
    items[index].name = value;
    onChange(updatedValues);
  }, [value]);

  return(
    <div className="item-container">
      <input
        className="field" 
        type="text"
        value={value} 
        onChange={(e) => {
          setValue(e.currentTarget.value);
        }} 
      />
      <div 
        className="item-container-delete"
        tabIndex={0}
        role="button"
        onClick={() => {
          const updatedValues = items;
          updatedValues.splice(index, 1);
          onChange(updatedValues);
        }}
      >
        <XIcon className='w-4 h-4 text-gray-400 stroke-current' />
      </div>
    </div>
  );
}