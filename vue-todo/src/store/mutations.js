addOneItem(state, todoItem) {
    const obj = { completed: false, item: todoItem };
    localStorage.setItem(todoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
}

removeOneItem(state, payload) {
    localStorage.removeItem(payload.todoItem.item);
    state.todoItems.splice(payload.index, 1);
}

consttoggleOneItem(state, payload) {
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
}
clearAllItems(state) {
    localStorage.clear();
    state.todoItems = [];
}

// 하나씩 해줘도 됨
export { addOneItem, removeOneItem, consttoggleOneItem, clearAllItems 