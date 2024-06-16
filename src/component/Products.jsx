import { cleanup } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addCart } from "../redux/action";




const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    const addProduct = (product) => {
        dispatch(addCart(product));
    }

    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("http://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);
            }
            return () => {
                componentMounted = false;
            }
        }
        getProducts();

    }, []);

    const Loading = () => {
        return (
            <>
                Loading...
            </>
        )
    }

    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);

    }

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>All</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Men's Collection</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>Women's Collection</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>Jewelery</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>Electronic</button>
                </div>
                {filter.map((product) => {
                    return (
                        <>

                            <div className="col-md-3 mb-4">
                                <div className="card h-100 text-center p-4" key={product.id}>
                                    <NavLink to={`/products/${product.id}`} className="stretched-link text-decoration-none">
                                        <img
                                            src={product.image}
                                            className="card-img-top"
                                            alt={product.title}
                                            height="250px"
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title mb-0">
                                                {product.title.substring(0, 12)}
                                            </h5>
                                            <p className="card-text lead fw-bold">${product.price}</p>
                                        </div>
                                    </NavLink>
                                    <button
                                        className="btn btn-outline-primary"
                                        onClick={() => addProduct(product)}
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        )
    }
    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
                        <hr />
                        <div className="row justify-content-center">
                            {loading ? <Loading /> : <ShowProducts />}


                        </div>
                    </div>
                </div>
            </div>

        </div>
    );

}

export default Products;



