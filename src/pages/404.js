import * as React from 'react'
import Layout from '../components/layout'
import {
  pnfContainer,
} from "../css/404.module.css"

const NotFoundPage = () => {
  return (
    <Layout pageTitle="Page not Found">
      <div className={pnfContainer}>
        <h2>Nothing here</h2>
      </div>
    </Layout>
  )
}


export default NotFoundPage
