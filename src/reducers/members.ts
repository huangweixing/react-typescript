import { MemberEntity } from '../model';
import { actionTypes } from '../common/constants/actionTypes';
// members 只有一个 整个程序Store state
// state State 传过来的 return 新的state
export const membersReducer = (state: MemberEntity[] = [], action) => {
    switch(action.type) {
        case actionTypes.FETCH_MEMBERS_COMPLETED:
        return handleFetchMembersCompleted(state, action.payload);
    }
    return state;
} 
const handleFetchMembersCompleted = (state: MemberEntity[],
payload: MemberEntity[]) => {
    return payload;
}