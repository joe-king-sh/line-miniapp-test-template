import { Helmet } from "react-helmet-async";
import { buildAppTitle } from "@/utils/string";

// export type TopPageViewProps = ;

export const TopPageView = (): JSX.Element => {
  return (
    <>
      <Helmet>
        <title>{buildAppTitle("LINE ミニアプリの検証")}</title>
      </Helmet>

      <div className="px-5">LINE ミニアプリの検証用サイト</div>
    </>
  );
};

export const TopPage = (): JSX.Element => {
  return <TopPageView />;
};
