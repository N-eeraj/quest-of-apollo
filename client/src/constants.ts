import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import HikingRoundedIcon from "@mui/icons-material/HikingRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import {
  Status,
  type StatusDisplay,
} from "@/types";

export const navItems = [
  {
    link: "/heroes",
    title: "Heroes",
    text: "Discover legendary warriors, their origins, deeds, and destinies across Greek myth.",
    styles: {
      background: "#4B2E83",
      accent: "#D4AF37",
      foreground: "#F2E9D8",
    },
  },
  {
    link: "/quests",
    title: "Quests",
    text: "Explore famous journeys, trials, and adventures that shaped the ancient world.",
    styles: {
      background: "#2D3A67",
      accent: "#A78BFA",
      foreground: "#E8DAFF",
    },
  },
  {
    link: "/gods",
    title: "Gods",
    text: "Learn about the Olympians, their powers, domains, rivalries, and divine myths.",
    styles: {
      background: "#6A3FBF",
      accent: "#FFD700",
      foreground: "#FFF4D6",
    },
  },
  {
    link: "/relations",
    title: "Relations",
    text: "Trace the complex family ties, alliances, and conflicts connecting gods and mortals.",
    styles: {
      background: "#7B4A74",
      accent: "#CBA6F7",
      foreground: "#F8ECFF",
    },
  },
];

export type NavItem = typeof navItems[number]

export const STATUS_DISPLAY_MAP: ReadonlyMap<Status, StatusDisplay> = new Map([
  [
    Status.COMPLETED,
    {
      text: "Completed",
      Icon: CheckCircleRoundedIcon,
      color: "#3a3",
    } as const,
  ],
  [
    Status.IN_PROGRESS,
    {
      text: "In Progress",
      Icon: HikingRoundedIcon,
      color: "#39f",
    } as const,
  ],
  [
    Status.PLANNED,
    {
      text: "Planned",
      Icon: AssignmentRoundedIcon,
      color: "#e83",
    } as const,
  ],
] as const);
