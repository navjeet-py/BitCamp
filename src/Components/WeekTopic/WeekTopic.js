import React, {useEffect, useState} from "react";
import Icon from "../Icon/Icon";

const WeekTopic = (props) => {

    const [expanded, setExpanded] = useState(props.expand);

    const topic = props.topic;


    return (
        <div className={expanded ? "week-topic expanded-week-topic" : "week-topic"}>
            <div className={"title"} onClick={() => setExpanded(!expanded)}>
                <Icon type={"expander"}/>
                {topic.title} • {topic.lectures} Lectures
            </div>
            {expanded ? (
                <div className={"topic-desc-div"}>
                    <div className={"vertical-border"}></div>
                    <p className={"topic-desc"}>
                        {topic.desc}

                    </p>
                </div>

            ) : ("")}
        </div>
    )
}
export default WeekTopic;