import { ContentViewer } from './components/ContentViewer/ContentViewer';
import { useRandomContent } from './hooks/useRandomContent';

function App() {
  const content = useRandomContent();

  return (
    <div className="w-24 m-auto flex justify-center">
      <ContentViewer content={content} />
    </div>
  );
}

export default App;
