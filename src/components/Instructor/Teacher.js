import Link from "next/link";
import React from "react";

export default function Teacher(props) {
  return (
    <>
      <div className="teacher__item text-center grey-bg-5 transition-3 mb-30">
        <div className="teacher__thumb w-img fix">
        </div>
        <div className="teacher__content">
          <h3 className="teacher__title">{props.teacherName}</h3>
        </div>
        <span> {props.position}</span>
      </div>
    </>
  );
}
