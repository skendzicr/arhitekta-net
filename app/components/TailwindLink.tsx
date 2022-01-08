import { FC } from "react";
import { Link, NavLink } from "remix";

const TailwindLink: FC<{ to: string; linkText: string }> = ({
  to,
  linkText,
}) => {
  const baseClasses = `block px-3 py-2 rounded-md text-base`;
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? `${baseClasses} text-indigo-700 hover:text-indigo-900 hover:bg-indigo-50 font-medium`
          : `${baseClasses} text-gray-700 hover:text-gray-900 hover:bg-gray-50 font-thin`
      }
    >
      {linkText}
    </NavLink>
  );
};

export default TailwindLink;
