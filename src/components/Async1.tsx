import React from 'react';

import Loading from 'components/Loading';

const sleep = (m: number) => new Promise((r) => setTimeout(r, m));

type AsyncState = {
  component: null | React.ComponentType;
};

type AsyncProps = {};

const asyncComponent = (
  importComponent: () => Promise<any>,
): React.ElementType => {
  class AsyncComponent extends React.Component<AsyncProps, AsyncState> {
    constructor(props: any) {
      super(props);

      this.state = {
        component: null,
      };
    }

    async componentDidMount() {
      await sleep(process.env.NODE_ENV === 'development' ? 150 : 0);
      console.log(importComponent());

      const { default: component } = await importComponent();
      this.setState({
        component: component,
      });
    }

    render() {
      const C = this.state.component;

      return C ? <C {...this.props} /> : <Loading />;
    }
  }

  return AsyncComponent;
};

export default asyncComponent;
