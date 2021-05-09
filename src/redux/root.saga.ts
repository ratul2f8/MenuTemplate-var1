import { call, all} from "redux-saga/effects";
export function* printSomething(){
    yield console.log("saga activated");
}
export default function* rootSaga(){
    yield all([call(printSomething)])
}