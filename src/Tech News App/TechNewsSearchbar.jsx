import { useGlobalContext } from "./TechNewsApp";

const TechNewsSearchbar = ()=>{

const { query, searchPost } = useGlobalContext()

return(
        <>
            <div className="container-fluid">
                <dv className="row mx-auto my-3">
                    <div className="col-md-10 mx-auto">
                        <div className="row my-2">
                            <div className="col-md-12 text-center font-bold">
                                <h2 className="p-2 tech_news_header bg-white">Search Tech News And Anything</h2>
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-md-12">
                               <input className="News_input_field" placeholder="Search Tech News..." type="search" value={query} onChange={(e)=>searchPost(e.target.value)} />
                            </div>
                        </div>
                    </div>
                </dv>
            </div>
        </>
    )
}
export default TechNewsSearchbar;