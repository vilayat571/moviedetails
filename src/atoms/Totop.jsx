import ScrollToTop from "react-scroll-to-top";

function Totop() {
    return (
        <div style={{ borderRadius: "100%" }}>
            <ScrollToTop style={{
                borderRadius: "100%",
                width: "35px", height: "35px",
                color: "black",
                background: "black"
            }} smooth />
        </div>
    );
}
export default Totop
