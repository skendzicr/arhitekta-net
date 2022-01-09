import TimelineItem from "./TimelineItem";
import { FC } from "react";

export type TimelineProps = {
  items: TimelineItemProps[];
};
export type TimelineItemProps = {
  startYear: number;
  endYear: number;
  description: string;
  companyName: string;
  position: string;
};

const Timeline: FC<TimelineProps> = ({ items }) => {
  return (
    <div className="flex flex-row items-center w-full">
      {items.map((item, index) => (
        <TimelineItem item={item} key={index} />
      ))}
    </div>
  );
};

export default Timeline;
