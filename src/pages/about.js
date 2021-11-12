import * as React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import {
    aboutPage,
    text,
    textHeader,
    textParagraph,
    textParagraphLink,
    aboutImg,
} from "../css/about.module.css"

const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">

            <div className={aboutPage}>
                <div className={text}>
                    <h2 className={textHeader}>Hello there!</h2>
                    <p className={textParagraph}>My name is Jacek.</p>
                    <p className={textParagraph}>Throughout my 35 years long life,
                        I invested my attention into many diverse and exciting interests,
                        hobbies, and passions. Currently I stayed with selected few.</p>
                    <p className={textParagraph}>I write blog posts about programming, society, cooking, and movies.
                        If you are also captivated by those topics, be sure to check out my <Link className={textParagraphLink} to="/blog">Blog</Link>.</p>
                    <p className={textParagraph}>I placed there my thoughts on a given topic and encourage You to check them out on your own. Some of them are amazing!</p>
                    <p className={textParagraph}>If you want to know about how I was learning to program, be sure to check out <Link className={textParagraphLink} to="/way">Road</Link>;</p>
                    <p className={textParagraph}> During this time, I've made many applications.
                        Some of them are available on my <a href="https://github.com/Jatzek3" className={textParagraphLink} target="blank">Github</a> and selected
                        few are on <Link className={textParagraphLink} to="/apps">Apps</Link>.</p>
                    <p className={textParagraph}>Don't hesitate to <Link className={textParagraphLink} to="/contact">Contact</Link> me if you want to work together!</p>
                </div>
                <StaticImage className={aboutImg}
                    alt="a person looking at the shadow in a dark room"
                    src="../images/about4.jpg"
                />
            </div>
        </Layout >
    )
}
export default AboutPage