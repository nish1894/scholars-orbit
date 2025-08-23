import { Component } from 'react';

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error('ErrorBoundary caught an error', error, info);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;
        if (hasError) {
            return (
                <div style={{ padding: 24 }}>
                    <h2>Something went wrong.</h2>
                    <p>Please refresh the page or try again later.</p>
                </div>
            );
        }
        return children;
    }
}
