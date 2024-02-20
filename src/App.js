//   /* eslint-disable*/ 터미널에 나오는 warning메시지를 감춰줌 
//import './App.css';
import { useState } from 'react';

function App() {
  /* 
     자주 변경될 것 같은 html부분은 state로 만들기
  */

  let post = '강남 우동 맛집'; //변수는 html에 자동으로 반영이 안됨(값이 바뀔경우)

  let [글제목, b] =  useState('남자 코트 추천'); // 그래서 state로 변수를 사용함.자동으로 리랜더링이 된다.
  let[title, setTitle] = useState(['남자코트 추천','강남 우동 맛집','파이썬 독학']);
  let [like, setLike] = useState([0,0,0]);

  let [modal, setModal] = useState(false);
  let [title1, setTitle1] = useState(0);
  let [input, setInput] = useState('');


  [1,2,3].map(function(a){
      // 1. Array는 map 함수를 사용할 수 있다.
      // 2. Array 자료 갯수만큼 함수 안의 코드를 실행해 줌
      // 3. 함수의 파라미터는 array안에 있는 값이다
      // 4. return에 값을 적으면 array로 담아준다
  })

  return (
    <div className="App">
      <div className='h-24 bg-midnight' >
        <h4 className=' p-7 text-3xl font-bold underline tracking-widest  text-center  text-tahiti '>REACT BLOG</h4> 
      </div>
  
   { /*  <button onClick={ () => {   // jsx 주석처리할 때 {}대괄호 붙이고 /* 이거 해줌 
        let copy = [...title];
        copy.sort();
        setTitle(copy);
      } }>       
      가나다순 정렬 </button>

      <div className='list'>
        <h4>{ title[0] } <span onClick={ () => { setLike( like+1 )  } }> 👍</span> {like} </h4>
        <p>2023년 3월 26일 발행</p>
        <button onClick={ 
          () => {        // [...]괄호를 벗겨주시고 다시 씌워주세요! 화살표도 달라지게함. 서로 다른 변수가 된다.
              let copy = [...title];  //되도록 원본을 삭제하지 말고 카피본을 만들어 수정하는게 좋다.
              copy[0] = '여자 코트 추천';
              setTitle(copy);
           }
        }> 숙제 </button>
      </div>
      <div className='list'>
        <h4>{ title[1] }</h4>
        <p>2023년 3월 26일 발행</p>
      </div>
      <div className='list'>
        <h4 onClick={ () => { setModal(!modal)}}>{ title[2] }</h4>
        <p>2023년 3월 26일 발행</p>
      </div>
      
      */ }
      <hr></hr>
      {
        //html중간에 for 반복문을 쓰려면 
        title.map(function(a, i){
          return (
          <div className=" text-center columns-3 px-8 p-5" key={i}>
              <div><h4 onClick={ () => { setModal(!modal); setTitle1(i)}} >{ a }
                <span className=' bg-like hover:bg-likeHover cursor-pointer' onClick={ (e) => { 
                    e.stopPropagation(); // 상위html로 퍼지는 이벤트버블링을 막아줌
                    //array는 자료 변경 시 복사부터 하기!!!
                    let copy = [...like];
                    copy[i] = copy[i] + 1;
                    setLike(copy)
                  } }>👍 {like[i]} </span>
              </h4>
              <p>2023년 3월 26일 발행</p>
              <button className=' bg-delBtn text-tahiti px-2' onClick={ () => {
                let copy = [...title];
                copy.splice(i, 1); // splice(삭제할 인덱스값, 1)
                setTitle(copy);
              }}>삭제</button>
              </div>
          </div>
          )
        })
      }
      <br/>
      <div className='border-solid border-2 border-basic text-center  px-8 p-5'>
        <input className='border-solid border-2' placeholder='input value' onChange={ (e) => { 
          setInput(e.target.value);   //  <- 이거 완료되기 전에 (state변경함수는 늦게처리됨)
          console.log('입력값 : ' + input) // <- 다음 줄 실행해 줌
          }} />
        
        <button className=' bg-midnight text-tahiti px-5 rounded-md' onClick= {() => {
          let copy = [...title];
        //  copy.push(input);    
          copy.unshift(input); // array 맨 처음에 추가해줌
          setTitle(copy);
        } } > 글추가 </button>
      </div>


      {
        //html중간에 if 조건을 쓰려면 삼항연산자로
        modal == true ? <Modal 글제목 ={title} 해당글제목 = {title1} 글제목변경 = {setTitle} color='skyblue' /> : null
      }   



    </div>
  );
}

/*
  부모 -> 자식한테 state 전송하는 법 (자식에서 부모로는 불가능)
  1. <자식컴포넌트 작명 = {state이름}>
  2. props 파라미터로 받아서 props.작명 사용
*/

/*
const Modal = () => {
  return (
    <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>  
  )
}
*/

function Modal(props){ //컴포넌트로 만들기_의미없는 div는 <> 이렇게 축약 
  return (
    <>        
      <div className='text-center' style={{background : props.color}}>
        <h4>{props.글제목[props.해당글제목]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={ () => { 
            let copy = [...props.글제목];
            copy[0] = '여자 코트 추천';
            props.글제목변경(copy);
            }}>글수정</button>
      </div>  
      <div></div>
    </>
  )
}

export default App;
