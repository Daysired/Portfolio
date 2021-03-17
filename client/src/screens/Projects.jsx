import React from 'react'
import "../styles/Projects.css";
import Heroes from "./Heroes"
import Everywhen from "./Everywhen"
import Habanero from "./Habanero"
import InSequence from "./InSequence"
import Layout from "../components/Layout";

export default function Projects() {
  return (
    <Layout>
    <div>
        <Heroes />
        <Everywhen />
        <Habanero />
        <InSequence />  
      </div>
      </Layout>
  )
}
