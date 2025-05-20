import { useEffect, useRef, useState } from "react"
import useStock from "../hooks/useStock"
import StockItem from "../entities/StockItem"

export default function ItemForm({ itemToUpdate }) {
  const inputRef = useRef(null)

  useEffect(() => inputRef.current.focus(), [inputRef])

  const defaultItem = {
    name: "",
    quantity: 1,
    price: 0,
    category: "",
    description: ""
  }

  const [item, setItem] = useState(itemToUpdate ? itemToUpdate : defaultItem)
  const { createItem, updateItem } = useStock()

  const handleChange = (ev) => (setItem((current) => ({ ...current, [ev.target.name]: ev.target.value })))

  const handleSubmit = (ev) => {
    try {
      ev.preventDefault()
      if (itemToUpdate) {
        updateItem(item)
        alert("Item atualizado com sucesso!")
      } else {
        const validItem = new StockItem(item)
        createItem(validItem)
        setItem(defaultItem)
        alert("Item cadastrado com sucesso!")
      }
    } catch (err) {
      console.log(err.message)
      alert("Ocorreu um erro.")
    } finally {
      inputRef.current.focus()
    }
  }

  return (
    <form className="pt-2 px-sm-5" onSubmit={handleSubmit}>
      <div className="input-group d-flex gap-3">
        <div className="flex-grow-1">
          <label className="ps-1" htmlFor="name">Nome</label>
          <input ref={inputRef} type="text" id="name" name="name"
            className="d-block mt-2 w-100 shadow"
            value={item.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex-grow-1">
          <label className="ps-1" htmlFor="quantity">Quantidade</label>
          <input type="number" min={1} id="quantity" name="quantity"
            className="d-block mt-2 w-100 shadow"
            value={item.quantity}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex-grow-1">
          <label className="ps-1" htmlFor="price">Preço</label>
          <input type="number" min={0} step={0.01} id="price" name="price"
            className="d-block mt-2 w-100 shadow"
            value={item.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex-grow-1">
          <label className="ps-1" htmlFor="category">Categoria</label>
          <select id="category" name="category"
            className="d-block mt-2 w-100 shadow"
            value={item.category}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Selecione uma categoria</option>
            <option value="Objetos">Objetos</option>
            <option value="Móveis">Móveis</option>
            <option value="Eletrônicos">Eletrônicos</option>
            <option value="Eletrodomésticos">Eletrodomésticos</option>
            <option value="Ferramentas">Ferramentas</option>
            <option value="Jogos">Jogos</option>
            <option value="Livros">Livros</option>
            <option value="Brinquedos">Brinquedos</option>
            <option value="Acessórios">Acessórios</option>
          </select>
        </div>
      </div>
      <div className="mt-3">
        <label className="ps-1" htmlFor="description">Descrição</label>
        <textarea id="description" name="description" rows={5}
          className="d-block mt-2 w-100 shadow"
          value={item.description}
          onChange={handleChange}
          required
        >
        </textarea>
      </div>
      <button type="submit"
        className="btn btn-primary mt-4">Salvar</button>
    </form>
  )
}