// actions 放置在组件文件夹
// 有利于分组开发,大型项目开发
//文件夹优秀是分组协作
import { MemberEntity } from '../../../model';
import { actionTypes } from '../../../common/constants/actionTypes';
import { memberAPI } from '../../../api/member';
// const fetchMembersCompleted = (members: MemberEntity[]) => {
//     type: actionTypes.FETCH_MEMBERS_COMPLETED,
//     payload: members
// }
// action dispatch
// redux action dispatch 修改的请求 不能修改state的,
// 只有dispatch mutation reducer 不可修改的纯函数
// action 数据处理 ajax => router
export const fetchMembersAction = () => (dispatch) => {
    memberAPI.fetchMembers().then(members => {
        dispatch(fetchMemberCompleted(members))
    })
}
const fetchMemberCompleted = (members: MemberEntity[]) => ({
    type: actionTypes.FETCH_MEMBERS_COMPLETED,
    payload: members
});