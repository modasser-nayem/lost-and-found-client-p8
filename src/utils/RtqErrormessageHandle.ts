import { toast } from "sonner";
import { isReduxRTQError } from "../redux/api/baseApi";

const RtqErrorMessageHandle = (error: any, toastId?: any) => {
   if (isReduxRTQError(error)) {
      toast.error(error.data.message);
   } else {
      toastId = toast.error("Something went wrong, try again.");
   }

   return toastId;
};

export default RtqErrorMessageHandle;
