import React, { useState } from "react";
import { Zoom } from "react-awesome-reveal";
import TrackingStatusIcon from "./TrackingStatusIcon";

const TrackingStatus = ({ isSend, isArrival, setTrackingStatus }) => {
  return (
    <div className="absolute inset-0 top-0 left-0 bg-black/50">
      <div className="absolute top-20 left-1/2 flex max-h-[90%] w-[90%] -translate-x-1/2 flex-col items-center justify-center rounded-md bg-black/80 p-4 md:top-1/2 md:-translate-y-1/2 xl:w-[50%]">
        <div
          className="flex w-full justify-around"
          onClick={() => setTrackingStatus(false)}
        >
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
        </div>
      </div>
    </div>
  );
};

export default TrackingStatus;
