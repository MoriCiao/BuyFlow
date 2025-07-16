import { useSelector, useDispatch } from "react-redux";

const NavBtn = () => {
  const { products } = useSelector((state) => state.products);

  const sort = products.reduce((acc, product) => {
    const category = product.category;
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  const categoryList = Object.keys(sort);
  //   console.log(categoryList); // ['服飾', '3C', '配件', '生活用品', '文具']

  return (
    <>
      {categoryList &&
        categoryList.map((item, index) => {
          return (
            <div key={index} className="nav_btn">
              <button>
                <svg>
                  <rect></rect>
                </svg>
                {item}
              </button>
            </div>
          );
        })}
    </>
  );
};

export default NavBtn;
