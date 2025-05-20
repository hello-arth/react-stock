import style from "./style.module.css"

export default function OverviewCard({ name, qtde }) {
  return (
    <div className={`${style.wrapper} container d-grid flex-grow-1 px-3 py-2 rounded shadow`}>
      <p>{name}</p>
      <p className="text-center fs-1">{qtde}</p>
    </div>
  )
}