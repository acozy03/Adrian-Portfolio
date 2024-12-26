import Link from "next/link";

type AnimatedTooltipProps = {
  items: {
    id: number;
    name: string;
    designation: string;
    image: React.ReactNode;
    link?: string;
    onClick?: () => void;
  }[];
};

export const AnimatedTooltip = ({ items }: AnimatedTooltipProps) => {
  return (
    <div className="relative">
      {items.map((item) => (
        <div
          key={item.id}
          className="group cursor-pointer relative flex items-center p-2 rounded-lg bg-gray-100 shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="w-10 h-10 rounded-full border-2 border-white group-hover:scale-105 transition-transform flex items-center justify-center">
            {item.image}
          </div>
          <div className="ml-4">
            <p className="text-gray-900 font-medium">{item.name}</p>
            <p className="text-gray-600 text-sm">{item.designation}</p>
          </div>
          {item.link ? (
            <Link href={item.link} key={item.id} className="absolute right-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V17a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-6.293-6.293A1 1 0 0011 3z" />
              </svg>
            </Link>
          ) : (
            <button onClick={item.onClick} key={item.id} className="absolute right-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V17a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-6.293-6.293A1 1 0 0011 3z" />
              </svg>
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

