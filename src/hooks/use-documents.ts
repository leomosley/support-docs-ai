import useFetch from "./use-fetch";

type Response = {
  data: Array<any>;
  loading: boolean;
  error: any;
  lazyFetch?: () => void;
};

export default function useDocuments(): Response {
  const { data, loading, error } = useFetch<any>({
    url: "/api/document",
  });

  return {
    data,
    loading,
    error,
  };
}