import type { ComponentType } from "react";
import LeadingRetrospective from "./LeadingRetrospective";

export interface BlogPost {
  slug: string;
  cardTitle: string;
  title: string;
  publishedAt: string;
  image: string;
  description: string;
  href: string;
  Component: ComponentType;
}

export const blogs: BlogPost[] = [
  {
    slug: "leading-retrospective",
    cardTitle: "Leading my first retrospective",
    title: "Leading My First Retrospective",
    publishedAt: "2025-04-02",
    image: "./assets/thumbnails/blogs/sailboatRetro.png",
    description:
      "Leading my first retro was definitely a bit nerve-wracking, but I managed to run it solo and got some great feedback! The team found it useful, especially since previous retros weren’t very productive. I focused on setting SMART actions and found topics to focus on next time. Overall, it went well, and I’ll be running these monthly now!",
    href: "/Portfolio/blogs/leading-retrospective",
    Component: LeadingRetrospective,
  },
];

export const blogsBySlug: Record<string, BlogPost> = Object.fromEntries(
  blogs.map((post) => [post.slug, post]),
);
