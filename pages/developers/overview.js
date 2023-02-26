import BaseLayout from "@/components/BaseLayout/BaseLayout";
import Overview from "@/components/Developer/Overview/Overview";
import React, { useEffect, useState } from "react";

const OverviewPage = () => {
  const [data, setData] = useState();
  const [topVoted, setTopVoted] = useState();


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/fetch_developers");
      const res_data = await response.json();
      let tags = ["BSC"]
      for (let i = 0; i < res_data.length; i++) {
        res_data[i].tags = tags;
      }
      console.log(res_data)
      let topVoted = res_data.sort((a, b) => b.votes - a.votes).slice(0, 5);
      setData(res_data);
      setTopVoted(topVoted);
    };

    fetchData();
  }, []);


  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <BaseLayout title={"Overview"}>
      <Overview data={data} topVoted={topVoted} />
    </BaseLayout>
  );
};

export default OverviewPage;
