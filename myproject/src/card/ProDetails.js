import axios from "axios";
import { useContext, useEffect, useReducer, useRef, useState } from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import "./ProDetails.css";
import "./Comment.css";
import { toast } from "react-toastify";
import Form from "./Form";
import Rating from "./Rating";
import Comment from "./Comment";
import AuthCart from "../store/cart-context";
import { ToastContainer } from "react-toastify";
import Spinner from "../home page/Spinner";
import Editcomment from "./Editcomment";
import LoadingSpinner from "../UI/LoadingSpinner";

const ProDetails = () => {
  const [This, setThis] = useState({});
  const [editCommentId, setEditCommentId] = useState(null);
  const params = useParams();
  const { p_id } = params;
  
  console.log("XDee"  ,  This.Id);
  let reviewsRef  = useRef();


  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [Comments, setComments] = useState([
    // {
    //   id: 2,
    //   Name: "anasakkkkmad",
    //   Comment: "aaa",
    //   c_id: 1,
    //   Rate : '4',
    // },
    // {
    //   id: 3,
    //   Rate:2,
    //   Name: "not ahm",
    //   Comment: "xd",
    //   c_id: 1,
    // },
  ]);
  const [loading, setLoading] = useState(false);
  const [Error, setError] = useState(null);
  const navigate = useNavigate();

  console.log("check " , comment)
  console.log("rated ," , rating)
  const ctx = useContext(AuthCart);

  const addHandler = (amount) => {
    ctx.addItem({
      
      id: This.Id,
      title: This.title,
      amount: amount,
      price: +This.price,
      max : +This.count
    });
  };

  const onDelete = async ({c_id , rating}) => {
    try{
    
    const Filtred = Comments.filter((item) => +item.id != +c_id); 
   
         setLoading(true);
     const newRes = await axios.put(
      `http://localhost:8080/product/${p_id}`,
      {
        rates: +This.rates - +rating  ,
        number: +This.number - 1,
      }
    );
    setThis(newRes.data[0]);
    setComments(Filtred);
 
  setLoading(false);
  toast.success("Successfuly Deleted!");
  console.log("DA");
  window.scrollTo({
    behavior: "smooth",
    top: reviewsRef.current.offsetTop,
  });
  } catch (e) {
    setLoading(false);
    toast.error(e);
  }

  
    setLoading(false);
  };

  const onCancel = () => {
    setEditCommentId(null);
  };
  var userInfo = JSON.parse(localStorage.getItem("USER"));

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const res = await axios.get(
        `http://localhost:8080/comments/${p_id}`
      );
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

        const PDetails = await axios.get(
          `http://localhost:8080/product/${p_id}`
        );

        const PData = PDetails.data[0];
        console.log("data", PData);
        setLoading(false);
        setThis(PData);
        console.log(This);

        setLoading(false);
      } catch (e) {
        toast.error(e);
      }
    };

    fetchData().catch((e) => {
      setLoading(false);
      setError(e.message);
    });
  }, []);

  if (Error) {
    return <p>{Error}</p>;
  }
  if (loading) {
    return (
    
        <LoadingSpinner />
     
    );
  }

  const EditComments = async(EditedData) =>{
    
    try{
      const newComments = [...Comments];
      const k = Comments.findIndex((comm) => comm.id == EditedData.c_id);
      window.scrollTo({
        behavior: "smooth",
        top: reviewsRef.current.offsetTop,
      });
      console.log(reviewsRef.current.offsetTop);
      
    
      const EditedComment = {
                id: EditedData.c_id,
                Name: Comments[k].Name,
                Comment: EditedData.comment,
                Rate: EditedData.rating,
                u_id: Comments[k].u_id,
                p_id: Comments[k].p_id,      
      }
      setLoading(true);
      const newRes = await axios.put(
       `http://localhost:8080/product/${p_id}`,
       {
         rates: +This.rates + (+EditedData.rating -Comments[k].Rate ) ,
         number: +This.number,
       }
     );
 
     setThis(newRes.data[0]);
     console.log("new" , Editcomment );

     newComments[k] = EditedComment;
     
     setComments(newComments);
     setEditCommentId(null);
    
  
   setLoading(false);
 
   toast.success("Review edited successfully");

  
   

  
} catch (e) {
  setLoading(false);
  toast.error(e);
}
console.log("scrolling ")

 


  }

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!comment || !rating) {
      // <Warn text="Please enter comment and rating" />;
      toast.error("Please enter comment and rating");
      setLoading(false);
      return;
    }
    const isIn = Comments.findIndex((item) => +item.u_id === +userInfo.Id);
    const it = Comments[isIn];

    if (it) {
      toast.error("You already did review");
      setLoading(false);
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
      setLoading(true);
      const { data } = await axios.post(
        `http://localhost:8080/comments/${p_id}`,
        toSub
      );
      setLoading(false);

      
      toast.success("Review submitted successfully");
      <ToastContainer />;

      Comments.push({
        id: data.requiredId,
        Name: data.Name,
        Comment: data.comment,
        Rate: data.rating,
        u_id: data.u_id,
        p_id: data.p_id,
      });
   

      
      try {
        
        console.log("Old before adding , "   , This.rates);
        console.log("Old before adding number , "   , This.number);

        const newRes = await axios.put(
          `http://localhost:8080/product/${p_id}`,
          {
            rates: +This.rates ?   +This.rates + +rating : +rating  ,
            number: +This.number ?+This.number + 1 : 1,
          }
        );
        console.log("RAT : ", +data.rates);
        console.log("DONE RATING");
        setThis(newRes.data[0]);
      
      setComment("");
      setRating(0);
      setLoading(false);
      console.log("DA");
      window.scrollTo({
        behavior: "smooth",
        top: reviewsRef.current.offsetTop,
      });
      } catch (e) {
        setLoading(false);
        toast.error(e);
      }
    } catch (error) {
      setLoading(false);
     
      toast.error(error);
    }
    setLoading(false);
  };
  const avg = This.number ? This.rates / This.number : 0;

  const editCommentHandle = (e, toid) => {
    e.preventDefault();
    setEditCommentId(toid);
  };

  // console.log("here is ur : ", This.number);

  return (
    <span class="container">
      <div class="single-product">
        <div class="row">
          <div class="col-6">
            <div class="product-image">
              <div class="product-image-main">
                <img
                  src={
                    This.cat_id &&
                    This.pic &&
                    require(`../../../pictures/${This.pic}`)
                  }
                  alt=""
                  id="product-main-image"
                />
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
                <span class="review">
                  ({This.number ? This.number : 0} Review)
                </span>
              </div>
              <div class="product-price">
                <span class="offer-price">${This.price}</span>
                {/* <span class="sale-price">$129.00</span> */}
              </div>

              <div class="product-details">
                <h3>Description</h3>
                <p>{This.description}</p>
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
                {This.count > 0 ? (
                  <div className="colitem stockStatus">
                    In Stock : {This.count}
                  </div>
                ) : (
                  <div className="colitem out">out of Stock</div>
                )}
              </div>
            </div>

            <div className="list-group-item">
              <div className="rowitem">
                <div className="colitem">Status : </div>
                <div className="colitem ">Here </div>
              </div>
            </div>

            <div className="list-group-item">
              <Form max={This.count} onAddToCart={addHandler} />
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

            {Comments.length === 0 && (
              <p class="mb-20">There are no reviews yet.</p>
            )}
            <div ref={reviewsRef} class="comment-container theme--light">
              <div class="comments">
                {Comments.map((review) => (
                  <>
                    {editCommentId === review.id ? (
                    
                        <Editcomment
                          setRating={setRating}
                          setComment = {setComment}
                          rate={review.Rate}
                          comment={review.Comment}
                          onCancel={onCancel}
                          c_id = {review.id}
                          EditComments = {EditComments}
                          u_id = {review.u_id}
                        />
                      
                    ) : (
                      <Comment
                        Name={review.Name}
                        rating={review.Rate}
                        comment={review.Comment}
                        c_id={review.id}
                        onDelete={onDelete}
                        onEdit={editCommentHandle}
                        u_id = {review.u_id}
                      />
                    )}
                  </>
                ))}
              </div>
            </div>
            <br></br>
            <hr></hr>
            {userInfo ? (
              <form class="review-form" onSubmit={submitHandler}>
                <div class="form-group">
                  <label>Your rating</label>
                  <div class="reviews-counter">
                    <div
                      class="rate"
                      onChange={(event) => {
                        console.log(event.target.value);
                        setRating(+event.target.value);
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
            ) : (
              <pre>
                <NavLink to="/signin">SIGN IN </NavLink> to write a review!
              </pre>
            )}
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
