import Banner from "../components/banner"
import Footer from "../components/footer"
import Header from "../components/header"

function HomePage() {
    return(
        <>
            <Header />
            <main>
                <Banner imgBanner="../src/assets/img/banners/e270fc8fc902a1eb738458e7b29c1899.jpg" textBanner="Chez vous, partout et ailleurs" />
            </main>
            <div>Hello</div>
            <div>Home test</div>
            <Footer />
        </>
    )
}

export default HomePage