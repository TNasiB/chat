import { apiClient } from "app/api";

export const authApi = apiClient.injectEndpoints({
  endpoints: (builder) => ({
    auth: builder.query<any, any>({
      query: () => "sign-in",
    }),
  }),
  overrideExisting: false,
});

export const { useAuthQuery } = authApi;
