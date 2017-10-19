// ts 多的 props state
// redux state
import { combineReducers } from 'redux';
import { MemberEntity, MemberErrors } from '../model';
import { membersReducer } from './members';
import { memberReducer } from './member';
import { memberErrorsReducer } from './memberErrors';

export interface State {
    members: MemberEntity[];
    member: MemberEntity;
    memberErrors: MemberErrors;
}
// State 需要state 唯一状态树 reducers
export const state =  combineReducers<State>({
    members: membersReducer,
    member: memberReducer,
    memberErrors: memberErrorsReducer
})