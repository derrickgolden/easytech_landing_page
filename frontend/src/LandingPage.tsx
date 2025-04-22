import LinkCards from "./components/LandingPage/LinkCards"

const LandingPage = () =>{
    return(
        <div>
            <div className="caveat-brush-regular my-2 my-md-5">
                <h1 className="bunner">We Just Made Your Business&nbsp;
                    <span className="bg-warning-subtle rounded-pill"> Easy.</span>
                </h1>
                <h2>With</h2>
                <h1 >
                    <span className="ragged-bg px-2">EasyTech</span>
                </h1>

            </div>

            <div className="d-flex flex-column gap-4 bg-white p-4">
                <LinkCards />
            </div>

        </div>
    )
}

export default LandingPage