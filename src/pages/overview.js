import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Breadcrumb } from 'antd';
import overviewHome from './overviewHome';
import overviewList from './overviewList';

export default () => {
  return (
    <Route>
      <div>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>
            <Link to="/overview">Scenarios Overview</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/overview">List</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
        <Route exact path="/overview" component={overviewList} />
      </div>
    </Route>
  );
};
