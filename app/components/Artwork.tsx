import { FC, useMemo, useRef, useState } from "react";
import { usePopper } from "react-popper";

const Artwork: FC<{ source: string }> = ({ children, source }) => {
  const [isVisible, setIsVisible] = useState(false);

  const referenceElement = useRef<HTMLDivElement | null>(null);
  const popperElement = useRef<HTMLDivElement | null>(null);
  const arrowElement = useRef<HTMLDivElement | null>(null);
  const { styles, attributes, update } = usePopper(
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

  const arrowStyles = useMemo(
    () => ({
      ...styles.arrow,
      ...{ transform: `${styles.arrow.transform} rotate(45deg)` },
    }),
    [styles.arrow.transform]
  );

  const handleOnHover = async () => {
    setIsVisible(true);
    await update?.();
  };

  const handleOffHover = async () => {
    setIsVisible(false);
    await update?.();
  };

  return (
    <>
      <div
        ref={referenceElement}
        onMouseEnter={handleOnHover}
        onFocus={handleOnHover}
        onMouseLeave={handleOffHover}
        onBlur={handleOffHover}
        style={{ aspectRatio: "16/10" }}
      >
        {children}
      </div>

      <div
        id="popper"
        ref={popperElement}
        style={styles.popper}
        {...attributes.popper}
        className={`max-w-prose w-full border-[1px] bg-white border-gray-200 p-4 ${
          isVisible ? "visible" : "hidden"
        } rounded`}
      >
        <img src={source} />
        <div
          id="arrow"
          ref={arrowElement}
          style={arrowStyles}
          className="bg-white -bottom-2 w-4 h-4 absolute border-solid border-gray-200"
        />
      </div>
    </>
  );
};
export default Artwork;
