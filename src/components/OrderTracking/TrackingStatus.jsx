import { Zoom } from "react-awesome-reveal";
import TrackingStatusIcon from "./TrackingStatusIcon";

const STYLE = {
  background: `tracking-status absolute inset-0 top-0 left-0 bg-black/50`,

  modal: `absolute top-20 left-1/2 flex max-h-[90%] w-[90%] -translate-x-1/2  items-center justify-around rounded-md bg-black/80 p-4 md:top-1/2 md:-translate-y-1/2 xl:w-[50%]`,
};

const TrackingStatus = ({ isSend, isArrival, setTrackingStatus }) => {
  const TrackingStatus = () => (
    <Zoom triggerOnce={true} cascade damping={0.5}>
      <TrackingStatusIcon
        icon={"📋"}
        title={"未出貨"}
        isSend={isSend}
        isArrival={isArrival}
      />
      <TrackingStatusIcon
        icon={"🚛"}
        title={"已出貨"}
        isSend={isSend}
        isArrival={isArrival}
      />
      <TrackingStatusIcon
        icon={"👌"}
        title={"已抵達"}
        isSend={isSend}
        isArrival={isArrival}
      />
    </Zoom>
  );

  return (
    <div className={STYLE.background}>
      <div className={STYLE.modal} onClick={() => setTrackingStatus(false)}>
        <TrackingStatus />
      </div>
    </div>
  );
};

export default TrackingStatus;
