import { toast } from "react-toastify";

export function handleApiError<T>(f: (action: T) => void) {
  return function* (a: T) {
    try {
      yield f(a);
    } catch (error) {
      handleError(error);
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
