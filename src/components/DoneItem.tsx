import "../styles/WorkItem.css";
import { ItemType } from "./Item.type";

interface DoneItemProps {
    item: ItemType
    handleClick: (id: string) => void;
}
export const DoneItem = function({ item, handleClick }: DoneItemProps) {
    return (
        <div className="work-item">
            <button onClick={() => handleClick(item.id)}></button>
            <div className="work-content">{item.content}</div>
        </div>
    );
} 