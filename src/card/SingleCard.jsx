import Card from "react-bootstrap/Card";
import house2 from "../images/house2.jpg";
import { AiTwotoneStar } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
const SingleCard = ({ rent }) => {
  return (
    <>
      <div className="mt-5 col-lg-4 col-md-4 col-sm-12">
        <Card style={{ width: "347px" }}>
          <img src={rent?.image} alt="" />
          <Card.Body>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <div>
                <span>
                  <MdOutlineLocationOn /> Mirpur 1
                </span>
              </div>
              <div>
                <span>
                  4.8 <AiTwotoneStar style={{ color: "#FFB200" }} />{" "}
                </span>
              </div>
            </div>
            <Card.Title>{rent?.title}</Card.Title>
            <Card.Text>{rent?.description}</Card.Text>
            <hr />
            <span className="price-list">
              <p>
                <span className="fw-bold">Per Day </span>: BDT 200
              </p>
              <p>
                <span className="fw-bold">Per Month </span>: BDT 900
              </p>
              <p>
                <span className="fw-bold">Per Year </span>: BDT 1000000
              </p>
            </span>
            <div>
              <div>
                <BsPerson style={{ color: "#00bbb4" }} /> 4
                <AiOutlineShoppingCart
                  style={{ color: "#00bbb4", marginLeft: "5px" }}
                />
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default SingleCard;
