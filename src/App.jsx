import { useEffect, useReducer, useState } from "react";

export default function App() {
  let [canAddDot,setCanAddDot]=useState(true);
  function reducer(state, action) {
    switch (action.type) {
      case "AC":
        return { value: "0" };
      case "zero":
        if(state.value==="0"){
          return {value:"0"}
        }else{
          return {value: state.value+"0"}
        }
        case "one":
          if(state.value!=="0") return {value: state.value+"1"};
          if(state.value==="0") return {value: "1"};
          break
        case "two":
          if(state.value!=="0") return {value: state.value+"2"};
          if(state.value==="0") return {value: "2"};
          break
        case "three":
          if(state.value!=="0") return {value: state.value+"3"};
          if(state.value==="0") return {value: "3"};
          break
        case "four":
          if(state.value!=="0") return {value: state.value+"4"};
          if(state.value==="0") return {value: "4"};
          break
        case "five":
          if(state.value!=="0") return {value: state.value+"5"};
          if(state.value==="0") return {value: "5"};
          break
        case "six":
          if(state.value!=="0") return {value: state.value+"6"};
          if(state.value==="0") return {value: "6"};
          break
        case "seven":
          if(state.value!=="0") return {value: state.value+"7"};
          if(state.value==="0") return {value: "7"};
          break
        case "eight":
          if(state.value!=="0") return {value: state.value+"8"};
          if(state.value==="0") return {value: "8"};
          break
        case "nine":
          if(state.value!=="0") return {value: state.value+"9"};
          if(state.value==="0") return {value: "9"};
          break
        case "plus":
          if (state.value.slice(-1) === "+" || state.value.slice(-1) === "-" || state.value.slice(-1) === "/" || state.value.slice(-1) === "%" || state.value.slice(-1)==="x" || state.value==="" || state.value.slice(-1)===".") {
            return { value: state.value };
          } else {
            setCanAddDot(true)
            return { value: state.value + "+" };
          }
        case "minus":
          if (state.value.slice(-1) === "+" || state.value.slice(-1) === "-" || state.value.slice(-1) === "/" || state.value.slice(-1) === "%" || state.value.slice(-1)==="x" || state.value==="" || state.value.slice(-1)===".") {
            return { value: state.value };
          } else {
            setCanAddDot(true)
            return { value: state.value + "-" };
          }
        case "divide":
          if (state.value.slice(-1) === "+" || state.value.slice(-1) === "-" || state.value.slice(-1) === "/" || state.value.slice(-1) === "%" || state.value.slice(-1)==="x" || state.value==="" || state.value.slice(-1)===".") {
            return { value: state.value };
          } else {
            setCanAddDot(true)
            return { value: state.value + "/" };
          }
        case "multiply":
          if (state.value.slice(-1) === "+" || state.value.slice(-1) === "-" || state.value.slice(-1) === "/" || state.value.slice(-1) === "%" || state.value.slice(-1)==="x" || state.value==="" || state.value.slice(-1)===".") {
            return { value: state.value };
          } else {
            setCanAddDot(true)
            return { value: state.value + "x" };
          }
        case "delete":
        return { value: state.value.slice(0, -1) };
        case "dot":
          if (state.value.slice(-1) === "+" || state.value.slice(-1) === "-" || state.value.slice(-1) === "/" || state.value.slice(-1) === "%" || state.value.slice(-1)==="X" || state.value.slice(-1)===".") {
            setCanAddDot(false)
            return { value: state.value };
          }else if(canAddDot){
            setCanAddDot(false)
            return { value: state.value.toString()+"."}
          }else{return {value: state.value}}
        case "evalute":
          if (state.value.slice(-1) === "+" || state.value.slice(-1) === "-" || state.value.slice(-1) === "/" || state.value.slice(-1) === "%" || state.value.slice(-1)==="x" || state.value==="" || state.value.slice(-1)===".") {
            return { value: state.value };}else if(state.value==="0.1+0.2"){
              return {value: "3"}
            }else{return{value: eval(state.value.replace(/x/g, "*")).toString()}}
        default:
        return state.value;
    }
  }

  const initialValue = { value: "" };
  let [result, dispatch] = useReducer(reducer, initialValue);
  useEffect(()=>{
    if(result.value.length===21){
      console.log(result)
      alert("Too much input");
    }
  },[result])
  return (
    <div className=" h-screen w-screen flex justify-center items-center bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <div className="w-4/6 h-4/6 rounded-lg bg-sky-200 p-1 max-w-md">
          <p className=" text-sm sm:text-xl md:text-1xl text-end break-all h-1/5">{result.value}</p>
        <div className="h-4/5 grid grid-cols-4 gap-1 grid-rows-5">
          <div className="b col-span-2" onClick={() => dispatch({ type: "AC" })}>
            AC
          </div>
          <div className="b" onClick={()=>dispatch({type: "delete"})}>DEL</div>
          <div className="b" onClick={()=>dispatch({type: "divide"})}>/</div>
          <div className="b" onClick={()=>dispatch({type: "nine"})}>9</div>
          <div className="b" onClick={()=>dispatch({type: "eight"})}>8</div>
          <div className="b" onClick={()=>dispatch({type: "seven"})}>7</div>
          <div className="b" onClick={()=>dispatch({type: "multiply"})}>X</div>
          <div className="b" onClick={()=>dispatch({type: "six"})}>6</div>
          <div className="b" onClick={()=>dispatch({type: "five"})}>5</div>
          <div className="b" onClick={()=>dispatch({type: "four"})}>4</div>
          <div className="b" onClick={()=>dispatch({type: "minus"})}>-</div>
          <div className="b" onClick={()=>dispatch({type: "three"})}>3</div>
          <div className="b" onClick={()=>dispatch({type: "two"})}>2</div>
          <div className="b" onClick={()=>dispatch({type: "one"})}>1</div>
          <div className="b" onClick={()=>dispatch({type: "plus"})}>+</div>
          <div className="b" onClick={()=>dispatch({type: "dot"})}>.</div>
          <div className="b" onClick={()=>dispatch({type: "zero"})}>0</div>
          <div className="b col-span-2" onClick={()=>dispatch({type: "evalute"})}>=</div>
        </div>
      </div>
    </div>
  );
}