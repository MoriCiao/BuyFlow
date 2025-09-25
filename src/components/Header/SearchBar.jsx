import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { search, keywordChange } from "../../features/products/productsSlice";
import Button from "../Button/Button";

const SearchBar = () => {
  const { keyword } = useSelector((state) => state.products);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="flex w-full items-center">
      <div className="h-full rounded-l">
        <input
          type="text"
          placeholder="搜尋商品..."
          className="w-full bg-white px-4 py-2 text-black"
          value={keyword}
          onChange={(e) => dispatch(keywordChange(e.target.value))}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              dispatch(search(keyword));
              navigate("/products");
            }
          }}
        />
      </div>
      <div>
        <Button
          label="Search"
          onClick={() => {
            dispatch(search(keyword));
            navigate("/products");
          }}
        />
      </div>
    </div>
  );
};

export default SearchBar;
