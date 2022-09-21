import "../styles/Container.css";
import React from "react";
import { WorkTable } from "./WorkTable";
import { Heading } from "./Heading";
import { InputArea } from "./InputArea";
import { getDataFromLocalStorage, getTime, setDataToLocalStorage } from "../function/LSDataHandle";
import { ItemType } from "./Item.type";

interface ContainerState {
    todoList: ItemType[];
    doneList: ItemType[];
}
export class Container extends React.Component<{}, ContainerState>{
    constructor(props: {}) {
        super(props);
        this.state = {
            todoList: getDataFromLocalStorage("todo"),
            doneList: getDataFromLocalStorage("done")
        }
        this.handleCreateWork = this.handleCreateWork.bind(this);
        this.handleDeleteWork = this.handleDeleteWork.bind(this);
        this.handleDoneWork = this.handleDoneWork.bind(this);
    }
    // Ham xu li state khi them cong viec moi
    handleCreateWork(text: string): void {
        let item: ItemType = {
            id: `${text}${getTime()}`,
            content: text
        }
        this.setState({
            todoList: this.state.todoList.concat(item)
        });
        setDataToLocalStorage('todo', this.state.todoList);
    }
    // Ham thay doi state khi check box hoan thanh cong viec
    handleDoneWork(id: string) {
        let item: ItemType | undefined= this.state.todoList.find((el) => el.id === id);
        if(item){
            this.setState({
                todoList: this.state.todoList.filter((el) => el.id !== id),
                doneList: this.state.doneList.concat(item)
            });
            setDataToLocalStorage('todo', this.state.todoList);
            setDataToLocalStorage('done', this.state.doneList);
        }
    }
    handleDeleteWork(id: string) {
        this.setState({
            doneList: this.state.doneList.filter((el) => el.id !== id)
        });
        setDataToLocalStorage('done', this.state.doneList);
    }
    render(): React.ReactNode {
        return (
            <div id="container">
                <Heading />
                <InputArea handleCreateWork={this.handleCreateWork}/>
                <WorkTable 
                    todoList={this.state.todoList}
                    doneList={this.state.doneList}
                    handleDoneWork={this.handleDoneWork}
                    handleDeleteWork={this.handleDeleteWork}/>    
            </div>
        );
    }
}