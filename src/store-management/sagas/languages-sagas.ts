import { put, takeLatest } from "redux-saga/effects";
import { ActionTypes } from "../actions/constants/action-types";
import { getLanguagesFailure, getLanguagesSuccess } from "../actions/languages/languages-actions";

function* getLanguagesSaga(action: GetLanguagesAction) {
    try{
        const result = "";

        if(result){

            const payload: Language[] = [];
            yield put(getLanguagesSuccess({ payload: payload } as GetLanguagesSuccessPayload));
        }
    }
    catch(e){
        const messages: string[] = [];
        messages.push(e as string);
        yield put(getLanguagesFailure({errors: messages } as GetLanguagesFailurePayload));
    }
}

//Getlanguages watcher
export function* watchGetLanguagesSaga(){

    yield takeLatest(ActionTypes.GET_LANGUAGES_REQUEST, getLanguagesSaga);
}