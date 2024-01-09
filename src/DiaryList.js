import DiaryItem from './DiaryItem'

// onDelete - props drilling
const DiaryList = ({ onRemove, diaryList }) => {
    // console.log("props 확인 ");
    // diaryList.map((member) => console.log(JSON.stringify(member)));
    return (
        <div className="DiaryList">
            <h2>일기 리스트</h2>
            <h4>{diaryList.length}개의 일기가 있다능</h4>
            <div>
                {diaryList.map((it) =>
                    // idx는 바뀔 수 있어서 지양
                    // <div key={idx}>s
                    <DiaryItem key = {it.id} {...it} onRemove = {onRemove} />
                )}
            </div>
        </div>
    );
}

DiaryList.defaultProps={
    diaryList: [],

}
export default DiaryList;