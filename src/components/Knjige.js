import { BsFillHeartFill } from "react-icons/bs"
import { useState, useEffect } from "react";
function Knjige({ knjige, dodajOmiljene, loading }) {
    const [page, setPage] = useState(0);
    const [knjigeP, setKnjigeP] = useState([]);
    useEffect(() => {
        if (loading) return
        setKnjigeP(knjige[page])
    }, [loading, page])


    const nextPage = () => {
        setPage((oldPage) => {
            let nextPage = oldPage + 1
            if (nextPage > knjige.length - 1) {
                nextPage = 0
            }
            return nextPage
        })
    }
    const prevPage = () => {
        setPage((oldPage) => {
            let prevPage = oldPage - 1
            if (prevPage < 0) {
                prevPage = knjige.length - 1
            }
            return prevPage
        })
    }

    const handlePage = (index) => {
        setPage(index)
    }
    return <div>
        <div className='section-center'>
            {knjigeP.map((knjiga) => {
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
                            <button className="dugme object-fit-scale border-0" type='button'
                                onClick={() => dodajOmiljene(id)}>
                                <BsFillHeartFill /></button>
                        </div>
                    </div>
                </div>
            })}
         

        </div>
           {!loading && (
                <div className='btn-container'>
                    <button className='prev-btn' onClick={prevPage}>
                        pret.
                    </button>
                    {knjige.map((item, index) => {
                        return (
                            <button
                                key={index}
                                className={`page-btn ${index === page ? 'active-btn' : null}`}
                                onClick={() => handlePage(index)}
                            >
                                {index + 1}
                            </button>
                        )
                    })}
                    <button className='next-btn' onClick={nextPage}>
                        sled.
                    </button>
                </div>
            )}
    </div>



}

export default Knjige;