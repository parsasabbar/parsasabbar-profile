import React, { useState } from "react";
import PageLoading from "../page-loading/PageLoading";
import contactPageTitleImage from "../../../assets/images/backgrounds/undraw_contact_us_15o2.svg";
import aboutMePageTitleImage from "../../../assets/images/backgrounds/undraw_Profile_re_4a55.svg";
import workExperiencesPageTitleImage from "../../../assets/images/backgrounds/undraw_Project_completed_re_pqqq.svg";

function PreloadImages(props: { children: any }) {
  let Preload = require("react-preload").Preload;

  const [loading, setLoading] = useState(true);
  return (
    <Preload
      // loadingIndicator={loadingIndicator}
      images={[
        contactPageTitleImage,
        aboutMePageTitleImage,
        workExperiencesPageTitleImage,
      ]}
      autoResolveDelay={3000}
      // onError={this._handleImageLoadError}
      onSuccess={() => setLoading(false)}
      resolveOnError={true}
      mountChildren={true}
    >
      {loading ? <PageLoading /> : props.children}{" "}
    </Preload>
  );
}

export default PreloadImages;
