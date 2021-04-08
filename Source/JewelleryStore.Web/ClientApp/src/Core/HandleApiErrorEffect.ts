import { toast } from "react-toastify";
import { put } from "redux-saga/effects";
import { CommonActions } from "../Common/State/CommonActions";

export function handleApiError<T>(f: (action: T) => void) {
  return function* (a: T) {
    yield put(CommonActions.showLoadingSpinner());

    try {
      yield f(a);
    } catch (error) {
      handleError(error);
    } finally {
      yield put(CommonActions.hideLoadingSpinner());
    }
  };
}

function handleError(error: any) {
  console.error(error);
  if (error.response && error.response.status === 401) {
    toast.error("Unauthorized", { pauseOnHover: true });
  } else {
    let errorMessage = "Unable to perform operation";
    if (error.errorMessage) {
      errorMessage = Array.isArray(error.errorMessage)
        ? error.errorMessage[0]
        : error.errorMessage;
      if (error.errorDetails && error.errorDetails.length > 0) {
        errorMessage += `\n ${error.errorDetails.map(
          (err: { fieldMessage: any }) => `\n- ${err.fieldMessage}`
        )}`;
      }
    }
    toast.error(errorMessage, { pauseOnHover: true });
  }
}
