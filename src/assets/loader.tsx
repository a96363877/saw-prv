import { TailSpin } from "react-loader-spinner"

export const Loader = (props:{show:boolean}) => {
    return (<div style={{display:props.show?"flex":"none",position:'fixed',
    flexDirection:"column",textAlign:'center',justifyItems:"center",justifyContent:'center',top:'45%',bottom:'auto',left:0,right:0,zIndex:1}}>
        
        <TailSpin
            visible={true}
            height="80"
            width="80"
            color="#0062d9cc"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{margin:'auto'}}
            wrapperClass=""
        />
        <h4 style={{marginTop:5,fontWeight:900,color:"#0062d9cc"}}>... الرجاء الانتظار </h4>
    </div>)
}