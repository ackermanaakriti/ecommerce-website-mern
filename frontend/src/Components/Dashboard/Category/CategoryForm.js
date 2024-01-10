import React from "react";
import './category.css'

const CategoryForm = ({ handleSubmit, value, setValue }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="category--form">
          <input
            type="text"
            className="form-control"
            placeholder="Enter new category"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

<button type="submit" >
          Submit
        </button>
        </div>

      
      </form>
    </>
  );
};

export default CategoryForm;