import { actionTypes } from '../../../common/constants/actionTypes';
import * as toastr from 'toastr';
import { FormValidationResult } from 'lc-form-validation';
import { hashHistory } from 'react-router';
import { memberFormValidation } from '../memberFormValidation';
import { memberAPI } from '../../../api/member';
import { MemberEntity } from '../../../model';
export const saveMemberAction = (member: MemberEntity) => (dispatch) => {
   memberFormValidation.validateForm(member)
   .then((formValidationResult) => {
        if (formValidationResult.succeeded) {
            saveMember(member);
        }
        // 成功与失败 state的一部分
        dispatch(saveMemberActionCompleted(formValidationResult))
   })
}
// action 包含了很多业务逻辑
const saveMember = (member: MemberEntity) => {
    memberAPI.saveMember(member)
    .then(() => {
        toastr.success('Member saved.');
        hashHistory.goBack();
    })
    .catch(toastr.error);
};

const saveMemberActionCompleted = (formValidationResult: FormValidationResult) => ({
    type: actionTypes.SAVE_MEMBER,
    payload: formValidationResult
})