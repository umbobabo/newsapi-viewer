import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function SearchForm({ submitHandler }) {
  return (
    <form method="get" onSubmit={submitHandler}>
      <TextField
        name="q"
        label="Insert your keyword"
        type="search"
        margin="normal"
        required
      />
      <Button type="submit" variant="raised" color="primary">
        Search
      </Button>
    </form>
  );
}
