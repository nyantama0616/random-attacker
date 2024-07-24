type ContentViewerProps = {
  content: string | null;
  className?: string;
};

export const ContentViewer = ({ content, className }: ContentViewerProps) => {
  return (
    <div className={className}>
      <h1 className="text-[100px]">{content}</h1>
    </div>
  );
};
