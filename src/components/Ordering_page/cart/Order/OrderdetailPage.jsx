import { useContext } from "react";
import { OrderContext } from "../../context/MyContext";

const OrderDetails = () => {
    const { data } = useContext(OrderContext);
    return (
      <div className="py-2">
        {data?.Iteam?.map((item) => (
          <div className="grid grid-flow-col gap-2 border-b items-center px-4 py-2" key={item?.id}>
            <div className="col-auto">
              <div className="bg-green-500 rounded-full flex items-center justify-center w-10 h-10">
                <p className="font-bold text-md text-white">{item?.qty}x</p>
              </div>
            </div>
  
            <div className="ml-3">
              <h1 className="font-bold text-green-600">₹{item?.total}</h1>
              <p className="font-bold">{item?.subcategoryId?.subCategoryname}</p>
              <p>{item?.additionalInfo?.detailinfo}</p>
            </div>
  
            <div className="ml-3 w-full object-cover">
              <img
                src={item.subcategoryId?.image}
                className="object-cover h-24 rounded-full"
                alt={item?.subcategoryId?.subCategoryname}
              />
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default OrderDetails;
  