import {useParams} from "react-router-dom";
import {Button, Flex} from "antd";
import {useDispatch} from "react-redux";
import {getWordTranslation} from "../store/reducers/Actions";

const RTA = () => {
    let { id } = useParams();
    const dispatch = useDispatch()
    console.log(id)
    return (
        <Flex>
            <Button type={"primary"} onClick={() => {
                dispatch(getWordTranslation({topic_id: false}))
            }}>Get word</Button>
        </Flex>
    )
}

export default RTA