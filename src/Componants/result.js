
function Result({result}) {
    return (
      <div className="showResult">
          <div className="good">{result[0]} good </div>
          <div className="misp">{result[1]} misplaced</div>
      </div>
    );
  }

  export default Result