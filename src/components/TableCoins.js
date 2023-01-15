import { CoinRow } from "./CoinRow"

const listTitle = ['id' , 'Coin' , 'Price' ,  'Change Price','Total Volume']

export const TableCoins = ({coins  , search}) =>{

    const coinsFiltered = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()) || coin.symbol.toLowerCase().includes(search.toLowerCase()))

    return (
        <table className="table table-dark mt-4 table-hover">
            <thead>
                <tr>
                    {listTitle.map((l , index) =>
                        <td className={index === 0 ? 'text-center' : ''}>{l}</td>    
                    )}
                </tr>
            </thead>
            <tbody>
                {
                coinsFiltered.length ? coinsFiltered.map((coin , index) => <CoinRow key={index } index={index + 1} coin={coin}/>) : <p className="p-4 text-center bg-dark text-white mt-5 ">Sorry It's empty xd</p>
                }
            </tbody>
        </table>
    )
}