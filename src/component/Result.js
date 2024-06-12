import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Result = ({ valueArray, startEnd, select, pathArray }) => {
    const URL = 'http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/';
    
    const get = async () => {
        let url = URL + pathArray[select];
        let YMD = startEnd.start.split("-");
        var queryParams = '?' + encodeURIComponent('serviceKey') + '=' + process.env.REACT_APP_KEY; /*Service Key*/
        queryParams += '&' + encodeURIComponent("_type") + '=' + encodeURIComponent('json');
        queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
        queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('31'); /**/
        queryParams += '&' + encodeURIComponent('solYear') + '=' + encodeURIComponent(YMD[0]); /**/
        queryParams += '&' + encodeURIComponent('solMonth') + '=' + encodeURIComponent(YMD[1]); /**/
        
        await axios.get(url + queryParams)
        .then(res => {
            console.log(res)
            console.log(res.data.response.body.items.item)
            console.log(typeof(res.data.response.body.items.item))
        })
    }
    useEffect(() => {
        if (select > 0) get();
    }, [])
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Result</h1>
                    <p className="py-6 text-3xl">{valueArray[select]} {startEnd.start} ~ {startEnd.end}</p>
                    <p className="py-6"></p>
                </div>
                <Link to="/">Home</Link>
            </div>
        </div>
    );
}

export default Result;


