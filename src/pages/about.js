import * as React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <p>Hello there!</p>
            <p> My name is Jacek.</p>
            <p> Throughout my 35 years long life,
                I put my attention into many diverse and exciting interests, hobbies, and passions, and
                currently stayed with a selected few.
                <p>   I write blog posts about programming, society, cooking, and movies. If you also are captivated by these topics, be sure to check out my<Link to="/blog"> blog</Link>.</p>
                I place there my reflections, on a given topic, and encourage You to pursue them on your own.
                Some of them are amazing!</p>
            <p>If you want to know about how I was learning to program, be sure to check out <Link to="/way">"Way"</Link>; During this time, I've made many applications.
                Some of them are available on my<a href="https://github.com/Jatzek3" target="blank"> Github</a> and selected a few are on the<Link to="/apps"> Apps</Link>.
                <p>Don't hesitate to <Link to="/contact">contact</Link> me if you want to work together!</p>
            </p>
        </Layout >
    )
}
export default AboutPage