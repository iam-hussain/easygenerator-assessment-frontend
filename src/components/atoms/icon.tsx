import React from "react";

import { LuSun } from "react-icons/lu";
import { LuMoon } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { BiSolidRename } from "react-icons/bi";

const icons = {
  sun: LuSun,
  moon: LuMoon,
  email: MdEmail,
  password: RiLockPasswordFill,
  name: BiSolidRename,
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
