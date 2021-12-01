import { FC } from "react";
import { Link } from "remix";

const TailwindLink: FC<{ to: string; linkText: string }> = ({
  to,
  linkText,
}) => {
  return (
    <Link
      to={to}
      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
    >
      {linkText}
    </Link>
  );
};

export default TailwindLink;
