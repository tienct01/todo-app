import React from "react";
import "../styles/WorkTable.css";
import "../styles/DetailArea.css";
import { ToDoItem } from "./ToDoItem";
import { DoneItem } from "./DoneItem";
import { ItemType } from "./Item.type";

interface WorkTableProps {
    todoList: ItemType[];
    doneList: ItemType[];
    handleDoneWork: (id: string) => void;
    handleDeleteWork: (id: string) => void;
}
export const WorkTable = function({
    todoList,
    doneList,
    handleDeleteWork,
    handleDoneWork
}: WorkTableProps) {
    return (
        <div className="detail-area">
            <div className="column-title">
                <div className="todo">Chưa xong</div>
                <div className="done">Đã xong</div>
            </div>
            <div className="list">
                <div className="todo-area">
                    {
                        todoList.map((el) => {
                            return (
                                <ToDoItem 
                                    key={el.id} 
                                    item={el}
                                    handleClick={handleDoneWork}
                                />
                            );
                        })
                    }
                </div>
                <div className="done-area">
                    {
                        doneList.map((el) => {
                            return (
                                <DoneItem 
                                    key={el.id} 
                                    item={el}
                                    handleClick={handleDeleteWork}
                                />
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}