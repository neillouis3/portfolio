import React from "react";
import * as Icons from "./programmingIcons";

type TechIcon = React.FC<{ size?: number; fill?: string }>;

export const TECH_ICON_MAP: Record<string, TechIcon> = {
  Typescript: Icons.TypeScript,
  TypeScript: Icons.TypeScript,
  "Next.js": Icons.NextJS,
  "React.js": Icons.ReactJS,
  React: Icons.ReactJS,
  "React Native": Icons.ReactNative,
  "Tailwind CSS": Icons.TailwindCSS,
  MongoDB: Icons.MongoDB,
  Mongoose: Icons.Mongoose,
  Python: Icons.Python,
  MySQL: Icons.MySQL,
  Firebase: Icons.Firebase,
  Java: Icons.Java,
  PHP: Icons.Php,
  Laravel: Icons.Laravel,
  "C++": Icons.Cplusplus,
  "C#": Icons.Csharp,
  Clerk: Icons.Clerk,
  Supabase: Icons.Supabase,
  Auth0: Icons.Auth0,
  UploadThing: Icons.UploadThing,
  Golang: Icons.Golang,
  Figma: Icons.Figma,
  HeroUI: Icons.HeroUI,
  Recharts: Icons.Recharts,
  "Google Maps": Icons.GoogleMaps,
  Expo: Icons.Expo,
  "Arduino Uno": Icons.Arduino,
  Azure: Icons.Azure,
  Wails: Icons.Wails,
};

export function getTechIcon(name: string): TechIcon | undefined {
  return TECH_ICON_MAP[name];
}
