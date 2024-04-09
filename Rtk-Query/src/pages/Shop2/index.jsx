import { useGetProductQuery } from "../../redux/features/Shopapi2"


const Shop2 = () => {

  const {data ,error ,isLoading , isFetching , isSuccess}= useGetProductQuery()
  
  if(isLoading || isFetching){
    return <h2>...Loading</h2>

  }

  if(error){
    return <h2>something went wrong</h2>
  }

  if(isSuccess && data.length === 0){
    return <h2>No data available</h2>
  }

  return (
    <div className="container">
    <h1>Shop2</h1>
    <div className="row">
      {data.products.map(prod => (
        <div className="col-4" key={prod.id}>
          <div className="card" style={{ width: "18rem" }}>
            <img src={prod.images[0]} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{prod.title}</h5>
              <p className="card-text">{prod.description}</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Shop2