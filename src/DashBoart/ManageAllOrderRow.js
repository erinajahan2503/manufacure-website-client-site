import React from 'react';
import swal from 'sweetalert';

const ManageAllOrderRow = ({order }) => {
    const {price ,orderAmount , name , email , date, address , payed , status , _id } = order
    // const dataFormated = format(date , 'PP')


    const handleDeleteProduct = ()=>{
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
              fetch(`https://tranquil-shelf-42201.herokuapp.com/api/purchase/${_id}`, {
                method: "DELETE",
                headers: {
                  authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
              })
              .then(res => res.json())
              
            } else {
              swal("Your imaginary file is safe!");
            }
          });
      }


    return (
        <tr>
        <td className='text-sm'>{date}</td>
        <td>{price}</td>
        <td>{orderAmount}</td>
        <td>{email}</td>
        <td>{address}</td>
        <td>
            {/* {
                payed === 'pending' ?
                <button>Padding</button>
                : payed === 'shipped' ?
                <button>shipped </button>
                :
                <button>shipped</button>
            } */}
        </td>
        <td>
            {
                !payed === 'pending' ?
                <button>Padding</button>
                :
                <button>unpaid</button>

            }
            <button className='' onClick={handleDeleteProduct}>DELETE</button>
        </td>
      </tr>
    );
};

export default ManageAllOrderRow;