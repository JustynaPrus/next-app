"use client";
import { FormEvent } from "react";

export default function Form() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/submit", {
      method: "POST",
      body: formData,
    });

    // Handle response if necessary
    const data = await response.json();
    // ...
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Opinion</label>
        <input type="text" name="content" />
      </div>
      <div>
        <label>Name</label>
        <input type="text" name="attribution" />
      </div>
      <button type="submit">Add</button>
    </form>
  );
}
