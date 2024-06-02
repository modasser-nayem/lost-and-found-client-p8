export type TInputType =
   | "text"
   | "number"
   | "password"
   | "email"
   | "tel"
   | "url"
   | "file"
   | "search"
   | "date"
   | "time"
   | "datetime-local"
   | "month"
   | "week"
   | "color";

export type TPagination = {
   page?: number;
   limit?: number;
   sortBy?: string;
   sortOrder?: "asc" | "desc";
};
