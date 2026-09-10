import type { ComponentType } from "react";
import LeadingRetrospective from "./LeadingRetrospective";

const blogPosts: Record<string, ComponentType> = {
  "leading-retrospective": LeadingRetrospective,
};

export default blogPosts;
