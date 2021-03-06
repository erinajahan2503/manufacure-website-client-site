import axios from "axios";
import React from "react";
import swal from "sweetalert";
const MF = "https://pure-tundra-71738.herokuapp.com/upload/"
const ManageAllProdutsCard = ({ data }) => {

  const { image, name, price, details, minimumOrder, quantity, _id } = data
  console.log(data);

  const handleDeleteProducts = async () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
          axios.delete(`https://pure-tundra-71738.herokuapp.com/api/tools/${_id}`)

        } else {
          swal("Your imaginary file is safe!");
        }
      });
  }
  return (
    <div className="mb-6">
      <div class="card card-side flex md:flex-row flex-col bg-base-100 shadow-xl">

        <img
          width="200px"
          src={image ? MF + image : null}
          alt="Movie"
        />

        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <p>{details}</p>
          <span>Price : {price}</span>
          <div class="card-actions justify-end">
            <div className="flex flex-col">
              <span>Available : {quantity}</span>
              <span>MinimumOrder : {minimumOrder}</span>
            </div>
            <button onClick={handleDeleteProducts} class="btn btn-secondary text-white items-center">DELETE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageAllProdutsCard;
