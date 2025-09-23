import { useDispatch } from "react-redux";
import { Zoom } from "react-awesome-reveal";
import { addItem } from "../../features/cart/cartSlice";
import Button from "../Button/Button";

const STYLE = {
  featured_mask: `featured-modal-mask fixed inset-0 top-0 left-0 z-60 flex items-center justify-center overflow-hidden bg-black/50 2xl:p-20`,

  featured_modal: `featured-modal flex w-[80%] flex-col items-center justify-center rounded-xl border border-white/50 bg-zinc-800 md:w-[40%]`,

  featured_modal_container: `flex w-full gap-2 px-4 `,

  featured_modal_content: `flex flex-1 flex-col justify-between gap-2 py-4 text-end`,
};

const FeaturedModal = ({ isFeaturedModal, setIsFeaturedModal }) => {
  const product = isFeaturedModal.product;
  const dispatch = useDispatch();

  return (
    <div className={STYLE.featured_mask}>
      <Zoom className="flex w-full items-center justify-center">
        <div className={STYLE.featured_modal}>
          <div className="w-full p-2 text-end">
            <span
              className="cursor-pointer"
              onClick={() => setIsFeaturedModal({ open: false, product: null })}
            >
              ❌
            </span>
          </div>
          <div className={STYLE.featured_modal_container}>
            <div className="flex flex-1 items-center py-4">
              <img
                src={product.image}
                alt="精選商品"
                className="m-auto w-60 p-8 md:w-80"
              />
            </div>
            <div className={STYLE.featured_modal_content}>
              <h3 className="text-[1.25rem] md:text-[1.5rem]">
                <strong className="text-red-600">Hot {product.rating} !</strong>{" "}
                <br className="sm:hidden" />
                {product.name}
              </h3>
              <p>
                {product.description.split("，").map((d, index) => (
                  <p key={index}>{d}</p>
                ))}
              </p>

              <div className="flex items-center justify-end gap-4">
                <strong className="text-red-600">{product.price} $</strong>
                <div>
                  <Button
                    label="ADD"
                    size="sm"
                    onClick={() => {
                      dispatch(addItem({ product, quantity: 1 }));
                      setIsFeaturedModal({ open: false, product: null });
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default FeaturedModal;
