import * as yup from "yup";
export const searchSchema = yup.object({
  searchItemName: yup.string(),
});
