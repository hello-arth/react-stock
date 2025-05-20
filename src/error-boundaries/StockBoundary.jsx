import { isRouteErrorResponse, useRouteError } from "react-router-dom"

export default function StockBoundary() {
  const error = useRouteError()
  let errorMessage
  if(isRouteErrorResponse(error)) {
    switch (error.status) {
      case 404:
        errorMessage = "Ocorreu um erro ao buscar os dados."
        break
      case 400:
         errorMessage = "Parece que algo deu errado na requisição..."
         break
      case 500:
        errorMessage = "Erro interno do servidor."
        break
      default:
        errorMessage = "Erro interno desconhecido."
        break
    }
  } else {
    errorMessage = "Algo deu errado ao renderizar o conteúdo"
  }
  return <h4 className="p-5 text-danger">{errorMessage}</h4>
}