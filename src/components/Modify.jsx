import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct, closeView } from "../features/products/productsSlice";
const ModifySection = ({ label, type, name, value, onChange }) => {
  return (
    <section className="grid grid-cols-4 items-center">
      <label htmlFor="" className="px-4 text-end">
        {label} :
      </label>
      <p>{name}</p>
      <input
        type={type}
        step={type === "number" ? "1" : undefined}
        min={type === "number" ? "1" : undefined}
        placeholder="請輸入修改值..."
        value={value}
        onChange={onChange}
        className="col-span-2 h-auto bg-white indent-[1rem] text-black"
      />
      <hr className="col-span-4 mt-2 text-white/50" />
    </section>
  );
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
    <section className="modify absolute top-1/2 left-1/2 min-h-[500px] min-w-[600px] -translate-x-1/2 -translate-y-1/2 bg-black/70 p-4">
      <div className="mb-2 min-w-[600px] text-end">
        <span
          className="cursor-pointer select-none"
          onClick={() => dispatch(closeView())}
        >
          ❌
        </span>
      </div>
      <div className="flex flex-col gap-4 border p-2 text-start text-white">
        <label htmlFor="">目前正在修正商品 ID : {modify_list.id}</label>
        <ModifySection
          label="Name"
          name={modify_list.name}
          type="text"
          value={modifyItem.name}
          onChange={(e) =>
            setModifyItem({ ...modifyItem, name: e.target.value })
          }
        />
        <ModifySection
          label="Category"
          name={modify_list.category}
          type="text"
          value={modifyItem.category}
          onChange={(e) =>
            setModifyItem({ ...modifyItem, category: e.target.value })
          }
        />
        <ModifySection
          label="Price"
          name={modify_list.price}
          type="number"
          value={modifyItem.price}
          onChange={(e) =>
            setModifyItem({ ...modifyItem, price: Number(e.target.value) })
          }
        />
        <ModifySection
          label="Stock"
          name={modify_list.stock}
          type="number"
          value={modifyItem.stock}
          onChange={(e) =>
            setModifyItem({ ...modifyItem, stock: Number(e.target.value) })
          }
        />
        <ModifySection
          label="Description"
          name={modify_list.description}
          type="text"
          value={modifyItem.description}
          onChange={(e) =>
            setModifyItem({ ...modifyItem, description: e.target.value })
          }
        />
      </div>
      <button
        type="button"
        className="mt-2 rounded-full border bg-white px-2"
        onClick={() =>
          dispatch(
            updateProduct({ id: modify_list.id, updatedData: modifyItem }),
          )
        }
      >
        Submit
      </button>
    </section>
  );
};

export default Modify;
