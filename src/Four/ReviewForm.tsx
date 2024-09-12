import React from "react";
import { Review } from "./Review.tsx";

export const ReviewForm = () => {
  return (
    <div className="w-[42rem] space-y-8 rounded-3xl bg-white p-16">
      <h1 className="text-2xl font-black font-semibold">Overall rating</h1>
      <div>
        <Review />
        <p className="text-sm font-normal">Click to rate</p>
      </div>
      <input
        id="title"
        type="text"
        placeholder="Example: Easy to use"
        className="mt-1 rounded-md border-2 p-4 py-3"
      />
      <p>Would you recommend this product to a friend?</p>
      <div className="flex gap-8">
        <div>
          <input
            className="mr-2 scale-150 accent-[#121633]"
            type="radio"
            id="yes"
            name="product"
            value="yes"
          />
          <label className="cursor-pointer" htmlFor="yes">
            Yes
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="no"
            name="product"
            value="no"
            className="mr-2 scale-150 accent-[#121633]"
          />
          <label className="cursor-pointer" htmlFor="no">
            No
          </label>
        </div>
      </div>
      <div className="mt-5 flex gap-x-2">
        <div className="grow">
          <input id="Nickname" type="text" placeholder="Example: bob27" />
        </div>
        <div className="grow">
          <input
            id="Email address (will not be published)"
            type="text"
            placeholder="Example: your@gmail.com"
          />
        </div>
      </div>
      <div className="mt-3">
        <input
          type="radio"
          className="mr-2 scale-150 accent-[#121633]"
          id="accept"
          name="accept"
          value="accept"
        />
        <label htmlFor="accept" className="cursor-pointer">
          I accept the terms and conditions
        </label>
      </div>
      <p className="mt-3 text-sm">
        You will be able to receive emails in connection with this review (eg if
        others comment on your review). All emails contain the option to
        unsubcribe. We can use the text and start rating from your review in
        other making
      </p>
      <button className="mt-3 rounded-md bg-[#121613] p-4 text-white">
        Submit product review
      </button>
    </div>
  );
};
