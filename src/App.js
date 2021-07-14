import "./styles.css";
import { Signup } from "./Signup";

export default function App() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <Signup />
        </div>
        <div className="col-md-7 my-auto">
          <img
            className="img-fluid w-100"
            src="https://lh3.googleusercontent.com/proxy/JH-6_mpI7c2EiYfr6p5x_UUbF65acV0MpPh_7wHzKzhS3iFz27UGgjvQT8NJy7lvckq0QXXmjK2c4_2w9VxHJi2HBhfE0IYV2hkCly3iWBjauCeI7uWPXqsqZuX9o_LcfnJQUMItpeN3ekwKYn1mFO7ye4gmjgOOnw"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
