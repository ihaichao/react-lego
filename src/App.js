import React, { Component } from 'react';
import { Layout } from 'antd'

import Components from './containers/components'
import Preview from './containers/preview'

import './App.scss'

const {
  Header, Sider, Content,
} = Layout;

class App extends Component {
  render() {
    return (
      <div className="app">
        <Layout>
          <Header style={{ background: '#aaa' }}>Header</Header>
          <Layout style={{ height: '100vh' }}>
            <Sider style={{ background: '#fff', padding: '20px' }}>
              <Components />
            </Sider>
            <Content>
              <Preview />
            </Content>
            <Sider style={{ background: '#fff' }}>Sider</Sider>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default App;
