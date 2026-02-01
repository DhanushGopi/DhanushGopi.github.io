export default function NavCta(){
    
     const gotoLinkedIn = () => {
        window.open("https://www.linkedin.com/in/dhanushgopi/", "_blank", "noopener,noreferrer");
    };
    return(
        <div onClick={gotoLinkedIn} className="navcta-btn">
            Let's Connect
        </div>
    )
}