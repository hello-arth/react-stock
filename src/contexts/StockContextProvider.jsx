import { createContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import useStockCollection from "../hooks/useStockCollection";

const StockContext = createContext({})

export default function StockContextProvider({ children }) {
  const storageItems = useLoaderData()
  const [stockItems, setStockItems] = useState(storageItems)
  const { save, update, del } = useStockCollection()
  
  const getItems = () => {
    return [...stockItems]
  }

  const getItem = (id) => {
    return stockItems.find(item => item.id === id)
  }

  const createItem = (data) => {
    setStockItems(save(data, [...stockItems]))
  }

  const updateItem = (data) => {
    setStockItems(update(data, [...stockItems]))
  }

  const deleteItem = (id) => {
    setStockItems(del(id, [...stockItems]))
  }

  const stockContextData = {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem
  }

  return (
    <StockContext.Provider value={stockContextData}>
      { children }
    </StockContext.Provider>
  )
}

export { StockContext }