import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

const Breadcrumb = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className="breadcrumb flex items-center justify-between gap-2 text-white">
      <div className="flex items-center gap-4">
        <div>
          <Button
            label="Back"
            size="sm"
            onClick={() => {
              navigate("/products");
            }}
          />
        </div>

        <div>
          <span> / </span>
          <Link to="/">BuyFlow</Link>
          <span> / </span>
          <Link to="/products">products</Link>
          <span> / </span>
          <span className="flex">
            {`${product.name}  ${product.category} `}
          </span>
        </div>
      </div>
      {/* id */}
      <div>
        <p className="border border-white/20 px-4">商品編號：{product.id}</p>
      </div>
    </div>
  );
};

export default Breadcrumb;
