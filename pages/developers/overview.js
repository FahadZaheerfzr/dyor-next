import BaseLayout from "@/components/BaseLayout/BaseLayout";
import Overview from "@/components/Developer/Overview/Overview";
import React, { useEffect, useState } from "react";

const OverviewPage = () => {
  const [data, setData] = useState();
  const [topVoted, setTopVoted] = useState();


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/fetch_developers");
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);


  return (
    <BaseLayout title={"Overview"}>
      <Overview />
    </BaseLayout>
  );
};

export default OverviewPage;
