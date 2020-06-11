import React from "react";

const MISSING_ERROR = "Error was swallowed during propagation.";

export const withErrorBoundary = (
  BaseComponent
) => {

  return class Hoc extends React.Component {
    // Enhance component name for debugging and React-Dev-Tools
    static displayName = `withErrorBoundary(${BaseComponent.name})`;
    // reference to original wrapped component
    static WrappedComponent = BaseComponent;

     state = {
      error: undefined,
    };

    componentDidCatch(error, info) {
      this.setState({ error: error || new Error(MISSING_ERROR) });
      this.logErrorToCloud(error, info);
    }

    logErrorToCloud = (error, info) => {
      // TODO: send error report to service provider
    };

    render() {
      const { children, ...restProps } = this.props;
      const { error } = this.state;

      if (error) {
        return <BaseComponent {...restProps} error={error}/>;
      }

      return children;
    }
  };
};
