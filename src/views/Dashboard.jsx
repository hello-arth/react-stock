import OverviewCard from "../components/OverviewCard";
import Tables from "../components/Tables";
import useStockContext from "../hooks/useStock";

export default function Dashboard() {
  const { getItems } = useStockContext()
  const items = getItems()

  const recentItems = items.filter(item => {
    const createdAt = new Date(item.createdAt)
    const now = new Date()
    const diffInMs = now - createdAt
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24)
    return diffInDays <= 1
  })

  const endingItems = items.filter(item => item.quantity <= 10)

  const sortedItems = items.reduce((accum, item) => {
    if (!accum.includes(item.category)) {
      accum.push(item.category)
    }
    return accum
  }, [])

  return (
    <>
      <p className="display-5">Dashboard</p>

      {/* Overview Section */}
      <div className="d-flex flex-wrap flex-sm-nowrap gap-3 py-3 justify-content-center mb-2">
        <OverviewCard name="Diversidade de itens" qtde={sortedItems.length} />
        <OverviewCard name="Inventário total" qtde={items.length} />
        <OverviewCard name="Itens recentes" qtde={recentItems.length} />
        <OverviewCard name="Itens acabando" qtde={endingItems.length} />
      </div>

      {/* Tables - Recent items and ending items */}
      <Tables recentItems={recentItems} endingItems={endingItems} />
    </>
  )
}