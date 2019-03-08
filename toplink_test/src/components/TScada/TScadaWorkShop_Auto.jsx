import React from 'react';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button } from 'antd';

import {TPostData} from '../../utils/TAjax';

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  sorter: true,
  render: name => `${name.first} ${name.last}`,
  width: '20%',
}, {
  title: 'Gender',
  dataIndex: 'id',
  filters: [
    { text: 'Male', value: 'male' },
    { text: 'Female', value: 'female' },
  ],
  width: '20%',
}, {
  title: 'Email',
  dataIndex: 'uuid',
}];

export default class TScadaWorkShop_Auto extends React.Component{


  state = {
    data: [],
    pagination: {},
    loading: false,
  };

  handleTableChange = (pagination, filters, sorter) => {
    const pager = { ...this.state.pagination };
    pager.current = pagination.current;
    this.setState({
      pagination: pager,
    });
    this.fetch({
      results: pagination.pageSize,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters,
    });
  }


  fetch = (params = {}) => {
    console.log('params:', params);
    this.setState({ loading: true });


    // reqwest({
    //   url: 'https://randomuser.me/api',
    //   method: 'get',
    //   data: {
    //     results: 10,
    //     ...params,
    //   },
    //   type: 'json',
    // }).then((data) => {
    //   const pagination = { ...this.state.pagination };
    //   // Read total count from server
    //   // pagination.total = data.totalCount;
    //   pagination.total = 200;
    //   this.setState({
    //     loading: false,
    //     data: data.results,
    //     pagination,
    //   });
    // });


    let obj = {
      PageIndex: 0,
      PageSize: -1,
      ProductModelUUID : -1,
      KeyWord : ""
  }


  // 调用后台
 TPostData('/api/tbom/bom','GetList', obj,
  function(json){
  console.log(json);

  const pagination = { ...this.state.pagination };
  //json.obj.objectlist[0].name,

  // Read total count from server
      // pagination.total = data.totalCount;
      // pagination.total = 200;
      // this.setState({
      //   loading: false,
      //   data: json.obj.objectlist,
      //   pagination,
      // });

  }
  );

  //console.log(json);

  }
  componentDidMount() {
    this.fetch();
  }


// componentDidMount() {

// let _arr = [];

//   let obj = {
//     PageIndex: 0,
//     PageSize: -1,
//     ProductModelUUID : -1,
//     KeyWord : ""
// }

// // 调用后台
// TPostData('/api/tbom/bom','GetList', obj,
// function(json){
// console.log(json);


// _arr.push({
//   key: '5',
//   name: json.obj.objectlist[0].name,
//   age: 8888,
//   address: 'xxx',
// });

// this.setState({m_lstObject:_arr});

// }
// );


// }

render() {
  return (
    <Table columns={columns}
      rowKey={record => record.registered}
      dataSource={this.state.data}
      pagination={this.state.pagination}
      loading={this.state.loading}
      onChange={this.handleTableChange}
    />
  );
}

}

