import React, { Component } from 'react';
import 'antd/dist/antd.css';
import {
  Table,
  Badge,
  Menu,
  Dropdown,
  Icon,
  Divider,
  Tag,
  Button,
  Row,
  Col
} from 'antd';

const renderContent = (value, row, index) => {
  const obj = {
    children: value,
    props: {}
  };
  if (index === 4) {
    obj.props.colSpan = 0;
  }
  return obj;
};
const ButtonGroup = Button.Group;

const data = [
  {
    key: 1,
    name: 'Daily Maintenance',
    site: 'Northwind',
    mode: 'Forecast',
    tags: ['Admin only'],
    vessel: 'MV Attender',
    status: 'Active',
    execution: 'Run',
    workability: [1, 2, 3, 4, 5],
    detail: [
      {
        key: 1,
        id: 1,
        name: 'Sail to site',
        location: 'Port to site',
        duration: 2,
        constraints: [
          { name: 'Hs [m]', operation: '<', value: 2.0 },
          { name: 'Tp [s]', operation: '<', value: 12 },
          { name: 'Wind speed [m/s]', operation: '<=', value: 14 }
        ]
      },
      {
        key: 2,
        id: 2,
        name: 'Daily maintenance',
        location: 'Site',
        duration: 6,
        constraints: [
          { name: 'Hs [m]', operation: '<', value: 1.3 },
          { name: 'Vertical bow movement [m]', operation: '<', value: 0.55 },
          { name: 'Wind speed [m/s]', operation: '<=', value: 10 }
        ]
      },
      {
        key: 3,
        id: 3,
        name: 'Sail to port',
        location: 'Site to port',
        duration: 2,
        constraints: [
          { name: 'Hs [m]', operation: '<', value: 2.0 },
          { name: 'Tp [s]', operation: '<', value: 12 },
          { name: 'Wind speed [m/s]', operation: '<=', value: 14 }
        ]
      }
    ]
  }
];

const menu = (
  <Menu>
    <Menu.Item>Delete</Menu.Item>
    <Menu.Item>Copy</Menu.Item>
  </Menu>
);

function NestedTable() {
  const expandedRowRender = detailData => {
    const nameColumns = [{ title: 'Name', dataIndex: 'name', key: 'name' }];
    const operationColumns = [
      { title: 'Operation', dataIndex: 'operation', key: 'operation' }
    ];
    const valueColumns = [{ title: 'Value', dataIndex: 'value', key: 'value' }];

    const detailColumns = [
      { title: 'ID', dataIndex: 'id', key: 'id' },
      { title: 'Name', dataIndex: 'name', key: 'name' },
      { title: 'Location', dataIndex: 'location', key: 'location' },
      { title: 'Duration', dataIndex: 'duration', key: 'duration' },
      {
        title: 'Name',
        dataIndex: 'constraints',
        key: 'constraints',
        render: constraints => (
          <div>
            <Table
              showHeader={false}
              columns={nameColumns}
              dataSource={constraints}
              pagination={false}
            />
          </div>
        )
      },
      {
        title: 'Operation',
        dataIndex: 'constraints',
        key: 'constraints',
        render: constraints => (
          <div>
            <Table
              showHeader={false}
              columns={operationColumns}
              dataSource={constraints}
              pagination={false}
            />
          </div>
        )
      },
      {
        title: 'Value',
        dataIndex: 'constraints',
        key: 'constraints',
        render: constraints => (
          <div>
            <Table
              showHeader={false}
              columns={valueColumns}
              dataSource={constraints}
              pagination={false}
            />
          </div>
        )
      }
    ];
    const data = [];
    for (let i = 1; i < 3; ++i) {
      data.push(
        {
          key: i,
          id: i,
          name: 'Sail to site',
          location: 'Port to site',
          duration: ''
        },
        {
          key: i,
          id: i,
          name: 'Sail to site',
          location: 'Port to site',
          duration: ''
        }
      );
    }
    return (
      <div>
        <Row>
          <Col span={12}>Process List</Col>
          <Col span={12}>Constraints for the process</Col>
        </Row>
        <Table
          columns={detailColumns}
          dataSource={detailData}
          pagination={false}
        />
      </div>
    );
  };

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Site', dataIndex: 'site', key: 'site' },
    { title: 'Mode', dataIndex: 'mode', key: 'mode' },
    {
      title: 'Visibility',
      dataIndex: 'tags',
      key: 'tags',
      render: tags => (
        <span>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'Admin only') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      )
    },
    {
      title: 'Status',
      key: 'status',
      render: () => (
        <span>
          <Badge status="success" />
          Finished
        </span>
      )
    },
    {
      title: 'Execution',
      dataIndex: 'execution',
      key: 'execution',
      render: () => (
        <Button type="primary" icon="caret-right">
          Run
        </Button>
      )
    },
    { title: 'Workability', dataIndex: 'workability', key: 'workability' },
    {
      title: 'Action',
      key: 'operation',
      render: () => (
        <span className="table-operation">
          <a>Edit</a>
          <Divider type="vertical" />
          <a>Results</a>
          <Divider type="vertical" />
          <Dropdown overlay={menu}>
            <a>
              More <Icon type="down" />
            </a>
          </Dropdown>
        </span>
      )
    }
  ];

  return (
    <Table
      className="components-table-demo-nested"
      columns={columns}
      expandedRowRender={x => expandedRowRender(x.detail)}
      dataSource={data}
    />
  );
}
export default () => {
  return (
    <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
      <Row>
        <Col span={12}>
          <Button type="primary" icon="plus">
            Add new scenario
          </Button>
        </Col>
        <Col span={12}>
          <ButtonGroup className="float-right">
            <Button>FORECAST</Button>
            <Button>PLANNING</Button>
          </ButtonGroup>
        </Col>
      </Row>
      <Row>{NestedTable()}</Row>
    </div>
  );
};
