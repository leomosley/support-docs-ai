import DocumentCard from "./document-card";

type DocumentMetadata = {
  documentTitle: string;
  src: string;
};


export function DocumentList({ documents }: { documents: DocumentMetadata[] }) {
  return (
    <div className="flex gap-4">
      {documents?.map((documentMeta: DocumentMetadata) => {
        return (
          <DocumentCard
            key={documentMeta.documentTitle}
            documentMeta={documentMeta}
          />
        );
      })}
    </div>
  );
};
