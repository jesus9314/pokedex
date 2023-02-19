
type HeaderProps = {
    query: string,
    setQuery: (query:string) => void
}
const Header = ({query, setQuery}: HeaderProps) => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-red-400 h-14 py-2 flex justify-center">
        <input 
        className="border border-gray-300 rounded-lg p-1 w-3/4"
        type="text" 
        placeholder="Buscar Pokemon"
        value={query}
        onChange={ event =>setQuery(event.target.value)}/>
    </header>
  )
}

export default Header