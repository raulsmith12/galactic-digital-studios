
const InsidePageHeader = ({ title }) => {
    return (
        <div className="col mb-1 p-5 bg-animation bg-dark text-white">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <div id="stars4"></div>
            <h1 className="home-title display-1 text-shadow-1">{title}</h1>
        </div>
    )
}

export default InsidePageHeader;