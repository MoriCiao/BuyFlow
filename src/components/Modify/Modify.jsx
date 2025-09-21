import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateProduct,
  closeView,
} from "../../features/products/productsSlice";
import { Zoom } from "react-awesome-reveal";
import Button from "../Button/Button";
import ModifyItem from "./ModifyItem";

const STYLE = {
  modify_mask: `modify-mask fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm`,

  modify_container: `modify-container flex flex-col border border-white/50 bg-zinc-800 p-4`,

  modify_content: `modify-content flex flex-col gap-4 p-2 text-start text-white`,
};

// dashboard 商品修改頁面

const Modify = () => {
  const { modify_list } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  // 設定id, rating, image不能變動到
  const [modifyItem, setModifyItem] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    description: "",
  });

  useEffect(() => {
    if (modifyItem) {
      setModifyItem({
        name: modify_list.name || "",
        category: modify_list.category || "",
        price: modify_list.price || 0,
        stock: modify_list.stock || 0,
        description: modify_list.description || "",
      });
    }
  }, [modify_list]);

  return (
    <div className={STYLE.modify_mask}>
      <Zoom className="w-full md:w-auto">
        <section className={STYLE.modify_container}>
          <div className="mb-2 text-end">
            <span
              className="cursor-pointer select-none"
              onClick={() => dispatch(closeView())}
            >
              ❌
            </span>
          </div>
          <div className={STYLE.modify_content}>
            <p className="border-b border-white/50 py-2 md:text-[1.5rem]">
              目前正在修正商品 ID : {modify_list.id}
            </p>
            <ModifyItem
              label="Name"
              name={modify_list.name}
              type="text"
              value={modifyItem.name}
              onChange={(e) =>
                setModifyItem({ ...modifyItem, name: e.target.value })
              }
            />
            <ModifyItem
              label="Category"
              name={modify_list.category}
              type="text"
              value={modifyItem.category}
              onChange={(e) =>
                setModifyItem({ ...modifyItem, category: e.target.value })
              }
            />
            <ModifyItem
              label="Price"
              name={modify_list.price}
              type="number"
              value={modifyItem.price}
              onChange={(e) =>
                setModifyItem({ ...modifyItem, price: Number(e.target.value) })
              }
            />
            <ModifyItem
              label="Stock"
              name={modify_list.stock}
              type="number"
              value={modifyItem.stock}
              onChange={(e) =>
                setModifyItem({ ...modifyItem, stock: Number(e.target.value) })
              }
            />
            <ModifyItem
              label="Description"
              name={modify_list.description}
              type="text"
              value={modifyItem.description}
              onChange={(e) =>
                setModifyItem({ ...modifyItem, description: e.target.value })
              }
            />
            <div>
              <Button
                label="修改"
                onClick={() =>
                  dispatch(
                    updateProduct({
                      id: modify_list.id,
                      updatedData: modifyItem,
                    }),
                  )
                }
              />
            </div>
          </div>
        </section>
      </Zoom>
    </div>
  );
};

export default Modify;
