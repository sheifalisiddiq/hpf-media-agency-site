import React from "react";
import type { ReactElement, SVGProps } from "react";

type IconName =
  | "architecture"
  | "movie_filter"
  | "diamond"
  | "dynamic_feed"
  | "trending_flat"
  | "workspace_premium"
  | "language"
  | "search"
  | "insights"
  | "description"
  | "videocam"
  | "send"
  | "pinch"
  | "bolt"
  | "auto_awesome"
  | "check_circle"
  | "location_on"
  | "mail"
  | "expand_more"
  | "check"
  | "volume_off"
  | "volume_up"
  | "instagram"
  | "verified"
  | "whatsapp";




type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
};

const iconMap: Record<IconName, ReactElement> = {
  architecture: (
    <path
      d="M4 19h16M7 19V9m10 10V9M9 9V5h6v4M5 9h14M8 13h2m4 0h2"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  ),
  movie_filter: (
    <path
      d="M4 7.5 12 4l8 3.5v9L12 20l-8-3.5v-9ZM8.5 9.5l3.5-1.5 3.5 1.5-3.5 1.5-3.5-1.5Zm0 5 3.5-1.5 3.5 1.5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  ),
  diamond: (
    <path
      d="m12 4 6 4-6 12L6 8l6-4Zm0 0v4m0 0 6 0M12 8H6"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  ),
  dynamic_feed: (
    <path
      d="M5 7h8M5 12h14M5 17h10M17 6l2 2-2 2M17 14l2 2-2 2"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  ),
  trending_flat: (
    <path
      d="M4 12h12m0 0-3-3m3 3-3 3m3-3h4"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  ),
  workspace_premium: (
    <path
      d="m12 4 2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 16.7 7.2 19l.9-5.4L4.2 9.7l5.4-.8L12 4Z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  ),
  language: (
    <path
      d="M4 8h10M9 4c0 6-2 12-5 16m10-16c0 6 2 12 5 16M14 16h6m-3-3v6"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  ),
  search: (
    <path
      d="m10.5 17 5 5M16.5 10.5a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  ),
  insights: (
    <path
      d="M5 18V9m7 9V5m7 13v-7"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  ),
  description: (
    <path
      d="M7 4h7l5 5v11H7zM14 4v5h5M10 13h6M10 17h6"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  ),
  videocam: (
    <path
      d="M4 8h10v8H4zM14 11l6-3v8l-6-3"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  ),
  send: (
    <path
      d="M4 12 20 5l-4 14-4.5-5-7.5-2Z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  ),
  pinch: (
    <path
      d="M8 9V5m8 14v-4M5 12h4m6 0h4M8 15l4-3 4 3"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  ),
  bolt: (
    <path
      d="M13 3 6 13h5l-1 8 7-10h-5l1-8Z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  ),
  auto_awesome: (
    <path
      d="m12 4 1.5 3.5L17 9l-3.5 1.5L12 14l-1.5-3.5L7 9l3.5-1.5L12 4Zm6 9 1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2ZM6 15l.8 1.7L8.5 18l-1.7.8L6 20.5l-.8-1.7L3.5 18l1.7-.8L6 15Z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  ),
  check_circle: (
    <path
      d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-12 0 2 2 4-4"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  ),
  location_on: (
    <path
      d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  ),
  mail: (
    <path
      d="M4 7h16v10H4zM4 8l8 6 8-6"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  ),
  expand_more: (
    <path
      d="m6 9 6 6 6-6"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  ),
  check: (
    <path
      d="m5 12 5 5 9-9"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  ),
  volume_up: (
    <path
      d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"
      fill="currentColor"
    />
  ),
  volume_off: (
    <path
      d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"
      fill="currentColor"
    />
  ),
  instagram: (
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37a4 4 0 1 1-7.63-1.63 4 4 0 0 1 7.63 1.63z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </g>
  ),
  whatsapp: (
    <path
      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.394 0 12.03a11.81 11.81 0 001.592 5.954L0 24l6.122-1.605a11.82 11.82 0 005.925 1.581h.005c6.635 0 12.033-5.396 12.036-12.032a11.82 11.82 0 00-3.551-8.528"
      fill="currentColor"
    />
  ),
  verified: (
    <path
      d="M23 12l-2.4-2.7 0.3-3.7-3.6-0.8-1.9-3.3L12 3 9.1 1.5 7.1 4.8l-3.6 0.8 0.3 3.7L1.5 12l2.4 2.7-0.3 3.7 3.6 0.8 1.9 3.3 2.9-1.5 2.9 1.5 1.9-3.3 3.6-0.8-0.3-3.7L23 12z M10 17l-4-4 1.4-1.4 2.6 2.6 6.6-6.6 1.4 1.4-8 8z"
      fill="currentColor"
    />
  ),

};



const Icon = React.memo(function Icon({ name, className, ...props }: IconProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      {...props}
    >
      {iconMap[name]}
    </svg>
  );
});

export default Icon;
