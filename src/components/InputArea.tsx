import React, { useState } from "react";
import "../styles/InputArea.css"

interface InputAreaProps {
    handleCreateWork: (text: string) => void
}
export const InputArea = function({ handleCreateWork }: InputAreaProps) {
    const [text, setText] = useState<string>("");
    const handleClick = function(): void {
        if(text === "" || text === undefined) {
            alert("Hay nhap cong viec !");
        }
        else {
            handleCreateWork(text);
            setText("");
        }
    }
    const handleChange = function(event: React.ChangeEvent<HTMLInputElement>): void {
        setText(event.target.value); 
    }
    return (
        <div className="input-area">
            <input id="input-field" value={text} onChange={handleChange} type="text" placeholder="Nhập công việc ..." name="work" />
            <button id="create-btn" onClick={() => handleClick()}>Tạo</button>
        </div>
    )
}