import { FC } from "react";
import { TimelineItemProps } from "./Timeline";

const TimelineItem: FC<{ item: TimelineItemProps }> = ({ item }) => (
  <div className="flex flex-col w-full md:w-1/3">
    {/*<div className="text-sm">{item.description}</div>*/}
    <div className="flex flex-row items-center w-full">
      <div className="flex-grow h-1 bg-indigo-500 "></div>
      <div className="w-6 h-6 rounded-full bg-indigo-500"></div>
    </div>
    <div className="flex flex-col items-center">
      <span className="text-xs md:text-sm font-medium truncate text-ellipsis">
        {item.companyName}
      </span>
      <span className="text-xs md:text-sm text-indigo-700 truncate text-ellipsis">
        {item.position}
      </span>
      <span className="text-xs font-light">
        {item.startYear}. - {item.endYear}.
      </span>
    </div>
  </div>
);

export default TimelineItem;
