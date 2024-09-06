import useLazyFetch from "./use-lazy-fetch";

type Response = {
  data: Array<any>;
  loading: boolean;
  error: any;
  lazyFetch?: () => void;
};

export function useDeleteDocument({ deleteDocumentName }: { deleteDocumentName: string; }): Response {
  const { lazyFetch, data, loading, error } = useLazyFetch<any>({
    url: `/api/document?deleteDocumentName=${deleteDocumentName}`,
    options: { method: "DELETE" },
  });

  return {
    lazyFetch,
    data,
    loading,
    error,
  };
}
