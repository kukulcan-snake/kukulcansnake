import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import './SourceSales.css';

const url = 'https://script.google.com/macros/s/AKfycbxm7V8Y9af9txfn5nJAwl42DopwuS7OFRKOIeBF_1xZ6yTQZ_DhfJKYJ6kP7hfk_1u7/exec';

const SourceSales = () => {
    // 預設初始 state，確保在載入時即使讀取任何管道都不會因 undefined 而崩潰
    const [statistics, setStatistics] = useState({});
    const [loading, setLoading] = useState(true);

    const friday = new Date().getDay() === 5 || new Date().getDay() === 6
                    ? new Date().getDate() - (new Date().getDay() + 2) + 7
                    : new Date().getDate() - (new Date().getDay() + 2);
    const fridayDate = new Date(new Date().setDate(friday));
    const currentMonth = fridayDate.getMonth() + 1;
    const currentWeek = Math.ceil(fridayDate.getDate() / 7);

    const fetchSourceStatistics = async () => {
        console.log("fetching source statistics...")
        try {
            const response = await axios.get(url + "?endpoint=source-statistics");
            return response.data;
        } catch (error) {
            console.error('Error fetching source statistics:', error);
            return {};
        }
    };

    useEffect(() => {
        (async () => {
            const stats = await fetchSourceStatistics();
            setStatistics(stats);
            setLoading(false);
        })();
    }, []);

    // 輔助函式：安全取得數據，若 API 還沒回傳或該管道無資料，預設顯示 "-"
    const getStat = (key, index) => {
        return statistics && statistics[key] && statistics[key][index] !== undefined 
            ? statistics[key][index] 
            : "-";
    };

    if (loading) {
        return (
            <div className='bg-banner'>
                <p className='titleText'>管道銷售</p>
                <div className='loadingBox'>
                    <p>Loading...</p>
                </div>
            </div>
        );
    }

    return (
        <div className='bg-banner'>
            <p className='titleText'>管道銷售</p>
            <div className='tableBox'>
                <table>
                    <thead>
                        <tr>
                            <th colSpan={3}>{currentMonth}月份第{currentWeek}週管道銷售統計</th>
                        </tr>
                        <tr>
                            <th>管道</th>
                            <th>無酒精布丁個數</th>
                            <th>含酒精布丁個數</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1. 厭世醫檢師</td>
                            <td>{getStat('yjs', 0)}</td>
                            <td>{getStat('yjs', 1)}</td>
                        </tr>
                        <tr>
                            <td>2. 熙潞姆</td>
                            <td>{getStat('CLM', 0)}</td>
                            <td>{getStat('CLM', 1)}</td>
                        </tr>
                        <tr>
                            <td>3. 猫飼</td>
                            <td>{getStat('MS', 0)}</td>
                            <td>{getStat('MS', 1)}</td>
                        </tr>
                        <tr>
                            <td>4. 蔓蘿夏</td>
                            <td>{getStat('mlx', 0)}</td>
                            <td>{getStat('mlx', 1)}</td>
                        </tr>
                        <tr>
                            <td>5. 雲依姍</td>
                            <td>{getStat('yys', 0)}</td>
                            <td>{getStat('yys', 1)}</td>
                        </tr>
                        <tr>
                            <td>6. 深夜不睡教教宗</td>
                            <td>{getStat('nosleep', 0)}</td>
                            <td>{getStat('nosleep', 1)}</td>
                        </tr>
                        <tr>
                            <td>7. eno 咿哪</td>
                            <td>{getStat('eno', 0)}</td>
                            <td>{getStat('eno', 1)}</td>
                        </tr>
                        <tr>
                            <td>8. 地雷丸繪屋</td>
                            <td>{getStat('DLW', 0)}</td>
                            <td>{getStat('DLW', 1)}</td>
                        </tr>
                        <tr>
                            <td>9. 貝莉蒂絲</td>
                            <td>{getStat('BLDS', 0)}</td>
                            <td>{getStat('BLDS', 1)}</td>
                        </tr>
                        <tr>
                            <td>10. 明子</td>
                            <td>{getStat('AKIKO', 0)}</td>
                            <td>{getStat('AKIKO', 1)}</td>
                        </tr>
                        <tr>
                            <td>11. 提拉米蘇西</td>
                            <td>{getStat('TLMSC', 0)}</td>
                            <td>{getStat('TLMSC', 1)}</td>
                        </tr>
                        <tr>
                            <td>12. 霓夜姬</td>
                            <td>{getStat('NAG', 0)}</td>
                            <td>{getStat('NAG', 1)}</td>
                        </tr>
                        <tr>
                            <td>13. 艾爾維娜</td>
                            <td>{getStat('AIWN', 0)}</td>
                            <td>{getStat('AIWN', 1)}</td>
                        </tr>
                        <tr>
                            <td>14. 蜜絲雪芙</td>
                            <td>{getStat('MSCF', 0)}</td>
                            <td>{getStat('MSCF', 1)}</td>
                        </tr>
                        <tr>
                            <td>15. 茉茉</td>
                            <td>{getStat('MORII', 0)}</td>
                            <td>{getStat('MORII', 1)}</td>
                        </tr>
                        <tr>
                            <td>16. 乖該</td>
                            <td>{getStat('GG', 0)}</td>
                            <td>{getStat('GG', 1)}</td>
                        </tr>
                        <tr>
                            <td>17. 狐依琉璃</td>
                            <td>{getStat('hyll', 0)}</td>
                            <td>{getStat('hyll', 1)}</td>
                        </tr>
                        <tr>
                            <td>18. 緹斯伊娜</td>
                            <td>{getStat('TSIN', 0)}</td>
                            <td>{getStat('TSIN', 1)}</td>
                        </tr>
                        <tr>
                            <td>19. 胖雞</td>
                            <td>{getStat('pj', 0)}</td>
                            <td>{getStat('pj', 1)}</td>
                        </tr>
                        <tr>
                            <td>20. 小靜しずか</td>
                            <td>{getStat('xj', 0)}</td>
                            <td>{getStat('xj', 1)}</td>
                        </tr>
                        <tr>
                            <td>21. 離緋緋</td>
                            <td>{getStat('cch', 0)}</td>
                            <td>{getStat('cch', 1)}</td>
                        </tr>
                        <tr>
                            <td>22. 巫巫巫巫巫巫巫</td>
                            <td>{getStat('www', 0)}</td>
                            <td>{getStat('www', 1)}</td>
                        </tr>
                        <tr>
                            <td>23. 諾拉公主</td>
                            <td>{getStat('nl', 0)}</td>
                            <td>{getStat('nl', 1)}</td>
                        </tr>
                        <tr>
                            <td>24. 珞漓</td>
                            <td>{getStat('ll', 0)}</td>
                            <td>{getStat('ll', 1)}</td>
                        </tr>
                        <tr>
                            <td>25. 水漾漾</td>
                            <td>{getStat('shyy', 0)}</td>
                            <td>{getStat('shyy', 1)}</td>
                        </tr>
                        <tr>
                            <td>26. 蜜柑</td>
                            <td>{getStat('mg', 0)}</td>
                            <td>{getStat('mg', 1)}</td>
                        </tr>
                        <tr>
                            <td>27. 人見巫拉拉</td>
                            <td>{getStat('rjwll', 0)}</td>
                            <td>{getStat('rjwll', 1)}</td>
                        </tr>
                        <tr>
                            <td>28. 吾貓</td>
                            <td>{getStat('wm', 0)}</td>
                            <td>{getStat('wm', 1)}</td>
                        </tr>
                        <tr>
                            <td>29. 玥音</td>
                            <td>{getStat('AE', 0)}</td>
                            <td>{getStat('AE', 1)}</td>
                        </tr>
                        <tr>
                            <td>30. 凱佐先生</td>
                            <td>{getStat('kzxs', 0)}</td>
                            <td>{getStat('kzxs', 1)}</td>
                        </tr>
                        <tr>
                            <td>31. 蝦蝦醬</td>
                            <td>{getStat('xxj', 0)}</td>
                            <td>{getStat('xxj', 1)}</td>
                        </tr>
                        <tr>
                            <td>32. 吃貨少女あか</td>
                            <td>{getStat('chsn', 0)}</td>
                            <td>{getStat('chsn', 1)}</td>
                        </tr>
                        <tr>
                            <td>33. 藍妹摁係密魯</td>
                            <td>{getStat('lmexml', 0)}</td>
                            <td>{getStat('lmexml', 1)}</td>
                        </tr>
                        <tr>
                            <td>34. 北宮雨音</td>
                            <td>{getStat('bgyy', 0)}</td>
                            <td>{getStat('bgyy', 1)}</td>
                        </tr>
                        <tr>
                            <td>35. 阿薩姆</td>
                            <td>{getStat('asm', 0)}</td>
                            <td>{getStat('asm', 1)}</td>
                        </tr>
                        <tr>
                            <td>36. 墨谷</td>
                            <td>{getStat('mogu', 0)}</td>
                            <td>{getStat('mogu', 1)}</td>
                        </tr>
                        <tr>
                            <td>37. 歩羽ふわ</td>
                            <td>{getStat('HUWA', 0)}</td>
                            <td>{getStat('HUWA', 1)}</td>
                        </tr>
                        <tr>
                            <td>38. 荻珥 𝔇𝔢𝔞𝔯</td>
                            <td>{getStat('dear', 0)}</td>
                            <td>{getStat('dear', 1)}</td>
                        </tr>
                        <tr>
                            <td>39. 阿采</td>
                            <td>{getStat('acai', 0)}</td>
                            <td>{getStat('acai', 1)}</td>
                        </tr>
                        <tr>
                            <td>40. 璐娜莉亞</td>
                            <td>{getStat('lnly', 0)}</td>
                            <td>{getStat('lnly', 1)}</td>
                        </tr>
                        <tr>
                            <td>41. 可可洛希亞</td>
                            <td>{getStat('kklxy', 0)}</td>
                            <td>{getStat('kklxy', 1)}</td>
                        </tr>
                        <tr>
                            <td>42. 天竺鼠波比奈可貓</td>
                            <td>{getStat('tzsbb', 0)}</td>
                            <td>{getStat('tzsbb', 1)}</td>
                        </tr>
                        <tr>
                            <td>43. 狗咩咩</td>
                            <td>{getStat('GOMM', 0)}</td>
                            <td>{getStat('GOMM', 1)}</td>
                        </tr>
                        <tr>
                            <td>44. 吐司 Toasti</td>
                            <td>{getStat('toasti', 0)}</td>
                            <td>{getStat('toasti', 1)}</td>
                        </tr>
                        <tr>
                            <td>45. 鈴姆</td>
                            <td>{getStat('lingmu', 0)}</td>
                            <td>{getStat('lingmu', 1)}</td>
                        </tr>
                        <tr>
                            <td>46. 璉韵</td>
                            <td>{getStat('yunyun', 0)}</td>
                            <td>{getStat('yunyun', 1)}</td>
                        </tr>
                        <tr>
                            <td>47. 卯月鈴菟</td>
                            <td>{getStat('MALT', 0)}</td>
                            <td>{getStat('MALT', 1)}</td>
                        </tr>
                        <tr>
                            <td>48. 蘇喜校長</td>
                            <td>{getStat('suxi', 0)}</td>
                            <td>{getStat('suxi', 1)}</td>
                        </tr>
                        <tr>
                            <td>49. 謙然若梦</td>
                            <td>{getStat('MM', 0)}</td>
                            <td>{getStat('MM', 1)}</td>
                        </tr>
                        <tr>
                            <td>50. 擔擔麵</td>
                            <td>{getStat('DDM', 0)}</td>
                            <td>{getStat('DDM', 1)}</td>
                        </tr>
                        <tr>
                            <td>51. 天天</td>
                            <td>{getStat('tiantian', 0)}</td>
                            <td>{getStat('tiantian', 1)}</td>
                        </tr>
                        <tr>
                            <td>52. 影月</td>
                            <td>{getStat('SMOON', 0)}</td>
                            <td>{getStat('SMOON', 1)}</td>
                        </tr>
                        <tr>
                            <td>53. 外星キ</td>
                            <td>{getStat('waixingki', 0)}</td>
                            <td>{getStat('waixingki', 1)}</td>
                        </tr>
                        <tr>
                            <td>54. 星依</td>
                            <td>{getStat('SE', 0)}</td>
                            <td>{getStat('SE', 1)}</td>
                        </tr>
                        <tr>
                            <td>55. 紅梅</td>
                            <td>{getStat('RADM', 0)}</td>
                            <td>{getStat('RADM', 1)}</td>
                        </tr>
                        <tr>
                            <td>56. 彌彩</td>
                            <td>{getStat('MCHI', 0)}</td>
                            <td>{getStat('MCHI', 1)}</td>
                        </tr>
                        <tr>
                            <td>57. 三天三葉</td>
                            <td>{getStat('yitiansanye', 0)}</td>
                            <td>{getStat('yitiansanye', 1)}</td>
                        </tr>
                        <tr>
                            <td>58. 天天是天兵的天</td>
                            <td>{getStat('ttstbdt', 0)}</td>
                            <td>{getStat('ttstbdt', 1)}</td>
                        </tr>
                        <tr>
                            <td>59. 瑞比兔兔</td>
                            <td>{getStat('ruibitutu', 0)}</td>
                            <td>{getStat('ruibitutu', 1)}</td>
                        </tr>
                        <tr>
                            <td>60. 日日緹奈</td>
                            <td>{getStat('ZZTN', 0)}</td>
                            <td>{getStat('ZZTN', 1)}</td>
                        </tr>
                        <tr>
                            <td>61. 潘渥丹</td>
                            <td>{getStat('pandanwu', 0)}</td>
                            <td>{getStat('pandanwu', 1)}</td>
                        </tr>
                        <tr>
                            <td>62. 七咲</td>
                            <td>{getStat('SSMILE', 0)}</td>
                            <td>{getStat('SSMILE', 1)}</td>
                        </tr>
                        <tr>
                            <td>63. 陸路</td>
                            <td>{getStat('LR', 0)}</td>
                            <td>{getStat('LR', 1)}</td>
                        </tr>
                        <tr>
                            <td>64. 若祈</td>
                            <td>{getStat('ruoqi', 0)}</td>
                            <td>{getStat('ruoqi', 1)}</td>
                        </tr>
                        <tr>
                            <td>65. 杯呱呱</td>
                            <td>{getStat('BGG', 0)}</td>
                            <td>{getStat('BGG', 1)}</td>
                        </tr>
                        <tr>
                            <td>66. 貝兒</td>
                            <td>{getStat('beier', 0)}</td>
                            <td>{getStat('beier', 1)}</td>
                        </tr>
                        <tr>
                            <td>67. 霓茶</td>
                            <td>{getStat('nicha', 0)}</td>
                            <td>{getStat('nicha', 1)}</td>
                        </tr>
                        <tr>
                            <td>68. 楚非寶寶</td>
                            <td>{getStat('CFBB', 0)}</td>
                            <td>{getStat('CFBB', 1)}</td>
                        </tr>
                        <tr>
                            <td>69. 朶菟菈</td>
                            <td>{getStat('duotula', 0)}</td>
                            <td>{getStat('duotula', 1)}</td>
                        </tr>
                        <tr>
                            <td>70. 伊悠伊</td>
                            <td>{getStat('EUE', 0)}</td>
                            <td>{getStat('EUE', 1)}</td>
                        </tr>
                        <tr>
                            <td>71. 頎海絲緹</td>
                            <td>{getStat('WHFT', 0)}</td>
                            <td>{getStat('WHFT', 1)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='emptyBox'></div>
        </div>
    );
};

export default SourceSales;
