export const deleteItem = (id, data) => {
    const newData = data.filter(item => item.id != id)
    return newData;
}