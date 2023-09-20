import { useGlobalContext } from "./TechNewsApp";

const Pagination = ()=>{
    const { page, nbPages, prevPage, nextPage} = useGlobalContext();
    return(
        <>
        <div className="container-fluid">
            <div className="row ">
                <div className="col-md-10  mx-auto d-flex justify-content-center">
                    <div className="row">
                        <div className="col-md-12 d-flex ">
                            <button onClick={prevPage} className="pagination_btn">Prev</button>
                            <p className="pagination_para text-white">{page+1} of {nbPages}</p>
                            <button onClick={nextPage} className="pagination_btn">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Pagination;