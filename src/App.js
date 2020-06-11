import React, { useState } from "react";
import useError from './hooks/useError'

const BrokenComponent = () => {
  throw new Error("I'm broken! Don't render me.");
};

const BrokenButton = () => {
  const [
    shouldRenderBrokenComponent,
    setShouldRenderBrokenComponent,
  ] = useState(false);
  const throwError = useError();

  if (shouldRenderBrokenComponent) {
    return <BrokenComponent />;
  }

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setShouldRenderBrokenComponent(true);
        }}
      >
        {`Throw nasty error`}
      </button>
      <button
        onClick={() => {
          throwError(new Error("Hello guarded Error"));
        }}
      >
        throw an error in event handler
      </button>
      <button onClick={() => {
          throw new Error("Hello event Error");
        }}>throw tiny error</button>

    </>
  );
};

export default function Test() {
  return <BrokenButton />;
}
