import { render } from 'preact';
import { App } from './App';

try {
  const root = document.getElementById('nomentor-root');
  if (!root) {
    document.body.innerHTML = '<pre style="color:red;padding:20px">Error: #nomentor-root not found</pre>';
  } else {
    render(<App />, root);
  }
} catch (e) {
  document.body.innerHTML = '<pre style="color:red;padding:20px">Render error: ' + e.message + '\n' + e.stack + '</pre>';
  console.error('Nomentor render error:', e);
}
