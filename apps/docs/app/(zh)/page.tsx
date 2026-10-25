import { basePath } from '@/lib/shared';

// Static hosting has no server redirects, so send / to the docs with a meta refresh.
export default function Page() {
  const target = `${basePath}/docs/`;
  return (
    <>
      <meta httpEquiv="refresh" content={`0;url=${target}`} />
      <p className="p-8">
        <a href={target}>前往文件 / Go to the documentation</a>
      </p>
    </>
  );
}
