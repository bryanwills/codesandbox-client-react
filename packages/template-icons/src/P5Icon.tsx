import React from 'react';
import { SVGIcon, ISVGIconProps } from './SVGIcon';
import { useUniqueId } from './useUniqueId';

export const P5Icon: React.FC<ISVGIconProps> = ({ ...props }) => {
  const id = useUniqueId();

  return (
    <SVGIcon {...props}>
      <g clipPath={`url(#prefix__${id})`}>
        <path fill="#ED225D" d="M0 0h32v32H0z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 32h32H0zm12.537-9.705a4.827 4.827 0 01-.94 1.606c-.407.456-.9.82-1.48 1.09-.58.27-1.237.406-1.97.406-.68 0-1.303-.138-1.87-.416-.566-.277-1.002-.654-1.309-1.13h-.04v6.027h-2.4V15.604h2.3v1.328h.06c.12-.185.277-.374.47-.565.193-.192.43-.364.71-.516a4.406 4.406 0 012.14-.525c.68 0 1.306.129 1.88.386a4.498 4.498 0 011.48 1.061c.412.45.732.979.959 1.586.226.608.34 1.263.34 1.963 0 .7-.11 1.358-.33 1.973zm10.312.317a4.585 4.585 0 01-1.11 1.556 4.846 4.846 0 01-1.64.972 5.883 5.883 0 01-2 .337c-1.186 0-2.187-.275-3-.823a4.628 4.628 0 01-1.363-1.42l1.737-1.614.027-.01c.2.556.533 1.002 1 1.339.466.337 1.02.506 1.66.506.359 0 .699-.06 1.019-.18.32-.118.6-.29.84-.515.24-.224.43-.505.57-.842.14-.337.21-.717.21-1.14 0-.542-.094-.991-.28-1.348a2.447 2.447 0 00-.73-.863c-.3-.217-.637-.37-1.01-.456a5.06 5.06 0 00-1.14-.128c-.267 0-.55.02-.85.059-.3.04-.593.096-.88.169a11.45 11.45 0 00-.84.247 5.97 5.97 0 00-.729.298l.24-7.673h8.058v2.141H16.86l-.14 3.034c.227-.066.497-.113.81-.14.314-.025.597-.039.85-.039.693 0 1.336.1 1.93.297.593.199 1.11.486 1.55.863.44.377.782.84 1.029 1.388.247.549.37 1.18.37 1.893 0 .78-.137 1.477-.41 2.092zm6.261-7.88l-.878.63-.912-1.197-.89 1.167-.855-.646.866-1.176-1.406-.502.332-1.013 1.41.451V11h1.131v1.448l1.4-.419.331 1.012-1.395.472.866 1.218zM9.747 18.24a2.566 2.566 0 00-.86-.704c-.347-.178-.753-.267-1.22-.267-.44 0-.833.092-1.18.278a3.018 3.018 0 00-1.45 1.705 3.313 3.313 0 000 2.21c.128.364.314.691.561.982.246.29.543.525.89.703.346.18.74.268 1.18.268.466 0 .872-.092 1.219-.277.347-.186.633-.423.86-.714.227-.291.396-.621.51-.992a3.682 3.682 0 000-2.21 3.08 3.08 0 00-.51-.982z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id={`prefix__${id}`}>
          <path d="M0 0h32v32H0V0z" fill="white" />
        </clipPath>
      </defs>
    </SVGIcon>
  );
};