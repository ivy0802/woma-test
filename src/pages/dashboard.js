import React from 'react';
import { Card, Row, Col, Form, Select, Input, Button, List, Divider } from 'antd';

const { Option } = Select;

export default () => {
  return (
    <div style={{ padding: '30px'}}>
      <Row gutter={16}>
        <Col span={10}>
          <Row>
            <Card title="Workability" bordered={false} style={{height:240}} headStyle={{ borderBottom: 0 }}>
              <p>Card content</p>
            </Card>
          </Row>
          <Row>
            <Card title="Workability Details For The Nest 24 Hours" bordered={false} style={{height:240, marginTop: 16 }} headStyle={{ borderBottom: 0 }}>
              <p>Card content</p>
            </Card>
          </Row>
          <Row>
            <Card title="Workability Details For The Next 5 Days" bordered={false} style={{height:240, marginTop: 16 }} headStyle={{ borderBottom: 0 }}>
              <p>Card content</p>
            </Card>
          </Row>
        </Col>
        <Col span={10}>
          <Card title="Daili Maintenance" bordered={false} headStyle={{ borderBottom: 0 }} style={{height:800}}>
            <p>Card content</p>
          </Card>
        </Col>
        <Col span={4}>
          <Card title="Simulation Results" bordered={false} headStyle={{ borderBottom: 0 }}>
            <p style={{ marginTop: "-40px", fontSize: "10px" }}>Updated:09/09/2019 21:45</p>
            <Divider />
            <p>Scenario Name</p>
            <input />
            <Divider />
            <p>Site:</p>
            <Select
              style={{ width: 160 }}
              placeholder="Select a Site"
            >
              <Option value="Northwind">Northwind</Option>
            </Select>
            <Divider />
            <p>Mode:</p>
            <Select
              style={{ width: 160 }}
              placeholder="Select a Mode"
            >
              <Option value="Forecast">Forecast</Option>
            </Select>
            <Divider />
            <p>Visibility:</p>
            <Select
              style={{ width: 160 }}
              placeholder="Select a Visibility"
            >
              <Option value="Admin only">Admin only</Option>
            </Select>
            <Divider />
            <p>Vessel:</p>
            <Select
              style={{ width: 160 }}
              placeholder="Select a Vessel"
            >
              <Option value="MV Attender">MV Attender</Option>
            </Select>
            <Divider />
            <div style={{ paddingTop: 10 }}>
              <Button type="primary" shape="round" size={'large'}>
                Search
              </Button>
            </div>
            <div style={{ paddingTop: 10 }}>
              <Button shape="round" size={'large'}>
                Back
              </Button>
            </div>
            <div style={{ paddingTop: 10 }}>
              <Button shape="round" size={'large'}>
                Export
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
