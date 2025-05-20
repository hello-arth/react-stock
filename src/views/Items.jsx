import { Link } from "react-router-dom"
import useStockContext from "../hooks/useStock"

export default function Items() {
  const { getItems, deleteItem } = useStockContext()
  const items = getItems()

  const handleDelete = (id) => {
    deleteItem(id)
  }

  return (
    <>
      <div className="overflow-auto mt-4">
        <table className="w-100 h-100">
          <thead>
            <tr className="shadow">
              <th>ID</th>
              <th>Nome</th>
              <th>Em Estoque</th>
              <th>Categoria</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {items.length > 0 ?
              items.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.category}</td>
                  <td className="d-flex gap-3">
                    <Link to={`${item.id}`} className="btn btn-primary">Ver</Link>
                    <Link to={`update/${item.id}`} className="btn btn-light">Atualizar</Link>
                    <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>Excluir</button>
                  </td>
                </tr>
              ))
              : null}
          </tbody>
        </table>
      </div>

    </>
  )
}