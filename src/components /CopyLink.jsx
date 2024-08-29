import copy from "../assets/copy.svg"

function CopyLink(props) {
    return (
        <a href={props.link} onClick={() => navigator.clipboard.writeText(props.link)}><img src={copy}/></a>
    )
}

export default CopyLink