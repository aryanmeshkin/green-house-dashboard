export function createWebSocket(url,onMessage){
    const ws = new WebSocket(url)
    ws.onopen = ()=>{
        console.log(url," : is connected");
    }
    ws.onclose = ()=>{
        console.log();
    }
    ws.onmessage = (event)=>{
        const data = JSON.parse(event.data)
        onMessage(data)
    }
    ws.onerro = (error)=>{
        console.log("error is :",error);
    }
    return ws
}