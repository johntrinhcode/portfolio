import clsx from 'clsx';
import _ from 'lodash';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { AiFillHome } from 'react-icons/ai';

export const Breadcrumbs = () => {
  const router = useRouter();
  const crumbs = router.asPath
    .split('/')
    .filter((part) => part)
    .map((part, index, arr) => {
      // Remove anchor tag in route params if there are any.
      const anchorIndex = part.indexOf('#');
      let sanitizedPart = part;
      if (anchorIndex !== -1) {
        sanitizedPart = part.substring(0, part.indexOf('#'));
      }

      // Form
      if (index > 0) return `/${arr[index - 1]}/${sanitizedPart}`;
      return `/${sanitizedPart}`;
    });

  return (
    <div className="h-8 px-6 pt-4 md:px-0 md:pt-0 flex flex-row text-white/70 items-center gap-2 text-xs">
      <Link href="/">
        <AiFillHome className="w-4 h-4" />
      </Link>
      {crumbs.map((crumb, i) => {
        const crumbDisplayName = crumb
          .split('/')
          .pop()
          .split('-')
          .map((term) => _.upperFirst(term))
          .join(' ');

        return (
          <Fragment key={i}>
            <span>/</span>
            <Link
              href={crumb}
              className={clsx(
                i === crumbs.length - 1 && 'text-white font-semibold'
              )}
            >
              {crumbDisplayName}
            </Link>
          </Fragment>
        );
      })}
    </div>
  );
};
