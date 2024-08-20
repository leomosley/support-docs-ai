import useFetch from "./use-fetch";

type DocumentMetadata = {
  documentTitle: string;
  src: string;
};


type Props = {
  query: string;
  options?: any;
};

export default function useSourceFetch({ query, options }: Props) {
  const { data, loading } = useFetch<{ metadata: Array<DocumentMetadata> }>({
    url: `/api/chat?options=${JSON.stringify(options ?? {})}&query=${query}`,
  });

  return { data, loading };
}
