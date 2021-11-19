import '../../styles/rand.css'
import { getList } from '../listOperate'
import { Link } from 'react-router-dom'

import { useState, useEffect } from 'react'
import {dataList} from '../randPage'
const CodePage = () => {
  const [question1, setQuestion1] = useState([] as dataList[])
  const [question2, setQuestion2] = useState([] as dataList[])
  useEffect(() => {
    ;(async () => {
      const list:dataList[] = await getList()
      setQuestion1(list.slice(0, 5))
      setQuestion2(list.slice(5, 10))
      console.log(list);
    })()
  }, [])
  return (
    <div className="container">
      <div className="button-container">
        {question1.map((item, _) => (
          <Link to={`/rand/${item.Id}`}>
            <div className="container-button1" key={item.Id}>
              <div className="button1 button--bounce1" onClick={() => {}}>
                <span>{item.Name}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="button-container">
      {question2.map((item, _) => (
        <Link to={`/rand/${item.Id}`}>
          <div className="container-button1" key={item.Id}>
            <div className="button1 button--bounce1" onClick={() => {}}>
              <span>{item.Name}</span>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
export default CodePage
