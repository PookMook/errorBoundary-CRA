import React from "react";

export const ErrorMessage = ({
  error,
}) => {
  return (
    <div>
      <h2>{`Sorry there was an unexpected error`}</h2>
      {`To continue: `}
      <button
      type="button"
        onClick={() => {
          window.refresh();
        }}
      >
        {`refresh`}
      </button>
      <p>{error.toString()}</p>
    </div>
  );
};

export function test(props) {
  const Container = props.componentClass;
  return <Container />;
}
