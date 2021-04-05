import { PagesEffects } from "../Pages/PageEffects";
import { CommonEffects } from "../Common/State/CommonEffects";
import { all } from "redux-saga/effects";

export default function* rootEffects() {
    yield all([ PagesEffects(), CommonEffects()]);
}
