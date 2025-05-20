
import { Link } from "react-router-dom";

export default function Tables({ recentItems, endingItems }) {
  const convertDate = (dateStr) => {
    return new Date(dateStr).toLocaleString()
  }

  return (
    <div className="d-flex flex-column flex-sm-row gap-4">
      <table className="w-100 h-100">
        <thead>
          <tr className="shadow">
            <th>Itens recentes</th>
            <th>Criado em</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {recentItems.length > 0 ?
            recentItems.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{convertDate(item.createdAt)}</td>
                <td>
                  <Link to={`/items/${item.id}`} className="btn btn-light btn-sm">Ver</Link>
                </td>
              </tr>
            ))
            : null}
        </tbody>
      </table>

      <table className="w-100 h-100 fs-6">
        <thead>
          <tr className="shadow">
            <th>Itens acabando</th>
            <th>Qtd.</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {endingItems.length > 0 ?
            endingItems.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>
                  <Link to={`/items/${item.id}`} className="btn btn-light btn-sm">Ver</Link>
                </td>
              </tr>
            ))
            : null}
        </tbody>
      </table>
    </div>
  )
}