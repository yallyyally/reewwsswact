import { useRef, useState } from "react";

// onCreate - 새로운 item 이 추가될 때 list(state)에 추가시켜주는 함수
const DiaryEditor = ({ onCreate }) => {
  // useRef: DOM 요소를 다룰 수 있게 해줌
  // useRef returns a ref object with a single current property initially set to the initial value you provided.
  // useRef의 인자로 설정한 초기 값을 current property로 가지고 있는 ref object를 리턴한다.
  const authorInput = useRef();
  const contentInput = useRef();

  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  // setAuthor가 아니면 author의 상태를 변화시킬 수 없음
  // const [author,setAuthor] = useState("작성자");
  // const [content, setContfnt] = useState("내용");

  const handleChangeState = (e) => {
    console.log("변경된 것 " + e.target.name);
    console.log("변경 내용 " + e.target.value);
    setState({
      ...state,
      // computed property(ES6)
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // console.log("state"+ JSON.stringify(state));
    // alert("저장 성공"+state.emotion+"점");
    if (state.author.length < 1) {
      // state와 다른 점 - current 값을 바꿔도 재렌더링 하지 않음
      authorInput.current.focus();
      return;
    }

    if (state.content.length < 5) {
      // alert("일기 내용 최소 다섯 글자 이상");
      contentInput.current.focus();
      return;
    }

    onCreate(state.author, state.content, state.emotion);
    alert("저장 성공!");
    // 작성폼 초기화
    setState({
      author: "",
      content: "",
      emotion: 1,
    });
  };
  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          ref={authorInput}
          name="author"
          value={state.author}
          onChange={handleChangeState}

          //  {(e) => {
          //     console.log(e);
          //     // value에 입력해도 author의 값은 달라지지 않음 -> setAuthor을 통해서만 가능
          //     console.log("타겟: "+e.target.value);
          //     // setAuthor(e.target.value);
          //     console.log(e.target.name);
          //     setState({
          //         author: e.target.value,
          //         content: state.content
          //         // 여기서 ...state라고 입력하면 author가 덮어써짐-> 암것도 안바뀜.
          //         // 변경하고자 하는 건 맨 밑에
          //     });
          // }}
        />
      </div>
      <div>
        <textarea
          ref={contentInput}
          name="content"
          value={state.content}
          onChange={handleChangeState}
          // {(e) => {
          //     // setContfnt(e.target.value);
          //     setState({
          //         ...state,
          //         // author: state.author,
          //         content: e.target.value
          //     })
          // }}
        />
      </div>
      <div>
        <select name="emotion" value={state.emotion} onChange={handleChangeState}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>저장</button>
      </div>
    </div>
  );
};
export default DiaryEditor;
