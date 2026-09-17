import type { ComponentType } from "react";
import ArgoRollouts from "./ArgoRollouts";
import ConventionalCommits from "./ConventionalCommits";
import DeveloperAudits from "./DeveloperAudits";
import DiagramsFromCode from "./DiagramsFromCode";
import LeadingRetrospective from "./LeadingRetrospective";
import MakingYourselfReplaceable from "./MakingYourselfReplaceable";
import MentorshipOnboarding from "./MentorshipOnboarding";
import ProgrammingStyleAi from "./ProgrammingStyleAi";
import Renovate from "./Renovate";
import RunningAiLocally from "./RunningAiLocally";
import TrustingPipelines from "./TrustingPipelines";
import UsingCursorLocally from "./UsingCursorLocally";

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
    slug: "using-cursor-locally",
    cardTitle: "Using Cursor close to the code",
    title: "Using Cursor Close to the Code",
    publishedAt: "2026-09-10",
    image: "./assets/thumbnails/blogs/cursor-local.png",
    description:
      "Local tools make an AI editor part of the same build, tests and version control as the rest of the work. The model is still hosted, and the final judgement is still mine.",
    href: "/Portfolio/blogs/using-cursor-locally",
    Component: UsingCursorLocally,
  },
  {
    slug: "running-ai-locally",
    cardTitle: "Running AI on our own servers",
    title: "Running AI on Our Own Servers",
    publishedAt: "2026-08-26",
    image: "./assets/thumbnails/blogs/local-ai.png",
    description:
      "Hosted models are fine for a lot of work. Defence, government, and anyone who cannot send their estate off-site need the boring version: the model lives where the data already lives.",
    href: "/Portfolio/blogs/running-ai-locally",
    Component: RunningAiLocally,
  },
  {
    slug: "diagrams-from-code",
    cardTitle: "Diagrams from the repo",
    title: "Diagrams from the Repo",
    publishedAt: "2025-09-11",
    image: "./assets/thumbnails/blogs/diagrams.png",
    description:
      "A generated diagram is a good blank page and a confident liar about the edges. Diagrams are arguments about what matters, not maps of what exists.",
    href: "/Portfolio/blogs/diagrams-from-code",
    Component: DiagramsFromCode,
  },
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
  {
    slug: "programming-style-ai",
    cardTitle: "Taste still matters",
    title: "Taste Still Matters",
    publishedAt: "2025-01-16",
    image: "./assets/thumbnails/blogs/style-ai.png",
    description:
      "I use AI to write code, then I delete a lot of it. The skill I care about now is whether I would sign the result without the chat history.",
    href: "/Portfolio/blogs/programming-style-ai",
    Component: ProgrammingStyleAi,
  },
  {
    slug: "developer-audits",
    cardTitle: "Audits as a developer",
    title: "Audits as a Developer",
    publishedAt: "2024-10-08",
    image: "./assets/thumbnails/blogs/audits.png",
    description:
      "PCI, FedRAMP, and WCAG sound like paperwork. A lot of it is just proving the thing you already believe, before someone else asks.",
    href: "/Portfolio/blogs/developer-audits",
    Component: DeveloperAudits,
  },
  {
    slug: "renovate",
    cardTitle: "Letting Renovate do the housework",
    title: "Letting Renovate Do the Housework",
    publishedAt: "2024-06-14",
    image: "./assets/thumbnails/blogs/renovate.png",
    description:
      "Dependency updates are housework. Renovate turns the pile into pull requests I can actually read, as long as I still look before anything merges.",
    href: "/Portfolio/blogs/renovate",
    Component: Renovate,
  },
  {
    slug: "argo-rollouts",
    cardTitle: "Rollouts without a hero",
    title: "Rollouts without a Hero",
    publishedAt: "2024-02-27",
    image: "./assets/thumbnails/blogs/argo-rollouts.png",
    description:
      "Arguing about overnight or daylight releases is a symptom. The variable that matters is whether a bad release can be undone without a specific person online.",
    href: "/Portfolio/blogs/argo-rollouts",
    Component: ArgoRollouts,
  },
  {
    slug: "trusting-pipelines",
    cardTitle: "Trusting a green pipeline",
    title: "Trusting a Green Pipeline",
    publishedAt: "2023-11-02",
    image: "./assets/thumbnails/blogs/pipelines.png",
    description:
      "A green build is easy to believe and easy to regret. I would rather a pipeline that fails loudly than one that is fast and mysterious.",
    href: "/Portfolio/blogs/trusting-pipelines",
    Component: TrustingPipelines,
  },
  {
    slug: "making-yourself-replaceable",
    cardTitle: "Make yourself replaceable",
    title: "Make Yourself Replaceable",
    publishedAt: "2023-07-21",
    image: "./assets/thumbnails/blogs/replaceable.png",
    description:
      "Automating the routine work is how you stay useful on the awkward problems. The catch nobody mentions is that work which stops happening is invisible.",
    href: "/Portfolio/blogs/making-yourself-replaceable",
    Component: MakingYourselfReplaceable,
  },
  {
    slug: "mentorship-onboarding",
    cardTitle: "Onboarding is secret doorways",
    title: "Onboarding Is Secret Doorways",
    publishedAt: "2023-03-09",
    image: "./assets/thumbnails/blogs/mentorship.png",
    description:
      "A first week is mostly finding the doors nobody wrote down. Mentoring later is the same job with more listening.",
    href: "/Portfolio/blogs/mentorship-onboarding",
    Component: MentorshipOnboarding,
  },
  {
    slug: "conventional-commits",
    cardTitle: "Commit messages for later you",
    title: "Commit Messages for Later You",
    publishedAt: "2022-11-18",
    image: "./assets/thumbnails/blogs/conventional-commits.png",
    description:
      "A diff says what changed, so the message is the only place the reason survives. A format guarantees shape, though, not content.",
    href: "/Portfolio/blogs/conventional-commits",
    Component: ConventionalCommits,
  },
];

export const blogsBySlug: Record<string, BlogPost> = Object.fromEntries(
  blogs.map((post) => [post.slug, post]),
);
