const RegisterItem = ({
  label,
  name,
  type,
  required,
  onChange,
  value,
  pattern,
  title,
  ref,
}) => {
  const STYLE = {
    container: `register-form-item flex w-full items-center justify-between gap-2 border-white/50 px-4 py-2 lg:border-b`,

    input: `register-input w-full flex-2 rounded-md bg-zinc-500 py-2 indent-4`,
  };

  return (
    <div className={STYLE.container}>
      <label htmlFor="" className="register-label flex-1 text-center font-bold">
        {label} :
      </label>
      <input
        className={STYLE.input}
        type={type}
        placeholder={`請輸入 ${name}`}
        step={type === "number" ? "1" : undefined}
        min={type === "number" ? "1" : undefined}
        max={type === "number" ? "100" : undefined}
        required={required}
        onChange={onChange}
        value={value}
        pattern={type === "tel" ? pattern : undefined}
        title={type === "tel" ? title : undefined}
        ref={name === "Name..." ? ref : undefined}
      />
    </div>
  );
};

export default RegisterItem;
