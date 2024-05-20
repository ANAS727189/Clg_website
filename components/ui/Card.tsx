"use client";

import React from "react";
import Button from "@/components/ui/Button";

interface IProps {
  title: string;
  desc: string;
  buttonText: string;
  handleClick: () => void; // Change to a function without parameters
}

export default function Card({
  title,
  desc,
  buttonText,
  handleClick,
}: IProps) {
  return (
    <div className="bg-customBlue flex-shrink-0 mx-2 mb-4 rounded-lg overflow-hidden shadow-md border border-gray-200">
      <figure className="text-center p-6">
        <h5 className="text-cardText font-bold text-[28px] mt-[28px] underline">
          <a href="#">{title}</a>
        </h5>
        <p className="text-cardText text-center text-secondary font-medium text-[18px] mt-2 mb-8">
          {desc}
        </p>
        <div className="mt-4">
          <Button handleClick={handleClick}>{buttonText}</Button>
        </div>
      </figure>
    </div>
  );
}