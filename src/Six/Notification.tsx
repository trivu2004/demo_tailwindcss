import React, { useState } from "react";

export const Notification: React.FC = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="w-[44rem]">
      <div className="text-right">
        <button
          className="rounded-full bg-[#0c0e41] p-4 text-white"
          onClick={() => setShow(!show)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-10 w-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
            />
          </svg>
        </button>
      </div>
      <div
        className={`mt-4 w-full rounded-2xl bg-white p-10 shadow-sm transition-all duration-500 ${show ? "opacity-100" : "opacity-0"}`}
      >
        <h2 className="text-xl font-light font-semibold">
          You have 1 new message
        </h2>
        <div className="mt-6 flex gap-6">
          <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-[#fff9f2] text-[#c83974]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-10 w-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </div>
          <div className="flex flex-col justify-center font-medium font-semibold text-[#0c0e41]">
            <h3>Feb 22</h3>
            <p className="text-lg font-normal">
              If you like what we do, please tell your friends and share.
            </p>
          </div>
        </div>
        <div className="mt-8 space-x-4 text-center">
          <button className="rounded-full border-2 border-gray-800 px-4 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="inline size-6 text-gray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z"
              />
            </svg>
            Twitter
          </button>
          <button className="rounded-full border-2 border-gray-800 px-4 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="inline size-6 text-gray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
              />
            </svg>
            Facebook
          </button>
        </div>
      </div>
    </div>
  );
};
