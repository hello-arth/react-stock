import { useParams } from "react-router-dom"
import useStockContext from "../hooks/useStock"
import ItemForm from "../components/ItemForm"

export default function UpdateItem() {
  const { getItems } = useStockContext()
  const items = getItems()
  const { itemId } = useParams()

  const item = items.find(item => item.id === itemId)

  return (
    <>
      <p className="display-6 fs-4">Atualizar item - {item.name}</p>
      <ItemForm itemToUpdate={item} />
    </>
  )
}