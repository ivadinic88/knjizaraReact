import "./Forma.css"
function Forma() {
    return (
        <div>
            <h2>Kontakt forma</h2>
            <form className="row">
            <div className="col-md-6">
                <label for="inputFirstName" className="form-label">Ime</label>
                <input type="text" className="form-control" aria-label="First name" />
            </div>
            <div className="col-md-6">
                <label for="inputLastName" className="form-label">Prezime</label>
                <input type="text" className="form-control" aria-label="Last name" />
            </div>
            <div className="col-md-12">
                <label for="exampleFormControlInput1" className="form-label">Email adresa</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" />
            </div>
            <div className="col-md-12">
                <label for="exampleFormControlTextarea1" className="form-label">Komentar</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>    
            </form>
            <div className="btnForma">
                <button onClick={() => { alert('Uspesno ste se poslali poruku!'); }} className="dugme1" type="submit">
                    Posalji
                </button>
            </div>
        </div>
    );






}

export default Forma;