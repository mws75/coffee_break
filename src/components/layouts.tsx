import { PropsWithChildren, useEffect } from "react";

export const PageLayout = (props: PropsWithChildren) => {
  useEffect(() => {
    document.title = "Coffee Break";
  }, []);

  return (
    <main className="flex h-screen justify-center overflow-y-scroll">
      <div className="lg:max-w-45xl h-full w-full">{props.children}</div>
    </main>
  );
};
