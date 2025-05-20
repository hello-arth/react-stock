export default function stockItems() {
  try {
    const items = JSON.parse(localStorage.getItem('react-stock')) ?? [];
    return items
  } catch (error) {
    console.error(error)
    throw new Response(error.message, { status: 400 })
  }
}