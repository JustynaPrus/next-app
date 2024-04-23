"use client";
import { ElementRef, FormEvent, useRef } from "react";

export default function Form({onSubmit}:{onSubmit:({content,attribution}:{content:string,attribution:string})=>Promise<void>;}) {

  const opinionRef=useRef<ElementRef<"input">>(null)
  const attributionRef=useRef<ElementRef<"input">>(null)


  async function onFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if(opinionRef && opinionRef.current && attributionRef && attributionRef.current){
      await onSubmit({content: opinionRef.current.value, attribution: attributionRef.current.value})
    }
  }

  return (
    <form onSubmit={onFormSubmit}>
      <div>
        <label>Opinion</label>
        <input type="text" name="content" ref={opinionRef}/>
      </div>
      <div>
        <label>Name</label>
        <input type="text" name="attribution" ref={attributionRef}/>
      </div>
      <button type="submit">Add</button>
    </form>
  );
}
