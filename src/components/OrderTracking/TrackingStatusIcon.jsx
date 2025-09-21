function isPass(title, isSend, isArrival) {
  switch (title) {
    case "未出貨": {
      if (isSend === false && isArrival === false) return "bg-green-600 text";
    }
    case "已出貨": {
      if (isSend === true && isArrival === false) return "bg-green-600 text";
    }
    case "已抵達": {
      if (isSend === true && isArrival === true) return "bg-green-600 text";
    }
    default:
      return "brightness-[0.6] bg-zinc-800";
  }
}

const STYLE = {
  container: `tracking-status-container flex flex-col items-center justify-center gap-4 p-1 md:p-4 lg:w-30 `,

  icon_conitainer: `tracking-status-icon-conitainer flex items-center justify-center rounded-full border bg-white/50 p-2 lg:h-20 lg:w-20 lg:text-[1.5rem]`,
};

const TrackingStatusIcon = ({ icon, title, isSend, isArrival }) => {
  return (
    <div className={`${STYLE.container} ${isPass(title, isSend, isArrival)}`}>
      <div className={STYLE.icon_conitainer}>{icon}</div>
      <h3>{title}</h3>
    </div>
  );
};

export default TrackingStatusIcon;
