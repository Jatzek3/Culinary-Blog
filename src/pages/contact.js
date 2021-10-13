import * as React from 'react'
import Layout from '../components/layout'
import {
    contact,
    contactHeader,
    contactParagraph,
} from "../css/contact.module.css"

const ContactPage = () => {
    return (
        <Layout pageTitle="Contact Page">
            <div className={contact}>
                <h2 className={contactHeader}>This is contact page</h2>
                <p className={contactParagraph}>@ jokerchocolate@gmail.com</p>
                <p className={contactParagraph}>Github: https://github.com/Jatzek3</p>
                <p className={contactParagraph}>Jacek Kawalec</p>
            </div>

        </Layout>
    )
}

export default ContactPage