import React from 'react';
import { Tabs, Button } from 'antd';

import TFooter from '../components/TCommon/TUtils/TFooter';
import THeader from '../components/TCommon/TUtils/THeader';

import TWorkShopList from '../components/TFactory/TWorkShopList';
import TScadaWorkShop_Auto  from '../components/TScada/TScadaWorkShop_Auto';

const TabPane = Tabs.TabPane;

export default class TTabMain extends React.Component{

  constructor(props) {
    super(props);
    this.newTabIndex = 0;
    const panes = [
      { title: '首页' , key: 'TMain' , data: 'TMain'},
    ];
    this.state = {
      activeKey: panes[0].key,
      panes,
    };


  }

  onChange = (activeKey) => {
    this.setState({ activeKey });
  }
  onEdit = (targetKey, action) => {
    this[action](targetKey);
  }
  add = () => {
    const panes = this.state.panes;
    const activeKey = `newTab${this.newTabIndex++}`;
   //panes.push({ title: 'New Tab', content: 'New Tab Pane', key: activeKey });
   //let newComponent = require('./THeader');
     panes.push({ title: 'nwe-'+panes.length+1, data: 'TWorkShopList', key: activeKey });
console.log(panes);

    this.setState({ panes, activeKey });
  }
  remove = (targetKey) => {
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });

    // 罗世洲:添加 TMain过滤:首页不关闭
    if(targetKey == 'TMain')
    {
      return;
    }

    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key;
    }
    this.setState({ panes, activeKey });
  }



  TPageOpen=(key)=>{ // 调用子组件方法获取孩子名字
    const panes = this.state.panes;
  const activeKey = key;
 //panes.push({ title: 'New Tab', content: 'New Tab Pane', key: activeKey });
 //let newComponent = require('./THeader');

 //console.log("key in child");
if(panes.length <= 10)
{
  panes.push({ title: '?', key: activeKey, data: '?' });
}
else{
//todo:切换当前激活的页面
}
//console.log(panes);

  this.setState({ panes, activeKey });
}


  render() {

    //todo:删除无用的注释
    // 罗世洲: 尝试动态加载, 没有研究成功
    // let newComponent =
    // var newsList = this.state.newsList.map(function(news) {
    //   return <newComponent />;
    // });

    //let newComponent = this.state.panes.map(pane => <TabPane tab={pane.title} key={pane.key}>{pane.content}</TabPane>);

    //let newComponent = this.state.panes.map(pane => <TabPane tab={pane.title} key={pane.key}>{pane.content}</TabPane>);

// AMD异步加载

// webpack既支持commonjs规范也支持AMD规范，这就意味着AMD的经典语法是可以正常使用的，如：
// require(['./list'], function(list){ list.show();});
// 当然，这样写的话list.js也是被单独打包成一个文件的。与上面类似，如果你在这里写了多个模块，那么这些模块都会被打包成一个文件，如：
// require(['./list', './edit'], function(list, edit){ list.show(); edit.display();});
// list.js和edit.js会被打包在一起。不同的是，AMD的方式无法传入第三个参数当文件名，所以得不到很好看的文件。

    return (
      <div>


        {/* <div style={{ marginBottom: 16 }}>
          <Button onClick={this.add}>ADD</Button>
        </div> */}


        <Tabs
          hideAdd
          onChange={this.onChange}
          activeKey={this.state.activeKey}
          type="editable-card"
          onEdit={this.onEdit}
        >

          {/* {this.state.panes.map(pane => <TabPane tab={pane.title} key={pane.key}>{pane.content}</TabPane>)} */}

{
  this.state.panes.map(function(pane){

    switch(pane.key){
      case "TMain":return <TabPane tab='首页' key={pane.key}><THeader /></TabPane>; break;
      case "TScadaWorkShop_Auto":return <TabPane tab='自动车间' key={pane.key}><TScadaWorkShop_Auto id={pane.data} /></TabPane>; break;
      case "TWorkShopList":return <TabPane tab='车间列表' key={pane.key}><TWorkShopList /></TabPane>; break;
      case "TDeviceList":return <TabPane tab='设备列表' key={pane.key}><TDeviceList /></TabPane>; break;
      //todo:添加更多的Component
      default:return <TabPane tab='未知' key={pane.key}><TFooter /></TabPane>;
   }

// if ('THeader' == pane.content) {
//   return <TabPane tab={pane.title} key={pane.key}><THeader /></TabPane>;
// }
// else if('TWorkShopList' == pane.content)
// {
//   return <TabPane tab={pane.title} key={pane.key}><TWorkShopList /></TabPane>;
// }
// return <TabPane tab={pane.title} key={pane.key}><TFooter /></TabPane>;


 })
 }


        </Tabs>
      </div>
    );
  }

}
