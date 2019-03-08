import React from 'react';
import { connect } from 'dva';
import {TDemoList} from 'components/TDemo/TDemoList';

function TDemoListPage() {
  return (
    <div>
      <h1>REACT Hello</h1>
      <TDemoList />

    </div>
  );
}

TDemoListPage.propTypes = {
};

export default connect()(TDemoListPage);
