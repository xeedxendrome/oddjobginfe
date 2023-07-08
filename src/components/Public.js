import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Odd Jobs Gin!</span></h1>
            </header>
            <main className="public__main">
                <p>Located in Beautiful Downtown Foo City, Odd Jobs Gin  provides a trained staff ready to meet your problem  needs.</p>
                <address className="public__addr">
                    Odd Jobs Gin<br />
                    Tokyo district<br />
                    Tokyo,Japan<br />
                    <a href="tel:+15555555555">(555) 555-5555</a>
                </address>
                <br />
                <p>Owner: Shubhanshu sahu</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public