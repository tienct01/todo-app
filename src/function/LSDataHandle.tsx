import { ItemType } from "../components/Item.type";

export const getDataFromLocalStorage = function(key: "todo" | "done"): ItemType[] {
    let datastr: string | null;
    let dataAr: ItemType[] = [];
    datastr = localStorage.getItem(key);
    if(datastr) {
        dataAr = JSON.parse(datastr);
    }
    return dataAr;
}

export const setDataToLocalStorage = function(key: "todo" | "done", dataAr: ItemType[]): void {
    localStorage.setItem(key, JSON.stringify(dataAr));
}
export const getTime = function() {
    return new Date().getTime();
}