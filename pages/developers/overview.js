import BaseLayout from "@/components/BaseLayout/BaseLayout";
import Overview from "@/components/Developer/Overview/Overview";
import React from "react";

const overview = () => {
  return (
    <BaseLayout title={"Overview"}>
      <Overview />
    </BaseLayout>
  );
};

export default overview;
