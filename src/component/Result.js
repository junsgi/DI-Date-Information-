import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TimeLine from "./TimeLine";

const Result = ({ startEnd }) => {
    const URL = 'http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getHoliDeInfo';
    /*
    list item
    {
        items : {} || [],
        numOfRows : 0,
        pageNo : 0,
        totalCount : 0
    }
    */
    const [list, setList] = useState([])

    const request = useCallback(async (url) => {
        let st = startEnd.start.split("-");
        let ed = startEnd.end.split("-");

        const MIN = +(st[0] + st[1] + st[2])
        const MAX = +(ed[0] + ed[1] + ed[2])
        await axios.get(url)
            .then(res => {
                console.log(res)
                if (typeof res.data === "edring") return { header: { resultCode: "20" } }
                else return res.data.response
            })
            .then(res => {
                if (res.header.resultCode === '00') {
                    let result = []
                    if (res.body.totalCount === 1) {
                        result = [res.body.items.item];
                        setList(e => [...e, ...result].filter(e => MIN <= e.locdate && e.locdate <= MAX))
                    } else if (res.body.totalCount > 1){
                        result = res.body.items.item;
                        setList(e => [...e, ...result].filter(e => MIN <= e.locdate && e.locdate <= MAX))
                    }
                } else alert('다시 시도해주세요')
            })
            .catch(e => console.error(e))
    }, [startEnd])
    const get = async () => {
        let YMDs = startEnd.start.split("-");
        let YMDe = startEnd.end.split("-");
        for(let i = +YMDs[0] ; i <= +YMDe[0] ; i++) {

            let st = +YMDs[1];
            let cnt = 1;
            if (i < +YMDe[0]) {
                st = 1;
                cnt = 12;
            }
            else {
                cnt = +YMDe[1];
            }

            for( st ; st <= cnt ; st++) {
                const MONTH = st < 10 ? String(`0${st}`) : String(st)
                const YEAR = String(i)
                var queryParams = '?' + encodeURIComponent('ServiceKey') + '=' + process.env.REACT_APP_KEY; /*Service Key*/
                queryParams += '&' + encodeURIComponent("_type") + '=' + encodeURIComponent('json');
                queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
                queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('100'); /**/
                queryParams += '&' + encodeURIComponent('solYear') + '=' + encodeURIComponent(YEAR); /**/
                queryParams += '&' + encodeURIComponent('solMonth') + '=' + encodeURIComponent(MONTH); /**/
                await request(URL + queryParams)
            }
        }
        // setList(e => e.toSorted())
        
    }
    useEffect(() => {
        get();
        return () => {setList(e => [])}
    }, [])
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Result</h1>
                    <p className="py-6 text-3xl">{startEnd.start} ~ {startEnd.end}</p>
                    <TimeLine list={list} />
                    <Link to="/">Home</Link>
                </div>
            </div>
        </div>
    );
}

export default Result;


