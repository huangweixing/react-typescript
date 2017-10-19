// react container
// redux state action
// connect 将组件包装一层
// 声明要借什么 state action
// connect  props => page.tsx
import { connect } from 'react-redux'; // 链接store的数据和方法
import { State } from '../../reducers';
// state action 来到component 流程
// map state
import { fetchMembersAction } from './actions/fetchMembers';
import { MembersPage } from './page';
const mapStateToProps =(state: State) => ({
    members: state.members
});

const mapDispatchToprops = (dispatch) => ({
    fetchMembers: () => dispatch(fetchMembersAction())
})
// 被拿走了状态的组件，从redux 里map 状态和action过来，做为props
// connect 连接 组件与redux 里的需要的状态和需要的方法
export const MembersPageContainer = connect(
    mapStateToProps,
    mapDispatchToprops
)(MembersPage);
