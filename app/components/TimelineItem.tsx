import { FC } from "react";
import { TimelineItemProps } from "./Timeline";
import Popover from "./Popover";

const TimelineItem: FC<{ item: TimelineItemProps }> = ({ item }) => (
  <div className="flex flex-col w-1/3 ">
    <div className="flex flex-row items-center w-full ">
      <div className="flex-grow h-1 bg-pink-600" />
      <Popover description={item.description}>
        <div className="w-6 h-6 rounded-full bg-pink-600 animate-pulse hover:animate-none hover:bg-pink-700 hover:scale-110" />
      </Popover>
    </div>
    <div className="flex flex-col items-center w-full">
      <span className="text-xs md:text-sm font-medium truncate text-ellipsis w-full md:w-auto">
        {item.companyName}
      </span>
      <span className="text-xs md:text-sm text-pink-700 truncate text-ellipsis w-full md:w-auto">
        {item.position}
      </span>
      <span className="text-xs font-light w-full md:w-auto">
        {item.startYear}. - {item.endYear}.
      </span>
    </div>
  </div>
);

export default TimelineItem;
