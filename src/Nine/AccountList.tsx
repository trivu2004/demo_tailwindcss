import React from "react";
import { ReactNode } from "react";
interface Account {
  logo: string;
  name: string;
  subtitle: string;
  account: number;
}

const accounts: Account[] = [
  {
    logo: "https://cdn.dribbble.com/userupload/16309930/file/original-7e3f86941c500094183e158b3ce11a39.png?resize=1504x1128",
    name: "Dropbox",
    subtitle: "dropbox.com",
    account: 24,
  },
  {
    logo: "https://cdn.dribbble.com/userupload/16309930/file/original-7e3f86941c500094183e158b3ce11a39.png?resize=1504x1128",
    name: "Dropbox",
    subtitle: "dropbox.com",
    account: 24,
  },
  {
    logo: "https://cdn.dribbble.com/userupload/16309930/file/original-7e3f86941c500094183e158b3ce11a39.png?resize=1504x1128",
    name: "Dropbox",
    subtitle: "dropbox.com",
    account: 24,
  },
  {
    logo: "https://cdn.dribbble.com/userupload/16309930/file/original-7e3f86941c500094183e158b3ce11a39.png?resize=1504x1128",
    name: "Dropbox",
    subtitle: "dropbox.com",
    account: 24,
  },
];

export const AccountList = () => {
  return (
    <div className="w-[60rem] rounded-3xl bg-white p-24">
      <div className="flex items-center">
        <div className="relative rounded-xl border-2 border-gray-300">
          <input
            type="text"
            className="mr-2 w-full rounded-md px-4 py-3 pl-10"
            placeholder="Search for a part-time job"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="absolute left-3 top-3.5 h-5 w-5 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
        <div className="ml-auto flex items-center">
          <button className="inline-flex items-center justify-center rounded-full p-2 text-[#0c0e41]">
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
          <button className="h-16 w-16 rounded-full bg-[#0c0e41] p-2 text-white">
            <span className="text-3xl font-medium font-semibold">IG</span>
          </button>
        </div>
      </div>
      <h1 className="mt-10 text-2xl font-bold font-medium">Accounts</h1>
      <div className="mt-7 w-full">
        {accounts.map((account) => (
          <div className="flex items-center justify-between rounded-3xl p-5 text-[#0e0d46] hover:bg-[#faf2fe]">
            <div className="w- w[-220px] flex items-center gap-x-4">
              <img
                className="h-16 w-16 rounded-full"
                src={account.logo}
                alt=""
              />
              <div>
                <h2 className="text-2xl font-medium font-semibold">
                  {account.name}
                </h2>
                <p>{account.subtitle}</p>
              </div>
            </div>
            <div>{account.account} accounts</div>

            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
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
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
