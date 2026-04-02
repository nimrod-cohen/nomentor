/** Lucide icon components — stroke-based, consistent 24x24 viewBox */

const I = (props, paths) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 20} height={props.size || 20}
    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round" {...props}>
    {paths}
  </svg>
);

export const ArrowLeft = (p) => I(p, <><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></>);
export const Eye = (p) => I(p, <><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></>);
export const Grid = (p) => I(p, <><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/></>);
export const Heading = (p) => I(p, <><path d="M6 12h12"/><path d="M6 20V4"/><path d="M18 20V4"/></>);
export const AlignLeft = (p) => I(p, <><path d="M17 6.1H3"/><path d="M21 12.1H3"/><path d="M15.1 18H3"/></>);
export const Image = (p) => I(p, <><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></>);
export const Trash = (p) => I(p, <><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></>);
export const GripVertical = (p) => I(p, <><circle cx="9" cy="12" r="1"/><circle cx="9" cy="5" r="1"/><circle cx="9" cy="19" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="5" r="1"/><circle cx="15" cy="19" r="1"/></>);
