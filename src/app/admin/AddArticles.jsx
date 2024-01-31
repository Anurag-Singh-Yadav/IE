import React from "react";
import InputTextContent from "../admin/InputTextContent";
function AddArticles() {
  return (
    <div>
      <form>
        <label>
          <div>Main-topics</div>
          <InputTextContent></InputTextContent>
        </label>
        <label>
          <div>Main-Heading</div>
          <InputTextContent></InputTextContent>
        </label>
        <label>
          <div>Sub-heading</div>
          <InputTextContent></InputTextContent>
        </label>
        <label>
          <div></div>
          <InputTextContent></InputTextContent>
        </label>
      </form>
    </div>
  );
}

export default AddArticles;
