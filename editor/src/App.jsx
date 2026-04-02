import { Toolbar } from './components/Toolbar';
import { Toolbox } from './components/Toolbox';
import { Canvas } from './components/Canvas';
import { Navigator } from './components/Navigator';

export function App() {
  const { title, backUrl, viewUrl } = window.nomentor;

  return (
    <>
      <Toolbar title={title} backUrl={backUrl} viewUrl={viewUrl} />
      <div class="nomentor-editor">
        <Toolbox />
        <Canvas />
        <Navigator />
      </div>
    </>
  );
}
