import { FC, useRef, useState } from "react";
import { usePopper } from "react-popper";
import { transform } from "esbuild";

const Popover: FC<{ description: string }> = ({ children, description }) => {
  const [isVisible, setIsVisible] = useState(false);

  const referenceElement = useRef<HTMLDivElement | null>(null);
  const popperElement = useRef<HTMLDivElement | null>(null);
  const arrowElement = useRef<HTMLDivElement | null>(null);
  const { styles, attributes } = usePopper(
    referenceElement.current,
    popperElement.current,
    {
      placement: "top",
      modifiers: [
        { name: "offset", options: { offset: [0, 15] } },
        { name: "arrow", options: { element: arrowElement.current } },
      ],
    }
  );

  const arrowStyles = {
    ...styles.arrow,
    ...{ transform: `${styles.arrow.transform} rotate(45deg)` },
  };

  const handleOnHover = () => {
    setIsVisible(true);
  };

  const handleOffHover = async () => {
    setIsVisible(false);
  };

  return (
    <>
      <div
        ref={referenceElement}
        onMouseEnter={handleOnHover}
        onFocus={handleOnHover}
        onMouseLeave={handleOffHover}
        onBlur={handleOffHover}
      >
        {children}
      </div>

      <div
        ref={popperElement}
        style={styles.popper}
        {...attributes.popper}
        className={`max-w-prose border-[1px] bg-indigo-50 border-indigo-200 p-4 ${
          isVisible ? "visible" : "hidden"
        } rounded`}
      >
        <p className="prose text-xs">{description}</p>
        <div
          id="arrow"
          ref={arrowElement}
          style={arrowStyles}
          className={`bg-indigo-50 -bottom-2 w-4 h-4 absolute  border-b-[1px]  border-r-[1px] border-indigo-200`}
        />
      </div>
    </>
  );
};
export default Popover;
