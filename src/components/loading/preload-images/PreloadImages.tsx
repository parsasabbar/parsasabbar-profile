import React, { useState } from "react";
import PageLoading from "../page-loading/PageLoading";
import contactPageTitleImage from "../../../assets/images/backgrounds/undraw_contact_us_15o2.svg";
import aboutMePageTitleImage from "../../../assets/images/backgrounds/undraw_Profile_re_4a55.svg";
import workExperiencesPageTitleImage from "../../../assets/images/backgrounds/undraw_Project_completed_re_pqqq.svg";
import parsaImage from "../../../assets/images/parsa-sabbar.png";
import defaultBackgroundImage from "../../../assets/images/backgrounds/james-harrison-vpOeXr5wmR4-unsplash.jpg";
import sajImg from "../../../assets/images/icons/experiences/Saj.png";
import matnaImg from "../../../assets/images/icons/experiences/matna.png";
function PreloadImages(props: { children: any }) {
  let Preload = require("react-preload").Preload;

  const [loading, setLoading] = useState(true);
  return (
    <Preload
      // loadingIndicator={loadingIndicator}
      images={[
        sajImg,
        matnaImg,
        parsaImage,
        defaultBackgroundImage,
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
