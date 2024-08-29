import OpenLink from "./OpenLink";
import CopyLink from "./CopyLink";

function HelpfulResources(props) {

    return (
        <div className="helpful-resources">
            <h2>Helpful Resources</h2>
                {props.resources.map((resource, index) => (
                    <li key={index}>
                        <a href={resource.link}>{resource.title}</a>
                        <CopyLink link={resource.link} />
                        <OpenLink link={resource.link} />
                    </li>
                ))}
        </div>
    );
}

export default HelpfulResources;