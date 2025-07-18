import React from "react";
import { useSelector } from "react-redux";
const Modify = () => {
  const { modify_list } = useSelector((state) => state.products);
  console.log(modify_list);
  return (
    <section className="modify absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[500px] min-h-[300px] p-4 bg-black/50">
      <div className="text-white">
        <h3>{modify_list.name}</h3>
      </div>
    </section>
  );
};

export default Modify;
