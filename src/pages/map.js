import * as React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const MapPage = () => {
    return (
        <Layout pageTitle="Map of the blog posts">
            <h2>Cooking</h2>
            <h3>Spaghetti</h3>
            <p><Link to={`/blog/spaghetti-bolognese/`}>Spaghetti Bolognese</Link></p>
            <p><Link to={`/blog/spaghetti-carbonara/`}>Spaghetti Carbonara</Link></p>
            <p><Link to={`/blog/pepper-tomato-spaghetti/`}>Bell pepper and tomato spaghetti</Link></p>
            <h3>Other</h3>
            <p><Link to={`/blog/peasants-cauldron/`}>Peasants Caouldron</Link></p>
            <h2>Movies</h2>
            <p><Link to={`/blog/blade-runner/`}>Blade runner part 1</Link></p>
            <p><Link to={`/blog/blade-runner-2/`}>Blade runner part 2</Link></p>
            <p><Link to={`/blog/blade-runner-3/`}>Blade runner part 3</Link></p>
            <p><Link to={`/blog/loving-vincent/`}>Loving Vincent</Link></p>
            <p><Link to={`/blog/cable-guy/`}>Cable Guy</Link></p>
            <p><Link to={`/blog/tulip-fever/`}>Tulip Fever</Link></p>
            <h2>Programmming</h2>
            <p><Link to={`/blog/graphql/`}>GraphQL</Link></p>
            <p><Link to={`/blog/gatsby/`}>Gatsby</Link></p>
            <h3>Progressive Web Apps</h3>
            <p><Link to={`/blog/json-web-token/`}>JSON web tokens</Link></p>
            <p><Link to={`/blog/cookie-files/`}>Cookie files</Link></p>
            <h2>Society</h2>
            <p><Link to={`/blog/tataria/`}>Grand Tartaria</Link></p>
            <p><Link to={`/blog/theranos/`}>Theranos</Link></p>
        </Layout>
    )
}

export default MapPage