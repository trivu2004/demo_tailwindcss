import React from "react";

export const Collection = () => {
  const TAGS: string[] = ["Profile", "New York", "Relax", "Person", "Fashion"];
  return (
    <div className="h-full w-full rounded-lg bg-[#eff0f1] p-16 font-[#0e0e38] shadow-lg">
      <div className="mt-1 space-x-2">
        {TAGS.map((tag: string) => (
          <a
            className="mb-2 inline-block cursor-pointer rounded-lg bg-white p-4 hover:text-blue-400"
            id="{tag}"
          >
            {tag}
          </a>
        ))}
      </div>
      <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-3xl bg-white p-6">
          <div>
            <img
              src="https://cdn.dribbble.com/users/2400293/screenshots/15883991/media/c5a6d6098f4ec6a0ce1b38909d82a494.png?resize=1200x900&vertical=center"
              className="h-100 aspect-video w-full rounded-2xl"
              alt=""
            />
          </div>

          <div className="mt-4 grid grid-cols-3 gap-4">
            <img
              src="https://cdn.dribbble.com/userupload/16309930/file/original-7e3f86941c500094183e158b3ce11a39.png?resize=1504x1128"
              className="w-100 h-50 aspect-video rounded-2xl"
              alt=""
            />
            <img
              src="https://cdn.dribbble.com/users/2400293/screenshots/16946975/media/8a158c81922bea0aee537113726fecd4.png?resize=1200x900&vertical=center"
              className="w-100 h-50 aspect-video rounded-2xl"
              alt=""
            />
            <img
              src="https://cdn.dribbble.com/users/2400293/screenshots/16946975/media/8a158c81922bea0aee537113726fecd4.png?resize=1200x900&vertical=center"
              className="w-100 h-50 aspect-video rounded-2xl"
              alt=""
            />
          </div>
          <div className="flex pt-6">
            <p className="grow text-xl font-extralight font-medium">
              People 44 img
            </p>
            <p className="flex items-center font-extralight">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mr-2 size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              144
            </p>
          </div>
        </div>
        <div className="rounded-3xl bg-white p-6">
          <div>
            <img
              src="https://cdn.dribbble.com/users/2400293/screenshots/15883991/media/c5a6d6098f4ec6a0ce1b38909d82a494.png?resize=1200x900&vertical=center"
              className="h-100 aspect-video w-full rounded-2xl"
              alt=""
            />
          </div>

          <div className="mt-4 grid grid-cols-3 gap-4">
            <img
              src="https://cdn.dribbble.com/userupload/16309930/file/original-7e3f86941c500094183e158b3ce11a39.png?resize=1504x1128"
              className="w-100 h-50 aspect-video rounded-2xl"
              alt=""
            />
            <img
              src="https://cdn.dribbble.com/users/2400293/screenshots/16946975/media/8a158c81922bea0aee537113726fecd4.png?resize=1200x900&vertical=center"
              className="w-100 h-50 aspect-video rounded-2xl"
              alt=""
            />
            <img
              src="https://cdn.dribbble.com/users/2400293/screenshots/16946975/media/8a158c81922bea0aee537113726fecd4.png?resize=1200x900&vertical=center"
              className="w-100 h-50 aspect-video rounded-2xl"
              alt=""
            />
          </div>
          <div className="flex pt-6">
            <p className="grow text-xl font-extralight font-medium">
              People 44 img
            </p>
            <p className="flex items-center font-extralight">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mr-2 size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              144
            </p>
          </div>
        </div>
        <div className="rounded-3xl bg-white p-6">
          <div>
            <img
              src="https://cdn.dribbble.com/users/2400293/screenshots/15883991/media/c5a6d6098f4ec6a0ce1b38909d82a494.png?resize=1200x900&vertical=center"
              className="h-100 aspect-video w-full rounded-2xl"
              alt=""
            />
          </div>

          <div className="mt-4 grid grid-cols-3 gap-4">
            <img
              src="https://cdn.dribbble.com/userupload/16309930/file/original-7e3f86941c500094183e158b3ce11a39.png?resize=1504x1128"
              className="w-100 h-50 aspect-video rounded-2xl"
              alt=""
            />
            <img
              src="https://cdn.dribbble.com/users/2400293/screenshots/16946975/media/8a158c81922bea0aee537113726fecd4.png?resize=1200x900&vertical=center"
              className="w-100 h-50 aspect-video rounded-2xl"
              alt=""
            />
            <img
              src="https://cdn.dribbble.com/users/2400293/screenshots/16946975/media/8a158c81922bea0aee537113726fecd4.png?resize=1200x900&vertical=center"
              className="w-100 h-50 aspect-video rounded-2xl"
              alt=""
            />
          </div>
          <div className="flex pt-6">
            <p className="grow text-xl font-extralight font-medium">
              People 44 img
            </p>
            <p className="flex items-center font-extralight">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mr-2 size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              144
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
