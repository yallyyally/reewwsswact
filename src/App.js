import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import { useRef, useState } from "react";
// const dummyList = [
//   {
//     id: 1,
//     author: "작성자",
//     content: "하이루",
//     emotion: 3,
//     created_date: new Date().getTime() //date 객체 -> 숫자 변환
//   },
//   {
//     id: 2,
//     author: "작성자2",
//     content: "하이루2",
//     emotion: 4,
//     created_date: new Date().getTime() //date 객체 -> 숫자 변환
//   },
//   {
//     id: 3,
//     author: "작성자3",
//     content: "하이루3",
//     emotion: 5,
//     created_date: new Date().getTime() //date 객체 -> 숫자 변환
//   }
// ];
function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    // 배열 이어붙이기
    setData([newItem, ...data]);
  };

  const onRemove = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다.`);
    const newDiaryList = data.filter((it) => it.id !== targetId);
    // console.log(newDiaryList);
    setData(newDiaryList);
  };

  // 수정 함수, props로 전달할 것
  const onEdit = (targetId, newContent) => {
    setData(data.map((it) => (it.id === targetId ? { ...it, content: newContent } : it)));
  };

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onRemove={onRemove} diaryList={data} onEdit={onEdit} />
    </div>
  );
}

export default App;
