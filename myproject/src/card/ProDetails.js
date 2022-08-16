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
import { ToastContainer } from "react-toastify";
import Spinner from "../home page/Spinner";

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
  const [This , setThis] = useState({});
  const params = useParams();
  const { p_id } = params;

  const ctx = useContext(AuthCart);
  const addHandler = (amount) => {
    ctx.addItem({
      id: p_id,
      title: props.title,
      amount: amount,
      price: props.price,
    });
  };
  let reviewsRef = useRef();

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [Comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [Error, setError] = useState(null);
  const navigate = useNavigate();

  var userInfo = JSON.parse(localStorage.getItem("USER"));

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const res = await axios.get(`http://localhost:8080/product/${p_id}/comments`);
      console.log(res.data);
      const Data = res.data;
      const loaded = [];

      for (const k in Data) {
        console.log(Data[k].Id);
        loaded.push({
          id: Data[k].id,
          Name: Data[k].Name,
          Comment: Data[k].Comment,
          Rate: Data[k].Rate,
          u_id: Data[k].user_id,
          p_id: Data[k].p_id,
        });
      }

      setComments(loaded);
      setLoading(false);

      try {
       
        setLoading(true);

        const PDetails = await axios.get (`http://localhost:8080/product/${p_id}`);
       
        const PData = PDetails.data[0];
        console.log("data", PData)
  
        setThis(PData);
        console.log(This);
       

        setLoading(false);
    }
    catch(e){
      toast.error(e);
    }
    };

    fetchData().catch((e) => {
      setLoading(false);
      setError(e.message);
    });
  }, [p_id]);

  if (Error) {
    return <p>{Error}</p>;
  }
  if (loading) {
    return (
      <>
        <Spinner></Spinner> <p>Loading...</p>
      </>
    );
  }

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
      Name: userInfo.FName,
      comment,
      rating,
      u_id: userInfo.Id,
      p_id,
    };
    try {
      const { data } = await axios.post(
        `http://localhost:8080/product/${p_id}`,
        toSub
      );
      console.log(data);
      
      toast.success("Review submitted successfully");
      <ToastContainer />

      Comments.push({
        Name: data.Name,
        Comment: data.comment,
        Rate: data.rating,
        u_id: data.u_id,
        p_id: data.p_id,
      });
      setComment("");
      setRating(0);
      // product.reviews.unshift(data.review);
      // product.numReviews = data.numReviews;
      // product.rating = data.rating;
      // dispatch({ type: "REFRESH_PRODUCT", payload: product });
      window.scrollTo({
        behavior: "smooth",
        top: reviewsRef.current.offsetTop,
      });


      try{

      }
      catch {
        
      }
 
    } catch (error) {
      console.log(toSub);
      toast.error(error);
    }
  };

  const avg = This.number ? This.rates / This.number : 0 ;

  return (

    <span class="container">
      <div class="single-product">
        <div class="row">
          <div class="col-6">
            <div class="product-image">
              <div class="product-image-main">
                <img src= {This.cat_id && This.pic &&  require(`../pictures/${This.cat_id}/${This.pic}`)} 

                  alt="" id="product-main-image" />
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="product">
              <div class="product-title">
                <h2>{This.title}</h2>
              </div>  
              <div class="product-rating">
                <Rating value={avg} />
                <span class="review">({This.number ? This.number: 0} Review)</span>
              </div>
              <div class="product-price">
                <span class="offer-price">${This.price}</span>
                {/* <span class="sale-price">$129.00</span> */}
              </div>

              <div class="product-details">
                <h3>Description</h3>
                <p>
                 {This.description}
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
              <Form onAddToCart={addHandler} />
            </div>
          </div>

          {/* {errProductReview && (
                    <Message variant="danger">{errProductReview}</Message>
                  )} */}

          <div className="col-8">
            <br></br>
            <hr></hr>
            <br></br>
            <div class="review-heading">REVIEWS</div>
            <p class="mb-20">There are no reviews yet.</p>
            <div ref={reviewsRef} class="comment-container theme--light">
              <div class="comments">
                {Comments.map((review) => 
                (
                  <Comment
                    Name={review.Name}
                    rating={review.Rate}
                    comment={review.Comment}
                    
                  />
                )
                  )}
              </div>
            </div>
            <br></br>
            <hr></hr>
            <form class="review-form" onSubmit={submitHandler}>
              <div class="form-group">
                <label>Your rating</label>
                <div class="reviews-counter">
                  <div
                    class="rate"
                    onChange={(event) => {
                      console.log(event.target.value);
                      setRating(event.target.value);
                    }}
                  >
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
                <textarea
                  placeholder="Leave a comment here"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="form-control"
                  rows="5"
                  cols="100"
                ></textarea>
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
