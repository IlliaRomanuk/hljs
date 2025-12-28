import { Component } from "react";
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <h1>Виникла помилка.</h1>
          <img src="../public/free-sticker-cake-7357188.png" alt="" />
        </>
      );
    }

    return this.props.children;
  }
}
export default ErrorBoundary;