import { PagesEffects } from "../Pages/PageEffects";
import { all } from "redux-saga/effects";

export default function* rootEffects() {
    yield all([ PagesEffects()]);
}
