import React, { useState } from "react";
import useError from './hooks/useError'
import { withErrorBoundary } from "./errorHandling/errorBoundary";
import { ErrorMessage } from "./errorHandling/errorMessage";

const ErrorMessageWithErrorBoundary = withErrorBoundary(ErrorMessage);

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
    return <ErrorMessageWithErrorBoundary><BrokenComponent /></ErrorMessageWithErrorBoundary>;
  }

  return (
    <ErrorMessageWithErrorBoundary>
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

    </ErrorMessageWithErrorBoundary>
  );
};

export default function Test() {
  return <BrokenButton />;
}
