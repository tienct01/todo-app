import React from "react";
import "../styles/WorkItem.css";
import "../styles/TodoItemAni.css";
import { ItemType } from "./Item.type";

interface ToDoProps {
    item: ItemType;
    handleClick: (id: string) => void
}
export class ToDoItem extends React.Component<ToDoProps, {contentClassName: string}>{
    constructor(props: ToDoProps) {
        super(props);
        this.state = {
            contentClassName: "work-content"
        }
        this.onClickToDo = this.onClickToDo.bind(this);
    }
    onClickToDo() {
        this.setState({
            contentClassName: this.state.contentClassName.concat(" todo-item")
        });
        setTimeout(() => {
            this.props.handleClick(this.props.item.id);
        }, 300);
    }
    render(): React.ReactNode {
        return (
            <div className="work-item">
                <label className="custom-checkbox">
                    <input type="checkbox" id="done-checkbox" onClick={this.onClickToDo}/>
                    <span className="checkmark"></span>
                </label>
                <div className={this.state.contentClassName}>{this.props.item.content}</div>
            </div>
        );
    }
}