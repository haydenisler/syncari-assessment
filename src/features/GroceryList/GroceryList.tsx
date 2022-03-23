import type { FC } from "react";
import { IGrocery } from "../../common/types/IGrocery";
import { GroceryItem } from "./components/GroceryItem";

export type GroceryListProps = {
  items: IGrocery[];
  onChange: (updatedItems: IGrocery[]) => void;
}

export const GroceryList: FC<GroceryListProps> = ({ 
  items, 
  onChange
}) => {
  return(
    <ul className="flex flex-col mt-4 space-y-4">
      {items.map((item, i) => (
        <GroceryItem key={item.id} items={items} index={i} onChange={onChange} />
      ))}
    </ul>
  );
};