import { SVGProps } from "react";

const Checked = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={8} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M9.77.232A.712.712 0 0 0 9.54.06a.656.656 0 0 0-.548 0 .712.712 0 0 0-.231.172L3.459 6.07 1.232 3.613a.723.723 0 0 0-.238-.17.669.669 0 0 0-.557.011.73.73 0 0 0-.233.178.813.813 0 0 0-.153.263.871.871 0 0 0 .01.612.806.806 0 0 0 .16.256l2.733 3.005a.712.712 0 0 0 .232.172.656.656 0 0 0 .547 0 .712.712 0 0 0 .232-.172L9.77 1.382a.786.786 0 0 0 .17-.261.85.85 0 0 0 0-.628.786.786 0 0 0-.17-.261Z"
      fill="#41D37E"
    />
    <path
      d="M15.77.232a.711.711 0 0 0-.23-.172.656.656 0 0 0-.548 0 .713.713 0 0 0-.232.172L9.46 6.07 7.231 3.613a.723.723 0 0 0-.238-.17.669.669 0 0 0-.557.011.73.73 0 0 0-.233.178.813.813 0 0 0-.153.263.871.871 0 0 0 .01.612.806.806 0 0 0 .16.256l2.733 3.005a.712.712 0 0 0 .232.172.656.656 0 0 0 .547 0 .712.712 0 0 0 .232-.172l5.806-6.386a.784.784 0 0 0 .17-.261.85.85 0 0 0 0-.628.784.784 0 0 0-.17-.261Z"
      fill="#41D37E"
    />
  </svg>
);

export default Checked;