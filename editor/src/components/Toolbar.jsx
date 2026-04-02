import { ArrowLeft, Eye } from '../icons';

export function Toolbar({ title, backUrl, viewUrl }) {
  return (
    <div class="nomentor-toolbar">
      <a href={backUrl}>
        <ArrowLeft size={16} />
        Back
      </a>
      <span class="separator" />
      <span class="page-title">{title}</span>
      <span class="spacer" />
      <a href={viewUrl || '#'} target="_blank" class={viewUrl ? '' : 'disabled'} title="View page">
        <Eye size={16} />
      </a>
    </div>
  );
}
