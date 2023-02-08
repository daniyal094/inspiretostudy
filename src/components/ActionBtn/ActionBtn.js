import React from "react";

export default function ActionBtn({ data, handleChange, options }) {
  return (
    <div className="px-3">
      <div className="form-group">
        <select
          style={{ minWidth: "200px" }}
          className="form-control pointer"
          id="exampleFormControlSelect1"
          onChange={(e) => {
            handleChange(e.target.value, data);
          }}
        >
          <option selected>Select Action</option>

          {options?.map((item, index) => (
            <option value={item} key={index + 1}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
