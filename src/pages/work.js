import React from "react";
import Seo from "../components/Seo";
import Layout from "../components/global/Layout";
import Portfolio from "../components/work/Portfolio";
import "../styles/styles.scss";

const WorkPage = () => (
    <Layout>
        <Seo title="Work" />
        <Portfolio />
    </Layout>
);

export default WorkPage;