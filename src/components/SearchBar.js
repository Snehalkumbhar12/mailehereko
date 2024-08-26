import React from "react";
import { Form, FormControl, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <Form className="mb-4">
      <InputGroup
        className="ml-auto" 
        style={{ width: "300px" }}
      >
        <InputGroup.Text
          id="search-icon"
          style={{
            backgroundColor: "#0b0f27",
            borderColor: "gray",
            color: "#c0cedc",
            padding: "4px 8px",
            fontSize: "0.875rem",
          }}
        >
          <FaSearch />
        </InputGroup.Text>
        <FormControl
          type="text"
          placeholder="Search Movies or TV Shows"
          aria-label="Search"
          aria-describedby="search-icon"
          style={{
            borderColor: "gray",
            backgroundColor: "#0b0f27",
            padding: "8px 12px",
            fontSize: "0.875rem",
            fontWeight: "bold"
          }}
        />
      </InputGroup>
    </Form>
  );
};

export default SearchBar;
