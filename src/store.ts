// Store 负责Store 实例 => react-redux connect
// createStore 生成一个store 参数
import { Store, createStore, compose, applyMiddleware } from 'redux'; 
import reduxThunk from 'redux-thunk';
import { state, State } from './reducers';

export const store: Store<State> = createStore(
    state,
    // redux 中间件 koa 一样
    // applyMiddleware app.use()
    compose(
        applyMiddleware(reduxThunk)
    )
)