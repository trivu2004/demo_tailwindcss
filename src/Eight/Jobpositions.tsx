import React from "react";
import { ReactNode } from "react";

interface Position {
  title: string;
  openPosition: number;
  icon: ReactNode;
  gradientClass: string;
}
const positions: Position[] = [
  {
    title: "Design",
    openPosition: 4,
    gradientClass: "from-[#BBcbfb] to-[#f1d4ff]",
    icon: (
      <svg
        className="h-6 w-6 text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fill-rule="evenodd"
          d="M11 4.717c-2.286-.58-4.16-.756-7.045-.71A1.99 1.99 0 0 0 2 6v11c0 1.133.934 2.022 2.044 2.007 2.759-.038 4.5.16 6.956.791V4.717Zm2 15.081c2.456-.631 4.198-.829 6.956-.791A2.013 2.013 0 0 0 22 16.999V6a1.99 1.99 0 0 0-1.955-1.993c-2.885-.046-4.76.13-7.045.71v15.081Z"
          clip-rule="evenodd"
        />
      </svg>
    ),
  },
  {
    title: "Design",
    openPosition: 8,
    gradientClass: "from-[#BBcbfb] to-[#f1d4ff]",
    icon: (
      <svg
        className="h-6 w-6 text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fill-rule="evenodd"
          d="M11 4.717c-2.286-.58-4.16-.756-7.045-.71A1.99 1.99 0 0 0 2 6v11c0 1.133.934 2.022 2.044 2.007 2.759-.038 4.5.16 6.956.791V4.717Zm2 15.081c2.456-.631 4.198-.829 6.956-.791A2.013 2.013 0 0 0 22 16.999V6a1.99 1.99 0 0 0-1.955-1.993c-2.885-.046-4.76.13-7.045.71v15.081Z"
          clip-rule="evenodd"
        />
      </svg>
    ),
  },
  {
    title: "Design",
    openPosition: 4,
    gradientClass: "from-[#BBcbfb] to-[#f1d4ff]",
    icon: (
      <svg
        className="h-6 w-6 text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fill-rule="evenodd"
          d="M11 4.717c-2.286-.58-4.16-.756-7.045-.71A1.99 1.99 0 0 0 2 6v11c0 1.133.934 2.022 2.044 2.007 2.759-.038 4.5.16 6.956.791V4.717Zm2 15.081c2.456-.631 4.198-.829 6.956-.791A2.013 2.013 0 0 0 22 16.999V6a1.99 1.99 0 0 0-1.955-1.993c-2.885-.046-4.76.13-7.045.71v15.081Z"
          clip-rule="evenodd"
        />
      </svg>
    ),
  },
  {
    title: "Design",
    openPosition: 4,
    gradientClass: "from-[#BBcbfb] to-[#f1d4ff]",
    icon: (
      <svg
        className="h-6 w-6 text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fill-rule="evenodd"
          d="M11 4.717c-2.286-.58-4.16-.756-7.045-.71A1.99 1.99 0 0 0 2 6v11c0 1.133.934 2.022 2.044 2.007 2.759-.038 4.5.16 6.956.791V4.717Zm2 15.081c2.456-.631 4.198-.829 6.956-.791A2.013 2.013 0 0 0 22 16.999V6a1.99 1.99 0 0 0-1.955-1.993c-2.885-.046-4.76.13-7.045.71v15.081Z"
          clip-rule="evenodd"
        />
      </svg>
    ),
  },
  {
    title: "Design",
    openPosition: 4,
    gradientClass: "from-[#BBcbfb] to-[#f1d4ff]",
    icon: (
      <svg
        className="h-6 w-6 text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fill-rule="evenodd"
          d="M11 4.717c-2.286-.58-4.16-.756-7.045-.71A1.99 1.99 0 0 0 2 6v11c0 1.133.934 2.022 2.044 2.007 2.759-.038 4.5.16 6.956.791V4.717Zm2 15.081c2.456-.631 4.198-.829 6.956-.791A2.013 2.013 0 0 0 22 16.999V6a1.99 1.99 0 0 0-1.955-1.993c-2.885-.046-4.76.13-7.045.71v15.081Z"
          clip-rule="evenodd"
        />
      </svg>
    ),
  },
  {
    title: "Design",
    openPosition: 4,
    gradientClass: "from-[#BBcbfb] to-[#f1d4ff]",
    icon: (
      <svg
        className="h-6 w-6 text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fill-rule="evenodd"
          d="M11 4.717c-2.286-.58-4.16-.756-7.045-.71A1.99 1.99 0 0 0 2 6v11c0 1.133.934 2.022 2.044 2.007 2.759-.038 4.5.16 6.956.791V4.717Zm2 15.081c2.456-.631 4.198-.829 6.956-.791A2.013 2.013 0 0 0 22 16.999V6a1.99 1.99 0 0 0-1.955-1.993c-2.885-.046-4.76.13-7.045.71v15.081Z"
          clip-rule="evenodd"
        />
      </svg>
    ),
  },
];

export const Jobpositions = () => {
  return (
    <div className="w-full space-y-20 text-center">
      <h1 className="text-3xl font-black font-medium">Open positions</h1>
      <div className="grid grid-cols-3 gap-8 px-4">
        {positions.map((position) => (
          <div className="flex flex-col space-y-8 rounded-2xl bg-white px-10 py-12">
            <div className="flex items-center justify-center space-x-4">
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${position.gradientClass}`}
              >
                {position.icon}
              </div>
              <p className="text-2xl font-medium font-semibold">
                {position.title}
              </p>
            </div>
            <button className="rounded-md border-[1px] px-6 py-4 text-lg hover:bg-[#1e2246] hover:text-white">
              {position.openPosition} open positions
            </button>
          </div>
        ))}
      </div>
      <p className="mx-auto max-w-3xl text-wrap">
        We are proud to be an equal opportunity that values diversity.We do not
        discrimimate on the basis of race, religion, color, national origin,
        gender, sexual orientation, age, marital status, veteran status, or
        disability status
      </p>
    </div>
  );
};
