import React from "react";

import { LuSun } from "react-icons/lu";
import { LuMoon } from "react-icons/lu";

const icons = {
  sun: LuSun,
  moon: LuMoon,
};

export type IconKey = keyof typeof icons;

export interface IconProps extends React.SVGAttributes<SVGAElement> {
  name: IconKey;
}

const Icon = ({ name, ...props }: IconProps) => {
  const IconComp = icons[name];
  return <IconComp {...props} />;
};

Icon.displayName = "Icon";

export default Icon;
