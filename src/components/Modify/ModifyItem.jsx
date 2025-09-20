const ModifyItem = ({ label, type, name, value, onChange }) => {
  return (
    <div className="modify-item flex flex-col items-center justify-between gap-2 border-b border-white/50 py-2 md:flex-row md:gap-8">
      <div className="flex flex-1">
        <label htmlFor="" className="">
          {label} :
        </label>
      </div>

      <div className="w-full flex-2 md:min-w-100">
        <input
          type={type}
          step={type === "number" ? "1" : undefined}
          min={type === "number" ? "1" : undefined}
          placeholder="請輸入修改值..."
          value={value}
          onChange={onChange}
          className="h-[2rem] h-full w-full bg-white py-2 text-center indent-[1rem] text-black"
        />
      </div>
    </div>
  );
};

export default ModifyItem;
