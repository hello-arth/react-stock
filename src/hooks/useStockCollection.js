export default function useStockCollection() {
  const save = (item, stockItems) => {
    const updatedList = [...stockItems, item]
    localStorage.setItem('react-stock', JSON.stringify(updatedList))
    return updatedList
  }

  const update = (data, stockItems) => {
    const { id, name, quantity, price, category, description } = data

    const itemIndex = stockItems.findIndex(i => i.id === id)
    if (itemIndex === -1) return null
    
    const item = stockItems[itemIndex]

    if (name !== undefined) item.name = name
    if (quantity !== undefined) item.quantity = quantity
    if (price !== undefined) item.price = price
    if (category !== undefined) item.category = category
    if (description !== undefined) item.description = description
    item.updatedAt = new Date()

    localStorage.setItem('react-stock', JSON.stringify(stockItems))
    return stockItems
  }

  const del = (id, stockItems) => {
    const itemIndex = stockItems.findIndex(i => i.id === id)
    if(itemIndex === -1) return null
    stockItems.splice(itemIndex, 1)
    localStorage.setItem('react-stock', JSON.stringify(stockItems))
    return stockItems
  }

  return { save, update, del }
}