import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import './SourceSales.css';

const url = 'https://script.google.com/macros/s/AKfycbxm7V8Y9af9txfn5nJAwl42DopwuS7OFRKOIeBF_1xZ6yTQZ_DhfJKYJ6kP7hfk_1u7/exec';

const SourceSales = () => {
    const [statistics, setStatistics] = useState({"yjs": ["-", "-"], "tls": ["-", "-"], "syy": ["-", "-"], "mlx": ["-", "-"], "yys": ["-", "-"], "xme": ["-", "-"]});
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
            return [];
        }
    };

    useEffect(() => {
        (async () => {
            const stats = await fetchSourceStatistics();
            setStatistics(stats);
        })();
    }, []);

    if (statistics.yjs[0] === "-") {
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
                            <th colSpan={7}>{currentMonth}月份第{currentWeek}週管道銷售統計</th>
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
                            <td>{statistics.yjs[0]}</td>
                            <td>{statistics.yjs[1]}</td>
                        </tr>
                        <tr>
                            <td>2. 熙潞姆</td>
                            <td>{statistics.CLM[0]}</td>
                            <td>{statistics.CLM[1]}</td>
                        </tr>
                        <tr>
                            <td>3. 猫飼ってる_</td>
                            <td>{statistics.MS[0]}</td>
                            <td>{statistics.MS[1]}</td>
                        </tr>
                        <tr>
                            <td>4. 蔓蘿夏</td>
                            <td>{statistics.mlx[0]}</td>
                            <td>{statistics.mlx[1]}</td>
                        </tr>
                        <tr>
                            <td>5. 雲依姍</td>
                            <td>{statistics.yys[0]}</td>
                            <td>{statistics.yys[1]}</td>
                        </tr>
                        <tr>
                            <td>6. 深夜不睡教教宗</td>
                            <td>{statistics.nosleep[0]}</td>
                            <td>{statistics.nosleep[1]}</td>
                        </tr>
                        <tr>
                            <td>7. eno 咿哪</td>
                            <td>{statistics.eno[0]}</td>
                            <td>{statistics.eno[1]}</td>
                        </tr>
                        <tr>
                            <td>8. 地雷丸繪屋</td>
                            <td>{statistics.DLW[0]}</td>
                            <td>{statistics.DLW[1]}</td>
                        </tr>
                        <tr>
                            <td>9. 蘭老師</td>
                            <td>{statistics.lls[0]}</td>
                            <td>{statistics.lls[1]}</td>
                        </tr>
                        <tr>
                            <td>10. 蚩尤</td>
                            <td>{statistics.cy[0]}</td>
                            <td>{statistics.cy[1]}</td>
                        </tr>
                        <tr>
                            <td>11. 角落兔兔</td>
                            <td>{statistics.jltt[0]}</td>
                            <td>{statistics.jltt[1]}</td>
                        </tr>
                        <tr>
                            <td>12. 黑暗企業</td>
                            <td>{statistics.haqy[0]}</td>
                            <td>{statistics.haqy[1]}</td>
                        </tr>
                        <tr>
                            <td>13. 電玩慢打/雨煙</td>
                            <td>{statistics.yy[0]}</td>
                            <td>{statistics.yy[1]}</td>
                        </tr>
                        <tr>
                            <td>14. 斑鳩話桑麻</td>
                            <td>{statistics.hsm[0]}</td>
                            <td>{statistics.hsm[1]}</td>
                        </tr>
                        <tr>
                            <td>15. 安生</td>
                            <td>{statistics.as[0]}</td>
                            <td>{statistics.as[1]}</td>
                        </tr>
                        <tr>
                            <td>16. Kah</td>
                            <td>{statistics.kah[0]}</td>
                            <td>{statistics.kah[1]}</td>
                        </tr>
                        <tr>
                            <td>17. 狐依琉璃</td>
                            <td>{statistics.hyll[0]}</td>
                            <td>{statistics.hyll[1]}</td>
                        </tr>
                        <tr>
                            <td>18. 咪咕幫</td>
                            <td>{statistics.mgb[0]}</td>
                            <td>{statistics.mgb[1]}</td>
                        </tr>
                        <tr>
                            <td>19. 胖雞</td>
                            <td>{statistics.pj[0]}</td>
                            <td>{statistics.pj[1]}</td>
                        </tr>
                        <tr>
                            <td>20. 小靜しずか</td>
                            <td>{statistics.xj[0]}</td>
                            <td>{statistics.xj[1]}</td>
                        </tr>
                        <tr>
                            <td>21. 離緋緋</td>
                            <td>{statistics.cch[0]}</td>
                            <td>{statistics.cch[1]}</td>
                        </tr>
                        <tr>
                            <td>22. 巫巫巫巫巫巫巫</td>
                            <td>{statistics.www[0]}</td>
                            <td>{statistics.www[1]}</td>
                        </tr>
                        <tr>
                            <td>23. 諾拉公主</td>
                            <td>{statistics.nl[0]}</td>
                            <td>{statistics.nl[1]}</td>
                        </tr>
                        <tr>
                            <td>24. 珞漓</td>
                            <td>{statistics.ll[0]}</td>
                            <td>{statistics.ll[1]}</td>
                        </tr>
                        <tr>
                            <td>25. 水漾漾</td>
                            <td>{statistics.shyy[0]}</td>
                            <td>{statistics.shyy[1]}</td>
                        </tr>
                        <tr>
                            <td>26. 蜜柑</td>
                            <td>{statistics.mg[0]}</td>
                            <td>{statistics.mg[1]}</td>
                        </tr>
                        <tr>
                            <td>27. 人見巫拉拉</td>
                            <td>{statistics.rjwll[0]}</td>
                            <td>{statistics.rjwll[1]}</td>
                        </tr>
                        <tr>
                            <td>28. 吾貓</td>
                            <td>{statistics.wm[0]}</td>
                            <td>{statistics.wm[1]}</td>
                        </tr>
                        <tr>
                            <td>29. 阿卡</td>
                            <td>{statistics.ak[0]}</td>
                            <td>{statistics.ak[1]}</td>
                        </tr>
                        <tr>
                            <td>30. 凱佐先生</td>
                            <td>{statistics.kzxs[0]}</td>
                            <td>{statistics.kzxs[1]}</td>
                        </tr>
                        <tr>
                            <td>31. 蝦蝦醬</td>
                            <td>{statistics.xxj[0]}</td>
                            <td>{statistics.xxj[1]}</td>
                        </tr>
                        <tr>
                            <td>32. 吃貨少女あか</td>
                            <td>{statistics.chsn[0]}</td>
                            <td>{statistics.chsn[1]}</td>
                        </tr>
                        <tr>
                            <td>33. 藍妹摁係密魯</td>
                            <td>{statistics.lmexml[0]}</td>
                            <td>{statistics.lmexml[1]}</td>
                        </tr>
                        <tr>
                            <td>34. 北宮雨音</td>
                            <td>{statistics.bgyy[0]}</td>
                            <td>{statistics.bgyy[1]}</td>
                        </tr>
                        <tr>
                            <td>35. 阿薩姆</td>
                            <td>{statistics.asm[0]}</td>
                            <td>{statistics.asm[1]}</td>
                        </tr>
                        <tr>
                            <td>36. 墨谷</td>
                            <td>{statistics.mogu[0]}</td>
                            <td>{statistics.mogu[1]}</td>
                        </tr>
                        <tr>
                            <td>37. 亞曼皮卡曼</td>
                            <td>{statistics.ympkm[0]}</td>
                            <td>{statistics.ympkm[1]}</td>
                        </tr>
                        <tr>
                            <td>38. 荻珥 𝔇𝔢𝔞𝔯</td>
                            <td>{statistics.dear[0]}</td>
                            <td>{statistics.dear[1]}</td>
                        </tr>
                        <tr>
                            <td>39. 阿采</td>
                            <td>{statistics.acai[0]}</td>
                            <td>{statistics.acai[1]}</td>
                        </tr>
                        <tr>
                            <td>40. 璐娜莉亞</td>
                            <td>{statistics.lnly[0]}</td>
                            <td>{statistics.lnly[1]}</td>
                        </tr>
                        <tr>
                            <td>41. 可可洛希亞</td>
                            <td>{statistics.kklxy[0]}</td>
                            <td>{statistics.kklxy[1]}</td>
                        </tr>
                        <tr>
                            <td>42. 天竺鼠波比奈可貓</td>
                            <td>{statistics.tzsbb[0]}</td>
                            <td>{statistics.tzsbb[1]}</td>
                        </tr>
                        <tr>
                            <td>43. e_shan__</td>
                            <td>{statistics.eshan[0]}</td>
                            <td>{statistics.eshan[1]}</td>
                        </tr>
                        <tr>
                            <td>44. 吐司 Toasti</td>
                            <td>{statistics.toasti[0]}</td>
                            <td>{statistics.toasti[1]}</td>
                        </tr>
                        <tr>
                            <td>45. 鈴姆</td>
                            <td>{statistics.lingmu[0]}</td>
                            <td>{statistics.lingmu[1]}</td>
                        </tr>
                        <tr>
                            <td>46. 璉韵</td>
                            <td>{statistics.yunyun[0]}</td>
                            <td>{statistics.yunyun[1]}</td>
                        </tr>
                        <tr>
                            <td>47. 黑翼冰嵐</td>
                            <td>{statistics.heiyibinglan[0]}</td>
                            <td>{statistics.heiyibinglan[1]}</td>
                        </tr>
                        <tr>
                            <td>48. 蘇喜校長</td>
                            <td>{statistics.suxi[0]}</td>
                            <td>{statistics.suxi[1]}</td>
                        </tr>
                        <tr>
                            <td>49. 令勾lingo</td>
                            <td>{statistics.lingo[0]}</td>
                            <td>{statistics.lingo[1]}</td>
                        </tr>
                        <tr>
                            <td>50. 憩貓脆脆</td>
                            <td>{statistics.qimaocuicui[0]}</td>
                            <td>{statistics.qimaocuicui[1]}</td>
                        </tr>
                        <tr>
                            <td>51. 天天</td>
                            <td>{statistics.tiantian[0]}</td>
                            <td>{statistics.tiantian[1]}</td>
                        </tr>
                        <tr>
                            <td>52. 緋櫻櫻</td>
                            <td>{statistics.feiyingying[0]}</td>
                            <td>{statistics.feiyingying[1]}</td>
                        </tr>
                        <tr>
                            <td>53. 外星キ</td>
                            <td>{statistics.waixingki[0]}</td>
                            <td>{statistics.waixingki[1]}</td>
                        </tr>
                        <tr>
                            <td>54. 茆糰糰</td>
                            <td>{statistics.maotuantuan[0]}</td>
                            <td>{statistics.maotuantuan[1]}</td>
                        </tr>
                        <tr>
                            <td>54. 白拓</td>
                            <td>{statistics.baituo[0]}</td>
                            <td>{statistics.baituo[1]}</td>
                        </tr>
                        <tr>
                            <td>55. 夢奈浠羽</td>
                            <td>{statistics.mengnaixiyu[0]}</td>
                            <td>{statistics.mengnaixiyu[1]}</td>
                        </tr>
                        <tr>
                            <td>56. 鈴姆</td>
                            <td>{statistics.lingmu[0]}</td>
                            <td>{statistics.lingmu[1]}</td>
                        </tr>
                        <tr>
                            <td>57. 三天三葉</td>
                            <td>{statistics.yitiansanye[0]}</td>
                            <td>{statistics.yitiansanye[1]}</td>
                        </tr>
                        <tr>
                            <td>58. 天天是天兵的天</td>
                            <td>{statistics.ttstbdt[0]}</td>
                            <td>{statistics.ttstbdt[1]}</td>
                        </tr>
                        <tr>
                            <td>59. 瑞比兔兔</td>
                            <td>{statistics.ruibitutu[0]}</td>
                            <td>{statistics.ruibitutu[1]}</td>
                        </tr>
                        <tr>
                            <td>60. 慕容小蝦</td>
                            <td>{statistics.murongxiaoxia[0]}</td>
                            <td>{statistics.murongxiaoxia[1]}</td>
                        </tr>
                        <tr>
                            <td>61. 潘渥丹</td>
                            <td>{statistics.pandanwu[0]}</td>
                            <td>{statistics.pandanwu[1]}</td>
                        </tr>
                        <tr>
                            <td>62. 番茄優縭</td>
                            <td>{statistics.fanqieyouli[0]}</td>
                            <td>{statistics.fanqieyouli[1]}</td>
                        </tr>
                        <tr>
                            <td>63. 夜玄冥</td>
                            <td>{statistics.yexuanming[0]}</td>
                            <td>{statistics.yexuanming[1]}</td>
                        </tr>
                        <tr>
                            <td>64. 若祈</td>
                            <td>{statistics.ruoqi[0]}</td>
                            <td>{statistics.ruoqi[1]}</td>
                        </tr>
                        <tr>
                            <td>65. 小烈</td>
                            <td>{statistics.xiaolie[0]}</td>
                            <td>{statistics.xiaolie[1]}</td>
                        </tr>
                        <tr>
                            <td>66. 貝兒</td>
                            <td>{statistics.beier[0]}</td>
                            <td>{statistics.beier[1]}</td>
                        </tr>
                        <tr>
                            <td>67. 霓茶</td>
                            <td>{statistics.nicha[0]}</td>
                            <td>{statistics.nicha[1]}</td>
                        </tr>
                        <tr>
                            <td>68. 楚非寶寶</td>
                            <td>{statistics.CFBB[0]}</td>
                            <td>{statistics.CFBB[1]}</td>
                        </tr>
                        <tr>
                            <td>69. 朶菟菈</td>
                            <td>{statistics.duotula[0]}</td>
                            <td>{statistics.duotula[1]}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='emptyBox'></div>
        </div>
    );
};

export default SourceSales;
