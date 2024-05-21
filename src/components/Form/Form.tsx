"use client";
import { ElementRef, FormEvent, useRef } from "react";

export default function Form({onSubmit}:{onSubmit:({attribution,content}:{attribution:string,content:string})=>Promise<void>;}) {

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
        <input name="content" ref={opinionRef} type="text"/>
      </div>
      <div>
        <label>Name</label>
        <input name="attribution" ref={attributionRef} type="text"/>
      </div>
      <button type="submit">Add</button>
    </form>
  );
}
