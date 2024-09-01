import { useState } from "react";

const AddTodoForm = () => {
  const [value, setValue] = useState("");
  return (
    <form className="form-inline mt-3 mb-4">
      <label htmlFor="name" className="mb-1">
        Name
      </label>
      <input
        autoComplete="off"
        id="name"
        type="text"
        className="form-control mb-2 mr-sm-2"
        placeholder="Add Todo ..."
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      <button type="submit" className="btn btn-primary mt-1">
        Submit
      </button>
    </form>
  );
};

export default AddTodoForm;
