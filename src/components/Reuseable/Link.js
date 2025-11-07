import NextLink from "next/link";

/**
 * @param {{children?:React.ReactNode}&React.HTMLAttributes<HTMLAnchorElement>&import("next/link").LinkProps} props
 */

const Link = ({
  children,
  href,
  replace,
  scroll,
  shallow,
  prefetch,
  locale,
  as,
  ...props
}) => {
  const linkProps = {
    href,
    replace,
    scroll,
    shallow,
    prefetch,
    locale,
    as,
  };
  return (
    <NextLink {...linkProps} {...props}>
      {children}
    </NextLink>
  );
};

export default Link;
