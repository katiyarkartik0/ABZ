import "./Zeela.css"

export const ZeelaOnBoard = () => {
    return (
        <>
            <img className="zeelaImg" src={require(__dirname + "/Assets/slide1.jpg")}  ></img>
            <img className="zeelaImg" src={require(__dirname + "/Assets/slide2.jpg")}  ></img>
            <img className="zeelaImg" src={require(__dirname + "/Assets/slide3.png")}  ></img>
            <img className="zeelaImg" src={require(__dirname + "/Assets/slide4.png")}  ></img>
            <img className="zeelaImg" src={require(__dirname + "/Assets/slide5.jpg")}  ></img>
            <img className="zeelaImg" src={require(__dirname + "/Assets/slide6.png")}  ></img>
            <img className="zeelaImg" src={require(__dirname + "/Assets/slide7.png")}  ></img>
            {/* <div className="clickableLinkDiv"> */}
                <img className="zeelaImg" src={require(__dirname + "/Assets/slide8.png")}></img>
            <a className="clickableLink" target="_blank" href="https://1drv.ms/w/s!AsljbrQJevUJgTF2ITpa7DSNYQph?e=8v3cYN">Click Me</a>
            {/* </div> */}
            <img className="zeelaImg" src={require(__dirname + "/Assets/slide9.jpg")}  ></img>
        </>
    )
}