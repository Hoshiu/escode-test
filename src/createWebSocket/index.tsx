import React, { useState, useRef, useEffect } from 'react';
import { URL } from 'url';

const createWebsocket = (url: URL, verify: any) => {
  const ws = useRef<WebSocket | null>(null);
  const [wsData, setWsData] = useState('');
  const [readyState, setReadyState] = useState({ key: 0, value: '正在链接中' })
  const creatWebSocket = () => {
    const stateArr = [
      { key: 0, value: '正在链接中' },
      { key: 1, value: '已经链接并且可以通讯' },
      { key: 2, value: '连接正在关闭' },
      { key: 3, value: '连接已关闭或者没有链接成功' }
    ]
    try {
      ws.current = new WebSocket(url)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ws.current.onopen = (_e) => setReadyState(stateArr[ws.current?.readyState ?? 0])
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ws.current.onclose = (e) => {
        setReadyState(stateArr[ws.current?.readyState ?? 0])
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ws.current.onerror = (e) => {
        setReadyState(stateArr[ws.current?.readyState ?? 0])
      }

      ws.current.onmessage = (e) => {
        setWsData(e.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const webSocketInit = () => {
    if (!ws.current || ws.current.readyState === 3) {
      creatWebSocket()
    }
  }

  //  关闭 WebSocket
  const closeWebSocket = () => {
    ws.current?.close()
  }

  const reconnect = () => {
    try {
      closeWebSocket()
      ws.current = null
      creatWebSocket()
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    verify && webSocketInit()
    return () => {
      ws.current?.close()
    }
  }, [ws, verify])

  return {
    wsData,
    readyState,
    closeWebSocket,
    reconnect
  }
}

export default createWebsocket;


// //  在需要使用 websocket 的组件
// const [socketData ,setSocketData] = useState({});
// const { wsData, readyState, closeWebSocket, reconnect } = createWebsocket({
//     url: `localhost:8080`,    //后台接口
//     verify  // 此参数控制是否有权限，请求该方法，可以去掉不要
//   })

//   useEffect(() => {
//     // 不在白名单人员之间不执行后续操作，不需要可以删除
//     if (!verify) {
//       return
//     }
//     const { data, type } = (wsData && JSON.parse(wsData)) || {}
//     switch (type) {// type 是跟后端约定的
//       case 'xxx1':
//         setSocketData({ ...socketData, review: data })
//         break
//       case 'xx2':
//         setSocketData({ ...socketData, pipelineResults: data })
//         break
//       default:
//         setSocketData({ ...socketData, ...data })
//         break
//     }
//     // 如果是已关闭且是当前页面自动重连
//     if (readyState.key === 3 && isLocalPage) {
//       reconnect()
//     }
//     // 不是当前页面 清空 webSocket 此处为优化代码使用的，不需要可以直接删除。
//     // if (!isLocalPage) {
//     //   closeWebSocket()
//     // } else {
//     //   const checkIsLocalPage = () => {
//     //     document.addEventListener('visibilitychange', function () {
//     //       // 页面变为不可见时触发
//     //       if (document.visibilityState === 'hidden') {
//     //         setIsLocalPage(false)
//     //       }
//     //       // 页面变为可见时触发
//     //       if (document.visibilityState === 'visible') {
//     //         setIsLocalPage(true)
//     //       }
//     //     })
//     //   }
//     // }
//   }, [wsData, readyState, isLocalPage, verify])