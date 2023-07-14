import "./Zeela.css"

export const ZeelaOnBoard = () => {
    return (
        <>
            <img className="zeelaImg" src={require(__dirname + "/Assets/image001.png")}  ></img>
            <img className="zeelaImg" src={require(__dirname + "/Assets/image004.png")}  ></img>
            <img className="zeelaImg" src={require(__dirname + "/Assets/image006.png")}  ></img>
            <img className="zeelaImg" src={require(__dirname + "/Assets/image008.png")}  ></img>
            <img className="zeelaImg" src={require(__dirname + "/Assets/image010.png")}  ></img>
            <img className="zeelaImg" src={require(__dirname + "/Assets/image012.png")}  ></img>
            <img className="zeelaImg" src={require(__dirname + "/Assets/image014.png")}  ></img>
            {/* <div className="clickableLinkDiv"> */}
                <img className="zeelaImg" src={require(__dirname + "/Assets/image015.png")}></img>
            <a className="clickableLink" target="_blank" href="https://1drv.ms/w/s!AsljbrQJevUJgTF2ITpa7DSNYQph?e=8v3cYN">Click Me</a>
            {/* </div> */}
            <img className="zeelaImg" src={require(__dirname + "/Assets/image016.png")}  ></img>
        </>
    )
}