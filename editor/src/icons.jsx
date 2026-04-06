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
export const List = (p) => I(p, <><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></>);
export const ClipboardList = (p) => I(p, <><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></>);
export const Timer = (p) => I(p, <><line x1="10" x2="14" y1="2" y2="2"/><line x1="12" x2="15" y1="14" y2="11"/><circle cx="12" cy="14" r="8"/></>);
export const MousePointerClick = (p) => I(p, <><rect width="18" height="10" x="3" y="7" rx="5"/><path d="M7 12h10"/></>);
export const Trash = (p) => I(p, <><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></>);
export const GripVertical = (p) => I(p, <><circle cx="9" cy="12" r="1"/><circle cx="9" cy="5" r="1"/><circle cx="9" cy="19" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="5" r="1"/><circle cx="15" cy="19" r="1"/></>);
export const UnfoldVertical = (p) => I(p, <><path d="M12 22v-6"/><path d="M12 8V2"/><path d="M4 12h16"/><path d="m15 19-3 3-3-3"/><path d="m15 5-3-3-3 3"/></>);
