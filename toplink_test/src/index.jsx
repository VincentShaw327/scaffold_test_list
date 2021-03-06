import dva from 'dva';
import './index.css';

// let d =
// {
//      initialState: {
//        products: [
//          { name: 'dva', id: 1 },
//          { name: 'antd', id: 2 },
//        ],
//      }
//    };

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
 //app.model(require('./models/example').default);
///app.model(require('./models/products').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
