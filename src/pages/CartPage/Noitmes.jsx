import Button from "../../components/Button/Button";

const STYLE = {
  container: `justify-cneter flex w-full flex-col items-center p-8 text-center`,

  header: `flex h-[200px] items-center text-[1.25rem] font-bold sm:!text-[2rem]`,
};

const NoItems = ({ navigate }) => {
  return (
    <div className={STYLE.container}>
      <h1 className={STYLE.header}>
        There are currently no items <br className="hidden sm:block" />
        in your shopping cart...
      </h1>
      <div>
        <Button
          label="Go Shopping"
          size="lg"
          onClick={() => {
            navigate("/products");
          }}
        />
      </div>
    </div>
  );
};

export default NoItems;
