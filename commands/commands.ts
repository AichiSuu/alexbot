import wisdom from "./wisdom/wisdom";
import raidToday from "./raidToday/raidToday";
import whenEndwalker from "./whenEndwalker/whenEndwalker";
import potatReact from "./potatReact/potatReact";
import fuckYeah from "./fuckYeah/fuckYeah";
import { Message } from "../models/message";

export const commands: ((message: Message) => void)[] = [
  potatReact,
  wisdom,
  raidToday,
  whenEndwalker,
  fuckYeah
];
