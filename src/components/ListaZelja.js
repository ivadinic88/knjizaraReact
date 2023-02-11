import Knjige from "./Knjige";
import "./ListaZelja.css"
import { useState, useEffect } from "react";
function ListaZelja({ knjige, brojOmiljenih, loading }) {
    const [page, setPage] = useState(0);
    const [knjigeP, setKnjigeP] = useState([]);
    useEffect(() => {
        if (loading) return 
        setKnjigeP(knjige[page])
    }, [])

   
    return (
        <div>
            <h3 className="mb-5 mt-3">Lista zelja</h3>

            {brojOmiljenih === 0 ?
                <>
                    <h2>Lista zelja je prazna.</h2>
                </>
                :
                <>
                    <div className='section-center'>
                        {knjigeP.filter((o) => o.omiljena === 1).map((knjiga) => {
                            const { id, title, img, price, desc } = knjiga;
                            return <div key={id} className="product-item">
                                <img src={img} alt={title} className="photo" />
                                <div className='item-info'>
                                    <header>
                                        <h4>{title}</h4>
                                        <h4 className='price'>{price}.00 RSD</h4>
                                    </header>
                                    <div className="item-center">
                                        <p className='item-text'>{desc}</p>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </>
            }

        </div>
    )
}
export default ListaZelja;