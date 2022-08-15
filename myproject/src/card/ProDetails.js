import axios from "axios";
import { useContext, useEffect, useReducer, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./ProDetails.css";
import "./Comment.css";
import IMG from "../pictures/9/3.jpg";
import { toast } from "react-toastify";
import Form from "./Form";
import Rating from "./Rating";
import Comment from "./Comment";
import AuthCart from "../store/cart-context";


const reducer = (state, action) => {
  switch (action.type) {
    case "REFRESH_PRODUCT":
      return { ...state, product: action.payload };
    case "CREATE_REQUEST":
      return { ...state, loadingCreateReview: true };
    case "CREATE_SUCCESS":
      return { ...state, loadingCreateReview: false };
    case "CREATE_FAIL":
      return { ...state, loadingCreateReview: false };
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, product: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const ProDetails = (props) => {

  const params = useParams();
  const { p_id } = params;

  const ctx = useContext(AuthCart);
  const addHandler = (amount) => { 
   
     ctx.addItem ({
      id : p_id,
      title : props.title,
      amount : amount ,
      price : props.price, 


     });
  };
  let reviewsRef = useRef();

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

    const navigate = useNavigate();
   

    var userInfo = JSON.parse(localStorage.getItem("USER"));

    const [{ loading, error, product, loadingCreateReview }, dispatch] =
      useReducer(reducer, {
        product: [],
        loading: true,
        error: '',
      });

    useEffect(() => {
      const fetchData = async () => {
        dispatch({ type: 'FETCH_REQUEST' });
        try {
          const result = await axios.get(`http://localhost:8080/products/${p_id}`);
          dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
        } catch (err) {
          dispatch({ type: 'FETCH_FAIL', payload: err });
        }
      };
      fetchData(); 

    
    }, [p_id]);

    // const { state, dispatch: ctxDispatch } = useContext(Store);
    // const { cart, userInfo } = state;
    // const addToCartHandler = async () => {
    //   const existItem = cart.cartItems.find((x) => x._id === product._id);
    //   const quantity = existItem ? existItem.quantity + 1 : 1;
    //   const { data } = await axios.get(`/api/products/${product._id}`);
    //   if (data.countInStock < quantity) {
    //     window.alert('Sorry. Product is out of stock');
    //     return;
    //   }
    //   ctxDispatch({
    //     type: 'CART_ADD_ITEM',
    //     payload: { ...product, quantity },
    //   });
    //   navigate('/cart');
    // };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!comment || !rating) {
      // <Warn text="Please enter comment and rating" />;
      toast.error("Please enter comment and rating");
      return;
    }
    
    const toSub = {
      Name : userInfo.FName,
      comment,
      rating,
      u_id : userInfo.Id,
      p_id,
    }
    try {
      console.log(toSub)
      const { data } = await axios
      .post(`http://localhost:8080/products/${p_id}/reviews`, toSub)
        
      dispatch({
        type: "CREATE_SUCCESS",
      });
      toast.success("Review submitted successfully");
      product.reviews.unshift(data.review);
      product.numReviews = data.numReviews;
      product.rating = data.rating;
      dispatch({ type: "REFRESH_PRODUCT", payload: product });
      window.scrollTo({
        behavior: "smooth",
        top: reviewsRef.current.offsetTop,
      });
    } catch (error) {
      console.log(toSub)
      toast.error(error);
      dispatch({ type: "CREATE_FAIL" });
    }
  };

  return (
    <span class="container">
      <div class="single-product">
        <div class="row">
          <div class="col-6">
            <div class="product-image">
              <div class="product-image-main">
                <img src={IMG} alt="" id="product-main-image" />
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="product">
              <div class="product-title">
                <h2>Half Sleve T-shirt for Men</h2>
              </div>
              <div class="product-rating">
                <Rating />
                <span class="review">(47 Review)</span>
              </div>
              <div class="product-price">
                <span class="offer-price">$99.00</span>
                {/* <span class="sale-price">$129.00</span> */}
              </div>

              <div class="product-details">
                <h3>Description</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  est magnam quibusdam maiores sit perferendis minima cupiditate
                </p>
              </div>
              <div class="product-size">
                <h4>Size</h4>
                <div class="size-layout">
                  <input
                    type="radio"
                    name="size"
                    value="S"
                    id="1"
                    class="size-input"
                  />
                  <label for="1" class="size">
                    S
                  </label>

                  <input
                    type="radio"
                    name="size"
                    value="M"
                    id="2"
                    class="size-input"
                  />
                  <label for="2" class="size">
                    M
                  </label>

                  <input
                    type="radio"
                    name="size"
                    value="L"
                    id="3"
                    class="size-input"
                  />
                  <label for="3" class="size">
                    L
                  </label>
                </div>
              </div>
            </div>

            {/* <span class="divider"></span>

                        <div class="product-btn-group">
                            <div class="button buy-now"><i class='bx bxs-zap' ></i> Buy Now</div>
                            <div class="button add-cart"><i class='bx bxs-cart' ></i> Add to Cart</div>
                            <div class="button heart"><i class='bx bxs-heart' ></i> Add to Wishlist</div>
                        </div> */}
          </div>
          <div class="dcard">
            <div className="list-group-item">
              <div className="rowitem">
                <div className="colitem">Status : </div>
                <div className="colitem">Here</div>
              </div>
            </div>

            <div className="list-group-item">
              <div className="rowitem">
                <div className="colitem">Status : </div>
                <div className="colitem">Here </div>
              </div>
            </div>

            <div className="list-group-item">
              <Form onAddToCart ={addHandler}/>
            </div>
          </div>

          {/* {product.reviews.map((review) => (
                  <ListGroup.Item key={review._id}>
                    <strong>{review.name}</strong>
                    <Rating value={review.rating} />
                    <p>{review.createdAt.substring(0, 10)}</p>
                    <p>{review.comment}</p>
                  </ListGroup.Item>
                ))} */}

          {/* {errProductReview && (
                    <Message variant="danger">{errProductReview}</Message>
                  )} */}

          <div className="col-8">
            <br></br>
            <hr></hr>
            <br></br>
            <div class="review-heading">REVIEWS</div>
            <p class="mb-20">There are no reviews yet.</p>
            <div class="comment-container theme--light">
              <div class="comments">
                <Comment />
              </div>
            </div>
            <br></br>
            <hr></hr>
            <form class="review-form" onSubmit={submitHandler}>
              <div class="form-group">
                <label>Your rating</label>
                <div class="reviews-counter">
                  <div class="rate" onChange={event => {console.log(event.target.value) ;
                    setRating(event.target.value)}}>
                    <input type="radio" id="star5" name="rate" value="5" />
                    <label for="star5" title="text">
                      5 stars
                    </label>
                    <input type="radio" id="star4" name="rate" value="4" />
                    <label for="star4" title="text">
                      4 stars
                    </label>
                    <input type="radio" id="star3" name="rate" value="3" />
                    <label for="star3" title="text">
                      3 stars
                    </label>
                    <input type="radio" id="star2" name="rate" value="2" />
                    <label for="star2" title="text">
                      2 stars
                    </label>
                    <input type="radio" id="star1" name="rate" value="1" />
                    <label for="star1" title="text">
                      1 star
                    </label>
                  </div>
                </div>
              </div>

              <div class="form-group">
                <label>Your comment: </label>
                <br></br>
                <textarea placeholder="Leave a comment here"
                  value={comment}
                  onChange={(e) => setComment(e.target.value) }
                className="form-control" rows="5" cols="100"></textarea>
              </div>
              <br></br>
              <button class="round-black-btn">Submit Review</button>
              <br></br>
              <br></br>
            </form>
          </div>
        </div>

        <div
          class="row"
          id="review"
          role="tabpanel"
          aria-labelledby="review-tab"
        ></div>
      </div>
    </span>
  );
};

export default ProDetails;
