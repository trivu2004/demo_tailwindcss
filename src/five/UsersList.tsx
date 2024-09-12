import React, { useState } from "react";
interface User {
  name: string;
  job: string;
  avata: string;
  tags: string[];
}
const users: User[] = [
  {
    name: "John Doe",
    job: "Software Engineer",
    avata:
      "https://cdn.dribbble.com/userupload/16309930/file/original-7e3f86941c500094183e158b3ce11a39.png?resize=1504x1128",
    tags: ["React", "Node.js", "TypeScript", "JavaScript"],
  },
  {
    name: "Jane Smith",
    job: "UI/UX Designer",
    avata:
      "https://cdn.dribbble.com/userupload/10359938/file/original-03d701b593901415bef3d4eeba1dee36.png?resize=1504x1128",
    tags: ["Figma", "Sketch", "Adobe XD", "User Research"],
  },
  {
    name: "Emily Johnson",
    job: "Data Scientist",
    avata:
      "https://cdn.dribbble.com/users/2400293/screenshots/16378193/media/e9ad5ebe9dd6822be9ee622c7465d9e5.png?resize=1200x900&vertical=center",
    tags: ["Python", "Machine Learning", "Data Analysis", "SQL"],
  },
];
export const UserList = () => {
  const [query, setQuery] = useState("");

  const TAGS: string[] = ["Profile", "New York", "Relax", "Person", "Fashion"];
  const filteredUsers =
    query.length > 0
      ? users.filter((user) => {
          return user.name.toLowerCase().includes(query.toLowerCase());
        })
      : users;
  return (
    <div className="min-w-[40rem] rounded-lg bg-white p-16 shadow">
      <h1>User</h1>
      <div className="mt-6 flex flex-col gap-4 md:flex-row">
        <div>
          <div className="relative grow rounded-md border-2 border-gray-300">
            <input
              type="text"
              className="mr-2 w-full rounded-md px-4 py-3 pl-10"
              placeholder="Search for a part-time job"
              onChange={(e) => setQuery(e.target.value)}
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
        </div>
        <div className="space-x-2">
          {TAGS.map((tag: string) => (
            <a
              className="hover:text-white-400 mb-2 inline-block cursor-pointer rounded-lg bg-white px-4 py-3 hover:bg-[#849fff] hover:text-white"
              id="{tag}"
            >
              {tag}
            </a>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredUsers.map((user) => (
          <div
            key={user.name}
            className="flex cursor-pointer gap-x-4 rounded-xl bg-[#fbfcff] p-6 hover:border-[1px] hover:shadow-lg"
          >
            <img src={user.avata} className="h-24 w-24 rounded-full" alt="" />
            <div>
              <h3 className="font-black font-bold">{user.name}</h3>
              <p className="text-sm font-medium">{user.job}</p>
              <div className="mt-4 space-x-2">
                {user.tags.map((tag) => (
                  <span
                    className="inline-block rounded-full border-[1px] border-slate-500 px-1 text-xs text-[#516fd4]"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
