import { withTranslation } from "next-i18next";
import type { TFunction } from "i18next";

function Box({ t }: { t: TFunction<string> }) {
  return <div>{t("title")}</div>;
}

export default withTranslation("box")(Box);
