import { FC } from "react";
import { useLocation } from "react-router-dom";

import { PAGES, type PageMeta } from "../content/pages";
import { breadcrumbSchema, useSeo } from "../hooks/useSeo";

const BY_PATH = Object.fromEntries(Object.values(PAGES).map((p) => [p.path, p]));

const Meta: FC<{ page: PageMeta }> = ({ page }) => {
  useSeo({
    title: page.title,
    description: page.description,
    path: page.path,
    // The home page is the breadcrumb root, so it has no trail of its own.
    jsonLd: page.path === "/" ? [] : [breadcrumbSchema([{ name: page.title, path: page.path }])],
  });
  return null;
};

/**
 * Applies head metadata to the fixed marketing routes.
 *
 * Rendered once in App rather than added to each view, because eight views
 * each calling `useSeo` with their own strings is eight places for a page
 * description to go stale. The content routes — /resources, the guides and
 * /prompts — set their own, since theirs is derived from the guide data, so
 * this renders nothing on those paths.
 */
export const PageSeo: FC = () => {
  const page = BY_PATH[useLocation().pathname];
  return page ? <Meta page={page} /> : null;
};

export default PageSeo;
