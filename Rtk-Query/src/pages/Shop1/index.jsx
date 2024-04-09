import React from 'react';
import { useGetWholeProductQuery } from "../../redux/features/shopapi";

const Shop1 = () => {
  const { data, error, isLoading, isFetching, isSuccess } = useGetWholeProductQuery();

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>; // Show loading spinner or message
  }

  if (error) {
    return <h2>Something went wrong</h2>; // Show error message
  }

  if (isSuccess && data.length === 0) {
    return <h2>No data available</h2>; // Handle case where data is empty
  }

  return (
    <div className="container">
      <h1>Shop1</h1>
      <div className="row">
        {data.map(prod => (
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
  );
}

export default Shop1;
