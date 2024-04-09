
import { addToCart,IncreaseQty ,decrementQty} from "../../redux/features/cart/cartSlice";
import {useDispatch , useSelector} from 'react-redux'


const Card = ({ products }) => {

    const dispatch = useDispatch();

    const {cart}=useSelector((state)=>state.rootReducer);
   // console.log(cart,'store');

  

    const handleCartItem = (prod) =>{
        
        dispatch(addToCart(prod))
    }

    const handleIncrement =(id)=>{
        dispatch(IncreaseQty(id))
    }

    const handleDecrement =(id)=>{
        dispatch(decrementQty(id))
    }
  
    return (
        <>
       
     
        <div className="row">
            
        {
        
             products.map(prod => (             
                <div className="col-4 mt-3" key={prod.id}>
                    <div className="card border-0 rounded-0 shadow" style={{ width: '18rem' }} key={prod.id}>
                            <img src="https://codingyaar.com/wp-content/uploads/bag-scaled.jpg" className="card-img-top rounded-0" alt="..." />
                            <div className="card-body mt-3 mb-3">
                                <div className="row">
                                    <div className="col-10">
                                        <span className="card-title">{prod.title}</span>
                                        <p className="card-text">
                                            <i className="bi bi-star-fill text-warning"></i>
                                            <i className="bi bi-star-fill text-warning"></i>
                                            <i className="bi bi-star-fill text-warning"></i>
                                            <i className="bi bi-star-fill text-warning"></i>
                                            (123)
                                        </p>
                                    </div>
                                    <div className="col-2">
                                        <i className="bi bi-bookmark-plus fs-2"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center text-center g-0">
                                <div className="col-4">
                                    <h5>${prod.price}</h5>
                                </div>
                                <div className="col-8">
                            
                                {
                                     cart.cart.find(item => item.id === prod.id) 
                                      ? <div className='d-flex'>
                                        <button type="button" className="btn btn-danger btn-sm" onClick={()=>handleIncrement(prod.id)}>+</button>
                                        <input type="number" value={cart.cart.find(item => item.id === prod.id).qty} className="ms-1 me-1" style={{width:'35px'}}  />
                                        <button type="button" value={cart.cart.find(item => item.id === prod.id).qty} className="btn btn-sm btn-danger" onClick={()=>handleDecrement(prod.id)}> -</button>
                                      </div> 
                                         
                                      :
                                       <a href="#" className="btn btn-dark w-100 p-1 rounded-0 text-warning" id={prod.id} onClick={()=>handleCartItem(prod)}>ADD TO CART</a>
                                }
                                    
                                </div>
                            </div>
                    </div>
                </div>
            ))
        }
        </div>
  
        </>
    );
};

export default Card;
