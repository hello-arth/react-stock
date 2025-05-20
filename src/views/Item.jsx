import { Link, useNavigate, useParams } from "react-router-dom"
import useStock from "../hooks/useStock"

export default function Item() {
  const navigate = useNavigate()
  const { getItem, deleteItem } = useStock()
  const { itemId } = useParams()
  const item = getItem(itemId)

  const handleDelete = (id) => {
    deleteItem(id)
    alert("Item deletado com sucesso!")
    navigate('/items')
  }

  const convertDate = (dateStr) => {
    return new Date(dateStr).toLocaleString()
  }

  return (
    <>
      {item && (
        <>
          <div className="d-flex gap-3 align-items-center">
            <span className="display-1 fs-4">{item.name}</span>
            <Link to={`/items/update/${item.id}`} className="btn btn-light btn-sm">Atualizar</Link>
            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(item.id)}>Excluir</button>
          </div>

          <div className="d-flex flex-wrap gap-3 mt-4">
            <span className="d-inline-block py-2 px-3 bg-light-subtle text-light-emphasis rounded shadow">Categoria: {item.category}</span>
            <span className="d-inline-block py-2 px-3 bg-light-subtle text-light-emphasis rounded shadow">Quantidade em estoque: {item.quantity}</span>
            <span className="d-inline-block py-2 px-3 bg-light-subtle text-light-emphasis rounded shadow">Preço: R$ {parseFloat(item.price).toFixed(2)}</span>
          </div>

          <p className="mt-4">{item.description}</p>

          <div className="d-flex flex-wrap gap-3 gap-sm-4 gap-md-5 mt-5 text-primary-emphasis">
            <span className="d-inline-block">Criado em: {convertDate(item.createdAt)}</span>
            <span className="d-inline-block">Atualizado em: {convertDate(item.updatedAt)}</span>
          </div>
        </>
      )
      }
    </>
  )
}