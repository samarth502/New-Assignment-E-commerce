
const ProductAllList = ({ products, search, filtered }) => {
  return (
    <>
    <section className="">
     
      <div className="bg-blue-400 w-full ">
       
        <div className="w-[70%] lg:w-full xs:w-full m-auto bg-white  max-md:mt-8">
        <h1 className="text-6xl font-extrabold text-center max-md:text-4xl pt-8">
          Man and woman fashsion
        </h1>
          <div className="grid grid-cols-3 lg:grid-cols-3 lg:w-[70%] lg:m-auto  max-sm:grid-cols-1 max-md:flex max-md:flex-col md:gap-10 md:grid-cols-2  ">
            {filtered == false
              ? products
                  .filter((item) => {
                    return search.toLowerCase() === ""
                      ? item
                      : item.category.toLowerCase().includes(search);
                  })
                  .map((product, index) => (
                    <div
                      className="flex flex-col justify-start items-center gap-5 shadow-xl w-[100%] mt-5 mx-4 lg:py-11"
                      key={index}
                    >
                      <h1 className="text-3xl font-extrabold ">{product.category}</h1>
                      <p className="text-xl"><span className="text-orange-700 font-extrabold">Price$</span> {product.price}</p>
                      <div className="w-[60%] max-sm:w-full h-[60%] ">
                        <img
                          src={product.image}
                          alt=""
                          className="w-full h-full  "
                        />
                      </div>
                    </div>
                  ))
              : filtered.filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item.category.toLowerCase().includes(search);
              }).map((item, index) => (
                  <div
                    className="flex flex-col justify-start items-center gap-5 shadow-xl w-[100%] mt-5 mx-4 lg:py-11"
                    key={index}
                  >
                    <h1 className="text-2xl">{item.category}</h1>
                    <p className="text-xl">{item.price}</p>
                    <div className="w-[60%] max-sm:w-full h-[60%] ">
                      <img
                        src={item.image}
                        alt=""
                        className="w-full h-full  "
                      />
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default ProductAllList;
